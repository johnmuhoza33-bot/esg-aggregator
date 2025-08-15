// Environmental, Health & Safety Tracking System
// Comprehensive incident management and safety monitoring

export interface SafetyIncident {
  id: string
  companyId: string
  incidentType: "injury" | "near-miss" | "environmental" | "occupational-illness" | "property-damage"
  severity: "low" | "medium" | "high" | "critical"
  status: "reported" | "investigating" | "resolved" | "closed"
  title: string
  description: string
  location: string
  department: string
  reportedBy: string
  reportedDate: string
  incidentDate: string
  injuredPersons?: number
  workDaysLost?: number
  medicalTreatment: boolean
  rootCause?: string
  correctiveActions: string[]
  preventiveActions: string[]
  investigationNotes?: string
  attachments: string[]
  regulatoryReporting: boolean
  regulatoryAgencies?: string[]
  estimatedCost?: number
  createdAt: string
  updatedAt: string
}

export interface SafetyMetrics {
  companyId: string
  period: string
  totalIncidents: number
  injuryRate: number
  lostTimeInjuryRate: number
  nearMissReports: number
  safetyTrainingHours: number
  safetyInspections: number
  complianceScore: number
  environmentalIncidents: number
  occupationalIllnesses: number
  workDaysLost: number
  safetyMeetings: number
  hazardIdentifications: number
  correctiveActionsCompleted: number
  lastUpdated: string
}

export interface EnvironmentalMonitoring {
  id: string
  companyId: string
  monitoringType: "air-quality" | "water-quality" | "noise-levels" | "waste-tracking" | "emissions"
  location: string
  parameter: string
  value: number
  unit: string
  regulatoryLimit?: number
  complianceStatus: "compliant" | "non-compliant" | "warning"
  monitoringDate: string
  equipment: string
  operator: string
  notes?: string
  createdAt: string
}

export interface SafetyTraining {
  id: string
  companyId: string
  employeeId: string
  trainingType: string
  trainingTitle: string
  completionDate: string
  expirationDate?: string
  certificationNumber?: string
  trainer: string
  duration: number
  score?: number
  status: "completed" | "in-progress" | "expired" | "overdue"
  createdAt: string
}

export interface SafetyInspection {
  id: string
  companyId: string
  inspectionType: "routine" | "regulatory" | "incident-follow-up" | "audit"
  location: string
  inspector: string
  inspectionDate: string
  findings: SafetyFinding[]
  overallRating: "excellent" | "good" | "fair" | "poor"
  complianceScore: number
  actionItems: ActionItem[]
  nextInspectionDate?: string
  createdAt: string
}

export interface SafetyFinding {
  id: string
  category: string
  description: string
  severity: "low" | "medium" | "high" | "critical"
  regulatoryReference?: string
  photos: string[]
  status: "open" | "in-progress" | "resolved"
}

export interface ActionItem {
  id: string
  description: string
  assignedTo: string
  dueDate: string
  priority: "low" | "medium" | "high" | "critical"
  status: "open" | "in-progress" | "completed" | "overdue"
  completionDate?: string
}

