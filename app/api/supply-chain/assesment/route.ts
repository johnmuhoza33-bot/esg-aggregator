import { type NextRequest, NextResponse } from "next/server"
import { advancedSupplyChainESG } from "@/lib/advanced-supply-chain-esg"

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const { companyId, assessmentType = "comprehensive" } = await request.json()

    if (!companyId) {
      return NextResponse.json({ error: "Company ID is required" }, { status: 400 })
    }

    let assessment
    switch (assessmentType) {
      case "comprehensive":
        assessment = await advancedSupplyChainESG.conductComprehensiveAssessment(companyId)
        break
      case "diversity":
        assessment = await advancedSupplyChainESG.assessSupplierDiversity(companyId)
        break
      case "carbon":
        assessment = await advancedSupplyChainESG.calculateCarbonFootprint(companyId)
        break
      case "resilience":
        assessment = await advancedSupplyChainESG.assessSupplyChainResilience(companyId)
        break
      default:
        return NextResponse.json({ error: "Invalid assessment type" }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      data: assessment,
      assessmentType,
    })
  } catch (error) {
    console.error("Supply chain assessment error:", error)
    return NextResponse.json({ error: "Failed to conduct supply chain assessment" }, { status: 500 })
  }
}
