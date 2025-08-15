export interface StakeholderProfile {
  id: string
  name: string
  type: "Investor" | "Customer" | "Board Member" | "Regulator" | "Employee" | "Community" | "Supplier"
  organization?: string
  accessLevel: "Public" | "Restricted" | "Confidential" | "Executive"
  preferences: {
    reportingFrequency: "Weekly" | "Monthly" | "Quarterly" | "Annual"
    focusAreas: string[]
    communicationChannels: string[]
  }
  contactInfo: {
    email: string
    phone?: string
    address?: string
  }
  engagementHistory: {
    lastContact: string
    totalInteractions: number
    satisfactionScore: number
  }
}

export interface StakeholderDashboard {
  id: string
  stakeholderId: string
  title: string
  layout: {
    widgets: DashboardWidget[]
    theme: "light" | "dark" | "corporate"
    customBranding?: {
      logo: string
      colors: {
        primary: string
        secondary: string
        accent: string
      }
    }
  }
  data: {
    metrics: Record<string, any>
    charts: ChartData[]
    alerts: Alert[]
    lastUpdated: string
    refreshInterval: number
  }
  accessControls: {
    allowedSections: string[]
    dataFilters: Record<string, any>
    exportPermissions: string[]
  }
}

export interface DashboardWidget {
  id: string
  type: "metric" | "chart" | "table" | "alert" | "news" | "compliance"
  title: string
  position: { x: number; y: number; width: number; height: number }
  config: Record<string, any>
  dataSource: string
  refreshRate: number
}

export interface ChartData {
  id: string
  type: "line" | "bar" | "pie" | "area" | "scatter"
  title: string
  data: any[]
  config: Record<string, any>
}

export interface Alert {
  id: string
  type: "info" | "warning" | "error" | "success"
  title: string
  message: string
  timestamp: string
  priority: "low" | "medium" | "high" | "critical"
  actionRequired: boolean
}

export interface InvestorReport {
  id: string
  investorId: string
  reportType: "quarterly" | "annual" | "impact" | "risk"
  generatedAt: string
  data: {
    executiveSummary: string
    financialImpact: {
      revenueImpact: number
      costSavings: number
      riskMitigation: number
      marketOpportunities: string[]
    }
    esgPerformance: {
      environmentalScore: number
      socialScore: number
      governanceScore: number
      overallRating: string
      benchmarkComparison: Record<string, number>
    }
    riskAssessment: {
      climateRisks: string[]
      regulatoryRisks: string[]
      reputationalRisks: string[]
      mitigationStrategies: string[]
    }
    futureOutlook: {
      targets: string[]
      timeline: string
      expectedImpact: string
    }
  }
}

export interface CustomerScorecard {
  id: string
  customerId: string
  generatedAt: string
  data: {
    sustainabilityRating: {
      overall: string
      environmental: number
      social: number
      governance: number
    }
    certifications: {
      name: string
      issuer: string
      validUntil: string
      status: "active" | "expired" | "pending"
    }[]
    complianceStatus: {
      frameworks: Record<string, "compliant" | "partial" | "non-compliant">
      lastAudit: string
      nextReview: string
    }
    improvements: {
      completed: string[]
      inProgress: string[]
      planned: string[]
    }
    benchmarking: {
      industryRank: number
      peerComparison: Record<string, number>
      bestPractices: string[]
    }
  }
}

export interface BoardReport {
  id: string
  boardId: string
  reportType: "monthly" | "quarterly" | "annual" | "strategic"
  generatedAt: string
  data: {
    executiveSummary: string
    keyMetrics: {
      esgScore: number
      riskLevel: string
      complianceStatus: string
      stakeholderSentiment: number
    }
    strategicInsights: {
      opportunities: string[]
      threats: string[]
      recommendations: string[]
      resourceRequirements: string[]
    }
    financialImpact: {
      currentPeriod: number
      projectedImpact: number
      investmentNeeded: number
      roi: number
    }
    riskManagement: {
      topRisks: string[]
      mitigationStatus: Record<string, string>
      emergingRisks: string[]
    }
    nextSteps: {
      immediateActions: string[]
      longTermStrategy: string[]
      boardDecisions: string[]
    }
  }
}

