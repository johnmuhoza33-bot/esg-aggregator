import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { ESGAIProcessor } from '@/lib/ai-processor'

const prisma = new PrismaClient()
const aiProcessor = new ESGAIProcessor()

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
          take: 1
        }
      }
    })
    
    if (!company) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 })
    }
    
    return NextResponse.json({
      company: company.name,
      latestScore: company.esgScores[0]?.overallScore || null,
      metrics: company.esgData,
      lastUpdated: company.esgScores[0]?.calculatedAt || null
    })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { forceRefresh } = await request.json()
    
    // Trigger AI-powered data collection and analysis
    const company = await prisma.company.findUnique({
      where: { id: params.id }
    })
    
    if (!company) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 })
    }
    
    // This would trigger your data collection pipeline
    // Implementation depends on your specific data sources
    
    return NextResponse.json({ message: 'ESG data refresh initiated' })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
