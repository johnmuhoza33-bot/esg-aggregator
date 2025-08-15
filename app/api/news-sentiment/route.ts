import { type NextRequest, NextResponse } from "next/server"
import { dataIntegrator } from "@/lib/data-sources"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const ticker = searchParams.get("ticker")
    const companyName = searchParams.get("company")

    if (!ticker) {
      return NextResponse.json(
        {
          error: "Ticker symbol is required. Use ?ticker=SYMBOL or /api/news-sentiment/SYMBOL",
        },
        { status: 400 },
      )
    }

    console.log(`[v0] Fetching news sentiment for ${ticker} (${companyName || ticker})`)

    const newsData = await dataIntegrator.fetchESGNews(ticker.toUpperCase(), companyName || ticker)

    // Transform data for frontend consumption
    const sentimentAnalysis = {
      ticker: ticker.toUpperCase(),
      companyName: companyName || ticker,
      lastUpdated: new Date().toISOString(),
      overallSentiment:
        newsData.length > 0 ? newsData.reduce((sum, dp) => sum + (dp.value as any).score, 0) / newsData.length : 0,
      topicSentiments: newsData.map((dp) => ({
        topic: (dp.value as any).topic,
        sentiment: (dp.value as any).score,
        articleCount: (dp.value as any).articleCount,
        recentArticles: (dp.value as any).recentArticles || [],
        confidence: dp.confidence,
        source: dp.source,
      })),
      totalArticles: newsData.reduce((sum, dp) => sum + ((dp.value as any).articleCount || 0), 0),
    }

    return NextResponse.json(sentimentAnalysis)
  } catch (error) {
    console.error("Error fetching news sentiment:", error)
    return NextResponse.json({ error: "Failed to fetch news sentiment data" }, { status: 500 })
  }
}