export interface PublicESGData {
  companyId: string
  lastUpdated: string
  data: {
    basicInfo: {
      name: string
      industry: string
      size: string
      headquarters: string
    }
    esgMetrics: {
      environmentalScore: number
      socialScore: number
      governanceScore: number
      overallRating: string
    }
    certifications: {
      name: string
      issuer: string
      validUntil: string
    }[]
    sustainabilityReports: {
      year: number
      title: string
      url: string
      framework: string
    }[]
    publicCommitments: {
      type: string
      description: string
      targetDate: string
      progress: number
    }[]
    industryComparison: {
      rank: number
      percentile: number
      benchmark: Record<string, number>
    }
  }
  disclaimer: string
}

export class StakeholderEngagementEngine {
  private stakeholderProfiles: Map<string, StakeholderProfile> = new Map()
  private dashboardCache: Map<string, StakeholderDashboard> = new Map()

  async getStakeholderDashboard(stakeholderId: string): Promise<StakeholderDashboard | null> {
    if (this.dashboardCache.has(stakeholderId)) {
      const cached = this.dashboardCache.get(stakeholderId)!
      if (Date.now() - new Date(cached.data.lastUpdated).getTime() < 5 * 60 * 1000) {
        return cached
      }
    }

    const profile = this.stakeholderProfiles.get(stakeholderId)
    if (!profile) {
      // Create a default profile for demo purposes
      const defaultProfile: StakeholderProfile = {
        id: stakeholderId,
        name: "Sample Stakeholder",
        type: "Investor",
        accessLevel: "Restricted",
        preferences: {
          reportingFrequency: "Monthly",
          focusAreas: ["Environmental", "Social", "Governance"],
          communicationChannels: ["email", "dashboard"],
        },
        contactInfo: {
          email: "stakeholder@example.com",
        },
        engagementHistory: {
          lastContact: new Date().toISOString(),
          totalInteractions: 5,
          satisfactionScore: 85,
        },
      }
      this.stakeholderProfiles.set(stakeholderId, defaultProfile)
    }

    const currentProfile = this.stakeholderProfiles.get(stakeholderId)!

    const dashboard: StakeholderDashboard = {
      id: `dashboard-${stakeholderId}`,
      stakeholderId,
      title: `${currentProfile.name} Dashboard`,
      layout: {
        widgets: this.generateWidgetsForStakeholder(currentProfile),
        theme: "corporate",
        customBranding: {
          logo: "/logo.png",
          colors: {
            primary: "#2563eb",
            secondary: "#64748b",
            accent: "#059669",
          },
        },
      },
      data: {
        metrics: this.generateMetricsForStakeholder(currentProfile),
        charts: this.generateChartsForStakeholder(currentProfile),
        alerts: this.generateAlertsForStakeholder(currentProfile),
        lastUpdated: new Date().toISOString(),
        refreshInterval: 300000,
      },
      accessControls: {
        allowedSections: this.getAllowedSections(currentProfile),
        dataFilters: this.getDataFilters(currentProfile),
        exportPermissions: this.getExportPermissions(currentProfile),
      },
    }

    this.dashboardCache.set(stakeholderId, dashboard)
    return dashboard
  }

  async generateInvestorReport(investorId: string, reportType: string, companyData?: any): Promise<InvestorReport> {
    return {
      id: `investor-report-${investorId}-${Date.now()}`,
      investorId,
      reportType: "quarterly",
      generatedAt: new Date().toISOString(),
      data: {
        executiveSummary:
          "ESG performance demonstrates strong alignment with investor expectations and regulatory requirements.",
        financialImpact: {
          revenueImpact: 2500000,
          costSavings: 1200000,
          riskMitigation: 800000,
          marketOpportunities: ["Green financing", "Sustainable product lines", "ESG-focused partnerships"],
        },
        esgPerformance: {
          environmentalScore: 85,
          socialScore: 78,
          governanceScore: 92,
          overallRating: "A-",
          benchmarkComparison: {
            "Industry Average": 72,
            "S&P 500": 68,
            "Best in Class": 94,
          },
        },
        riskAssessment: {
          climateRisks: ["Physical climate risks", "Transition risks", "Regulatory changes"],
          regulatoryRisks: ["CSRD compliance", "SEC climate rules", "Carbon pricing"],
          reputationalRisks: ["Greenwashing allegations", "Stakeholder activism", "Media scrutiny"],
          mitigationStrategies: ["Science-based targets", "Third-party verification", "Transparent reporting"],
        },
        futureOutlook: {
          targets: ["Net zero by 2050", "50% emission reduction by 2030", "100% renewable energy by 2025"],
          timeline: "2024-2030",
          expectedImpact: "Significant improvement in ESG ratings and investor confidence",
        },
      },
    }
  }

