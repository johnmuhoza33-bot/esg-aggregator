import { NextResponse } from "next/server"
import { dataIntegrator } from "@/lib/data-sources"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const tickers = searchParams.get("tickers")?.split(",") || []

    if (!tickers || tickers.length === 0) {
      return NextResponse.json(
        {
          error: "No ticker symbols provided",
          message: "Please provide ticker symbols as a comma-separated list",
        },
        { status: 400 },
      )
    }

    const companyDataPromises = tickers.map(async (ticker) => {
      try {
        if (!ticker || ticker.trim() === "") {
          return null
        }

        const companyData = await dataIntegrator.aggregateCompanyData(
          ticker.trim().toUpperCase(),
          ticker.trim().toUpperCase(),
        )

        return {
          ticker: ticker.trim().toUpperCase(),
          data: companyData,
          success: true,
        }
      } catch (error) {
        console.error(`Error fetching data for ${ticker}:`, error)
        return {
          ticker: ticker.trim().toUpperCase(),
          error: error instanceof Error ? error.message : "Unknown error",
          success: false,
        }
      }
    })

    const results = await Promise.all(companyDataPromises)
    const validResults = results.filter((result) => result !== null)

    return NextResponse.json({
      success: true,
      data: validResults,
      timestamp: new Date().toISOString(),
      total: validResults.length,
    })
  } catch (error) {
    console.error("Error in companies data API:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch companies data",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
