import { NextResponse } from "next/server"
import { prisma } from "@/lib/database"

export async function GET() {
  try {
    console.log("API: Fetching companies from database...")

    const companies = await prisma.company.findMany({
      orderBy: { createdAt: "desc" },
    })

    console.log(`API: Found ${companies.length} companies`)

    // Map to include esgScore directly for dashboard consumption
    const companiesWithScores = companies.map((company) => ({
      id: company.id,
      name: company.name,
      ticker: company.ticker || "",
      sector: company.sector || "",
      esgScore: Math.floor(Math.random() * 40) + 60, // Random score for demo
      lastAnalyzed: new Date().toISOString(),
    }))

    console.log("API: Returning companies with wrapper:", { companies: companiesWithScores })

    // IMPORTANT: Return companies wrapped in an object as expected by the dashboard
    // Added a unique identifier to confirm this version is running
    return NextResponse.json({
      companies: companiesWithScores,
      total: companiesWithScores.length,
      message: "Companies fetched successfully - v2.1 confirmed!", // Unique message
    })
  } catch (error) {
    console.error("API: Failed to fetch companies:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch companies",
        message: error.message,
        companies: [],
      },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const { name, industry, website, ticker, sector } = await request.json()

    const newCompany = await prisma.company.create({
      data: {
        name,
        industry,
        website,
        ticker,
        sector,
      },
    })

    return NextResponse.json(newCompany, { status: 201 })
  } catch (error) {
    console.error("API: Failed to create company:", error)
    return NextResponse.json({ error: "Failed to create company", message: error.message }, { status: 500 })
  }
}
