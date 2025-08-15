// Process Safety Management and Risk Assessment Tools
// Comprehensive system for industrial process safety

export interface ProcessHazardAnalysis {
  id: string
  companyId: string
  facilityId: string
  processUnit: string
  analysisType: "HAZOP" | "FMEA" | "What-If" | "Checklist" | "LOPA"
  analysisDate: string
  teamLeader: string
  teamMembers: string[]
  processDescription: string
  operatingConditions: {
    temperature: { min: number; max: number; unit: string }
    pressure: { min: number; max: number; unit: string }
    flowRate: { min: number; max: number; unit: string }
    composition: string[]
  }
  hazards: ProcessHazard[]
  safeguards: Safeguard[]
  recommendations: Recommendation[]
  status: "draft" | "in-review" | "approved" | "implemented"
  nextReviewDate: string
  createdAt: string
  updatedAt: string
}

export interface ProcessHazard {
  id: string
  node: string
  deviation: string
  cause: string
  consequence: string
  likelihood: "rare" | "unlikely" | "possible" | "likely" | "almost-certain"
  severity: "negligible" | "minor" | "moderate" | "major" | "catastrophic"
  riskRating: "low" | "medium" | "high" | "very-high"
  existingSafeguards: string[]
  additionalSafeguards?: string[]
  residualRisk: "low" | "medium" | "high" | "very-high"
}

export interface Safeguard {
  id: string
  type: "prevention" | "detection" | "mitigation"
  category:
    | "basic-process-control"
    | "critical-alarm"
    | "safety-instrumented-function"
    | "physical-protection"
    | "procedural"
  description: string
  effectiveness: "low" | "medium" | "high"
  reliability: number // Probability of Failure on Demand (PFD)
  testFrequency: string
  lastTestDate?: string
  nextTestDate?: string
  status: "active" | "bypassed" | "failed" | "maintenance"
}

export interface Recommendation {
  id: string
  priority: "low" | "medium" | "high" | "critical"
  description: string
  justification: string
  assignedTo: string
  dueDate: string
  estimatedCost?: number
  status: "open" | "in-progress" | "completed" | "deferred"
  completionDate?: string
  verificationRequired: boolean
}

export interface SafetyInstrumentedSystem {
  id: string
  companyId: string
  facilityId: string
  tag: string
  description: string
  safetyFunction: string
  sil: "SIL1" | "SIL2" | "SIL3" | "SIL4"
  pfdTarget: number
  pfdActual?: number
  sensors: SISComponent[]
  logicSolver: SISComponent
  finalElements: SISComponent[]
  proofTestInterval: number // months
  lastProofTest?: string
  nextProofTest: string
  bypassed: boolean
  bypassReason?: string
  bypassAuthorization?: string
  status: "normal" | "bypassed" | "failed" | "maintenance"
  createdAt: string
  updatedAt: string
}

export interface SISComponent {
  id: string
  type: "sensor" | "logic-solver" | "final-element"
  manufacturer: string
  model: string
  tag: string
  pfd: number
  mttr: number // Mean Time To Repair (hours)
  testInterval: number // months
  lastTest?: string
  nextTest: string
  status: "normal" | "failed" | "maintenance"
}

export interface ProcessSafetyMetrics {
  companyId: string
  facilityId: string
  period: string
  tier1Events: number // Loss of Primary Containment
  tier2Events: number // Challenge to Safety Systems
  tier3Events: number // Demand on Safety Systems
  tier4Events: number // Operating Discipline and Management System Performance
  processIncidents: number
  nearMisses: number
  safetySystemDemands: number
  safetySystemFailures: number
  mocCompleted: number
  mocOverdue: number
  phaCompleted: number
  phaOverdue: number
  sisProofTestsCompleted: number
  sisProofTestsOverdue: number
  trainingHours: number
  auditFindings: number
  lastUpdated: string
}

export interface ManagementOfChange {
  id: string
  companyId: string
  facilityId: string
  changeType: "temporary" | "permanent" | "emergency" | "replacement-in-kind"
  title: string
  description: string
  justification: string
  initiator: string
  processUnit: string
  equipmentAffected: string[]
  hazardReview: {
    required: boolean
    completed: boolean
    reviewType?: string
    reviewDate?: string
    reviewer?: string
    findings?: string[]
  }
  operatingProcedures: {
    updateRequired: boolean
    updated: boolean
    updatedBy?: string
    updateDate?: string
  }
  training: {
    required: boolean
    completed: boolean
    trainedPersonnel?: string[]
    trainingDate?: string
  }
  preStartupReview: {
    required: boolean
    completed: boolean
    reviewer?: string
    reviewDate?: string
    findings?: string[]
  }
  approvals: MOCApproval[]
  implementationDate?: string
  status: "draft" | "under-review" | "approved" | "implemented" | "closed"
  createdAt: string
  updatedAt: string
}

