import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    // Mock analysis result
    const analysis = {
      company_id: params.id,
      analysis_id: `analysis_${Date.now()}`,
      status: "completed",
      results: {
        esg_score: Math.floor(Math.random() * 40) + 60,
        risk_factors: [
          "Carbon emissions above industry average",
          "Strong governance practices",
          "Excellent employee satisfaction",
        ],
        recommendations: [
          "Implement carbon reduction strategy",
          "Maintain current governance standards",
          "Continue employee engagement programs",
        ],
      },
      analyzed_at: new Date().toISOString(),
    }

    return NextResponse.json(analysis)
  } catch (error) {
    console.error("Error analyzing company:", error)
    return NextResponse.json({ error: "Failed to analyze company" }, { status: 500 })
  }
}
