import { type NextRequest, NextResponse } from "next/server"
import { stakeholderEngagementEngine } from "../../../lib/stakeholder-engagement-engine"

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const { stakeholderId, reportType, companyData } = await request.json()

    if (!stakeholderId || !reportType) {
      return NextResponse.json({ error: "Stakeholder ID and report type are required" }, { status: 400 })
    }

    let report

    switch (reportType) {
      case "investor":
        report = await stakeholderEngagementEngine.generateInvestorReport(
          stakeholderId,
          "ESG Performance",
          companyData || {},
        )
        break

      case "customer":
        report = await stakeholderEngagementEngine.generateCustomerScorecard(stakeholderId, companyData || {})
        break

      case "board":
        report = await stakeholderEngagementEngine.generateBoardReport(companyData || {}, "quarterly")
        break

      default:
        return NextResponse.json({ error: "Invalid report type" }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      data: report,
    })
  } catch (error) {
    console.error("Stakeholder report generation error:", error)
    return NextResponse.json({ error: "Failed to generate stakeholder report" }, { status: 500 })
  }
}

