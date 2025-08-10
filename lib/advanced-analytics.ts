import { prisma } from './database'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface BenchmarkData {
  companyId: string
  companyName: string
  sector: string
  overallScore: number
  environmentalScore: number
  socialScore: number
  governanceScore: number
  percentileRank: number
  industryAverage: number
}

export interface TrendAnalysis {
  companyId: string
  metric: string
  trend: 'improving' | 'declining' | 'stable'
  changePercent: number
  timeframe: string
  significance: 'high' | 'medium' | 'low'
}

export interface ESGAlert {
  id: string
  companyId: string
  type: 'risk' | 'opportunity' | 'regulatory' | 'incident'
  severity: 'critical' | 'high' | 'medium' | 'low'
  title: string
  description: string
  source: string
  createdAt: Date
  resolved: boolean
}

export class AdvancedESGAnalytics {
  
  // Industry benchmarking with percentile rankings
  async generateIndustryBenchmarks(sector: string): Promise<BenchmarkData[]> {
    const companies = await prisma.company.findMany({
      where: { sector },
      include: {
        esgScores: {
          orderBy: { calculatedAt: 'desc' },
          take: 1
        }
      }
    })

    const companiesWithScores = companies
      .filter(c => c.esgScores.length > 0)
      .map(c => ({
        companyId: c.id,
        companyName: c.name,
        sector: c.sector!,
        overallScore: c.esgScores[0].overallScore,
        environmentalScore: c.esgScores[0].environmentalScore,
        socialScore: c.esgScores[0].socialScore,
        governanceScore: c.esgScores[0].governanceScore
      }))

    // Calculate industry average
    const industryAverage = companiesWithScores.reduce((sum, c) => sum + c.overallScore, 0) / companiesWithScores.length

    // Calculate percentile rankings
    const sortedByScore = [...companiesWithScores].sort((a, b) => b.overallScore - a.overallScore)
    
    return sortedByScore.map((company, index) => ({
      ...company,
      percentileRank: Math.round(((sortedByScore.length - index) / sortedByScore.length) * 100),
      industryAverage: Math.round(industryAverage * 10) / 10
    }))
  }

  // Trend analysis using historical data
  async analyzeTrends(companyId: string): Promise<TrendAnalysis[]> {
    const historicalScores = await prisma.eSGScore.findMany({
      where: { companyId },
      orderBy: { calculatedAt: 'desc' },
      take: 12 // Last 12 data points
    })

    if (historicalScores.length < 2) {
      return []
    }

    const trends: TrendAnalysis[] = []
    const metrics = ['overallScore', 'environmentalScore', 'socialScore', 'governanceScore']

    for (const metric of metrics) {
      const values = historicalScores.map(score => score[metric as keyof typeof score] as number)
      const recent = values.slice(0, 3).reduce((a, b) => a + b, 0) / 3
      const older = values.slice(-3).reduce((a, b) => a + b, 0) / 3
      
      const changePercent = ((recent - older) / older) * 100
      
      let trend: 'improving' | 'declining' | 'stable'
      let significance: 'high' | 'medium' | 'low'
      
      if (Math.abs(changePercent) < 2) {
        trend = 'stable'
        significance = 'low'
      } else if (changePercent > 0) {
        trend = 'improving'
        significance = changePercent > 10 ? 'high' : 'medium'
      } else {
        trend = 'declining'
        significance = Math.abs(changePercent) > 10 ? 'high' : 'medium'
      }

      trends.push({
        companyId,
        metric: metric.replace('Score', '').toLowerCase(),
        trend,
        changePercent: Math.round(changePercent * 10) / 10,
        timeframe: '3 months',
        significance
      })
    }

    return trends
  }

