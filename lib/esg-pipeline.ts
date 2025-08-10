import { ESGWebScraper } from './web-scraper'
import { ESGAIProcessor } from './ai-processor'
import { prisma } from './database'
import { Company, ESGDataPoint, ESGScore } from './types'

export class ESGDataPipeline {
  private scraper: ESGWebScraper
  private aiProcessor: ESGAIProcessor

  constructor() {
    this.scraper = new ESGWebScraper()
    this.aiProcessor = new ESGAIProcessor()
  }

  async processCompany(companyName: string, website: string, ticker?: string): Promise<{
    success: boolean
    company?: Company
    metricsCount: number
    score?: ESGScore
    errors: string[]
  }> {
    const errors: string[] = []
    
    try {
      console.log(`\n🏢 Processing ${companyName}...`)
      
      // 1. Create or find company in database
      const company = await this.createOrUpdateCompany({
        name: companyName,
        website,
        ticker
      })

      // 2. Scrape ESG data from website
      console.log('📊 Scraping ESG data...')
      const scrapingResult = await this.scraper.scrapeCompanyESGData(companyName, website)
      
      if (!scrapingResult.success) {
        errors.push(...scrapingResult.errors)
      }

      // 3. If we have scraped content, enhance with AI analysis
      let allMetrics: ESGDataPoint[] = [...scrapingResult.data]
      let aiScore: ESGScore | undefined

      if (scrapingResult.data.length > 0) {
        console.log('🤖 Enhancing with AI analysis...')
        
        // Get text content for AI analysis
        const textContent = scrapingResult.data
          .map(d => `${d.metric_name}: ${d.value}`)
          .join('\n')
        
        try {
          const aiResult = await this.aiProcessor.analyzeESGContent(
            textContent, 
            companyName, 
            website
          )
          
          // Add AI-extracted metrics
          allMetrics.push(...aiResult.metrics)
          aiScore = aiResult.score
          
        } catch (aiError) {
          errors.push(`AI analysis failed: ${aiError}`)
        }
      }

      // 4. Save metrics to database
      if (allMetrics.length > 0) {
        console.log(`💾 Saving ${allMetrics.length} metrics to database...`)
        await this.saveESGData(company.id!, allMetrics)
      }

      // 5. Save ESG score
      if (aiScore) {
        console.log('📈 Saving ESG score...')
        await this.saveESGScore(company.id!, aiScore)
      }

      console.log(`✅ Completed ${companyName} - ${allMetrics.length} metrics, Score: ${aiScore?.overall_score || 'N/A'}`)

      return {
        success: true,
        company,
        metricsCount: allMetrics.length,
        score: aiScore,
        errors
      }

    } catch (error) {
      const errorMsg = `Failed to process ${companyName}: ${error}`
      console.error(`❌ ${errorMsg}`)
      errors.push(errorMsg)
      
      return {
        success: false,
        metricsCount: 0,
        errors
      }
    }
  }

  private async createOrUpdateCompany(companyData: Partial<Company>): Promise<Company> {
    const existingCompany = await prisma.company.findFirst({
      where: {
        OR: [
          { name: companyData.name },
          { ticker: companyData.ticker },
          { website: companyData.website }
        ]
      }
    })

    if (existingCompany) {
      return await prisma.company.update({
        where: { id: existingCompany.id },
        data: {
          ...companyData,
          updatedAt: new Date()
        }
      })
    }

    return await prisma.company.create({
      data: {
        name: companyData.name!,
        ticker: companyData.ticker,
        website: companyData.website,
        sector: companyData.sector,
        industry: companyData.industry
      }
    })
  }

  private async saveESGData(companyId: string, metrics: ESGDataPoint[]): Promise<void> {
    // Remove duplicates based on metric name and type
    const uniqueMetrics = metrics.filter((metric, index, self) => 
      index === self.findIndex(m => 
        m.metric_name === metric.metric_name && 
        m.metric_type === metric.metric_type
      )
    )

    for (const metric of uniqueMetrics) {
      await prisma.eSGData.create({
        data: {
          companyId,
          metricType: metric.metric_type,
          metricName: metric.metric_name,
          value: metric.value.toString(),
          numericValue: metric.numeric_value,
          unit: metric.unit,
          source: metric.source,
          sourceUrl: metric.source_url,
          confidenceScore: metric.confidence_score,
          year: metric.year || new Date().getFullYear()
        }
      })
    }
  }

  private async saveESGScore(companyId: string, score: ESGScore): Promise<void> {
    await prisma.eSGScore.create({
      data: {
        companyId,
        overallScore: score.overall_score,
        environmentalScore: score.environmental_score,
        socialScore: score.social_score,
        governanceScore: score.governance_score,
        methodology: score.methodology || 'ai_v1'
      }
    })
  }

  async processBatch(companies: Array<{name: string, website: string, ticker?: string}>): Promise<void> {
    console.log(`🚀 Starting batch processing of ${companies.length} companies...\n`)
    
    const results = {
      successful: 0,
      failed: 0,
      totalMetrics: 0
    }

    for (const company of companies) {
      const result = await this.processCompany(company.name, company.website, company.ticker)
      
      if (result.success) {
        results.successful++
        results.totalMetrics += result.metricsCount
      } else {
        results.failed++
      }

      // Add delay between companies to be respectful
      await new Promise(resolve => setTimeout(resolve, 3000))
    }

    console.log(`\n📊 Batch Processing Complete:`)
    console.log(`✅ Successful: ${results.successful}`)
    console.log(`❌ Failed: ${results.failed}`)
    console.log(`📈 Total Metrics: ${results.totalMetrics}`)
  }
}
