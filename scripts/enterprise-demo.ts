import { AdvancedESGAnalytics } from '../lib/advanced-analytics'
import { WhiteLabelService } from '../lib/white-label'

async function runEnterpriseDemo() {
  console.log('🏢 Enterprise ESG Platform Demo')
  console.log('================================\n')

  const analytics = new AdvancedESGAnalytics()
  const whiteLabelService = new WhiteLabelService()

  // 1. Industry Benchmarking Demo
  console.log('📊 Industry Benchmarking Analysis:')
  const benchmarks = await analytics.generateIndustryBenchmarks('Technology')
  console.log(`Analyzed ${benchmarks.length} technology companies`)
  console.log(`Industry Average ESG Score: ${benchmarks[0]?.industryAverage || 'N/A'}`)
  
  const topPerformers = benchmarks.slice(0, 3)
  console.log('\nTop 3 ESG Performers:')
  topPerformers.forEach((company, index) => {
    console.log(`${index + 1}. ${company.companyName}: ${company.overallScore} (${company.percentileRank}th percentile)`)
  })

  // 2. Portfolio Analysis Demo
  console.log('\n💼 Portfolio Analysis:')
  const samplePortfolio = benchmarks.slice(0, 10).map(c => c.companyId)
  const portfolioAnalysis = await analytics.analyzePortfolio(samplePortfolio)
  
  console.log(`Portfolio ESG Score: ${portfolioAnalysis.portfolioScore}`)
  console.log('Risk Distribution:')
  Object.entries(portfolioAnalysis.riskDistribution).forEach(([risk, count]) => {
    console.log(`  ${risk}: ${count} companies`)
  })

  console.log('\nTop Recommendations:')
  portfolioAnalysis.recommendations.slice(0, 3).forEach((rec, index) => {
    console.log(`${index + 1}. ${rec}`)
  })

  // 3. White-Label Demo
  console.log('\n🏷️  White-Label Solution Demo:')
  const whiteLabelConfig = {
    clientId: 'demo-asset-management',
    brandName: 'Demo Asset Management',
    logoUrl: 'https://example.com/logo.png',
    primaryColor: '#1e40af',
    secondaryColor: '#3b82f6',
    customDomain: 'esg.demo-am.com',
    features: {
      dashboard: true,
      api: true,
      reports: true,
      alerts: true
    },
    apiEndpoints: {
      baseUrl: 'https://api.demo-am.com',
      customPrefix: 'dam'
    }
  }

  const clientId = await whiteLabelService.createWhiteLabelClient(whiteLabelConfig)
  console.log(`Created white-label client: ${clientId}`)

  const customDashboard = await whiteLabelService.generateCustomDashboard(clientId, whiteLabelConfig)
  console.log('Generated custom dashboard with client branding')

  const apiDocs = await whiteLabelService.generateAPIDocumentation(whiteLabelConfig)
  console.log('Generated branded API documentation')

  const metrics = await whiteLabelService.getWhiteLabelMetrics(clientId)
  console.log('\nWhite-Label Client Metrics:')
  console.log(`API Calls: ${metrics.apiCalls.toLocaleString()}`)
  console.log(`Active Users: ${metrics.activeUsers}`)
  console.log(`Companies Analyzed: ${metrics.companiesAnalyzed.toLocaleString()}`)
  console.log(`Revenue Generated: $${metrics.revenueGenerated.toLocaleString()}`)

  // 4. Enterprise ROI Calculation
  console.log('\n💰 Enterprise ROI Analysis:')
  const traditionalCost = 250000 // $250K annually for traditional ESG data
  const ourCost = 75000 // $75K annually for Enterprise Plus
  const savings = traditionalCost - ourCost
  const roi = (savings / ourCost) * 100

  console.log(`Traditional ESG Data Cost: $${traditionalCost.toLocaleString()}/year`)
  console.log(`Our Enterprise Solution: $${ourCost.toLocaleString()}/year`)
  console.log(`Annual Savings: $${savings.toLocaleString()}`)
  console.log(`ROI: ${roi.toFixed(0)}%`)

  console.log('\n🎯 Path to $20M Valuation:')
  console.log('Current Status: Advanced features complete')
  console.log('Enterprise customers: 10-20 at $75K average = $1.5M ARR')
  console.log('White-label clients: 5-10 at $300K average = $2.25M ARR')
  console.log('Total potential ARR: $3.75M+')
  console.log('Valuation at 5-6x multiple: $18.75M - $22.5M')
  console.log('\n✅ Ready for enterprise sales and scaling!')
}

runEnterpriseDemo().catch(console.error)
