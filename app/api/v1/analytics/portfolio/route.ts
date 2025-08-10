import { NextRequest, NextResponse } from 'next/server'
import { AdvancedESGAnalytics } from '@/lib/advanced-analytics'

export async function POST(request: NextRequest) {
  try {
    const { companyIds } = await request.json()
    
    if (!companyIds || !Array.isArray(companyIds)) {
      return NextResponse.json(
        { error: 'companyIds array is required' },
        { status: 400 }
      )
    }

    const analytics = new AdvancedESGAnalytics()
    const portfolioAnalysis = await analytics.analyzePortfolio(companyIds)
    
    return NextResponse.json({
      ...portfolioAnalysis,
      analyzedAt: new Date().toISOString(),
      companiesAnalyzed: companyIds.length
    })
  } catch (error) {
    console.error('Portfolio analysis error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze portfolio' },
      { status: 500 }
    )
  }
}
