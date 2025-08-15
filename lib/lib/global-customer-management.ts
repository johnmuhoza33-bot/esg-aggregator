// Global Customer Base Management System
// Comprehensive CRM for ESG service providers with global capabilities

export interface GlobalCustomer {
  id: string
  companyName: string
  legalName: string
  tradingNames: string[]
  headquarters: {
    country: string
    region: string
    address: string
    timezone: string
  }
  globalPresence: {
    countries: string[]
    regions: string[]
    subsidiaries: Subsidiary[]
    jointVentures: string[]
  }
  industry: {
    primary: string
    secondary: string[]
    sicCode: string
    naicsCode: string
  }
  companyProfile: {
    founded: string
    employees: number
    revenue: number
    currency: string
    publiclyTraded: boolean
    stockExchange?: string
    ticker?: string
    website: string
    description: string
  }
  esgProfile: {
    maturityLevel: "nascent" | "developing" | "defined" | "managed" | "optimized"
    currentScore: number
    priorities: string[]
    frameworks: string[]
    certifications: string[]
    reportingStandards: string[]
  }
  customerSegment: "enterprise" | "mid-market" | "small-business" | "startup"
  customerTier: "strategic" | "key" | "standard" | "emerging"
  relationshipStatus: "prospect" | "active" | "at-risk" | "churned" | "won-back"
  acquisitionChannel: "direct-sales" | "partner" | "marketing" | "referral" | "inbound"
  contacts: CustomerContact[]
  accountTeam: AccountTeam
  contractDetails: ContractDetails
  serviceHistory: ServiceHistory[]
  opportunities: Opportunity[]
  riskFactors: RiskFactor[]
  successMetrics: CustomerSuccessMetric[]
  complianceRequirements: ComplianceRequirement[]
  createdAt: string
  updatedAt: string
}

export interface Subsidiary {
  name: string
  country: string
  ownership: number
  employees: number
  revenue: number
  currency: string
  primaryBusiness: string
}

export interface CustomerContact {
  id: string
  name: string
  title: string
  department: string
  role: "decision-maker" | "influencer" | "user" | "champion" | "blocker"
  email: string
  phone: string
  location: string
  timezone: string
  preferredLanguage: string
  communicationPreferences: string[]
  lastContact: string
  relationshipStrength: "strong" | "moderate" | "weak"
  esgKnowledge: "expert" | "intermediate" | "beginner"
  active: boolean
}

export interface AccountTeam {
  accountManager: string
  customerSuccessManager: string
  technicalLead: string
  salesEngineer?: string
  supportContact: string
  executiveSponsor?: string
  region: string
}

export interface ContractDetails {
  contractId: string
  contractType: "subscription" | "project" | "retainer" | "hybrid"
  startDate: string
  endDate: string
  renewalDate: string
  value: number
  currency: string
  paymentTerms: string
  billingFrequency: "monthly" | "quarterly" | "annually"
  autoRenewal: boolean
  services: ContractedService[]
  sla: ServiceLevelAgreement
  terminationClause: string
  governingLaw: string
}

export interface ContractedService {
  serviceId: string
  serviceName: string
  description: string
  scope: string
  deliverables: string[]
  timeline: string
  pricing: {
    model: "fixed" | "time-and-materials" | "outcome-based" | "subscription"
    amount: number
    currency: string
  }
  status: "active" | "paused" | "completed" | "cancelled"
}

export interface ServiceLevelAgreement {
  responseTime: {
    critical: string
    high: string
    medium: string
    low: string
  }
  resolutionTime: {
    critical: string
    high: string
    medium: string
    low: string
  }
  availability: string
  performanceMetrics: string[]
  penalties: string[]
}

export interface ServiceHistory {
  id: string
  serviceType: string
  startDate: string
  endDate?: string
  status: "completed" | "in-progress" | "cancelled"
  deliverables: string[]
  outcomes: string[]
  customerSatisfaction: number
  lessons: string[]
  followUpActions: string[]
}

export interface Opportunity {
  id: string
  name: string
  description: string
  stage: "qualification" | "proposal" | "negotiation" | "closed-won" | "closed-lost"
  probability: number
  value: number
  currency: string
  expectedCloseDate: string
  actualCloseDate?: string
  services: string[]
  competitors: string[]
  keyStakeholders: string[]
  winLossReason?: string
  nextSteps: string[]
  lastActivity: string
}