  // AI-powered ESG risk alerts
  async generateESGAlerts(companyId: string): Promise<ESGAlert[]> {
    const company = await prisma.company.findUnique({
      where: { id: companyId },
      include: {
        esgData: {
          orderBy: { dateCollected: 'desc' },
          take: 50
        },
        esgScores: {
          orderBy: { calculatedAt: 'desc' },
          take: 5
        }
      }
    })

    if (!company) return []

    // Use AI to analyze recent ESG data for potential risks
    const recentData = company.esgData.slice(0, 20)
    const recentScores = company.esgScores

    const prompt = `
    Analyze the following ESG data for ${company.name} and identify potential risks, opportunities, or incidents:

    Recent ESG Metrics:
    ${recentData.map(d => `${d.metricName}: ${d.value} (confidence: ${d.confidenceScore})`).join('\n')}

    Recent Scores:
    ${recentScores.map(s => `Overall: ${s.overallScore}, E: ${s.environmentalScore}, S: ${s.socialScore}, G: ${s.governanceScore} (${s.calculatedAt.toISOString().split('T')[0]})`).join('\n')}

    Generate alerts in this JSON format:
    [
      {
        "type": "risk|opportunity|regulatory|incident",
        "severity": "critical|high|medium|low", 
        "title": "Brief alert title",
        "description": "Detailed explanation of the issue/opportunity",
        "source": "data_analysis"
      }
    ]

    Focus on:
    - Significant score changes (>10 points)
    - Missing critical data
    - Regulatory compliance issues
    - Emerging risks or opportunities
    
    Only include alerts with high confidence. Return empty array if no significant issues found.
    `

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.1,
        max_tokens: 1500
      })

      const alerts = JSON.parse(response.choices[0].message.content || '[]')
      
      return alerts.map((alert: any) => ({
        id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        companyId,
        type: alert.type,
        severity: alert.severity,
        title: alert.title,
        description: alert.description,
        source: alert.source,
        createdAt: new Date(),
        resolved: false
      }))
    } catch (error) {
      console.error('Error generating ESG alerts:', error)
      return []
    }
  }

  // Portfolio-level ESG analysis
  async analyzePortfolio(companyIds: string[]): Promise<{
    portfolioScore: number
    riskDistribution: { [key: string]: number }
    sectorBreakdown: { [key: string]: number }
    topRisks: ESGAlert[]
    recommendations: string[]
  }> {
    const companies = await prisma.company.findMany({
      where: { id: { in: companyIds } },
      include: {
        esgScores: {
          orderBy: { calculatedAt: 'desc' },
          take: 1
        }
      }
    })

    const companiesWithScores = companies.filter(c => c.esgScores.length > 0)
    
    // Calculate weighted portfolio score
    const portfolioScore = companiesWithScores.reduce((sum, c) => sum + c.esgScores[0].overallScore, 0) / companiesWithScores.length

    // Risk distribution
    const riskDistribution = {
      'Low Risk (80-100)': companiesWithScores.filter(c => c.esgScores[0].overallScore >= 80).length,
      'Medium Risk (60-79)': companiesWithScores.filter(c => c.esgScores[0].overallScore >= 60 && c.esgScores[0].overallScore < 80).length,
      'High Risk (40-59)': companiesWithScores.filter(c => c.esgScores[0].overallScore >= 40 && c.esgScores[0].overallScore < 60).length,
      'Critical Risk (<40)': companiesWithScores.filter(c => c.esgScores[0].overallScore < 40).length
    }

    // Sector breakdown
    const sectorBreakdown: { [key: string]: number } = {}
    companiesWithScores.forEach(c => {
      const sector = c.sector || 'Unknown'
      sectorBreakdown[sector] = (sectorBreakdown[sector] || 0) + 1
    })

    // Get top risks across portfolio
    const allAlerts: ESGAlert[] = []
    for (const company of companiesWithScores.slice(0, 10)) { // Limit to avoid API costs
      const alerts = await this.generateESGAlerts(company.id)
      allAlerts.push(...alerts)
    }
    
    const topRisks = allAlerts
      .filter(a => a.severity === 'critical' || a.severity === 'high')
      .sort((a, b) => a.severity === 'critical' ? -1 : 1)
      .slice(0, 5)

    // AI-generated recommendations
    const recommendations = await this.generatePortfolioRecommendations(companiesWithScores, portfolioScore)

    return {
      portfolioScore: Math.round(portfolioScore * 10) / 10,
      riskDistribution,
      sectorBreakdown,
      topRisks,
      recommendations
    }
  }

  private async generatePortfolioRecommendations(companies: any[], portfolioScore: number): Promise<string[]> {
    const prompt = `
    Based on this portfolio analysis, provide 3-5 actionable recommendations:
    
    Portfolio ESG Score: ${portfolioScore}
    Number of Companies: ${companies.length}
    
    Company Scores:
    ${companies.map(c => `${c.name}: ${c.esgScores[0].overallScore} (${c.sector})`).join('\n')}
    
    Provide specific, actionable recommendations for improving the portfolio's ESG profile.
    Focus on practical steps like diversification, engagement, or divestment strategies.
    `

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.3,
        max_tokens: 800
      })

      const content = response.choices[0].message.content || ''
      return content.split('\n').filter(line => line.trim().length > 0).slice(0, 5)
    } catch (error) {
      return [
        'Consider diversifying across sectors with stronger ESG performance',
        'Engage with underperforming companies on ESG improvement plans',
        'Monitor regulatory changes that may impact portfolio companies',
        'Increase allocation to companies with improving ESG trends'
      ]
    }
  }
}
