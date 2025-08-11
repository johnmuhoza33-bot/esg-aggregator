import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    console.log("API: Starting to fetch companies...")

    // Return mock data immediately since database might not be configured
    const mockCompanies = [
      {
        id: "1",
        name: "Apple Inc.",
        ticker: "AAPL",
        sector: "Technology",
        esgScore: 78.5,
        lastAnalyzed: new Date().toISOString(),
      },
      {
        id: "2",
        name: "Microsoft Corporation",
        ticker: "MSFT",
        sector: "Technology",
        esgScore: 82.1,
        lastAnalyzed: new Date().toISOString(),
      },
      {
        id: "3",
        name: "Tesla Inc.",
        ticker: "TSLA",
        sector: "Automotive",
        esgScore: 71.3,
        lastAnalyzed: new Date().toISOString(),
      },
      {
        id: "4",
        name: "Johnson & Johnson",
        ticker: "JNJ",
        sector: "Healthcare",
        esgScore: 79.8,
        lastAnalyzed: new Date().toISOString(),
      },
      {
        id: "5",
        name: "Procter & Gamble",
        ticker: "PG",
        sector: "Consumer Goods",
        esgScore: 76.4,
        lastAnalyzed: new Date().toISOString(),
      },
    ]

    console.log("API: Returning mock data")

    return NextResponse.json({
      companies: mockCompanies,
      total: mockCompanies.length,
      message: "Demo data loaded successfully",
    })
  } catch (error) {
    console.error("API: Error:", error)
    return NextResponse.json(
      { 
        error: "Failed to fetch companies", 
        message: error.message,
        companies: [],
        total: 0
      }, 
      { status: 500 }
    )
  }
}