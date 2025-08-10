import { NextRequest, NextResponse } from 'next/server'
import { ESGDataPipeline } from '@/lib/esg-pipeline'

export async function POST(request: NextRequest) {
  try {
    const { companyName, website, ticker } = await request.json()
    
    if (!companyName || !website) {
      return NextResponse.json(
        { error: 'Company name and website are required' },
        { status: 400 }
      )
    }

    const pipeline = new ESGDataPipeline()
    const result = await pipeline.processCompany(companyName, website, ticker)
    
    return NextResponse.json({
      success: result.success,
      company: result.company,
      metricsCount: result.metricsCount,
      score: result.score,
      errors: result.errors
    })
  } catch (error) {
    console.error('Pipeline test error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
