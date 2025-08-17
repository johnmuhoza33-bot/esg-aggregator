"use client"

import { useState } from "react"
import Link from "next/link"

export default function AIToolsPage() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  const aiTools = [
    {
      id: "supply-chain",
      name: "Real-Time Supply Chain Monitoring",
      icon: "🔗",
      description:
        "AI-powered multi-tier supplier tracking with real-time ESG risk assessment and automated compliance monitoring.",
      features: [
        "Multi-tier supplier mapping (Tier 1-5)",
        "Real-time ESG risk alerts",
        "Automated compliance tracking",
        "Supply chain carbon footprint analysis",
        "Supplier ESG scoring and benchmarking",
      ],
      status: "Active",
      accuracy: "94%",
      dataPoints: "10,000+ suppliers tracked",
    },
    {
      id: "ehs-safety",
      name: "EHS and Safety Tracking System",
      icon: "🛡️",
      description:
        "Comprehensive Environmental, Health & Safety management with incident tracking, risk assessment, and regulatory compliance monitoring.",
      features: [
        "Real-time incident reporting and management",
        "Safety metrics and KPI tracking",
        "Environmental compliance monitoring",
        "Risk assessment and mitigation planning",
        "Audit trail and documentation management",
      ],
      status: "Active",
      accuracy: "96%",
      dataPoints: "1,000+ safety incidents tracked",
    },
    {
      id: "process-safety",
      name: "Process Safety Tools with Risk Assessment",
      icon: "⚗️",
      description:
        "Advanced process safety management with HAZOP analysis, SIS management, and comprehensive risk assessment methodologies.",
      features: [
        "Process Hazard Analysis (HAZOP, FMEA, What-If)",
        "Safety Instrumented Systems (SIS) management",
        "Layer of Protection Analysis (LOPA)",
        "Management of Change (MOC) procedures",
        "Process safety metrics and KPIs",
      ],
      status: "Active",
      accuracy: "98%",
      dataPoints: "500+ process safety assessments",
    },
    {
      id: "esg-strategy",
      name: "AI-Powered ESG Strategy Consulting",
      icon: "🎯",
      description:
        "Intelligent ESG strategy development with maturity assessments, roadmap planning, and AI-driven recommendations.",
      features: [
        "ESG maturity assessment and benchmarking",
        "Strategic roadmap development",
        "Materiality analysis and stakeholder mapping",
        "Target setting and goal alignment",
        "Investment prioritization and ROI analysis",
      ],
      status: "Active",
      accuracy: "91%",
      dataPoints: "200+ strategic assessments",
    },
    {
      id: "customer-management",
      name: "Global Customer Base Management",
      icon: "🌍",
      description:
        "Enterprise CRM system designed for ESG service providers with global customer analytics and opportunity tracking.",
      features: [
        "Multi-region customer relationship management",
        "Customer ESG journey tracking",
        "Opportunity identification and scoring",
        "Customer health and risk assessment",
        "Global compliance and regulatory tracking",
      ],
      status: "Active",
      accuracy: "93%",
      dataPoints: "10,000+ global customers",
    },
    {
      id: "audit-compliance",
      name: "Enhanced Audit-Ready Compliance System",
      icon: "📋",
      description:
        "Comprehensive audit preparation with evidence management, compliance controls testing, and regulatory change tracking.",
      features: [
        "Automated audit trail management",
        "Evidence document handling and verification",
        "Compliance controls testing and monitoring",
        "Regulatory change tracking and impact analysis",
        "Audit readiness assessment and scoring",
      ],
      status: "Active",
      accuracy: "99%",
      dataPoints: "15+ regulatory frameworks",
    },
    {
      id: "predictive-analytics",
      name: "Predictive ESG Analytics Engine",
      icon: "🔮",
      description:
        "Machine learning models that forecast ESG performance 3-12 months ahead with scenario analysis and risk predictions.",
      features: [
        "3, 6, and 12-month ESG score predictions",
        "Risk factor identification and probability scoring",
        "Opportunity analysis with ROI calculations",
        "Scenario modeling (best/worst/likely cases)",
        "Regulatory impact forecasting",
      ],
      status: "Active",
      accuracy: "87%",
      dataPoints: "5+ years of training data",
    },
    {
      id: "carbon-accounting",
      name: "Advanced Carbon Accounting",
      icon: "🌱",
      description:
        "Comprehensive Scope 1, 2, and 3 emissions tracking with science-based target setting and carbon offset management.",
      features: [
        "Complete Scope 1, 2, 3 emissions tracking",
        "Science-based target setting and monitoring",
        "Product-level carbon footprinting",
        "Carbon offset verification and tracking",
        "Financed emissions for financial institutions",
      ],
      status: "Active",
      accuracy: "96%",
      dataPoints: "15 Scope 3 categories covered",
    },
    {
      id: "enterprise-integration",
      name: "Enterprise Integration Suite",
      icon: "🔌",
      description:
        "Seamless integration with existing enterprise systems including ERP, CRM, and HRIS platforms for automated data collection.",
      features: [
        "SAP, Oracle, Microsoft Dynamics integration",
        "Real-time data synchronization",
        "Custom field mapping and transformation",
        "API connectors and webhooks",
        "Enterprise security and authentication",
      ],
      status: "Active",
      accuracy: "98%",
      dataPoints: "50+ enterprise systems supported",
    },
    {
      id: "stakeholder-engagement",
      name: "Stakeholder Engagement Platform",
      icon: "👥",
      description:
        "Comprehensive stakeholder management with investor-grade dashboards, customer scorecards, and board-level reporting.",
      features: [
        "Multi-stakeholder dashboard creation",
        "Investor-grade ESG reports",
        "Customer sustainability scorecards",
        "Board-level executive summaries",
        "Public ESG disclosure portals",
      ],
      status: "Active",
      accuracy: "92%",
      dataPoints: "7 stakeholder types supported",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🤖 AI-Powered • Enterprise-Grade • Real-Time
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Comprehensive AI-Powered ESG Enterprise Suite
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Discover the complete suite of AI-powered enterprise ESG tools that make ESGIntel the most comprehensive
            platform available. From EHS safety tracking to strategic consulting, each tool leverages advanced AI to
            deliver insights traditional providers can't match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-md inline-flex items-center justify-center"
            >
              Access AI Dashboard
            </Link>
            <Link
              href="/signup"
              className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 rounded-md inline-flex items-center justify-center"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* AI Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-xl shadow-lg p-6 border hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedTool(selectedTool === tool.id ? null : tool.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{tool.icon}</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600 font-medium">{tool.status}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900">{tool.name}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{tool.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{tool.accuracy}</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-600 font-medium">{tool.dataPoints}</div>
                  <div className="text-xs text-gray-500">Data Coverage</div>
                </div>
              </div>

              {selectedTool === tool.id && (
                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold mb-2 text-gray-800">Key Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-2">
                    <Link
                      href="/dashboard"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
                    >
                      Try Now
                    </Link>
                    <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Competitive Advantage */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Enterprise ESG Solution</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unlike traditional ESG providers that offer fragmented solutions, ESGIntel provides a unified platform
              covering every aspect of enterprise ESG management with AI-powered automation and insights.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Safety & Compliance</h3>
              <p className="text-gray-600 text-sm">EHS tracking and audit-ready compliance systems</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Process Safety</h3>
              <p className="text-gray-600 text-sm">Advanced HAZOP analysis and risk assessment tools</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategic Consulting</h3>
              <p className="text-gray-600 text-sm">AI-powered ESG strategy development and planning</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Management</h3>
              <p className="text-gray-600 text-sm">Enterprise customer and supply chain management</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience AI-Powered ESG Analytics?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join leading companies using ESGIntel's AI tools to make better sustainability decisions faster and more
            cost-effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block text-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
