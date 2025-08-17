import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const dynamic = "force-dynamic"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const company = await prisma.company.findUnique({
      where: {
        id: params.id,
      },
    })

    if (!company) {
      return NextResponse.json({ error: "Company not found" }, { status: 404 })
    }

    const latestEsgScore = await prisma.eSGScore.findFirst({
      where: { companyId: params.id },
    })

    const mockEmissions = {
      scope1: Math.floor(Math.random() * 50000) + 10000,
      scope2: Math.floor(Math.random() * 30000) + 5000,
      scope3: Math.floor(Math.random() * 100000) + 20000,
      total: 0,
      year: 2024,
    }
    mockEmissions.total = mockEmissions.scope1 + mockEmissions.scope2 + mockEmissions.scope3

    const esgData = {
      company: {
        id: company.id,
        name: company.name,
        ticker: company.ticker,
        sector: company.sector,
      },
      esg_score: {
        overall: latestEsgScore?.overallScore
          ? Number(latestEsgScore.overallScore)
          : Math.floor(Math.random() * 40) + 60,
        environmental: latestEsgScore?.environmentalScore
          ? Number(latestEsgScore.environmentalScore)
          : Math.floor(Math.random() * 40) + 60,
        social: latestEsgScore?.socialScore ? Number(latestEsgScore.socialScore) : Math.floor(Math.random() * 40) + 60,
        governance: latestEsgScore?.governanceScore
          ? Number(latestEsgScore.governanceScore)
          : Math.floor(Math.random() * 40) + 60,
      },
      last_updated: latestEsgScore?.calculatedAt?.toISOString() || new Date().toISOString(),
      risk_level: "Medium",
      trends: {
        environmental: "improving",
        social: "stable",
        governance: "improving",
      },
      emissions: mockEmissions,
    }

    return NextResponse.json(esgData)
  } catch (error) {
    console.error("Error fetching ESG data:", error)
    return NextResponse.json({ error: "Failed to fetch ESG data" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
