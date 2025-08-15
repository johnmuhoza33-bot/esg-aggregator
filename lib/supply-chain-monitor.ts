export interface SupplierCertification {
  id: string
  name: string
  issuingBody: string
  issueDate: string
  expiryDate: string
  status: "Active" | "Expired" | "Pending"
  scope: string
  verificationLevel: "Self-declared" | "Third-party" | "Accredited"
  documents?: string[]
}

export interface Supplier {
  id: string
  name: string
  tier: number
  country: string
  industry: string
  esgScore: number
  riskLevel: "Low" | "Medium" | "High" | "Critical"
  certifications: SupplierCertification[]
  lastAuditDate: string
  companyId: string
  parentSupplierId?: string
  createdAt: string
  updatedAt: string
}

export interface SupplyChainRisk {
  id: string
  supplierId: string
  riskType: "Environmental" | "Social" | "Governance" | "Operational"
  severity: "Low" | "Medium" | "High" | "Critical"
  description: string
  detectedAt: string
  status: "Active" | "Mitigated" | "Resolved"
  mitigationPlan?: string
  estimatedImpact: number
}

export interface SupplyChainMetrics {
  companyId: string
  totalSuppliers: number
  tierBreakdown: { [tier: number]: number }
  riskDistribution: { [risk: string]: number }
  averageESGScore: number
  complianceRate: number
  carbonFootprint: number
  lastUpdated: string
}

export class SupplyChainMonitor {
  static async getSuppliersByCompany(companyId: string): Promise<Supplier[]> {
    return [
      {
        id: "sup_001",
        name: "Green Tech Components Ltd",
        tier: 1,
        country: "Germany",
        industry: "Electronics Manufacturing",
        esgScore: 85.2,
        riskLevel: "Low",
        certifications: [
          {
            id: "cert_001",
            name: "ISO 14001",
            issuingBody: "ISO",
            issueDate: "2023-01-15",
            expiryDate: "2026-01-15",
            status: "Active",
            scope: "Environmental Management",
            verificationLevel: "Third-party",
            documents: ["iso14001_certificate.pdf"],
          },
          {
            id: "cert_002",
            name: "SA8000",
            issuingBody: "SAI",
            issueDate: "2023-03-10",
            expiryDate: "2026-03-10",
            status: "Active",
            scope: "Social Accountability",
            verificationLevel: "Accredited",
            documents: ["sa8000_certificate.pdf"],
          },
        ],
        lastAuditDate: "2024-01-15",
        companyId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]
  }

  static async getSupplyChainMetrics(companyId: string): Promise<SupplyChainMetrics> {
    return {
      companyId,
      totalSuppliers: 1,
      tierBreakdown: { 1: 1 },
      riskDistribution: { Low: 1 },
      averageESGScore: 85.2,
      complianceRate: 100,
      carbonFootprint: 3000,
      lastUpdated: new Date().toISOString(),
    }
  }
}