  async generateCustomerScorecard(customerId: string, companyData?: any): Promise<CustomerScorecard> {
    return {
      id: `customer-scorecard-${customerId}-${Date.now()}`,
      customerId,
      generatedAt: new Date().toISOString(),
      data: {
        sustainabilityRating: {
          overall: "B+",
          environmental: 82,
          social: 76,
          governance: 88,
        },
        certifications: [
          {
            name: "ISO 14001",
            issuer: "ISO",
            validUntil: "2025-12-31",
            status: "active",
          },
          {
            name: "B Corp Certification",
            issuer: "B Lab",
            validUntil: "2026-06-30",
            status: "active",
          },
        ],
        complianceStatus: {
          frameworks: {
            GRI: "compliant",
            SASB: "compliant",
            TCFD: "partial",
            CSRD: "non-compliant",
          },
          lastAudit: "2024-01-15",
          nextReview: "2024-07-15",
        },
        improvements: {
          completed: ["Renewable energy transition", "Waste reduction program", "Supplier code of conduct"],
          inProgress: ["Water conservation initiative", "Diversity & inclusion program"],
          planned: ["Carbon offset program", "Circular economy implementation"],
        },
        benchmarking: {
          industryRank: 15,
          peerComparison: {
            "Top Quartile": 90,
            "Industry Average": 65,
            "Your Score": 82,
          },
          bestPractices: ["Transparent reporting", "Stakeholder engagement", "Innovation in sustainability"],
        },
      },
    }
  }

  async generateBoardReport(companyData: any, reportDate: string): Promise<BoardReport> {
    return {
      id: `board-report-${Date.now()}`,
      boardId: "board-1",
      reportType: "quarterly",
      generatedAt: new Date().toISOString(),
      data: {
        executiveSummary:
          "ESG initiatives are progressing well with strong stakeholder support and measurable impact on business performance.",
        keyMetrics: {
          esgScore: 84,
          riskLevel: "Medium",
          complianceStatus: "Good",
          stakeholderSentiment: 78,
        },
        strategicInsights: {
          opportunities: ["ESG-linked financing", "Sustainable product innovation", "Green market expansion"],
          threats: ["Regulatory changes", "Climate physical risks", "Stakeholder activism"],
          recommendations: ["Accelerate decarbonization", "Enhance transparency", "Strengthen governance"],
          resourceRequirements: ["$2M additional investment", "3 FTE sustainability team", "Board ESG training"],
        },
        financialImpact: {
          currentPeriod: 1800000,
          projectedImpact: 3200000,
          investmentNeeded: 2000000,
          roi: 160,
        },
        riskManagement: {
          topRisks: ["Climate transition", "Regulatory compliance", "Supply chain disruption"],
          mitigationStatus: {
            "Climate transition": "In Progress",
            "Regulatory compliance": "On Track",
            "Supply chain disruption": "Planning",
          },
          emergingRisks: ["AI governance", "Biodiversity loss", "Social inequality"],
        },
        nextSteps: {
          immediateActions: ["Approve sustainability budget", "Review ESG targets", "Enhance reporting"],
          longTermStrategy: ["Net zero commitment", "Circular economy transition", "Stakeholder capitalism"],
          boardDecisions: ["ESG committee formation", "Executive compensation linkage", "Risk appetite review"],
        },
      },
    }
  }

  async getPublicESGData(companyId: string): Promise<PublicESGData> {
    return {
      companyId,
      lastUpdated: new Date().toISOString(),
      data: {
        basicInfo: {
          name: "Sample Corporation",
          industry: "Technology",
          size: "Large (>10,000 employees)",
          headquarters: "San Francisco, CA",
        },
        esgMetrics: {
          environmentalScore: 78,
          socialScore: 82,
          governanceScore: 85,
          overallRating: "B+",
        },
        certifications: [
          {
            name: "ISO 14001",
            issuer: "ISO",
            validUntil: "2025-12-31",
          },
          {
            name: "B Corp Certification",
            issuer: "B Lab",
            validUntil: "2026-06-30",
          },
        ],
        sustainabilityReports: [
          {
            year: 2023,
            title: "Sustainability Report 2023",
            url: "/reports/sustainability-2023.pdf",
            framework: "GRI",
          },
          {
            year: 2022,
            title: "Climate Report 2022",
            url: "/reports/climate-2022.pdf",
            framework: "TCFD",
          },
        ],
        publicCommitments: [
          {
            type: "Net Zero",
            description: "Achieve net zero emissions by 2050",
            targetDate: "2050-12-31",
            progress: 25,
          },
          {
            type: "Renewable Energy",
            description: "100% renewable energy by 2025",
            targetDate: "2025-12-31",
            progress: 75,
          },
        ],
        industryComparison: {
          rank: 12,
          percentile: 85,
          benchmark: {
            Environmental: 78,
            Social: 82,
            Governance: 85,
            "Industry Average": 68,
          },
        },
      },
      disclaimer:
        "This information is provided for transparency purposes and should not be considered as investment advice.",
    }
  }

