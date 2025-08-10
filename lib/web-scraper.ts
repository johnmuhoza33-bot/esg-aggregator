import axios from 'axios'
import * as cheerio from 'cheerio'
import { ESGDataPoint, ScrapingResult } from './types'
import { ESG_DATA_SOURCES } from './data-sources'

export class ESGWebScraper {
  private readonly timeout = 10000 // 10 seconds
  private readonly userAgent = 'Mozilla/5.0 (compatible; ESGBot/1.0; +https://esganalytics.com/bot)'

  async scrapeCompanyESGData(companyName: string, website: string): Promise<ScrapingResult> {
    const results: ESGDataPoint[] = []
    const errors: string[] = []

    try {
      console.log(`🔍 Scraping ESG data for ${companyName}...`)
      
      // 1. Find sustainability pages
      const sustainabilityUrls = await this.findSustainabilityPages(website)
      console.log(`Found ${sustainabilityUrls.length} sustainability pages`)

      // 2. Scrape each sustainability page
      for (const url of sustainabilityUrls.slice(0, 3)) { // Limit to first 3 pages
        try {
          const pageData = await this.scrapePage(url, companyName)
          results.push(...pageData)
          
          // Add delay between requests to be respectful
          await this.delay(2000)
        } catch (error) {
          errors.push(`Error scraping ${url}: ${error}`)
        }
      }

      return {
        success: results.length > 0,
        data: results,
        errors,
        source: 'web_scraping'
      }
    } catch (error) {
      return {
        success: false,
        data: [],
        errors: [`Failed to scrape ${companyName}: ${error}`],
        source: 'web_scraping'
      }
    }
  }

  private async findSustainabilityPages(website: string): Promise<string[]> {
    const urls: string[] = []
    
    try {
      // Clean up website URL
      const baseUrl = website.startsWith('http') ? website : `https://${website}`
      
      // Try common sustainability page patterns
      const patterns = ESG_DATA_SOURCES.sustainability_reports.patterns
      
      for (const pattern of patterns) {
        const testUrl = `${baseUrl}${pattern}`
        try {
          const response = await axios.head(testUrl, {
            timeout: this.timeout,
            headers: { 'User-Agent': this.userAgent }
          })
          
          if (response.status === 200) {
            urls.push(testUrl)
          }
        } catch {
          // Page doesn't exist, continue
        }
      }

      // If no direct pages found, scrape main page for sustainability links
      if (urls.length === 0) {
        const mainPageUrls = await this.findLinksOnMainPage(baseUrl)
        urls.push(...mainPageUrls)
      }

    } catch (error) {
      console.error('Error finding sustainability pages:', error)
    }

    return urls
  }

  private async findLinksOnMainPage(baseUrl: string): Promise<string[]> {
    const urls: string[] = []
    
    try {
      const response = await axios.get(baseUrl, {
        timeout: this.timeout,
        headers: { 'User-Agent': this.userAgent }
      })
      
      const $ = cheerio.load(response.data)
      const keywords = ESG_DATA_SOURCES.sustainability_reports.keywords
      
      // Find links containing sustainability keywords
      $('a[href]').each((_, element) => {
        const href = $(element).attr('href')
        const text = $(element).text().toLowerCase()
        
        if (href && keywords.some(keyword => 
          text.includes(keyword) || href.toLowerCase().includes(keyword)
        )) {
          const fullUrl = href.startsWith('http') ? href : new URL(href, baseUrl).href
          if (!urls.includes(fullUrl)) {
            urls.push(fullUrl)
          }
        }
      })
    } catch (error) {
      console.error('Error scraping main page:', error)
    }

    return urls.slice(0, 5) // Limit to 5 URLs
  }

  private async scrapePage(url: string, companyName: string): Promise<ESGDataPoint[]> {
    try {
      const response = await axios.get(url, {
        timeout: this.timeout,
        headers: { 'User-Agent': this.userAgent }
      })
      
      const $ = cheerio.load(response.data)
      
      // Extract text content
      const textContent = this.extractTextContent($)
      
      // Look for specific ESG data patterns
      const dataPoints = this.extractESGDataFromText(textContent, companyName, url)
      
      return dataPoints
    } catch (error) {
      console.error(`Error scraping page ${url}:`, error)
      return []
    }
  }

  private extractTextContent($: cheerio.CheerioAPI): string {
    // Remove script and style elements
    $('script, style, nav, header, footer').remove()
    
    // Get main content areas
    const contentSelectors = [
      'main',
      '[role="main"]',
      '.content',
      '.main-content',
      '#content',
      'article',
      '.sustainability',
      '.esg'
    ]
    
    let content = ''
    for (const selector of contentSelectors) {
      const element = $(selector)
      if (element.length > 0) {
        content = element.text()
        break
      }
    }
    
    // Fallback to body if no main content found
    if (!content) {
      content = $('body').text()
    }
    
    // Clean up text
    return content
      .replace(/\s+/g, ' ')
      .replace(/\n+/g, '\n')
      .trim()
      .substring(0, 10000) // Limit to 10k characters
  }

  private extractESGDataFromText(text: string, companyName: string, sourceUrl: string): ESGDataPoint[] {
    const dataPoints: ESGDataPoint[] = []
    
    // Simple pattern matching for common ESG metrics
    const patterns = [
      // Carbon emissions
      {
        regex: /(?:carbon|co2|greenhouse gas).*?emissions?.*?(\d+(?:,\d+)*(?:\.\d+)?)\s*(tons?|tonnes?|mt|tco2e?)/gi,
        metric: 'carbon_emissions',
        type: 'environmental' as const
      },
      // Energy consumption
      {
        regex: /energy.*?consumption.*?(\d+(?:,\d+)*(?:\.\d+)?)\s*(mwh|gwh|kwh)/gi,
        metric: 'energy_consumption',
        type: 'environmental' as const
      },
      // Water usage
      {
        regex: /water.*?(?:usage|consumption).*?(\d+(?:,\d+)*(?:\.\d+)?)\s*(gallons?|liters?|m3)/gi,
        metric: 'water_usage',
        type: 'environmental' as const
      },
      // Employee diversity
      {
        regex: /(?:women|female).*?(?:employees?|workforce).*?(\d+(?:\.\d+)?)\s*%/gi,
        metric: 'employee_diversity_gender',
        type: 'social' as const
      },
      // Board independence
      {
        regex: /independent.*?(?:board|directors?).*?(\d+(?:\.\d+)?)\s*%/gi,
        metric: 'board_independence',
        type: 'governance' as const
      }
    ]

    for (const pattern of patterns) {
      let match
      while ((match = pattern.regex.exec(text)) !== null) {
        const value = match[1].replace(/,/g, '')
        const unit = match[2] || '%'
        
        dataPoints.push({
          company_id: companyName.toLowerCase().replace(/\s+/g, '-'),
          metric_type: pattern.type,
          metric_name: pattern.metric,
          value: `${value} ${unit}`,
          numeric_value: parseFloat(value),
          unit: unit,
          source: 'web_scraping',
          source_url: sourceUrl,
          confidence_score: 0.7, // Medium confidence for pattern matching
          date_collected: new Date()
        })
      }
    }

    return dataPoints
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