export interface RiskFactor {
  id: string
  category: "financial" | "operational" | "strategic" | "compliance" | "relationship"
  description: string
  probability: "low" | "medium" | "high"
  impact: "low" | "medium" | "high"
  riskLevel: "low" | "medium" | "high" | "critical"
  mitigation: string
  owner: string
  status: "identified" | "monitored" | "mitigated" | "escalated"
  lastReview: string
  nextReview: string
}

export interface CustomerSuccessMetric {
  metric: string
  category: "adoption" | "satisfaction" | "value-realization" | "retention"
  value: number
  target: number
  trend: "improving" | "stable" | "declining"
  frequency: "daily" | "weekly" | "monthly" | "quarterly"
  lastUpdated: string
  dataSource: string
}

export interface ComplianceRequirement {
  regulation: string
  jurisdiction: string
  applicability: string
  requirements: string[]
  complianceStatus: "compliant" | "non-compliant" | "in-progress" | "not-applicable"
  lastAssessment: string
  nextAssessment: string
  responsible: string
}

export interface CustomerAnalytics {
  customerId: string
  period: string
  metrics: {
    totalRevenue: number
    recurringRevenue: number
    profitability: number
    customerLifetimeValue: number
    churnRisk: number
    satisfactionScore: number
    engagementScore: number
    adoptionRate: number
  }
  trends: {
    revenueGrowth: number
    serviceUtilization: number
    supportTickets: number
    contractRenewals: number
  }
  benchmarks: {
    industryAverage: number
    peerComparison: string
    internalRanking: number
  }
  insights: string[]
  recommendations: string[]
  lastUpdated: string
}

export interface GlobalMarketInsights {
  region: string
  period: string
  marketSize: number
  growthRate: number
  competitiveLandscape: {
    competitors: string[]
    marketShare: number
    positioning: string
  }
  customerSegments: {
    segment: string
    size: number
    growth: number
    characteristics: string[]
  }[]
  trends: string[]
  opportunities: string[]
  challenges: string[]
  regulatoryEnvironment: string[]
  recommendations: string[]
  lastUpdated: string
}

export interface CustomerJourney {
  customerId: string
  stages: JourneyStage[]
  currentStage: string
  overallHealth: "healthy" | "at-risk" | "critical"
  nextMilestone: string
  predictedOutcome: "expansion" | "renewal" | "churn"
  interventions: Intervention[]
  lastUpdated: string
}

export interface JourneyStage {
  stage: "awareness" | "consideration" | "purchase" | "onboarding" | "adoption" | "expansion" | "renewal"
  status: "completed" | "in-progress" | "at-risk" | "not-started"
  startDate: string
  completionDate?: string
  activities: string[]
  milestones: string[]
  healthScore: number
  keyMetrics: { [key: string]: number }
}

export interface Intervention {
  id: string
  type: "proactive" | "reactive"
  trigger: string
  action: string
  owner: string
  dueDate: string
  status: "planned" | "in-progress" | "completed" | "cancelled"
  outcome?: string
  impact?: string
}