export interface MOCApproval {
  role: string
  approver: string
  approvalDate?: string
  status: "pending" | "approved" | "rejected"
  comments?: string
}

export interface ProcessSafetyIncident {
  id: string
  companyId: string
  facilityId: string
  incidentType: "tier1" | "tier2" | "tier3" | "tier4" | "near-miss"
  title: string
  description: string
  location: string
  processUnit: string
  incidentDate: string
  reportedDate: string
  reportedBy: string
  immediateActions: string[]
  rootCauseAnalysis: {
    method: "5-Why" | "Fishbone" | "Fault-Tree" | "Event-Tree" | "MORT"
    findings: string[]
    rootCauses: string[]
    contributingFactors: string[]
  }
  correctiveActions: ProcessSafetyAction[]
  preventiveActions: ProcessSafetyAction[]
  lessonsLearned: string[]
  regulatoryNotification: boolean
  regulatoryAgencies?: string[]
  estimatedCost?: number
  actualCost?: number
  status: "reported" | "investigating" | "actions-pending" | "closed"
  createdAt: string
  updatedAt: string
}

export interface ProcessSafetyAction {
  id: string
  description: string
  assignedTo: string
  dueDate: string
  priority: "low" | "medium" | "high" | "critical"
  status: "open" | "in-progress" | "completed" | "overdue"
  completionDate?: string
  verificationRequired: boolean
  verifiedBy?: string
  verificationDate?: string
}

export interface EmergencyResponse {
  id: string
  companyId: string
  facilityId: string
  scenarioType: "fire" | "explosion" | "toxic-release" | "spill" | "natural-disaster"
  triggerConditions: string[]
  responseTeam: string[]
  evacuationProcedure: string
  communicationPlan: string[]
  externalAgencies: string[]
  equipmentRequired: string[]
  lastDrill?: string
  nextDrill: string
  drillResults?: string[]
  status: "active" | "under-review" | "needs-update"
  createdAt: string
  updatedAt: string
}