class EHSSafetyTracker {
  // Incident Management
  async reportIncident(incident: Omit<SafetyIncident, "id" | "createdAt" | "updatedAt">): Promise<SafetyIncident> {
    const newIncident: SafetyIncident = {
      ...incident,
      id: `incident_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Auto-assign severity based on incident type and details
    if (incident.injuredPersons && incident.injuredPersons > 0) {
      newIncident.severity = incident.medicalTreatment ? "high" : "medium"
    }

    // Auto-trigger regulatory reporting for critical incidents
    if (newIncident.severity === "critical" || incident.incidentType === "environmental") {
      newIncident.regulatoryReporting = true
      newIncident.regulatoryAgencies = this.getRequiredAgencies(incident.incidentType)
    }

    return newIncident
  }

  async updateIncident(incidentId: string, updates: Partial<SafetyIncident>): Promise<SafetyIncident> {
    // Implementation for updating incident
    const updatedIncident: SafetyIncident = {
      ...updates,
      id: incidentId,
      updatedAt: new Date().toISOString(),
    } as SafetyIncident

    return updatedIncident
  }

  async getIncidentsByCompany(
    companyId: string,
    filters?: {
      status?: string
      severity?: string
      dateRange?: { start: string; end: string }
    },
  ): Promise<SafetyIncident[]> {
    // Mock implementation - return sample incidents
    return [
      {
        id: "incident_001",
        companyId,
        incidentType: "injury",
        severity: "medium",
        status: "investigating",
        title: "Slip and Fall in Manufacturing Area",
        description: "Employee slipped on wet floor in production area",
        location: "Building A - Production Floor",
        department: "Manufacturing",
        reportedBy: "John Smith",
        reportedDate: new Date().toISOString(),
        incidentDate: new Date(Date.now() - 86400000).toISOString(),
        injuredPersons: 1,
        workDaysLost: 2,
        medicalTreatment: true,
        correctiveActions: ["Install additional warning signs", "Improve drainage system"],
        preventiveActions: ["Daily floor inspections", "Employee safety training"],
        attachments: [],
        regulatoryReporting: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]
  }

  // Safety Metrics Calculation
  async calculateSafetyMetrics(companyId: string, period: string): Promise<SafetyMetrics> {
    const incidents = await this.getIncidentsByCompany(companyId)
    const totalHours = 2080 * 1000 // Assuming 1000 employees working 2080 hours/year

    return {
      companyId,
      period,
      totalIncidents: incidents.length,
      injuryRate: (incidents.filter((i) => i.incidentType === "injury").length / totalHours) * 200000,
      lostTimeInjuryRate: (incidents.filter((i) => i.workDaysLost && i.workDaysLost > 0).length / totalHours) * 200000,
      nearMissReports: incidents.filter((i) => i.incidentType === "near-miss").length,
      safetyTrainingHours: 2400, // Mock data
      safetyInspections: 12,
      complianceScore: 94.5,
      environmentalIncidents: incidents.filter((i) => i.incidentType === "environmental").length,
      occupationalIllnesses: incidents.filter((i) => i.incidentType === "occupational-illness").length,
      workDaysLost: incidents.reduce((sum, i) => sum + (i.workDaysLost || 0), 0),
      safetyMeetings: 24,
      hazardIdentifications: 156,
      correctiveActionsCompleted: 142,
      lastUpdated: new Date().toISOString(),
    }
  }

  // Environmental Monitoring
  async recordEnvironmentalData(
    data: Omit<EnvironmentalMonitoring, "id" | "createdAt">,
  ): Promise<EnvironmentalMonitoring> {
    const record: EnvironmentalMonitoring = {
      ...data,
      id: `env_${Date.now()}`,
      createdAt: new Date().toISOString(),
    }

    // Auto-determine compliance status
    if (data.regulatoryLimit) {
      if (data.value > data.regulatoryLimit) {
        record.complianceStatus = "non-compliant"
      } else if (data.value > data.regulatoryLimit * 0.8) {
        record.complianceStatus = "warning"
      } else {
        record.complianceStatus = "compliant"
      }
    }

    return record
  }

  async getEnvironmentalData(
    companyId: string,
    filters?: {
      monitoringType?: string
      dateRange?: { start: string; end: string }
      complianceStatus?: string
    },
  ): Promise<EnvironmentalMonitoring[]> {
    // Mock implementation
    return [
      {
        id: "env_001",
        companyId,
        monitoringType: "air-quality",
        location: "Stack 1 - Main Production",
        parameter: "NOx Emissions",
        value: 45.2,
        unit: "ppm",
        regulatoryLimit: 50,
        complianceStatus: "compliant",
        monitoringDate: new Date().toISOString(),
        equipment: "Continuous Emissions Monitor CEM-001",
        operator: "Environmental Team",
        createdAt: new Date().toISOString(),
      },
    ]
  }

  // Safety Training Management
  async scheduleTraining(training: Omit<SafetyTraining, "id" | "createdAt">): Promise<SafetyTraining> {
    return {
      ...training,
      id: `training_${Date.now()}`,
      createdAt: new Date().toISOString(),
    }
  }

  async getTrainingRecords(
    companyId: string,
    filters?: {
      employeeId?: string
      status?: string
      expiringWithin?: number // days
    },
  ): Promise<SafetyTraining[]> {
    // Mock implementation
    return [
      {
        id: "training_001",
        companyId,
        employeeId: "emp_001",
        trainingType: "OSHA 30-Hour",
        trainingTitle: "Construction Safety Training",
        completionDate: new Date().toISOString(),
        expirationDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
        certificationNumber: "OSHA-30-2024-001",
        trainer: "Safety Institute",
        duration: 30,
        score: 92,
        status: "completed",
        createdAt: new Date().toISOString(),
      },
    ]
  }

  // Safety Inspections
  async conductInspection(inspection: Omit<SafetyInspection, "id" | "createdAt">): Promise<SafetyInspection> {
    const newInspection: SafetyInspection = {
      ...inspection,
      id: `inspection_${Date.now()}`,
      createdAt: new Date().toISOString(),
    }

    // Calculate compliance score based on findings
    const totalFindings = inspection.findings.length
    const criticalFindings = inspection.findings.filter((f) => f.severity === "critical").length
    const highFindings = inspection.findings.filter((f) => f.severity === "high").length

    newInspection.complianceScore = Math.max(
      0,
      100 - criticalFindings * 25 - highFindings * 10 - (totalFindings - criticalFindings - highFindings) * 2,
    )

    return newInspection
  }

  async getInspections(
    companyId: string,
    filters?: {
      inspectionType?: string
      dateRange?: { start: string; end: string }
    },
  ): Promise<SafetyInspection[]> {
    // Mock implementation
    return [
      {
        id: "inspection_001",
        companyId,
        inspectionType: "routine",
        location: "Manufacturing Floor A",
        inspector: "Safety Manager",
        inspectionDate: new Date().toISOString(),
        findings: [
          {
            id: "finding_001",
            category: "Personal Protective Equipment",
            description: "Some workers not wearing safety glasses in designated area",
            severity: "medium",
            regulatoryReference: "OSHA 1910.133",
            photos: [],
            status: "open",
          },
        ],
        overallRating: "good",
        complianceScore: 88,
        actionItems: [
          {
            id: "action_001",
            description: "Retrain workers on PPE requirements",
            assignedTo: "Floor Supervisor",
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            priority: "medium",
            status: "open",
          },
        ],
        nextInspectionDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString(),
      },
    ]
  }

  // Risk Assessment
  async performRiskAssessment(
    companyId: string,
    assessmentData: {
      area: string
      hazards: string[]
      riskLevel: "low" | "medium" | "high" | "critical"
      controlMeasures: string[]
    },
  ): Promise<any> {
    return {
      id: `risk_${Date.now()}`,
      companyId,
      ...assessmentData,
      assessmentDate: new Date().toISOString(),
      nextReviewDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      status: "active",
    }
  }

  // Regulatory Compliance
  async generateComplianceReport(companyId: string, reportType: string, period: string): Promise<any> {
    const metrics = await this.calculateSafetyMetrics(companyId, period)
    const incidents = await this.getIncidentsByCompany(companyId)
    const environmentalData = await this.getEnvironmentalData(companyId)

    return {
      reportId: `compliance_${Date.now()}`,
      companyId,
      reportType,
      period,
      generatedDate: new Date().toISOString(),
      safetyMetrics: metrics,
      incidentSummary: {
        totalIncidents: incidents.length,
        byType: this.groupIncidentsByType(incidents),
        bySeverity: this.groupIncidentsBySeverity(incidents),
      },
      environmentalCompliance: {
        totalMonitoringPoints: environmentalData.length,
        complianceRate:
          (environmentalData.filter((d) => d.complianceStatus === "compliant").length / environmentalData.length) * 100,
        violations: environmentalData.filter((d) => d.complianceStatus === "non-compliant"),
      },
      recommendations: this.generateSafetyRecommendations(metrics, incidents),
    }
  }

  // Helper Methods
  private getRequiredAgencies(incidentType: string): string[] {
    const agencyMap: Record<string, string[]> = {
      injury: ["OSHA"],
      environmental: ["EPA", "State Environmental Agency"],
      "occupational-illness": ["OSHA", "NIOSH"],
      "property-damage": ["Local Fire Department"],
      "near-miss": [],
    }
    return agencyMap[incidentType] || []
  }

  private groupIncidentsByType(incidents: SafetyIncident[]): Record<string, number> {
    return incidents.reduce(
      (acc, incident) => {
        acc[incident.incidentType] = (acc[incident.incidentType] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )
  }

  private groupIncidentsBySeverity(incidents: SafetyIncident[]): Record<string, number> {
    return incidents.reduce(
      (acc, incident) => {
        acc[incident.severity] = (acc[incident.severity] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )
  }

  private generateSafetyRecommendations(metrics: SafetyMetrics, incidents: SafetyIncident[]): string[] {
    const recommendations: string[] = []

    if (metrics.injuryRate > 3.0) {
      recommendations.push("Implement enhanced safety training program to reduce injury rate")
    }

    if (metrics.nearMissReports < 10) {
      recommendations.push("Encourage near-miss reporting to improve proactive safety measures")
    }

    if (metrics.complianceScore < 90) {
      recommendations.push("Focus on compliance improvement through regular audits and training")
    }

    const frequentIncidentTypes = this.groupIncidentsByType(incidents)
    const mostCommonType = Object.entries(frequentIncidentTypes).sort(([, a], [, b]) => b - a)[0]
    if (mostCommonType && mostCommonType[1] > 2) {
      recommendations.push(`Address recurring ${mostCommonType[0]} incidents through targeted interventions`)
    }

    return recommendations
  }
}

export const ehsSafetyTracker = new EHSSafetyTracker()
export default ehsSafetyTracker
