import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export { prisma }

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

// Local database implementation for when Prisma is not available
export interface Company {
  id: string
  name: string
  ticker: string
  sector: string
  description?: string
  website?: string
  employees?: number
  revenue?: number
  esgScore?: number
  environmentalScore?: number
  socialScore?: number
  governanceScore?: number
  lastAnalyzed?: string
  createdAt: string
  updatedAt: string
}

export interface ESGMetrics {
  companyId: string
  carbonEmissions?: number
  waterUsage?: number
  wasteReduction?: number
  employeeSatisfaction?: number
  diversityIndex?: number
  communityInvestment?: number
  boardIndependence?: number
  executiveCompensation?: number
  ethicsScore?: number
  lastUpdated: string
}

class LocalDatabase {
  private getStoredCompanies(): Company[] {
    // Renamed from getCompanies to getStoredCompanies to avoid duplicate
    if (typeof window === "undefined") return []
    const stored = localStorage.getItem("esg_companies")
    return stored ? JSON.parse(stored) : []
  }

  private saveCompanies(companies: Company[]): void {
    if (typeof window === "undefined") return
    localStorage.setItem("esg_companies", JSON.stringify(companies))
  }

  private getStoredMetrics(): ESGMetrics[] {
    // Renamed from getMetrics to getStoredMetrics for consistency
    if (typeof window === "undefined") return []
    const stored = localStorage.getItem("esg_metrics")
    return stored ? JSON.parse(stored) : []
  }

  private saveMetrics(metrics: ESGMetrics[]): void {
    if (typeof window === "undefined") return
    localStorage.setItem("esg_metrics", JSON.stringify(metrics))
  }

  async createCompany(data: Omit<Company, "id" | "createdAt" | "updatedAt">): Promise<Company> {
    const companies = this.getStoredCompanies()
    // Updated to use renamed method
    const newCompany: Company = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    companies.push(newCompany)
    this.saveCompanies(companies)
    return newCompany
  }

  async getAllCompanies(): Promise<Company[]> {
    // Renamed from getCompanies to getAllCompanies to avoid duplicate with ESGDatabase
    return this.getStoredCompanies()
  }

  async getCompanyById(id: string): Promise<Company | null> {
    const companies = this.getStoredCompanies()
    // Updated to use renamed method
    return companies.find((c) => c.id === id) || null
  }

  async updateCompany(id: string, data: Partial<Company>): Promise<Company | null> {
    const companies = this.getStoredCompanies()
    // Updated to use renamed method
    const index = companies.findIndex((c) => c.id === id)
    if (index === -1) return null

    companies[index] = {
      ...companies[index],
      ...data,
      updatedAt: new Date().toISOString(),
    }
    this.saveCompanies(companies)
    return companies[index]
  }

  async deleteCompany(id: string): Promise<boolean> {
    const companies = this.getStoredCompanies()
    // Updated to use renamed method
    const filtered = companies.filter((c) => c.id !== id)
    if (filtered.length === companies.length) return false
    this.saveCompanies(filtered)
    return true
  }

  async createMetrics(data: ESGMetrics): Promise<ESGMetrics> {
    const metrics = this.getStoredMetrics()
    // Updated to use renamed method
    const newMetrics = {
      ...data,
      lastUpdated: new Date().toISOString(),
    }
    metrics.push(newMetrics)
    this.saveMetrics(metrics)
    return newMetrics
  }

  async getMetricsByCompanyId(companyId: string): Promise<ESGMetrics | null> {
    const metrics = this.getStoredMetrics()
    // Updated to use renamed method
    return metrics.find((m) => m.companyId === companyId) || null
  }
}

export const db = new LocalDatabase()

// ESGDatabase class with comprehensive database operations
export class ESGDatabase {
  static async getCompanies(): Promise<Company[]> {
    // Return mock companies for now
    return [
      {
        id: "1",
        name: "Apple Inc.",
        ticker: "AAPL",
        sector: "Technology",
        description: "Technology company focused on consumer electronics",
        website: "https://apple.com",
        employees: 154000,
        revenue: 394328000000,
        esgScore: 78.5,
        environmentalScore: 82.1,
        socialScore: 75.3,
        governanceScore: 78.1,
        lastAnalyzed: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "2",
        name: "Microsoft Corporation",
        ticker: "MSFT",
        sector: "Technology",
        description: "Multinational technology corporation",
        website: "https://microsoft.com",
        employees: 221000,
        revenue: 211915000000,
        esgScore: 82.1,
        environmentalScore: 79.8,
        socialScore: 84.2,
        governanceScore: 82.3,
        lastAnalyzed: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]
  }

  static async getCompanyById(id: string): Promise<Company | null> {
    const companies = await this.getCompanies()
    return companies.find((c) => c.id === id) || null
  }

  static async createCompany(data: Omit<Company, "id" | "createdAt" | "updatedAt">): Promise<Company> {
    const newCompany: Company = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    return newCompany
  }

  static async getESGScores(companyId: string): Promise<any[]> {
    // Return mock ESG scores
    return [
      {
        id: `score_${companyId}`,
        companyId,
        environmentalScore: Math.floor(Math.random() * 40) + 60,
        socialScore: Math.floor(Math.random() * 40) + 60,
        governanceScore: Math.floor(Math.random() * 40) + 60,
        overallScore: Math.floor(Math.random() * 40) + 60,
        riskLevel: "Medium",
        scoreDate: new Date().toISOString(),
        dataSources: ["SEC Filings", "CDP", "Company Reports"],
        createdAt: new Date().toISOString(),
      },
    ]
  }

  static async searchCompanies(query: string): Promise<Company[]> {
    const companies = await this.getCompanies()
    return companies.filter(
      (c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.ticker.toLowerCase().includes(query.toLowerCase()) ||
        c.sector.toLowerCase().includes(query.toLowerCase()),
    )
  }
}

        