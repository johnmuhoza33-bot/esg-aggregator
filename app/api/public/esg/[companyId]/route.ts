import { type NextRequest, NextResponse } from "next/server"
import { stakeholderEngagementEngine } from "../../../../lib/stakeholder-engagement-engine"
export const dynamic = "force-dynamic"

export async function GET(request: NextRequest, { params }: { params: { companyId: string } }) {
  try {
    const { companyId } = params

    const publicData = await stakeholderEngagementEngine.getPublicESGData(companyId)

    return NextResponse.json({
      success: true,
      data: publicData,
      disclaimer: "This information is provided for transparency purposes and represents publicly available ESG data.",
    })
  } catch (error) {
    console.error("Public ESG data error:", error)
    return NextResponse.json({ error: "Failed to fetch public ESG data" }, { status: 500 })
  }
}
