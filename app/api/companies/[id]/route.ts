import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const company = await prisma.company.findUnique({
      where: { id: params.id },
      include: {
        esgData: {
          orderBy: { dateCollected: 'desc' }
        },
        esgScores: {
          orderBy: { calculatedAt: 'desc' },
          take: 5 // Last 5 scores for trend analysis
        }
      }
    })
    
    if (!company) {
      return NextResponse.json(
        { error: 'Company not found' },
        { status: 404 }
      )
    }

    // Group ESG data by category
    const groupedData = {
      environmental: company.esgData.filter(d => d.metricType === 'environmental'),
      social: company.esgData.filter(d => d.metricType === 'social'),
      governance: company.esgData.filter(d => d.metricType === 'governance')
    }

    return NextResponse.json({
      ...company,
      esgDataGrouped: groupedData,
      latestScore: company.esgScores[0] || null,
      scoreHistory: company.esgScores
    })
  } catch (error) {
    console.error('Error fetching company:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