class GlobalCustomerManagement {
  // Customer Management
  async createCustomer(customerData: Omit<GlobalCustomer, "id" | "createdAt" | "updatedAt">): Promise<GlobalCustomer> {
    const newCustomer: GlobalCustomer = {
      ...customerData,
      id: `customer_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Auto-assign customer tier based on revenue and strategic importance
    newCustomer.customerTier = this.determineCustomerTier(
      customerData.companyProfile.revenue,
      customerData.industry.primary,
    )

    // Auto-assign customer segment
    newCustomer.customerSegment = this.determineCustomerSegment(
      customerData.companyProfile.employees,
      customerData.companyProfile.revenue,
    )

    return newCustomer
  }

  async updateCustomer(customerId: string, updates: Partial<GlobalCustomer>): Promise<GlobalCustomer> {
    const updatedCustomer: GlobalCustomer = {
      ...updates,
      id: customerId,
      updatedAt: new Date().toISOString(),
    } as GlobalCustomer

    return updatedCustomer
  }

  async getCustomerById(customerId: string): Promise<GlobalCustomer | null> {
    // Mock implementation
    return {
      id: customerId,
      companyName: "Global Manufacturing Corp",
      legalName: "Global Manufacturing Corporation Ltd",
      tradingNames: ["GMC", "Global Mfg"],
      headquarters: {
        country: "United States",
        region: "North America",
        address: "123 Industrial Blvd, Detroit, MI 48201",
        timezone: "America/Detroit",
      },
      globalPresence: {
        countries: ["United States", "Canada", "Mexico", "Germany", "China"],
        regions: ["North America", "Europe", "Asia-Pacific"],
        subsidiaries: [
          {
            name: "GMC Europe GmbH",
            country: "Germany",
            ownership: 100,
            employees: 2500,
            revenue: 500000000,
            currency: "EUR",
            primaryBusiness: "Manufacturing",
          },
        ],
        jointVentures: ["China Manufacturing JV"],
      },
      industry: {
        primary: "Manufacturing",
        secondary: ["Automotive", "Industrial Equipment"],
        sicCode: "3711",
        naicsCode: "336111",
      },
      companyProfile: {
        founded: "1985",
        employees: 15000,
        revenue: 2500000000,
        currency: "USD",
        publiclyTraded: true,
        stockExchange: "NYSE",
        ticker: "GMC",
        website: "https://globalmfg.com",
        description: "Leading global manufacturer of automotive and industrial components",
      },
      esgProfile: {
        maturityLevel: "defined",
        currentScore: 72.5,
        priorities: ["Carbon Neutrality", "Supply Chain Transparency", "Worker Safety"],
        frameworks: ["GRI", "SASB", "TCFD"],
        certifications: ["ISO 14001", "ISO 45001"],
        reportingStandards: ["GRI Standards", "SASB Standards"],
      },
      customerSegment: "enterprise",
      customerTier: "strategic",
      relationshipStatus: "active",
      acquisitionChannel: "direct-sales",
      contacts: [
        {
          id: "contact_001",
          name: "Sarah Johnson",
          title: "Chief Sustainability Officer",
          department: "Sustainability",
          role: "decision-maker",
          email: "sarah.johnson@globalmfg.com",
          phone: "+1-555-0123",
          location: "Detroit, MI",
          timezone: "America/Detroit",
          preferredLanguage: "English",
          communicationPreferences: ["Email", "Video Call"],
          lastContact: new Date().toISOString(),
          relationshipStrength: "strong",
          esgKnowledge: "expert",
          active: true,
        },
      ],
      accountTeam: {
        accountManager: "John Smith",
        customerSuccessManager: "Emily Davis",
        technicalLead: "Michael Chen",
        salesEngineer: "David Wilson",
        supportContact: "Lisa Brown",
        executiveSponsor: "Robert Taylor",
        region: "North America",
      },
      contractDetails: {
        contractId: "CONTRACT_GMC_2024",
        contractType: "subscription",
        startDate: "2024-01-01",
        endDate: "2026-12-31",
        renewalDate: "2026-10-01",
        value: 500000,
        currency: "USD",
        paymentTerms: "Net 30",
        billingFrequency: "annually",
        autoRenewal: true,
        services: [
          {
            serviceId: "esg_analytics",
            serviceName: "ESG Analytics Platform",
            description: "Comprehensive ESG data analytics and reporting",
            scope: "Global operations",
            deliverables: ["Monthly reports", "Quarterly analysis", "Annual sustainability report"],
            timeline: "Ongoing",
            pricing: {
              model: "subscription",
              amount: 300000,
              currency: "USD",
            },
            status: "active",
          },
        ],
        sla: {
          responseTime: {
            critical: "2 hours",
            high: "4 hours",
            medium: "1 business day",
            low: "3 business days",
          },
          resolutionTime: {
            critical: "8 hours",
            high: "24 hours",
            medium: "3 business days",
            low: "5 business days",
          },
          availability: "99.5%",
          performanceMetrics: ["Response time", "Resolution time", "Customer satisfaction"],
          penalties: ["Service credits for SLA breaches"],
        },
        terminationClause: "90 days written notice",
        governingLaw: "New York State",
      },
      serviceHistory: [
        {
          id: "service_001",
          serviceType: "ESG Maturity Assessment",
          startDate: "2024-01-15",
          endDate: "2024-02-15",
          status: "completed",
          deliverables: ["Maturity assessment report", "Improvement roadmap"],
          outcomes: ["Identified key improvement areas", "Established baseline metrics"],
          customerSatisfaction: 4.5,
          lessons: ["Strong leadership commitment", "Need for better data systems"],
          followUpActions: ["Implement data collection improvements", "Quarterly progress reviews"],
        },
      ],
      opportunities: [
        {
          id: "opp_001",
          name: "Supply Chain ESG Expansion",
          description: "Extend ESG monitoring to tier 2 and 3 suppliers",
          stage: "proposal",
          probability: 75,
          value: 200000,
          currency: "USD",
          expectedCloseDate: "2024-06-30",
          services: ["Supply Chain Monitoring", "Supplier Assessment"],
          competitors: ["Competitor A", "Competitor B"],
          keyStakeholders: ["Sarah Johnson", "Supply Chain Director"],
          nextSteps: ["Present detailed proposal", "Conduct pilot program"],
          lastActivity: new Date().toISOString(),
        },
      ],
      riskFactors: [
        {
          id: "risk_001",
          category: "financial",
          description: "Budget constraints due to economic downturn",
          probability: "medium",
          impact: "high",
          riskLevel: "medium",
          mitigation: "Flexible payment terms and phased implementation",
          owner: "Account Manager",
          status: "monitored",
          lastReview: new Date().toISOString(),
          nextReview: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        },
      ],
      successMetrics: [
        {
          metric: "Platform Adoption Rate",
          category: "adoption",
          value: 85,
          target: 90,
          trend: "improving",
          frequency: "monthly",
          lastUpdated: new Date().toISOString(),
          dataSource: "Platform Analytics",
        },
      ],
      complianceRequirements: [
        {
          regulation: "EU CSRD",
          jurisdiction: "European Union",
          applicability: "European subsidiaries",
          requirements: ["Sustainability reporting", "Double materiality assessment"],
          complianceStatus: "in-progress",
          lastAssessment: new Date().toISOString(),
          nextAssessment: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
          responsible: "Compliance Team",
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  }

  async getCustomersByRegion(region: string): Promise<GlobalCustomer[]> {
    // Mock implementation
    const customer = await this.getCustomerById("customer_001")
    return customer ? [customer] : []
  }

  async getCustomersBySegment(segment: string): Promise<GlobalCustomer[]> {
    // Mock implementation
    const customer = await this.getCustomerById("customer_001")
    return customer && customer.customerSegment === segment ? [customer] : []
  }

  // Customer Analytics
  async generateCustomerAnalytics(customerId: string, period: string): Promise<CustomerAnalytics> {
    const customer = await this.getCustomerById(customerId)
    if (!customer) throw new Error("Customer not found")

    return {
      customerId,
      period,
      metrics: {
        totalRevenue: customer.contractDetails.value,
        recurringRevenue: customer.contractDetails.value * 0.8,
        profitability: customer.contractDetails.value * 0.25,
        customerLifetimeValue: customer.contractDetails.value * 3,
        churnRisk: 15,
        satisfactionScore: 4.2,
        engagementScore: 78,
        adoptionRate: 85,
      },
      trends: {
        revenueGrowth: 12,
        serviceUtilization: 82,
        supportTickets: -15,
        contractRenewals: 95,
      },
      benchmarks: {
        industryAverage: 3.8,
        peerComparison: "Above average",
        internalRanking: 15,
      },
      insights: [
        "High engagement with platform features",
        "Strong relationship with key stakeholders",
        "Opportunity for service expansion",
      ],
      recommendations: [
        "Propose additional services for supply chain monitoring",
        "Schedule quarterly business review",
        "Introduce new AI-powered features",
      ],
      lastUpdated: new Date().toISOString(),
    }
  }

  // Global Market Insights
  async generateMarketInsights(region: string, period: string): Promise<GlobalMarketInsights> {
    return {
      region,
      period,
      marketSize: 2500000000,
      growthRate: 15.2,
      competitiveLandscape: {
        competitors: ["Sustainalytics", "MSCI ESG", "Refinitiv", "S&P Global"],
        marketShare: 8.5,
        positioning: "AI-powered innovation leader",
      },
      customerSegments: [
        {
          segment: "Large Enterprise",
          size: 1500000000,
          growth: 12.5,
          characteristics: ["Complex global operations", "Regulatory compliance focus", "High ESG maturity"],
        },
        {
          segment: "Mid-Market",
          size: 750000000,
          growth: 18.3,
          characteristics: ["Growing ESG awareness", "Cost-sensitive", "Seeking guidance"],
        },
      ],
      trends: [
        "Increasing regulatory requirements",
        "Growing investor focus on ESG",
        "AI and automation adoption",
        "Supply chain transparency demands",
      ],
      opportunities: [
        "Regulatory compliance services",
        "AI-powered analytics",
        "Supply chain monitoring",
        "Stakeholder engagement platforms",
      ],
      challenges: [
        "Data quality and availability",
        "Standardization across frameworks",
        "Cost pressures",
        "Talent shortage",
      ],
      regulatoryEnvironment: [
        "EU CSRD implementation",
        "SEC climate disclosure rules",
        "TCFD adoption",
        "Taxonomy regulations",
      ],
      recommendations: [
        "Focus on regulatory compliance solutions",
        "Invest in AI and automation capabilities",
        "Expand supply chain offerings",
        "Develop industry-specific solutions",
      ],
      lastUpdated: new Date().toISOString(),
    }
  }

  // Customer Journey Management
  async trackCustomerJourney(customerId: string): Promise<CustomerJourney> {
    const customer = await this.getCustomerById(customerId)
    if (!customer) throw new Error("Customer not found")

    return {
      customerId,
      stages: [
        {
          stage: "awareness",
          status: "completed",
          startDate: "2023-06-01",
          completionDate: "2023-07-15",
          activities: ["Website visits", "Content downloads", "Webinar attendance"],
          milestones: ["First contact", "Needs assessment"],
          healthScore: 85,
          keyMetrics: { engagement: 78, interest: 82 },
        },
        {
          stage: "consideration",
          status: "completed",
          startDate: "2023-07-15",
          completionDate: "2023-09-30",
          activities: ["Demo sessions", "Proposal review", "Reference calls"],
          milestones: ["Technical evaluation", "Business case approval"],
          healthScore: 90,
          keyMetrics: { evaluation: 88, stakeholder_buy_in: 92 },
        },
        {
          stage: "purchase",
          status: "completed",
          startDate: "2023-09-30",
          completionDate: "2023-12-15",
          activities: ["Contract negotiation", "Legal review", "Procurement approval"],
          milestones: ["Contract signed", "Payment processed"],
          healthScore: 95,
          keyMetrics: { negotiation: 90, approval: 100 },
        },
        {
          stage: "onboarding",
          status: "completed",
          startDate: "2024-01-01",
          completionDate: "2024-02-15",
          activities: ["System setup", "Data integration", "Training sessions"],
          milestones: ["Go-live", "User training completed"],
          healthScore: 88,
          keyMetrics: { setup: 92, training: 85 },
        },
        {
          stage: "adoption",
          status: "in-progress",
          startDate: "2024-02-15",
          activities: ["Feature utilization", "Regular usage", "Feedback collection"],
          milestones: ["Full feature adoption", "Process integration"],
          healthScore: 82,
          keyMetrics: { usage: 85, satisfaction: 80 },
        },
      ],
      currentStage: "adoption",
      overallHealth: "healthy",
      nextMilestone: "Quarterly business review",
      predictedOutcome: "expansion",
      interventions: [
        {
          id: "intervention_001",
          type: "proactive",
          trigger: "Low feature utilization",
          action: "Schedule training session",
          owner: "Customer Success Manager",
          dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          status: "planned",
        },
      ],
      lastUpdated: new Date().toISOString(),
    }
  }

  // Opportunity Management
  async createOpportunity(customerId: string, opportunityData: Omit<Opportunity, "id">): Promise<Opportunity> {
    return {
      ...opportunityData,
      id: `opp_${Date.now()}`,
    }
  }

  async updateOpportunity(opportunityId: string, updates: Partial<Opportunity>): Promise<Opportunity> {
    return {
      ...updates,
      id: opportunityId,
    } as Opportunity
  }

  async getOpportunitiesByCustomer(customerId: string): Promise<Opportunity[]> {
    const customer = await this.getCustomerById(customerId)
    return customer ? customer.opportunities : []
  }

  // Risk Management
  async assessCustomerRisk(customerId: string): Promise<RiskFactor[]> {
    const customer = await this.getCustomerById(customerId)
    if (!customer) return []

    const risks: RiskFactor[] = []

    // Financial risk assessment
    if (customer.companyProfile.revenue < 100000000) {
      risks.push({
        id: `risk_financial_${Date.now()}`,
        category: "financial",
        description: "Lower revenue company may have budget constraints",
        probability: "medium",
        impact: "medium",
        riskLevel: "medium",
        mitigation: "Flexible payment terms and scaled service offerings",
        owner: "Account Manager",
        status: "identified",
        lastReview: new Date().toISOString(),
        nextReview: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      })
    }

    // Relationship risk assessment
    const strongContacts = customer.contacts.filter((c) => c.relationshipStrength === "strong").length
    if (strongContacts < 2) {
      risks.push({
        id: `risk_relationship_${Date.now()}`,
        category: "relationship",
        description: "Limited strong relationships may impact retention",
        probability: "medium",
        impact: "high",
        riskLevel: "high",
        mitigation: "Expand relationship network and strengthen existing contacts",
        owner: "Customer Success Manager",
        status: "identified",
        lastReview: new Date().toISOString(),
        nextReview: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      })
    }

    return risks
  }

  // Customer Success Management
  async calculateCustomerHealth(customerId: string): Promise<number> {
    const customer = await this.getCustomerById(customerId)
    if (!customer) return 0

    const analytics = await this.generateCustomerAnalytics(customerId, "current")
    const journey = await this.trackCustomerJourney(customerId)

    // Weighted health score calculation
    const weights = {
      satisfaction: 0.3,
      adoption: 0.25,
      engagement: 0.2,
      financial: 0.15,
      relationship: 0.1,
    }

    const scores = {
      satisfaction: analytics.metrics.satisfactionScore * 20, // Convert to 0-100 scale
      adoption: analytics.metrics.adoptionRate,
      engagement: analytics.metrics.engagementScore,
      financial: Math.min(100, (analytics.metrics.profitability / analytics.metrics.totalRevenue) * 400), // Profitability ratio
      relationship: journey.overallHealth === "healthy" ? 85 : journey.overallHealth === "at-risk" ? 60 : 30,
    }

    const healthScore = Object.entries(weights).reduce((total, [key, weight]) => {
      return total + scores[key as keyof typeof scores] * weight
    }, 0)

    return Math.round(healthScore)
  }

  async identifyChurnRisk(customerId: string): Promise<{ risk: "low" | "medium" | "high"; factors: string[] }> {
    const customer = await this.getCustomerById(customerId)
    if (!customer) return { risk: "high", factors: ["Customer not found"] }

    const healthScore = await this.calculateCustomerHealth(customerId)
    const analytics = await this.generateCustomerAnalytics(customerId, "current")

    const riskFactors: string[] = []
    let riskLevel: "low" | "medium" | "high" = "low"

    if (healthScore < 60) {
      riskFactors.push("Low overall health score")
      riskLevel = "high"
    } else if (healthScore < 75) {
      riskFactors.push("Moderate health score")
      riskLevel = "medium"
    }

    if (analytics.metrics.adoptionRate < 70) {
      riskFactors.push("Low platform adoption")
      riskLevel = riskLevel === "high" ? "high" : "medium"
    }

    if (analytics.metrics.engagementScore < 60) {
      riskFactors.push("Low engagement levels")
      riskLevel = riskLevel === "high" ? "high" : "medium"
    }

    if (analytics.metrics.satisfactionScore < 3.5) {
      riskFactors.push("Low satisfaction scores")
      riskLevel = "high"
    }

    const contractEndDate = new Date(customer.contractDetails.endDate)
    const monthsToRenewal = (contractEndDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24 * 30)
    if (monthsToRenewal < 6 && riskLevel !== "low") {
      riskFactors.push("Contract renewal approaching")
    }

    return { risk: riskLevel, factors: riskFactors }
  }

  // Helper Methods
  private determineCustomerTier(revenue: number, industry: string): "strategic" | "key" | "standard" | "emerging" {
    if (revenue > 1000000000) return "strategic"
    if (revenue > 500000000) return "key"
    if (revenue > 100000000) return "standard"
    return "emerging"
  }

  private determineCustomerSegment(
    employees: number,
    revenue: number,
  ): "enterprise" | "mid-market" | "small-business" | "startup" {
    if (employees > 5000 || revenue > 1000000000) return "enterprise"
    if (employees > 500 || revenue > 100000000) return "mid-market"
    if (employees > 50 || revenue > 10000000) return "small-business"
    return "startup"
  }
}

export const globalCustomerManagement = new GlobalCustomerManagement()
export default globalCustomerManagement
