import { NextRequest, NextResponse } from 'next/server'
import { AdvancedESGAnalytics } from '@/lib/advanced-analytics'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const sector = searchParams.get('sector')
    
    if (!sector) {
      return NextResponse.json(
        { error: 'Sector parameter is required' },
        { status: 400 }
      )
    }

    const analytics = new AdvancedESGAnalytics()
    const benchmarks = await analytics.generateIndustryBenchmarks(sector)
    
    return NextResponse.json({
      sector,
      companies: benchmarks.length,
      benchmarks,
      generatedAt: new Date().toISOString()
    })
  } catch (error) {
    console.error('Benchmarks API error:', error)
    return NextResponse.json(
      { error: 'Failed to generate benchmarks' },
      { status: 500 }
    )
  }
}
