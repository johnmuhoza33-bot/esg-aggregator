import { type NextRequest, NextResponse } from "next/server"
import { stakeholderEngagementEngine } from "../../../../lib/stakeholder-engagement-engine"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest, { params }: { params: { stakeholderId: string } }) {
  try {
    const { stakeholderId } = params

    const dashboard = await stakeholderEngagementEngine.getStakeholderDashboard(stakeholderId)

    if (!dashboard) {
      return NextResponse.json({ error: "Dashboard not found for stakeholder" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: dashboard,
    })
  } catch (error) {
    console.error("Stakeholder dashboard error:", error)
    return NextResponse.json({ error: "Failed to fetch stakeholder dashboard" }, { status: 500 })
  }
}
