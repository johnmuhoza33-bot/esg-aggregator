import { ESGDataPipeline } from '../lib/esg-pipeline'

async function testPipeline() {
  const pipeline = new ESGDataPipeline()
  
  // Test with a few well-known companies with good ESG reporting
  const testCompanies = [
    {
      name: "Microsoft Corporation",
      website: "https://microsoft.com",
      ticker: "MSFT"
    },
    {
      name: "Apple Inc.",
      website: "https://apple.com", 
      ticker: "AAPL"
    },
    {
      name: "Patagonia",
      website: "https://patagonia.com",
      ticker: null
    }
  ]

  console.log('🧪 Testing ESG Data Pipeline...\n')
  
  // Test single company first
  console.log('Testing single company processing...')
  const result = await pipeline.processCompany(
    testCompanies[0].name,
    testCompanies[0].website,
    testCompanies[0].ticker
  )
  
  console.log('Test Result:', {
    success: result.success,
    metricsFound: result.metricsCount,
    overallScore: result.score?.overall_score,
    errors: result.errors
  })

  // If successful, test batch processing
  if (result.success) {
    console.log('\n🚀 Running batch test with all companies...')
    await pipeline.processBatch(testCompanies)
  }
}

// Run the test
testPipeline().catch(console.error)
