import { ESGPipeline } from "../lib/esg-pipeline"

async function testPipeline() {
  const pipeline = new ESGPipeline()

  console.log("Testing ESG Pipeline...")

  // Test company analysis
  const companyAnalysis = await pipeline.analyzeCompany("AAPL", { name: "Apple Inc.", sector: "Technology" })
  console.log("Company Analysis:", companyAnalysis)

  // Test industry benchmarks
  const benchmarks = await pipeline.generateIndustryBenchmarks({ sector: "Technology", limit: 5 })
  console.log("Industry Benchmarks:", benchmarks)

  // Test portfolio analysis
  const portfolioAnalysis = await pipeline.analyzePortfolio(["AAPL", "MSFT", "GOOGL"])
  console.log("Portfolio Analysis:", portfolioAnalysis)

  // Test compliance report
  const complianceReport = await pipeline.generateComplianceReport({
    companies: ["AAPL"],
    framework: "GRI",
    period: "2024-Q1",
  })
  console.log("Compliance Report:", complianceReport)

  console.log("Pipeline testing completed successfully!")
}

// Run the test if this file is executed directly
if (require.main === module) {
  testPipeline().catch(console.error)
}

export { testPipeline }


