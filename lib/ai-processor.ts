import OpenAI from 'openai'
import { ESGDataPoint, ESGScore, AIAnalysisResult } from './types'
import { COMMON_ESG_METRICS } from './data-sources'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export class ESGAIProcessor {
  async analyzeESGContent(content: string, companyName: string, sourceUrl?: string): Promise<AIAnalysisResult> {
    try {
      console.log(`🤖 AI analyzing ESG content for ${companyName}...`)
      
      // Extract metrics using AI
      const metrics = await this.extractESGMetrics(content, companyName, sourceUrl)
      
      // Calculate ESG score
      const score = await this.calculateESGScore(metrics, companyName)
      
      // Get explanation
      const explanation = await this.generateExplanation(metrics, score, companyName)
      
      return {
        metrics,
        score,
        confidence: this.calculateOverallConfidence(metrics),
        explanation
      }
    } catch (error) {
      console.error('AI analysis error:', error)
      throw new Error(`AI analysis failed: ${error}`)
    }
  }

  private async extractESGMetrics(content: string, companyName: string, sourceUrl?: string): Promise<ESGDataPoint[]> {
    const prompt = `
Analyze the following sustainability/ESG content from ${companyName} and extract specific, quantifiable ESG metrics.

Content: ${content.substring(0, 6000)}

Extract metrics in this exact JSON format:
{
  "environmental": [
    {"metric": "carbon_emissions_scope1", "value": "123456", "unit": "tCO2e", "confidence": 0.9},
    {"metric": "energy_consumption", "value": "45.2", "unit": "GWh", "confidence": 0.8}
  ],
  "social": [
    {"metric": "employee_diversity_gender", "value": "42", "unit": "percentage", "confidence": 0.7}
  ],
  "governance": [
    {"metric": "board_independence", "value": "75", "unit": "percentage", "confidence": 0.8}
  ]
}

Rules:
1. Only include metrics you can find with reasonable confidence (>0.6)
2. Use standardized metric names from this list: ${JSON.stringify(COMMON_ESG_METRICS)}
3. Extract numeric values only (no ranges or approximations)
4. Include the unit of measurement
5. Assign confidence score 0.6-1.0 based on how explicit the data is
6. If no clear metrics found, return empty arrays

Focus on quantifiable data, not qualitative statements.
`

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.1,
        max_tokens: 2000
      })
      
      const result = JSON.parse(response.choices[0].message.content || '{}')
      return this.convertToESGDataPoints(result, companyName, sourceUrl)
    } catch (error) {
      console.error('Error extracting ESG metrics:', error)
      return []
    }
  }

  private async calculateESGScore(metrics: ESGDataPoint[], companyName: string): Promise<ESGScore> {
    if (metrics.length === 0) {
      return {
        company_id: companyName.toLowerCase().replace(/\s+/g, '-'),
        overall_score: 50,
        environmental_score: 50,
        social_score: 50,
        governance_score: 50,
        methodology: 'ai_v1'
      }
    }

    const prompt = `
Based on these ESG metrics for ${companyName}, calculate ESG scores from 0-100:

Metrics: ${JSON.stringify(metrics, null, 2)}

Consider:
- Environmental: Carbon emissions, energy efficiency, waste management, water usage
- Social: Employee diversity, safety, community impact, customer satisfaction  
- Governance: Board independence, executive compensation, ethics, transparency

Scoring guidelines:
- 90-100: Industry leader, exceptional performance
- 80-89: Above average, strong performance
- 70-79: Average performance
- 60-69: Below average, needs improvement
- 0-59: Poor performance, significant issues

Return JSON:
{
  "environmental_score": 75,
  "social_score": 80, 
  "governance_score": 70,
  "overall_score": 75,
  "reasoning": "Brief explanation of scoring rationale"
}
`

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.1,
        max_tokens: 1000
      })
      
      const result = JSON.parse(response.choices[0].message.content || '{}')
      
      return {
        company_id: companyName.toLowerCase().replace(/\s+/g, '-'),
        overall_score: result.overall_score || 50,
        environmental_score: result.environmental_score || 50,
        social_score: result.social_score || 50,
        governance_score: result.governance_score || 50,
        methodology: 'ai_v1'
      }
    } catch (error) {
      console.error('Error calculating ESG score:', error)
      return {
        company_id: companyName.toLowerCase().replace(/\s+/g, '-'),
        overall_score: 50,
        environmental_score: 50,
        social_score: 50,
        governance_score: 50,
        methodology: 'ai_v1'
      }
    }
  }

  private async generateExplanation(metrics: ESGDataPoint[], score: ESGScore, companyName: string): Promise<string> {
    const prompt = `
Generate a brief explanation of ${companyName}'s ESG performance based on:

Scores:
- Overall: ${score.overall_score}
- Environmental: ${score.environmental_score}
- Social: ${score.social_score}  
- Governance: ${score.governance_score}

Key Metrics: ${metrics.map(m => `${m.metric_name}: ${m.value}`).join(', ')}

Write 2-3 sentences explaining the company's ESG strengths and areas for improvement.
`

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.3,
        max_tokens: 300
      })
      
      return response.choices[0].message.content || 'ESG analysis completed.'
    } catch (error) {
      return 'ESG analysis completed with limited data availability.'
    }
  }

  private convertToESGDataPoints(aiResult: any, companyName: string, sourceUrl?: string): ESGDataPoint[] {
    const dataPoints: ESGDataPoint[] = []
    const companyId = companyName.toLowerCase().replace(/\s+/g, '-')

    Object.entries(aiResult).forEach(([category, metrics]: [string, any]) => {
      if (Array.isArray(metrics)) {
        metrics.forEach(metric => {
          dataPoints.push({
            company_id: companyId,
            metric_type: category as 'environmental' | 'social' | 'governance',
            metric_name: metric.metric,
            value: `${metric.value} ${metric.unit}`,
            numeric_value: parseFloat(metric.value),
            unit: metric.unit,
            source: 'ai_extraction',
            source_url: sourceUrl,
            confidence_score: metric.confidence,
            date_collected: new Date()
          })
        })
      }
    })

    return dataPoints
  }

  private calculateOverallConfidence(metrics: ESGDataPoint[]): number {
    if (metrics.length === 0) return 0
    
    const avgConfidence = metrics.reduce((sum, metric) => sum + metric.confidence_score, 0) / metrics.length
    return Math.round(avgConfidence * 100) / 100
  }
}
