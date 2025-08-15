import { NextResponse } from "next/server"

// Make this route dynamic
export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  try {
    // Get company IDs from query parameters
    const { searchParams } = new URL(request.url)
    const companyIdsParam = searchParams.get("companyIds")
    const companyIds = companyIdsParam ? companyIdsParam.split(",") : []

    const portfolioAnalysis = {
      portfolio_summary: {
        total_companies: companyIds.length || 25,
        average_esg_score: 76.8,
        top_performers: Math.floor((companyIds.length || 25) * 0.32),
        at_risk_companies: Math.floor((companyIds.length || 25) * 0.12),
        total_market_cap: "2.5T",
      },
      sector_breakdown: {
        technology: { count: 8, avg_score: 78.2 },
        healthcare: { count: 5, avg_score: 79.1 },
        energy: { count: 4, avg_score: 62.3 },
        financials: { count: 8, avg_score: 81.5 },
      },
      risk_analysis: {
        low_risk: 15,
        medium_risk: 7,
        high_risk: 3,
      },
      trends: {
        improving: 18,
        stable: 5,
        declining: 2,
      },
      companies: companyIds.map((id, index) => ({
        id,
        name: `Company ${index + 1}`,
        esg_score: Math.floor(Math.random() * 40) + 60,
        sector: ["Technology", "Healthcare", "Energy", "Financials"][index % 4],
        risk_level: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
      })),
      last_updated: new Date().toISOString(),
    }

    return NextResponse.json({
      ...portfolioAnalysis,
      success: true,
      message: "Portfolio analysis completed successfully",
    })
  } catch (error) {
    console.error("Portfolio analytics error:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch portfolio analytics",
        message: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 },
    )
  }
}
