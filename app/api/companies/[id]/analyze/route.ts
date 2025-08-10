import { NextRequest, NextResponse } from 'next/server'
import { ESGDataPipeline } from '@/lib/esg-pipeline'
import { prisma } from '@/lib/database'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const company = await prisma.company.findUnique({
      where: { id: params.id }
    })
    
    if (!company) {
      return NextResponse.json(
        { error: 'Company not found' },
        { status: 404 }
      )
    }

    // Start ESG analysis for this company
    const pipeline = new ESGDataPipeline()
    const result = await pipeline.processCompany(
      company.name,
      company.website || '',
      company.ticker || undefined
    )
    
    return NextResponse.json({
      success: result.success,
      metricsCount: result.metricsCount,
      score: result.score,
      errors: result.errors,
      message: result.success 
        ? `Successfully analyzed ${company.name} and found ${result.metricsCount} ESG metrics`
        : `Failed to analyze ${company.name}`
    })
  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json(
      { error: 'Analysis failed' },
      { status: 500 }
    )
  }
}
