export interface ESGDataPoint {
  id?: string
  company_id: string
  metric_type: 'environmental' | 'social' | 'governance'
  metric_name: string
  value: string | number
  numeric_value?: number
  unit?: string
  source: string
  source_url?: string
  confidence_score: number
  year?: number
  date_collected?: Date
}

export interface ESGScore {
  id?: string
  company_id: string
  overall_score: number
  environmental_score: number
  social_score: number
  governance_score: number
  methodology?: string
  calculated_at?: Date
}

export interface Company {
  id?: string
  name: string
  ticker?: string
  sector?: string
  industry?: string
  website?: string
  description?: string
  market_cap?: number
  employees?: number
  created_at?: Date
  updated_at?: Date
}

export interface ScrapingResult {
  success: boolean
  data: ESGDataPoint[]
  errors: string[]
  source: string
}

export interface AIAnalysisResult {
  metrics: ESGDataPoint[]
  score: ESGScore
  confidence: number
  explanation: string
}