class ProcessSafetyTools {
  // Process Hazard Analysis
  async createPHA(pha: Omit<ProcessHazardAnalysis, "id" | "createdAt" | "updatedAt">): Promise<ProcessHazardAnalysis> {
    const newPHA: ProcessHazardAnalysis = {
      ...pha,
      id: `pha_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Auto-calculate risk ratings for hazards
    newPHA.hazards = newPHA.hazards.map((hazard) => ({
      ...hazard,
      riskRating: this.calculateRiskRating(hazard.likelihood, hazard.severity),
    }))

    return newPHA
  }

  async updatePHA(phaId: string, updates: Partial<ProcessHazardAnalysis>): Promise<ProcessHazardAnalysis> {
    const updatedPHA: ProcessHazardAnalysis = {
      ...updates,
      id: phaId,
      updatedAt: new Date().toISOString(),
    } as ProcessHazardAnalysis

    return updatedPHA
  }

  async getPHAsByFacility(facilityId: string): Promise<ProcessHazardAnalysis[]> {
    // Mock implementation
    return [
      {
        id: "pha_001",
        companyId: "comp_001",
        facilityId,
        processUnit: "Reactor Unit 1",
        analysisType: "HAZOP",
        analysisDate: new Date().toISOString(),
        teamLeader: "Senior Process Engineer",
        teamMembers: ["Process Engineer", "Operations Supervisor", "Safety Engineer", "Maintenance Manager"],
        processDescription: "Continuous stirred tank reactor for chemical synthesis",
        operatingConditions: {
          temperature: { min: 150, max: 200, unit: "°C" },
          pressure: { min: 2, max: 5, unit: "bar" },
          flowRate: { min: 100, max: 500, unit: "L/min" },
          composition: ["Reactant A", "Reactant B", "Catalyst", "Solvent"],
        },
        hazards: [
          {
            id: "hazard_001",
            node: "Reactor Feed",
            deviation: "High Flow",
            cause: "Control valve failure open",
            consequence: "Reactor overpressure, potential rupture",
            likelihood: "unlikely",
            severity: "major",
            riskRating: "medium",
            existingSafeguards: ["Pressure relief valve", "High pressure alarm", "Emergency shutdown system"],
            residualRisk: "low",
          },
        ],
        safeguards: [
          {
            id: "safeguard_001",
            type: "mitigation",
            category: "physical-protection",
            description: "Pressure relief valve PSV-001",
            effectiveness: "high",
            reliability: 0.01,
            testFrequency: "Annual",
            nextTestDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            status: "active",
          },
        ],
        recommendations: [
          {
            id: "rec_001",
            priority: "medium",
            description: "Install redundant flow measurement",
            justification: "Improve detection of flow deviations",
            assignedTo: "Instrumentation Engineer",
            dueDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
            estimatedCost: 15000,
            status: "open",
            verificationRequired: true,
          },
        ],
        status: "approved",
        nextReviewDate: new Date(Date.now() + 5 * 365 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]
  }

  // Safety Instrumented Systems
  async createSIS(
    sis: Omit<SafetyInstrumentedSystem, "id" | "createdAt" | "updatedAt">,
  ): Promise<SafetyInstrumentedSystem> {
    const newSIS: SafetyInstrumentedSystem = {
      ...sis,
      id: `sis_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Calculate actual PFD based on components
    newSIS.pfdActual = this.calculateSISPFD(newSIS.sensors, newSIS.logicSolver, newSIS.finalElements)

    return newSIS
  }

  async getSISByFacility(facilityId: string): Promise<SafetyInstrumentedSystem[]> {
    // Mock implementation
    return [
      {
        id: "sis_001",
        companyId: "comp_001",
        facilityId,
        tag: "SIS-001",
        description: "High Pressure Protection System",
        safetyFunction: "Shutdown reactor on high pressure",
        sil: "SIL2",
        pfdTarget: 0.01,
        pfdActual: 0.008,
        sensors: [
          {
            id: "sensor_001",
            type: "sensor",
            manufacturer: "Rosemount",
            model: "3051S",
            tag: "PT-001",
            pfd: 0.002,
            mttr: 4,
            testInterval: 12,
            nextTest: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            status: "normal",
          },
        ],
        logicSolver: {
          id: "logic_001",
          type: "logic-solver",
          manufacturer: "Schneider Electric",
          model: "Triconex TMR",
          tag: "SIS-CPU-001",
          pfd: 0.001,
          mttr: 8,
          testInterval: 12,
          nextTest: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          status: "normal",
        },
        finalElements: [
          {
            id: "valve_001",
            type: "final-element",
            manufacturer: "Fisher",
            model: "8560 Series",
            tag: "SDV-001",
            pfd: 0.005,
            mttr: 6,
            testInterval: 6,
            nextTest: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString(),
            status: "normal",
          },
        ],
        proofTestInterval: 12,
        nextProofTest: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
        bypassed: false,
        status: "normal",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]
  }

  // Process Safety Metrics
  async calculateProcessSafetyMetrics(facilityId: string, period: string): Promise<ProcessSafetyMetrics> {
    // Mock calculation
    return {
      companyId: "comp_001",
      facilityId,
      period,
      tier1Events: 0,
      tier2Events: 2,
      tier3Events: 5,
      tier4Events: 12,
      processIncidents: 3,
      nearMisses: 15,
      safetySystemDemands: 8,
      safetySystemFailures: 1,
      mocCompleted: 24,
      mocOverdue: 2,
      phaCompleted: 4,
      phaOverdue: 0,
      sisProofTestsCompleted: 18,
      sisProofTestsOverdue: 1,
      trainingHours: 480,
      auditFindings: 6,
      lastUpdated: new Date().toISOString(),
    }
  }

  // Management of Change
  async createMOC(moc: Omit<ManagementOfChange, "id" | "createdAt" | "updatedAt">): Promise<ManagementOfChange> {
    const newMOC: ManagementOfChange = {
      ...moc,
      id: `moc_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Auto-determine required reviews based on change type
    if (moc.changeType === "permanent" || moc.changeType === "emergency") {
      newMOC.hazardReview.required = true
      newMOC.preStartupReview.required = true
    }

    return newMOC
  }

  async getMOCsByFacility(facilityId: string, status?: string): Promise<ManagementOfChange[]> {
    // Mock implementation
    return [
      {
        id: "moc_001",
        companyId: "comp_001",
        facilityId,
        changeType: "permanent",
        title: "Install New Heat Exchanger",
        description: "Replace existing heat exchanger with higher capacity unit",
        justification: "Increase production capacity by 20%",
        initiator: "Process Engineer",
        processUnit: "Heat Recovery Unit",
        equipmentAffected: ["HX-001", "P-001", "Control System"],
        hazardReview: {
          required: true,
          completed: true,
          reviewType: "HAZOP",
          reviewDate: new Date().toISOString(),
          reviewer: "Senior Safety Engineer",
          findings: ["No new hazards identified", "Existing safeguards adequate"],
        },
        operatingProcedures: {
          updateRequired: true,
          updated: false,
        },
        training: {
          required: true,
          completed: false,
        },
        preStartupReview: {
          required: true,
          completed: false,
        },
        approvals: [
          {
            role: "Process Manager",
            approver: "John Smith",
            status: "approved",
            approvalDate: new Date().toISOString(),
          },
          {
            role: "Safety Manager",
            approver: "Jane Doe",
            status: "pending",
          },
        ],
        status: "under-review",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]
  }

  // Process Safety Incidents
  async reportProcessSafetyIncident(
    incident: Omit<ProcessSafetyIncident, "id" | "createdAt" | "updatedAt">,
  ): Promise<ProcessSafetyIncident> {
    const newIncident: ProcessSafetyIncident = {
      ...incident,
      id: `psi_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Auto-determine regulatory notification requirements
    if (incident.incidentType === "tier1" || incident.incidentType === "tier2") {
      newIncident.regulatoryNotification = true
      newIncident.regulatoryAgencies = ["EPA", "OSHA", "State Environmental Agency"]
    }

    return newIncident
  }

  // Emergency Response
  async createEmergencyResponse(
    response: Omit<EmergencyResponse, "id" | "createdAt" | "updatedAt">,
  ): Promise<EmergencyResponse> {
    return {
      ...response,
      id: `er_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  }

  // Risk Assessment Methods
  async performLOPA(scenario: {
    hazard: string
    consequence: string
    initiatingEvent: string
    independentProtectionLayers: string[]
  }): Promise<any> {
    // Layer of Protection Analysis
    const baseFrequency = 1e-2 // per year
    const targetRisk = 1e-6 // per year

    let totalPFD = 1
    scenario.independentProtectionLayers.forEach((layer) => {
      totalPFD *= 0.1 // Assume 0.1 PFD for each layer
    })

    const residualRisk = baseFrequency * totalPFD
    const riskReduction = baseFrequency / residualRisk

    return {
      scenario,
      baseFrequency,
      targetRisk,
      residualRisk,
      riskReduction,
      adequate: residualRisk <= targetRisk,
      recommendedSIL: this.determineSIL(riskReduction),
      analysis: {
        date: new Date().toISOString(),
        analyst: "Process Safety Engineer",
      },
    }
  }

  // Helper Methods
  private calculateRiskRating(likelihood: string, severity: string): "low" | "medium" | "high" | "very-high" {
    const likelihoodScore =
      {
        rare: 1,
        unlikely: 2,
        possible: 3,
        likely: 4,
        "almost-certain": 5,
      }[likelihood] || 1

    const severityScore =
      {
        negligible: 1,
        minor: 2,
        moderate: 3,
        major: 4,
        catastrophic: 5,
      }[severity] || 1

    const riskScore = likelihoodScore * severityScore

    if (riskScore <= 4) return "low"
    if (riskScore <= 9) return "medium"
    if (riskScore <= 16) return "high"
    return "very-high"
  }

  private calculateSISPFD(sensors: SISComponent[], logicSolver: SISComponent, finalElements: SISComponent[]): number {
    // Simplified PFD calculation (1oo1 architecture)
    const sensorPFD = sensors.reduce((sum, sensor) => sum + sensor.pfd, 0) / sensors.length
    const finalElementPFD = finalElements.reduce((sum, element) => sum + element.pfd, 0) / finalElements.length

    return sensorPFD + logicSolver.pfd + finalElementPFD
  }

  private determineSIL(riskReduction: number): "SIL1" | "SIL2" | "SIL3" | "SIL4" {
    if (riskReduction >= 10000) return "SIL4"
    if (riskReduction >= 1000) return "SIL3"
    if (riskReduction >= 100) return "SIL2"
    return "SIL1"
  }
}

export const processSafetyTools = new ProcessSafetyTools()
export default processSafetyTools