  private generateWidgetsForStakeholder(profile: StakeholderProfile): DashboardWidget[] {
    const baseWidgets: DashboardWidget[] = [
      {
        id: "esg-overview",
        type: "metric",
        title: "ESG Overview",
        position: { x: 0, y: 0, width: 4, height: 2 },
        config: { showTrend: true, format: "percentage" },
        dataSource: "esg-scores",
        refreshRate: 300000,
      },
    ]

    switch (profile.type) {
      case "Investor":
        baseWidgets.push({
          id: "financial-impact",
          type: "chart",
          title: "Financial Impact",
          position: { x: 4, y: 0, width: 4, height: 2 },
          config: { chartType: "line", timeRange: "12m" },
          dataSource: "financial-metrics",
          refreshRate: 300000,
        })
        break
      case "Customer":
        baseWidgets.push({
          id: "sustainability-scorecard",
          type: "table",
          title: "Sustainability Scorecard",
          position: { x: 4, y: 0, width: 4, height: 2 },
          config: { showRanking: true, includeComparison: true },
          dataSource: "sustainability-metrics",
          refreshRate: 300000,
        })
        break
      case "Board Member":
        baseWidgets.push({
          id: "risk-dashboard",
          type: "alert",
          title: "Risk Dashboard",
          position: { x: 4, y: 0, width: 4, height: 2 },
          config: { priorityFilter: "high", showTrends: true },
          dataSource: "risk-alerts",
          refreshRate: 300000,
        })
        break
    }

    return baseWidgets
  }

  private generateMetricsForStakeholder(profile: StakeholderProfile): Record<string, any> {
    return {
      esgScore: 84,
      environmentalScore: 78,
      socialScore: 82,
      governanceScore: 85,
      riskLevel: "Medium",
      complianceStatus: "Good",
      lastUpdated: new Date().toISOString(),
    }
  }

  private generateChartsForStakeholder(profile: StakeholderProfile): ChartData[] {
    return [
      {
        id: "esg-trend",
        type: "line",
        title: "ESG Score Trend",
        data: [
          { month: "Jan", score: 78 },
          { month: "Feb", score: 80 },
          { month: "Mar", score: 82 },
          { month: "Apr", score: 84 },
        ],
        config: { showDataPoints: true, smoothLine: true },
      },
    ]
  }

  private generateAlertsForStakeholder(profile: StakeholderProfile): Alert[] {
    return [
      {
        id: "compliance-alert",
        type: "warning",
        title: "Compliance Review Due",
        message: "Annual ESG compliance review is due within 30 days",
        timestamp: new Date().toISOString(),
        priority: "medium",
        actionRequired: true,
      },
    ]
  }

  private getAllowedSections(profile: StakeholderProfile): string[] {
    const baseSections = ["overview", "metrics"]

    switch (profile.accessLevel) {
      case "Executive":
        return [...baseSections, "financial", "strategic", "risks", "compliance"]
      case "Confidential":
        return [...baseSections, "financial", "compliance"]
      case "Restricted":
        return [...baseSections, "compliance"]
      default:
        return baseSections
    }
  }

  private getDataFilters(profile: StakeholderProfile): Record<string, any> {
    return {
      timeRange: profile.preferences.reportingFrequency === "Weekly" ? "7d" : "30d",
      focusAreas: profile.preferences.focusAreas,
      accessLevel: profile.accessLevel,
    }
  }

  private getExportPermissions(profile: StakeholderProfile): string[] {
    switch (profile.accessLevel) {
      case "Executive":
        return ["pdf", "excel", "csv", "json"]
      case "Confidential":
        return ["pdf", "excel"]
      case "Restricted":
        return ["pdf"]
      default:
        return []
    }
  }
}

export const stakeholderEngagementEngine = new StakeholderEngagementEngine()
export default stakeholderEngagementEngine
