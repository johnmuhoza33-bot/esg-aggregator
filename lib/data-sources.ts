// ESG Data Sources Configuration
export const ESG_DATA_SOURCES = {
  // Company websites and sustainability reports
  sustainability_reports: {
    patterns: ['/sustainability', '/esg', '/responsibility', '/impact', '/environment', '/social-responsibility'],
    file_types: ['.pdf', '.html'],
    keywords: ['sustainability', 'environmental', 'social', 'governance', 'carbon', 'emissions', 'diversity']
  },
  
  // SEC filings
  sec_filings: {
    base_url: 'https://www.sec.gov/Archives/edgar/data',
    forms: ['10-K', '10-Q', '8-K', 'DEF 14A'],
    search_url: 'https://efts.sec.gov/LATEST/search-index'
  },
  
  // News sources for real-time updates
  news_sources: {
    newsapi: 'https://newsapi.org/v2/everything',
    gdelt: 'https://api.gdeltproject.org/api/v2/summary/summary'
  },
  
  // Third-party ESG databases
  external_apis: {
    cdp: 'https://data.cdp.net/api',
    gri: 'https://database.globalreporting.org/api'
  }
}

export const COMMON_ESG_METRICS = {
  environmental: [
    'carbon_emissions_scope1',
    'carbon_emissions_scope2', 
    'carbon_emissions_scope3',
    'energy_consumption',
    'renewable_energy_percentage',
    'water_usage',
    'waste_generated',
    'recycling_rate'
  ],
  social: [
    'employee_diversity_gender',
    'employee_diversity_ethnicity',
    'employee_satisfaction',
    'safety_incidents',
    'training_hours',
    'community_investment',
    'customer_satisfaction'
  ],
  governance: [
    'board_independence',
    'board_diversity',
    'executive_compensation',
    'audit_quality',
    'ethics_violations',
    'data_privacy_breaches',
    'regulatory_fines'
  ]
}
