"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default function DashboardPage() {
  const router = useRouter()
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null)
  const [showTrendChart, setShowTrendChart] = useState(false)
  const [showDataSources, setShowDataSources] = useState(false)
  const [showPeerComparison, setShowPeerComparison] = useState(false)
  const [showWhatIfSimulation, setShowWhatIfSimulation] = useState(false)
  const [showAlerts, setShowAlerts] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [showCustomizeDashboard, setShowCustomizeDashboard] = useState(false)
  const [showAISummary, setShowAISummary] = useState(false)
  const [showPredictions, setShowPredictions] = useState(false)
  const [showInvestorForum, setShowInvestorForum] = useState(false)
  const [showShareReport, setShowShareReport] = useState(false)
  const [customWeights, setCustomWeights] = useState({ E: 33, S: 33, G: 34 })
  const [watchlist, setWatchlist] = useState<string[]>(["Apple Inc.", "Microsoft Corporation"])
  const [dashboardWidgets, setDashboardWidgets] = useState({
    portfolio: true,
    trends: true,
    alerts: true,
    benchmarks: true,
    predictions: true,
  })

  const [showScope3Analysis, setShowScope3Analysis] = useState(false)
  const [showSupplyChainRisk, setShowSupplyChainRisk] = useState(false)
  const [showSustainabilityPlanning, setShowSustainabilityPlanning] = useState(false)
  const [showGoalTracking, setShowGoalTracking] = useState(false)
  const [showLCATools, setShowLCATools] = useState(false)
  const [showMobileApp, setShowMobileApp] = useState(false)

  const currentUser = {
    name: "Demo User",
    email: "demo@esgintel.com",
    plan: "professional",
  }

  const handleLogout = () => {
    router.push("/")
  }

  const trendData = {
    "Apple Inc.": [
      { month: "Jan", score: 75.3 },
      { month: "Feb", score: 76.1 },
      { month: "Mar", score: 76.8 },
      { month: "Apr", score: 77.2 },
      { month: "May", score: 77.9 },
      { month: "Jun", score: 78.5 },
    ],
    "Microsoft Corporation": [
      { month: "Jan", score: 80.3 },
      { month: "Feb", score: 80.7 },
      { month: "Mar", score: 81.1 },
      { month: "Apr", score: 81.5 },
      { month: "May", score: 81.8 },
      { month: "Jun", score: 82.1 },
    ],
    "Tesla Inc.": [
      { month: "Jan", score: 73.4 },
      { month: "Feb", score: 72.8 },
      { month: "Mar", score: 72.1 },
      { month: "Apr", score: 71.7 },
      { month: "May", score: 71.4 },
      { month: "Jun", score: 71.3 },
    ],
  }

  const dataSources = {
    "Apple Inc.": [
      "Apple 2024 Environmental Progress Report",
      "SEC Form 10-K Annual Report (2024)",
      "CDP Climate Change Response (A- Rating)",
      "Sustainalytics ESG Risk Rating (Low Risk)",
      "MSCI ESG Rating (AA)",
      "Real-time news monitoring (1,247 articles analyzed)",
    ],
    "Microsoft Corporation": [
      "Microsoft 2024 Sustainability Report",
      "SEC Form 10-K Annual Report (2024)",
      "CDP Climate Change Response (A Rating)",
      "Sustainalytics ESG Risk Rating (Low Risk)",
      "MSCI ESG Rating (AAA)",
      "Real-time news monitoring (2,156 articles analyzed)",
    ],
    "Tesla Inc.": [
      "Tesla 2024 Impact Report",
      "SEC Form 10-K Annual Report (2024)",
      "NHTSA Safety Reports and Investigations",
      "Sustainalytics ESG Risk Rating (Medium Risk)",
      "MSCI ESG Rating (BBB)",
      "Real-time news monitoring (3,892 articles analyzed)",
    ],
  }

  const aiSummaries = {
    "Apple Inc.": {
      strengths: [
        "Leading renewable energy adoption",
        "Strong supply chain transparency",
        "Excellent product lifecycle management",
      ],
      weaknesses: ["Limited board diversity", "Supply chain labor concerns", "Data privacy challenges"],
      prediction: "Score likely to improve 2-3 points over next 6 months due to enhanced sustainability initiatives",
    },
    "Microsoft Corporation": {
      strengths: ["Carbon negative commitment", "AI ethics leadership", "Strong governance practices"],
      weaknesses: ["Energy consumption from cloud services", "Limited manufacturing transparency"],
      prediction: "Stable high performance expected, potential for AAA rating within 12 months",
    },
    "Tesla Inc.": {
      strengths: ["Revolutionary environmental impact", "Innovation in clean technology", "Mission-driven leadership"],
      weaknesses: ["Workplace safety issues", "Governance concerns", "Stakeholder communication"],
      prediction: "Risk of further decline without addressing social and governance issues",
    },
  }

  const openTrendChart = (company: string) => {
    setSelectedCompany(company)
    setShowTrendChart(true)
  }

  const openDataSources = (company: string) => {
    setSelectedCompany(company)
    setShowDataSources(true)
  }

  return (
    <div className={`min-h-screen transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50"}`}>
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">ESG Dashboard</h1>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Welcome back, {currentUser?.name}! Monitor and analyze ESG performance across your portfolio
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleLogout}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm"
            >
              Logout
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded-md text-sm ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
            <button
              onClick={() => setShowCustomizeDashboard(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm"
            >
              ⚙️ Customize
            </button>
            <button
              onClick={() => setShowAlerts(true)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm"
            >
              🔔 Alerts (3)
            </button>
            <a href="/dashboard/add-company" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
              Add Company
            </a>
          </div>
        </div>

        {/* User Plan Badge */}
        <div className="mb-8">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              currentUser?.plan === "enterprise"
                ? "bg-purple-100 text-purple-800"
                : currentUser?.plan === "professional"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-green-100 text-green-800"
            }`}
          >
            {currentUser?.plan === "enterprise"
              ? "👑 Enterprise Plan"
              : currentUser?.plan === "professional"
                ? "⭐ Professional Plan"
                : "🚀 Starter Plan"}
          </div>
        </div>

        {dashboardWidgets.predictions && (
          <div className={`border rounded-lg p-6 mb-8 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">🤖 AI-Powered Insights</h2>
              <div className="flex gap-2">
                <Link
                  href="/ai-tools"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm"
                >
                  🔧 All AI Tools
                </Link>
                <button
                  onClick={() => setShowAISummary(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                >
                  📋 AI Summaries
                </button>
                <button
                  onClick={() => setShowPredictions(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                >
                  🔮 Predictions
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div
                className={`p-4 rounded ${darkMode ? "bg-red-900/20 border border-red-800" : "bg-red-50 border border-red-200"}`}
              >
                <div className="font-medium text-red-600">🚨 Red Flag Alert</div>
                <div className={`text-sm mt-1 ${darkMode ? "text-red-300" : "text-red-700"}`}>
                  Tesla's workplace safety score dropped 15% this month
                </div>
              </div>
              <div
                className={`p-4 rounded ${darkMode ? "bg-green-900/20 border border-green-800" : "bg-green-50 border border-green-200"}`}
              >
                <div className="font-medium text-green-600">📈 Opportunity</div>
                <div className={`text-sm mt-1 ${darkMode ? "text-green-300" : "text-green-700"}`}>
                  Apple's renewable energy expansion could boost E-score by 5 points
                </div>
              </div>
              <div
                className={`p-4 rounded ${darkMode ? "bg-blue-900/20 border border-blue-800" : "bg-blue-50 border border-blue-200"}`}
              >
                <div className="font-medium text-blue-600">🎯 Prediction</div>
                <div className={`text-sm mt-1 ${darkMode ? "text-blue-300" : "text-blue-700"}`}>
                  Microsoft likely to achieve AAA rating within 12 months
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <div className="text-sm font-medium text-gray-800">
                💡 Powered by 6 Advanced AI Tools: Supply Chain Monitoring, Predictive Analytics, Compliance Reporting,
                Carbon Accounting, Enterprise Integration & Stakeholder Engagement
              </div>
            </div>
          </div>
        )}

        <div className={`border rounded-lg p-6 mb-8 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">🌍 Scope 3 Emissions & Supply Chain Risk</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setShowScope3Analysis(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
              >
                📊 Scope 3 Analysis
              </button>
              <button
                onClick={() => setShowSupplyChainRisk(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded text-sm"
              >
                ⚠️ Supply Chain Risk
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div
              className={`p-4 rounded ${darkMode ? "bg-blue-900/20 border border-blue-800" : "bg-blue-50 border border-blue-200"}`}
            >
              <div className="font-medium text-blue-600">Apple Inc.</div>
              <div className={`text-sm mt-1 ${darkMode ? "text-blue-300" : "text-blue-700"}`}>
                Scope 3: 22.6M tons CO2e
                <br />
                Supply Chain Risk: Medium
                <br />
                Key Suppliers: 847 tracked
              </div>
            </div>
            <div
              className={`p-4 rounded ${darkMode ? "bg-green-900/20 border border-green-800" : "bg-green-50 border border-green-200"}`}
            >
              <div className="font-medium text-green-600">Microsoft Corp.</div>
              <div className={`text-sm mt-1 ${darkMode ? "text-green-300" : "text-green-700"}`}>
                Scope 3: 11.2M tons CO2e
                <br />
                Supply Chain Risk: Low
                <br />
                Key Suppliers: 623 tracked
              </div>
            </div>
            <div
              className={`p-4 rounded ${darkMode ? "bg-yellow-900/20 border border-yellow-800" : "bg-yellow-50 border border-yellow-200"}`}
            >
              <div className="font-medium text-yellow-600">Tesla Inc.</div>
              <div className={`text-sm mt-1 ${darkMode ? "text-yellow-300" : "text-yellow-700"}`}>
                Scope 3: 8.9M tons CO2e
                <br />
                Supply Chain Risk: High
                <br />
                Key Suppliers: 1,234 tracked
              </div>
            </div>
          </div>
        </div>

        <div className={`border rounded-lg p-6 mb-8 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">🎯 Sustainability Planning & Goals</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setShowSustainabilityPlanning(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm"
              >
                📋 Planning Tools
              </button>
              <button
                onClick={() => setShowGoalTracking(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded text-sm"
              >
                🏆 Goal Tracking
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Net Zero Commitments</h3>
              <div className="space-y-2">
                <div className={`p-3 rounded ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Apple Inc.</span>
                    <span className="text-green-600 font-bold">2030 Target</span>
                  </div>
                  <div className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Progress: 75% complete • On track
                  </div>
                </div>
                <div className={`p-3 rounded ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Microsoft Corp.</span>
                    <span className="text-green-600 font-bold">2030 Target</span>
                  </div>
                  <div className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Progress: 82% complete • Ahead of schedule
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Regulatory Compliance</h3>
              <div className="space-y-2">
                <div
                  className={`p-3 rounded ${darkMode ? "bg-green-900/20 border border-green-800" : "bg-green-50 border border-green-200"}`}
                >
                  <div className="font-medium text-green-600">EU Taxonomy Compliance</div>
                  <div className={`text-sm mt-1 ${darkMode ? "text-green-300" : "text-green-700"}`}>
                    All portfolio companies compliant
                  </div>
                </div>
                <div
                  className={`p-3 rounded ${darkMode ? "bg-blue-900/20 border border-blue-800" : "bg-blue-50 border border-blue-200"}`}
                >
                  <div className="font-medium text-blue-600">TCFD Reporting</div>
                  <div className={`text-sm mt-1 ${darkMode ? "text-blue-300" : "text-blue-700"}`}>
                    95% of companies reporting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`border rounded-lg p-6 mb-8 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">🔄 Lifecycle Assessment & Mobile Access</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setShowLCATools(true)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded text-sm"
              >
                🔄 LCA Tools
              </button>
              <button
                onClick={() => setShowMobileApp(true)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm"
              >
                📱 Mobile App
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Product Lifecycle Impact</h3>
              <div className="space-y-3">
                <div className={`p-3 rounded border ${darkMode ? "border-gray-600" : "border-gray-200"}`}>
                  <div className="font-medium">iPhone 15 Series</div>
                  <div className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Cradle-to-grave carbon footprint: 65kg CO2e
                    <br />
                    Recyclability score: 87%
                    <br />
                    Sustainable materials: 75%
                  </div>
                </div>
                <div className={`p-3 rounded border ${darkMode ? "border-gray-600" : "border-gray-200"}`}>
                  <div className="font-medium">Model Y Electric Vehicle</div>
                  <div className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Lifecycle emissions: 18.1 tons CO2e
                    <br />
                    Battery recyclability: 92%
                    <br />
                    Manufacturing impact: Medium
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Enterprise Integration</h3>
              <div className="space-y-3">
                <div className={`p-3 rounded border ${darkMode ? "border-gray-600" : "border-gray-200"}`}>
                  <div className="font-medium">Single Sign-On (SSO)</div>
                  <div className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    SAML 2.0, OAuth 2.0, Active Directory integration
                  </div>
                  <button className="text-xs text-blue-600 mt-1">Configure SSO →</button>
                </div>
                <div className={`p-3 rounded border ${darkMode ? "border-gray-600" : "border-gray-200"}`}>
                  <div className="font-medium">Mobile Dashboard</div>
                  <div className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    iOS & Android apps with offline sync
                  </div>
                  <button className="text-xs text-blue-600 mt-1">Download App →</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`border rounded-lg p-6 mb-8 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">💬 Community & Sharing</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setShowInvestorForum(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded text-sm"
              >
                💬 Investor Forum
              </button>
              <button
                onClick={() => setShowShareReport(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
              >
                📤 Share Report
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Recent Discussions</h3>
              <div className="space-y-2">
                <div className={`p-3 rounded ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                  <div className="font-medium text-sm">Tesla's ESG Challenges - Investment Impact?</div>
                  <div className={`text-xs mt-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    12 replies • 2 hours ago
                  </div>
                </div>
                <div className={`p-3 rounded ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                  <div className="font-medium text-sm">Microsoft's AI Ethics Framework Analysis</div>
                  <div className={`text-xs mt-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    8 replies • 5 hours ago
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Premium Features</h3>
              <div className={`p-4 rounded border-2 border-dashed ${darkMode ? "border-gray-600" : "border-gray-300"}`}>
                <div className="text-center">
                  <div className="font-medium mb-2">🔒 Upgrade to Premium</div>
                  <div className={`text-sm mb-3 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    • White-label reports with your branding
                    <br />• Advanced AI predictions
                    <br />• Corporate compliance tools
                    <br />• Priority support
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded text-sm">
                    Upgrade Now - $99/month
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">⚖️ Custom ESG Weighting</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Environmental Weight</label>
              <input
                type="range"
                min="0"
                max="100"
                value={customWeights.E}
                onChange={(e) => setCustomWeights({ ...customWeights, E: Number.parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="text-center text-sm font-medium">{customWeights.E}%</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Social Weight</label>
              <input
                type="range"
                min="0"
                max="100"
                value={customWeights.S}
                onChange={(e) => setCustomWeights({ ...customWeights, S: Number.parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="text-center text-sm font-medium">{customWeights.S}%</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Governance Weight</label>
              <input
                type="range"
                min="0"
                max="100"
                value={customWeights.G}
                onChange={(e) => setCustomWeights({ ...customWeights, G: Number.parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="text-center text-sm font-medium">{customWeights.G}%</div>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => setShowPeerComparison(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm"
            >
              📊 Peer Comparison
            </button>
            <button
              onClick={() => setShowWhatIfSimulation(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
            >
              🎯 What-If Simulation
            </button>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">⭐ Your Watchlist</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {watchlist.map((company) => (
              <div
                key={company}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {company}
                <button
                  onClick={() => setWatchlist(watchlist.filter((c) => c !== company))}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Get instant alerts when these companies' ESG scores change significantly.
          </p>
        </div>

        <div className="bg-white border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">🔍 Search & Filter Companies</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Companies</label>
              <input
                type="text"
                placeholder="Search by name or ticker..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Industries</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="energy">Energy</option>
                <option value="automotive">Automotive</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Regions</option>
                <option value="north-america">North America</option>
                <option value="europe">Europe</option>
                <option value="asia-pacific">Asia Pacific</option>
                <option value="emerging">Emerging Markets</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ESG Score Range</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Scores</option>
                <option value="80+">Excellent (80+)</option>
                <option value="70-79">Good (70-79)</option>
                <option value="60-69">Fair (60-69)</option>
                <option value="<60">Needs Improvement (&lt;60)</option>
              </select>
            </div>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3 text-purple-700">🔒 Premium Filters</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Carbon Footprint</label>
                <select className="w-full p-2 border rounded">
                  <option value="">All Levels</option>
                  <option value="low">Low (&lt;50k tons CO2)</option>
                  <option value="medium">Medium (50k-200k tons)</option>
                  <option value="high">High (&gt;200k tons)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Gender Diversity</label>
                <select className="w-full p-2 border rounded">
                  <option value="">All Levels</option>
                  <option value="high">High (&gt;40% women)</option>
                  <option value="medium">Medium (20-40%)</option>
                  <option value="low">Low (&lt;20%)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Board Independence</label>
                <select className="w-full p-2 border rounded">
                  <option value="">All Levels</option>
                  <option value="high">High (&gt;75% independent)</option>
                  <option value="medium">Medium (50-75%)</option>
                  <option value="low">Low (&lt;50%)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ESG Badges</label>
                <select className="w-full p-2 border rounded">
                  <option value="">All Companies</option>
                  <option value="leader">🏆 Sustainability Leader</option>
                  <option value="performer">⭐ Top Performer</option>
                  <option value="improver">📈 Most Improved</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white border rounded-lg p-6">
            <div className="text-sm font-medium text-gray-600 mb-2">Total Companies</div>
            <div className="text-3xl font-bold">5</div>
            <p className="text-xs text-gray-500">+2 from last month</p>
          </div>
          <div className="bg-white border rounded-lg p-6">
            <div className="text-sm font-medium text-gray-600 mb-2">Average ESG Score</div>
            <div className="text-3xl font-bold text-green-600">80.3</div>
            <p className="text-xs text-gray-500">+2.1% from last month</p>
          </div>
          <div className="bg-white border rounded-lg p-6">
            <div className="text-sm font-medium text-gray-600 mb-2">High Performers (80+)</div>
            <div className="text-3xl font-bold text-blue-600">3</div>
            <p className="text-xs text-gray-500">Leading in sustainability</p>
          </div>
          <div className="bg-white border rounded-lg p-6">
            <div className="text-sm font-medium text-gray-600 mb-2">At Risk (&lt;60)</div>
            <div className="text-3xl font-bold text-red-600">0</div>
            <p className="text-xs text-gray-500">Need improvement</p>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">📊 Company Portfolio</h2>
            <div className="flex gap-2">
              <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">📄 Export PDF</button>
              <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm">📊 Export Excel</button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-semibold text-lg">Apple Inc.</h3>
                    <p className="text-sm text-gray-600">AAPL • Technology • North America</p>
                  </div>
                  <div className="flex gap-1">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">⭐ Top Performer</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">📈 Most Improved</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-2xl font-bold text-green-600">78.5</div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">B+</div>
                  </div>
                  <div className="text-xs text-gray-500">ESG Score • Industry Avg: 72.1</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Environmental</span>
                    <span className="font-bold text-green-600">82.1</span>
                  </div>
                  <div className="text-xs text-gray-500">Industry Avg: 68.3 • Top 25%</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Social</span>
                    <span className="font-bold text-yellow-600">75.3</span>
                  </div>
                  <div className="text-xs text-gray-500">Industry Avg: 74.1 • Top 40%</div>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Governance</span>
                    <span className="font-bold text-blue-600">78.1</span>
                  </div>
                  <div className="text-xs text-gray-500">Industry Avg: 76.8 • Top 35%</div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Recommended Actions</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Improve supply chain transparency to boost Social score from 75.3 → 80+</li>
                  <li>• Enhance board diversity reporting to increase Governance score</li>
                  <li>• Expand renewable energy commitments for Environmental leadership</li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    <span className="text-gray-600">6-month trend:</span>
                    <span className="text-green-600 font-medium ml-1">↗ +3.2 points</span>
                  </div>
                  <button
                    onClick={() => openTrendChart("Apple Inc.")}
                    className="text-blue-600 text-sm hover:underline cursor-pointer"
                  >
                    📈 View Trend Chart
                  </button>
                  <button
                    onClick={() => openDataSources("Apple Inc.")}
                    className="text-gray-600 text-sm hover:underline cursor-pointer"
                  >
                    🔍 Data Sources
                  </button>
                </div>
                <div className="text-xs text-gray-500">Last updated: 2 hours ago</div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-semibold text-lg">Microsoft Corporation</h3>
                    <p className="text-sm text-gray-600">MSFT • Technology • North America</p>
                  </div>
                  <div className="flex gap-1">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">⭐ Top Performer</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">📈 Most Improved</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-2xl font-bold text-green-600">82.1</div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">A-</div>
                  </div>
                  <div className="text-xs text-gray-500">ESG Score • Industry Avg: 72.1</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Environmental</span>
                    <span className="font-bold text-green-600">79.8</span>
                  </div>
                  <div className="text-xs text-gray-500">Industry Avg: 68.3 • Top 20%</div>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Social</span>
                    <span className="font-bold text-green-600">84.2</span>
                  </div>
                  <div className="text-xs text-gray-500">Industry Avg: 74.1 • Top 10%</div>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Governance</span>
                    <span className="font-bold text-green-600">82.3</span>
                  </div>
                  <div className="text-xs text-gray-500">Industry Avg: 76.8 • Top 15%</div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded mb-4">
                <h4 className="font-semibold text-green-800 mb-2">🏆 Excellence Areas</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Leading in AI ethics and responsible technology development</li>
                  <li>• Carbon negative commitment by 2030 ahead of industry</li>
                  <li>• Strong diversity and inclusion programs</li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    <span className="text-gray-600">6-month trend:</span>
                    <span className="text-green-600 font-medium ml-1">↗ +1.8 points</span>
                  </div>
                  <button
                    onClick={() => openTrendChart("Microsoft Corporation")}
                    className="text-blue-600 text-sm hover:underline cursor-pointer"
                  >
                    📈 View Trend Chart
                  </button>
                  <button
                    onClick={() => openDataSources("Microsoft Corporation")}
                    className="text-gray-600 text-sm hover:underline cursor-pointer"
                  >
                    🔍 Data Sources
                  </button>
                </div>
                <div className="text-xs text-gray-500">Last updated: 1 hour ago</div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-semibold text-lg">Tesla Inc.</h3>
                    <p className="text-sm text-gray-600">TSLA • Automotive • North America</p>
                  </div>
                  <div className="flex gap-1">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">⭐ Top Performer</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">📈 Most Improved</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-2xl font-bold text-yellow-600">71.3</div>
                    <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">B-</div>
                  </div>
                  <div className="text-xs text-gray-500">ESG Score • Industry Avg: 65.4</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Environmental</span>
                    <span className="font-bold text-green-600">85.7</span>
                  </div>
                  <div className="text-xs text-gray-500">Industry Avg: 58.2 • Top 5%</div>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Social</span>
                    <span className="font-bold text-red-600">62.1</span>
                  </div>
                  <div className="text-xs text-gray-500">Industry Avg: 68.1 • Bottom 30%</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Governance</span>
                    <span className="font-bold text-yellow-600">66.1</span>
                  </div>
                  <div className="text-xs text-gray-500">Industry Avg: 70.1 • Bottom 40%</div>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded mb-4">
                <h4 className="font-semibold text-orange-800 mb-2">⚠️ Priority Improvements</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Address workplace safety concerns to improve Social score from 62.1 → 70+</li>
                  <li>• Enhance board independence and oversight structures</li>
                  <li>• Improve stakeholder communication and transparency</li>
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    <span className="text-gray-600">6-month trend:</span>
                    <span className="text-red-600 font-medium ml-1">↘ -2.1 points</span>
                  </div>
                  <button
                    onClick={() => openTrendChart("Tesla Inc.")}
                    className="text-blue-600 text-sm hover:underline cursor-pointer"
                  >
                    📈 View Trend Chart
                  </button>
                  <button
                    onClick={() => openDataSources("Tesla Inc.")}
                    className="text-gray-600 text-sm hover:underline cursor-pointer"
                  >
                    🔍 Data Sources
                  </button>
                </div>
                <div className="text-xs text-gray-500">Last updated: 30 minutes ago</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">📋 Reports & Downloads</h2>
            <div className="space-y-3">
              <button className="w-full text-left p-3 border rounded hover:bg-gray-50">
                <div className="font-medium">Monthly ESG Summary Report</div>
                <div className="text-sm text-gray-600">Automated email report for your portfolio</div>
              </button>
              <button className="w-full text-left p-3 border rounded hover:bg-gray-50">
                <div className="font-medium">Custom Benchmark Analysis</div>
                <div className="text-sm text-gray-600">Tailored industry comparison report</div>
              </button>
              <button className="w-full text-left p-3 border rounded hover:bg-gray-50">
                <div className="font-medium">ESG Scorecard Export</div>
                <div className="text-sm text-gray-600">Download detailed company scorecards</div>
              </button>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">🔌 API & Integrations</h2>
            <div className="space-y-3">
              <div className="p-3 border rounded">
                <div className="font-medium">ESG Data API</div>
                <div className="text-sm text-gray-600">Access real-time ESG scores programmatically</div>
                <div className="text-xs text-blue-600 mt-1">Generate API Key →</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-medium">Investment Platform Integration</div>
                <div className="text-sm text-gray-600">Connect with brokerage accounts</div>
                <div className="text-xs text-blue-600 mt-1">Connect Account →</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-medium">Private Data Upload</div>
                <div className="text-sm text-gray-600">Upload your company's ESG data</div>
                <div className="text-xs text-blue-600 mt-1">Upload Data →</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">🔍 Data Transparency & Methodology</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Data Sources</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Company sustainability reports and SEC filings</li>
                <li>• Real-time news and media monitoring (10,000+ sources)</li>
                <li>• Regulatory databases and compliance records</li>
                <li>• Third-party ESG data providers and verification</li>
                <li>• Social media sentiment and stakeholder feedback</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">AI Scoring Methodology</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Machine learning models trained on 5+ years of ESG data</li>
                <li>• Industry-specific weighting and benchmarking</li>
                <li>• Real-time risk event impact assessment</li>
                <li>• Predictive modeling for future ESG performance</li>
                <li>• Continuous model validation and improvement</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p className="text-sm text-gray-600">
              <strong>Transparency Note:</strong> Click any score above to view detailed calculation breakdown, data
              sources, and confidence intervals. Our AI models are audited quarterly by independent ESG experts.
            </p>
          </div>
        </div>

        {showTrendChart && selectedCompany && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">ESG Score Trend - {selectedCompany}</h3>
                <button onClick={() => setShowTrendChart(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded">
                  {trendData[selectedCompany as keyof typeof trendData]?.map((point, index) => (
                    <div key={index} className="text-center">
                      <div className="text-sm text-gray-600 mb-1">{point.month}</div>
                      <div className="font-bold text-lg">{point.score}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2">
                  <strong>Trend Analysis:</strong>
                </p>
                <ul className="space-y-1">
                  {selectedCompany === "Apple Inc." && (
                    <>
                      <li>• Steady improvement driven by enhanced supply chain transparency</li>
                      <li>• Environmental score gains from renewable energy expansion</li>
                      <li>• Social score improvements from diversity initiatives</li>
                    </>
                  )}
                  {selectedCompany === "Microsoft Corporation" && (
                    <>
                      <li>• Consistent upward trajectory across all ESG dimensions</li>
                      <li>• Leading in AI ethics and responsible technology development</li>
                      <li>• Strong governance practices maintaining high scores</li>
                    </>
                  )}
                  {selectedCompany === "Tesla Inc." && (
                    <>
                      <li>• Declining trend due to workplace safety concerns</li>
                      <li>• Environmental leadership remains strong</li>
                      <li>• Governance challenges impacting overall score</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}

        {showDataSources && selectedCompany && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Data Sources - {selectedCompany}</h3>
                <button
                  onClick={() => setShowDataSources(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="space-y-3">
                {dataSources[selectedCompany as keyof typeof dataSources]?.map((source, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm">{source}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded">
                <p className="text-sm text-blue-800">
                  <strong>Data Freshness:</strong> All sources are updated in real-time with our AI monitoring system.
                  Last comprehensive review completed within the past 24 hours.
                </p>
              </div>
            </div>
          </div>
        )}

        {showAlerts && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">🔔 ESG Alerts & Notifications</h3>
                <button onClick={() => setShowAlerts(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-red-500 bg-red-50">
                  <div className="font-medium text-red-800">Tesla Inc. - Score Decline Alert</div>
                  <div className="text-sm text-red-700">
                    ESG score dropped 2.1 points due to workplace safety concerns
                  </div>
                  <div className="text-xs text-red-600 mt-1">2 hours ago</div>
                </div>
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                  <div className="font-medium text-blue-800">Microsoft - Industry News</div>
                  <div className="text-sm text-blue-700">
                    New AI ethics framework announced, potential positive impact
                  </div>
                  <div className="text-xs text-blue-600 mt-1">5 hours ago</div>
                </div>
                <div className="p-4 border-l-4 border-green-500 bg-green-50">
                  <div className="font-medium text-green-800">Apple Inc. - Score Improvement</div>
                  <div className="text-sm text-green-700">
                    Environmental score increased due to renewable energy expansion
                  </div>
                  <div className="text-xs text-green-600 mt-1">1 day ago</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showPeerComparison && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">📊 Peer Comparison Analysis</h3>
                <button
                  onClick={() => setShowPeerComparison(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border p-3 text-left">Company</th>
                      <th className="border p-3">Overall ESG</th>
                      <th className="border p-3">Environmental</th>
                      <th className="border p-3">Social</th>
                      <th className="border p-3">Governance</th>
                      <th className="border p-3">Industry Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3 font-medium">Microsoft</td>
                      <td className="border p-3 text-center text-green-600 font-bold">82.1</td>
                      <td className="border p-3 text-center">79.8</td>
                      <td className="border p-3 text-center">84.2</td>
                      <td className="border p-3 text-center">82.3</td>
                      <td className="border p-3 text-center">#1</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Apple</td>
                      <td className="border p-3 text-center text-green-600 font-bold">78.5</td>
                      <td className="border p-3 text-center">82.1</td>
                      <td className="border p-3 text-center">75.3</td>
                      <td className="border p-3 text-center">78.1</td>
                      <td className="border p-3 text-center">#2</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Tesla</td>
                      <td className="border p-3 text-center text-yellow-600 font-bold">71.3</td>
                      <td className="border p-3 text-center">85.7</td>
                      <td className="border p-3 text-center">62.1</td>
                      <td className="border p-3 text-center">66.1</td>
                      <td className="border p-3 text-center">#3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {showWhatIfSimulation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">🎯 What-If ESG Simulation</h3>
                <button
                  onClick={() => setShowWhatIfSimulation(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Company</label>
                  <select className="w-full p-2 border rounded">
                    <option>Tesla Inc.</option>
                    <option>Apple Inc.</option>
                    <option>Microsoft Corporation</option>
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Improve Social Score by</label>
                    <input type="range" min="0" max="20" className="w-full" />
                    <div className="text-center text-sm">+10 points</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Improve Governance by</label>
                    <input type="range" min="0" max="20" className="w-full" />
                    <div className="text-center text-sm">+8 points</div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <div className="font-medium text-green-800">Projected Impact</div>
                  <div className="text-sm text-green-700 mt-2">
                    • Overall ESG Score: 71.3 → 79.8 (+8.5 points) • Industry Ranking: #3 → #2 • Investment Appeal:
                    Moderate → High
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showCustomizeDashboard && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`rounded-lg p-6 max-w-2xl w-full mx-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">⚙️ Customize Dashboard</h3>
                <button
                  onClick={() => setShowCustomizeDashboard(false)}
                  className={`text-2xl ${darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"}`}
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(dashboardWidgets).map(([key, enabled]) => (
                    <label key={key} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={enabled}
                        onChange={(e) => setDashboardWidgets({ ...dashboardWidgets, [key]: e.target.checked })}
                        className="rounded"
                      />
                      <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                    </label>
                  ))}
                </div>
                <div className={`p-4 rounded ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                  <div className="font-medium mb-2">Layout Options</div>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input type="radio" name="layout" value="grid" defaultChecked />
                      <span>Grid Layout</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="radio" name="layout" value="list" />
                      <span>List Layout</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showAISummary && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`rounded-lg p-6 max-w-4xl w-full mx-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">🤖 AI-Powered Company Summaries</h3>
                <button
                  onClick={() => setShowAISummary(false)}
                  className={`text-2xl ${darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"}`}
                >
                  ×
                </button>
              </div>
              <div className="space-y-6">
                {Object.entries(aiSummaries).map(([company, summary]) => (
                  <div
                    key={company}
                    className={`border rounded-lg p-4 ${darkMode ? "border-gray-600" : "border-gray-200"}`}
                  >
                    <h4 className="font-bold mb-3">{company}</h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <div className="font-medium text-green-600 mb-2">✅ Strengths</div>
                        <ul className={`text-sm space-y-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                          {summary.strengths.map((strength, i) => (
                            <li key={i}>• {strength}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="font-medium text-red-600 mb-2">⚠️ Areas for Improvement</div>
                        <ul className={`text-sm space-y-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                          {summary.weaknesses.map((weakness, i) => (
                            <li key={i}>• {weakness}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={`p-3 rounded ${darkMode ? "bg-blue-900/20" : "bg-blue-50"}`}>
                      <div className="font-medium text-blue-600 mb-1">🔮 AI Prediction</div>
                      <div className={`text-sm ${darkMode ? "text-blue-300" : "text-blue-700"}`}>
                        {summary.prediction}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {showInvestorForum && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`rounded-lg p-6 max-w-4xl w-full mx-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">💬 ESG Investor Forum</h3>
                <button
                  onClick={() => setShowInvestorForum(false)}
                  className={`text-2xl ${darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"}`}
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <div className={`border rounded-lg p-4 ${darkMode ? "border-gray-600" : "border-gray-200"}`}>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                      JD
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">John Doe • Portfolio Manager</div>
                      <div className={`text-sm mt-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Tesla's recent workplace safety issues are concerning. How are other investors factoring this
                        into their ESG scoring? The environmental benefits are clear, but social governance seems to be
                        deteriorating.
                      </div>
                      <div className={`text-xs mt-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        2 hours ago • 12 replies
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`border rounded-lg p-4 ${darkMode ? "border-gray-600" : "border-gray-200"}`}>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                      SM
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Sarah Miller • ESG Analyst</div>
                      <div className={`text-sm mt-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Microsoft's new AI ethics framework is impressive. They're setting industry standards that could
                        influence regulatory requirements. This could be a significant competitive advantage.
                      </div>
                      <div className={`text-xs mt-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        5 hours ago • 8 replies
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showShareReport && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`rounded-lg p-6 max-w-2xl w-full mx-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">📤 Share ESG Report</h3>
                <button
                  onClick={() => setShowShareReport(false)}
                  className={`text-2xl ${darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"}`}
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Companies</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked />
                      <span>Apple Inc.</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked />
                      <span>Microsoft Corporation</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" />
                      <span>Tesla Inc.</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Share Options</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    <button className="p-3 border rounded text-left hover:bg-gray-50">
                      <div className="font-medium">📧 Email Report</div>
                      <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Send via email</div>
                    </button>
                    <button className="p-3 border rounded text-left hover:bg-gray-50">
                      <div className="font-medium">🔗 Generate Link</div>
                      <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Shareable URL</div>
                    </button>
                    <button className="p-3 border rounded text-left hover:bg-gray-50">
                      <div className="font-medium">📱 Social Media</div>
                      <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>LinkedIn, Twitter</div>
                    </button>
                    <button className="p-3 border rounded text-left hover:bg-gray-50">
                      <div className="font-medium">📄 White-label PDF</div>
                      <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Premium feature</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showScope3Analysis && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`rounded-lg p-6 max-w-4xl w-full mx-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">📊 Scope 3 Emissions Analysis</h3>
                <button
                  onClick={() => setShowScope3Analysis(false)}
                  className={`text-2xl ${darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"}`}
                >
                  ×
                </button>
              </div>
              <div>
                {/* Placeholder for Scope 3 Analysis content */}
                <p>Detailed analysis of Scope 3 emissions for selected companies.</p>
              </div>
            </div>
          </div>
        )}

        {showSupplyChainRisk && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`rounded-lg p-6 max-w-4xl w-full mx-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">⚠️ Supply Chain Risk Assessment</h3>
                <button
                  onClick={() => setShowSupplyChainRisk(false)}
                  className={`text-2xl ${darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"}`}
                >
                  ×
                </button>
              </div>
              <div>
                {/* Placeholder for Supply Chain Risk content */}
                <p>Assessment of supply chain risks for selected companies.</p>
              </div>
            </div>
          </div>
        )}

        {showSustainabilityPlanning && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`rounded-lg p-6 max-w-4xl w-full mx-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">📋 Sustainability Planning Tools</h3>
                <button
                  onClick={() => setShowSustainabilityPlanning(false)}
                  className={`text-2xl ${darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"}`}
                >
                  ×
                </button>
              </div>
              <div>
                {/* Placeholder for Sustainability Planning content */}
                <p>Tools and resources for sustainability planning.</p>
              </div>
            </div>
          </div>
        )}

        {showGoalTracking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`rounded-lg p-6 max-w-4xl w-full mx-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">🏆 Sustainability Goal Tracking</h3>
                <button
                  onClick={() => setShowGoalTracking(false)}
                  className={`text-2xl ${darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"}`}
                >
                  ×
                </button>
              </div>
              <div>
                {/* Placeholder for Goal Tracking content */}
                <p>Tracking progress towards sustainability goals.</p>
              </div>
            </div>
          </div>
        )}

        {showLCATools && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`rounded-lg p-6 max-w-4xl w-full mx-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">🔄 Lifecycle Assessment Tools</h3>
                <button
                  onClick={() => setShowLCATools(false)}
                  className={`text-2xl ${darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"}`}
                >
                  ×
                </button>
              </div>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <h4 className="font-semibold mb-3 text-green-600">🌱 Environmental Impact Categories</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Carbon Footprint (Scope 1, 2, 3)</li>
                      <li>• Water Usage & Quality Impact</li>
                      <li>• Land Use & Biodiversity</li>
                      <li>• Waste Generation & Toxicity</li>
                      <li>• Resource Depletion</li>
                      <li>• Ozone Depletion Potential</li>
                    </ul>
                  </div>

                  <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <h4 className="font-semibold mb-3 text-blue-600">📊 Assessment Methods</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Cradle-to-Gate Analysis</li>
                      <li>• Cradle-to-Grave Analysis</li>
                      <li>• Gate-to-Gate Analysis</li>
                      <li>• Cradle-to-Cradle Analysis</li>
                      <li>• ISO 14040/14044 Compliance</li>
                      <li>• TRACI 2.1 Impact Methods</li>
                    </ul>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                  <h4 className="font-semibold mb-3 text-purple-600">🔧 Available Tools & Features</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong>Data Collection:</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Automated data import</li>
                        <li>• Supply chain mapping</li>
                        <li>• Material flow tracking</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Analysis & Modeling:</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Impact calculation engine</li>
                        <li>• Scenario modeling</li>
                        <li>• Uncertainty analysis</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Reporting:</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• ISO-compliant reports</li>
                        <li>• Interactive dashboards</li>
                        <li>• Third-party verification</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                  <div className="text-sm text-gray-600">
                    <strong>Database Coverage:</strong> 50,000+ materials • 200+ impact categories • Global supply
                    chains
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
                      Start LCA Assessment
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                      View Sample Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showMobileApp && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`rounded-lg p-6 max-w-4xl w-full mx-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">📱 ESGIntel Mobile App</h3>
                <button
                  onClick={() => setShowMobileApp(false)}
                  className={`text-2xl ${darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"}`}
                >
                  ×
                </button>
              </div>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">📊 Mobile Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Real-time ESG score monitoring</li>
                      <li>• Push notifications for score changes</li>
                      <li>• Offline data access</li>
                      <li>• Mobile-optimized dashboards</li>
                      <li>• Quick company search & analysis</li>
                      <li>• Photo-based sustainability reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">🔔 Smart Alerts</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• ESG score threshold alerts</li>
                      <li>• Regulatory compliance updates</li>
                      <li>• Supply chain risk notifications</li>
                      <li>• Sustainability goal reminders</li>
                      <li>• Market trend insights</li>
                      <li>• Portfolio performance updates</li>
                    </ul>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                  <h4 className="font-semibold mb-3">📲 Install ESGIntel App</h4>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className={`p-3 rounded border ${darkMode ? "border-gray-600" : "border-gray-300"}`}>
                      <h5 className="font-medium mb-2">📱 iPhone/iPad</h5>
                      <ol className="text-sm space-y-1">
                        <li>1. Open this site in Safari</li>
                        <li>2. Tap the Share button</li>
                        <li>3. Select "Add to Home Screen"</li>
                        <li>4. Tap "Add" to install</li>
                      </ol>
                    </div>

                    <div className={`p-3 rounded border ${darkMode ? "border-gray-600" : "border-gray-300"}`}>
                      <h5 className="font-medium mb-2">🤖 Android</h5>
                      <ol className="text-sm space-y-1">
                        <li>1. Open this site in Chrome</li>
                        <li>2. Tap the menu (⋮)</li>
                        <li>3. Select "Add to Home screen"</li>
                        <li>4. Tap "Add" to install</li>
                      </ol>
                    </div>
                  </div>

                  <div className="flex gap-3 mb-3">
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: "ESGIntel - AI-Powered ESG Analytics",
                            text: "Professional ESG analytics platform",
                            url: window.location.origin,
                          })
                        }
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
                    >
                      <span>📱</span> Install on iPhone
                    </button>
                    <button
                      onClick={() => {
                        const link = document.createElement("a")
                        link.href = window.location.origin
                        link.click()
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
                    >
                      <span>🤖</span> Install on Android
                    </button>
                  </div>

                  <div
                    className={`p-3 rounded ${darkMode ? "bg-gray-600" : "bg-yellow-50"} border-l-4 border-yellow-400`}
                  >
                    <p className="text-sm">
                      <strong>Native Apps Coming Q2 2025:</strong> Full App Store and Google Play releases with enhanced
                      offline capabilities and native integrations.
                    </p>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-green-50"}`}>
                  <h4 className="font-semibold mb-2">🌐 Mobile Web Access</h4>
                  <p className="text-sm mb-2">
                    Access your full ESGIntel dashboard on any mobile device through your browser:
                  </p>
                  <div className="flex items-center gap-2">
                    <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-xs">
                      {typeof window !== "undefined"
                        ? window.location.origin
                        : "https://esg-analyticsesg-analytics-platform-4p27zl5oa.vercel.app"}
                    </code>
                    <button
                      onClick={async () => {
                        try {
                          const url =
                            typeof window !== "undefined"
                              ? window.location.origin
                              : "https://esg-analyticsesg-analytics-platform-4p27zl5oa.vercel.app"
                          if (navigator.clipboard && window.isSecureContext) {
                            await navigator.clipboard.writeText(url)
                            // Temporary feedback
                            const button = event?.target as HTMLButtonElement
                            const originalText = button.textContent
                            button.textContent = "Copied!"
                            button.className = "text-green-600 hover:text-green-800 text-sm"
                            setTimeout(() => {
                              button.textContent = originalText
                              button.className = "text-blue-600 hover:text-blue-800 text-sm"
                            }, 2000)
                          } else {
                            // Fallback for older browsers
                            const textArea = document.createElement("textarea")
                            textArea.value = url
                            document.body.appendChild(textArea)
                            textArea.focus()
                            textArea.select()
                            document.execCommand("copy")
                            document.body.removeChild(textArea)
                            alert("Link copied to clipboard!")
                          }
                        } catch (err) {
                          console.error("Failed to copy: ", err)
                          alert(
                            "Failed to copy link. Please copy manually: " +
                              (typeof window !== "undefined"
                                ? window.location.origin
                                : "https://esg-analyticsesg-analytics-platform-4p27zl5oa.vercel.app"),
                          )
                        }
                      }}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Copy Link
                    </button>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-purple-50"}`}>
                  <h4 className="font-semibold mb-2">🔔 Get Notified</h4>
                  <p className="text-sm mb-3">Be the first to know when our native mobile apps launch:</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 border rounded text-sm"
                    />
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm">
                      Notify Me
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">Stay connected to your ESG analytics anywhere, anytime.</p>
                  <button
                    onClick={() => setShowMobileApp(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                  >
                    Got it
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
