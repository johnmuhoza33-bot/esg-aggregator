import { ESGPipeline } from "@/lib/esg-pipeline"

async function runEnterpriseDemo() {
  console.log("🚀 ESG Analytics Enterprise Demo")
  console.log("================================")

  const analytics = new ESGPipeline()

  try {
    // 1. Industry Benchmarking Demo
    console.log("📊 Industry Benchmarking Analysis:")
    const benchmarks = await analytics.generateIndustryBenchmarks({ sector: "Technology", limit: 10 })
    console.log(`Analyzed ${benchmarks.length} technology companies`)
    console.log(`Industry Average ESG Score: ${benchmarks[0]?.industryAverage || "N/A"}`)

    // 2. Portfolio Analysis Demo
    console.log("\n💼 Portfolio Analysis:")
    const portfolioData = await analytics.analyzePortfolio(["AAPL", "MSFT", "GOOGL"])
    console.log(`Portfolio ESG Score: ${portfolioData.overallScore}`)
    console.log(`Risk Level: ${portfolioData.riskLevel}`)

    // 3. Compliance Reporting Demo
    console.log("\n📋 Compliance Report Generation:")
    const complianceReport = await analytics.generateComplianceReport({
      companies: ["AAPL", "MSFT"],
      framework: "GRI",
      period: "2024-Q1",
    })
    console.log(`Generated ${complianceReport.sections.length} compliance sections`)

    console.log("\n✅ Enterprise demo completed successfully!")
  } catch (error) {
    console.error("❌ Demo failed:", error instanceof Error ? error.message : "Unknown error")
    process.exit(1)
  }
}

// Run the demo
runEnterpriseDemo().catch(console.error)

