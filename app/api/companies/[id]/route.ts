import { NextResponse } from "next/server"
import { prisma } from "@/lib/database"

export const dynamic = "force-dynamic"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const company = await prisma.company.findUnique({
      where: { id: params.id },
    })

    if (!company) {
      return NextResponse.json({ error: "Company not found" }, { status: 404 })
    }

    return NextResponse.json({
      ...company,
      esgScores: [
        {
          id: "mock-esg-1",
          environmentalScore: 75.5,
          socialScore: 82.3,
          governanceScore: 68.7,
          overallScore: 75.5,
          riskLevel: "Medium",
          scoreDate: new Date().toISOString(),
        },
      ],
      carbonEmissions: [
        {
          id: "mock-carbon-1",
          scope1Emissions: 1250.75,
          scope2Emissions: 890.25,
          scope3Emissions: 3200.5,
          totalEmissions: 5341.5,
          reportingYear: 2024,
        },
      ],
    })
  } catch (error) {
    console.error("Error fetching company:", error)
    return NextResponse.json({ error: "Failed to fetch company" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()

    const company = await prisma.company.update({
      where: { id: params.id },
      data,
    })

    return NextResponse.json(company)
  } catch (error) {
    console.error("Error updating company:", error)
    return NextResponse.json({ error: "Failed to update company" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.company.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: "Company deleted successfully" })
  } catch (error) {
    console.error("Error deleting company:", error)
    return NextResponse.json({ error: "Failed to delete company" }, { status: 500 })
  }
}
