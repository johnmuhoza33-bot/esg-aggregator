import { type NextRequest, NextResponse } from "next/server"
import { advancedSupplyChainESG } from "@/lib/advanced-supply-chain-esg"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const companyId = searchParams.get("companyId")
    const severity = searchParams.get("severity")
    const status = searchParams.get("status")
    const tier = searchParams.get("tier")

    if (!companyId) {
      return NextResponse.json({ error: "Company ID is required" }, { status: 400 })
    }

    const riskAssessment = await advancedSupplyChainESG.assessSupplyChainRisks(companyId)
    let risks = riskAssessment.risks

    // Apply filters
    if (severity) {
      risks = risks.filter((risk: { severity: string }) => risk.severity === severity)
    }
    if (status) {
      risks = risks.filter((risk: { status: string }) => risk.status === status)
    }
    if (tier) {
      risks = risks.filter((risk: { tier: number }) => risk.tier === Number.parseInt(tier))
    }

    const riskStats = {
      total: risks.length,
      critical: risks.filter((r: { severity: string }) => r.severity === "Critical").length,
      high: risks.filter((r: { severity: string }) => r.severity === "High").length,
      medium: risks.filter((r: { severity: string }) => r.severity === "Medium").length,
      low: risks.filter((r: { severity: string }) => r.severity === "Low").length,
      active: risks.filter((r: { status: string }) => r.status === "Active").length,
      byTier: {
        tier1: risks.filter((r: { tier: number }) => r.tier === 1).length,
        tier2: risks.filter((r: { tier: number }) => r.tier === 2).length,
        tier3: risks.filter((r: { tier: number }) => r.tier === 3).length,
      },
      overallScore: riskAssessment.overallRiskScore,
      resilienceScore: riskAssessment.resilienceScore,
    }

    return NextResponse.json({
      success: true,
      data: {
        risks,
        statistics: riskStats,
        alerts: risks.filter((r: { severity: string; status: string }) => r.severity === "Critical" && r.status === "Active"),
        recommendations: riskAssessment.recommendations,
        insights: {
          diversityMetrics: riskAssessment.diversityMetrics,
          carbonFootprint: riskAssessment.carbonFootprint,
          conflictMinerals: riskAssessment.conflictMinerals,
        },
      },
    })
  } catch (error) {
    console.error("Advanced supply chain risk monitoring error:", error)
    return NextResponse.json({ error: "Failed to fetch supply chain risks" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { companyId, supplierId, riskData } = await request.json()

    if (!companyId || !supplierId || !riskData) {
      return NextResponse.json({ error: "Company ID, supplier ID, and risk data are required" }, { status: 400 })
    }

    const updatedAssessment = await advancedSupplyChainESG.updateSupplierRiskProfile(supplierId, riskData)

    return NextResponse.json({
      success: true,
      data: updatedAssessment,
      message: "Supplier risk profile updated successfully",
    })
  } catch (error) {
    console.error("Supply chain risk update error:", error)
    return NextResponse.json({ error: "Failed to update supplier risk profile" }, { status: 500 })
  }
}
