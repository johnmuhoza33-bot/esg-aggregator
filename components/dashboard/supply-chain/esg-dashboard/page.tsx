"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts"
import { Truck, Globe, AlertTriangle, Users, Leaf, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SupplyChainESGDashboard() {
  const [dashboardData, setDashboardData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedView, setSelectedView] = useState("overview")

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/supply-chain/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyId: "current-company", assessmentType: "comprehensive" }),
      })
      if (response.ok) {
        const data = await response.json()
        setDashboardData(data)
      } else {
        setDashboardData(mockDashboardData)
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
      setDashboardData(mockDashboardData)
    } finally {
      setLoading(false)
    }
  }

  const mockDashboardData = {
    summary: {
      totalSuppliers: 247,
      tier1Suppliers: 45,
      tier2Suppliers: 102,
      tier3Suppliers: 100,
      overallESGScore: 78.5,
      riskLevel: "Medium",
      complianceRate: 89.2,
      diversityScore: 72.1,
    },
    suppliersByRegion: [
      { region: "North America", count: 89, avgScore: 82.1 },
      { region: "Europe", count: 67, avgScore: 85.3 },
      { region: "Asia Pacific", count: 78, avgScore: 74.2 },
      { region: "Latin America", count: 13, avgScore: 69.8 },
    ],
    riskDistribution: [
      { name: "Low Risk", value: 156, color: "#22c55e" },
      { name: "Medium Risk", value: 67, color: "#eab308" },
      { name: "High Risk", value: 19, color: "#f97316" },
      { name: "Critical Risk", value: 5, color: "#ef4444" },
    ],
    esgPerformance: [
      { category: "Environmental", score: 76, benchmark: 68 },
      { category: "Social", score: 81, benchmark: 72 },
      { category: "Governance", score: 78, benchmark: 75 },
      { category: "Labor Rights", score: 83, benchmark: 70 },
      { category: "Ethics", score: 79, benchmark: 74 },
    ],
    carbonFootprint: [
      { month: "Jan", scope1: 1200, scope2: 800, scope3: 4500 },
      { month: "Feb", scope1: 1150, scope2: 780, scope3: 4300 },
      { month: "Mar", scope1: 1100, scope2: 750, scope3: 4100 },
      { month: "Apr", scope1: 1050, scope2: 720, scope3: 3900 },
      { month: "May", scope1: 1000, scope2: 700, scope3: 3700 },
      { month: "Jun", scope1: 950, scope2: 680, scope3: 3500 },
    ],
    topRisks: [
      {
        supplier: "ABC Manufacturing",
        risk: "Human Rights",
        severity: "High",
        location: "Southeast Asia",
        impact: "Reputational damage, regulatory compliance",
      },
      {
        supplier: "XYZ Components",
        risk: "Environmental Impact",
        severity: "Medium",
        location: "Eastern Europe",
        impact: "Carbon footprint, waste management",
      },
      {
        supplier: "Global Logistics Co",
        risk: "Labor Practices",
        severity: "Medium",
        location: "Latin America",
        impact: "Worker safety, fair wages",
      },
    ],
    diversityMetrics: {
      womenOwnedBusinesses: 23.4,
      minorityOwnedBusinesses: 18.7,
      smallBusinesses: 34.2,
      localSuppliers: 45.8,
    },
    certificationStatus: [
      { certification: "ISO 14001", suppliers: 89, percentage: 36.0 },
      { certification: "SA8000", suppliers: 67, percentage: 27.1 },
      { certification: "Fair Trade", suppliers: 34, percentage: 13.8 },
      { certification: "B Corp", suppliers: 12, percentage: 4.9 },
    ],
  }

  const radarChartConfig = {
    score: {
      label: "Your Score",
      color: "#3b82f6",
    },
    benchmark: {
      label: "Benchmark",
      color: "#ef4444",
    },
  }

  const pieChartConfig = {
    value: {
      label: "Suppliers",
      color: "#8884d8",
    },
  }

  const barChartConfig = {
    scope1: {
      label: "Scope 1",
      color: "#ef4444",
    },
    scope2: {
      label: "Scope 2",
      color: "#f97316",
    },
    scope3: {
      label: "Scope 3",
      color: "#eab308",
    },
  }

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Supply Chain ESG Dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  const getRiskColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-200 text-red-900"
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-orange-100 text-orange-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>
        <div className="flex justify-between items-center">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              <Truck className="h-3 w-3 mr-1" />
              Supply Chain ESG Dashboard
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Supply Chain ESG Performance</h1>
            <p className="text-gray-600 text-lg">Comprehensive supplier sustainability and risk monitoring</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={selectedView === "overview" ? "default" : "outline"}
              onClick={() => setSelectedView("overview")}
              size="sm"
            >
              Overview
            </Button>
            <Button
              variant={selectedView === "risks" ? "default" : "outline"}
              onClick={() => setSelectedView("risks")}
              size="sm"
            >
              Risks
            </Button>
            <Button
              variant={selectedView === "diversity" ? "default" : "outline"}
              onClick={() => setSelectedView("diversity")}
              size="sm"
            >
              Diversity
            </Button>
            <Button
              variant={selectedView === "carbon" ? "default" : "outline"}
              onClick={() => setSelectedView("carbon")}
              size="sm"
            >
              Carbon
            </Button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Suppliers</p>
                <p className="text-3xl font-bold">{dashboardData.summary.totalSuppliers}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Tier 1: {dashboardData.summary.tier1Suppliers} | Tier 2+:{" "}
                  {dashboardData.summary.tier2Suppliers + dashboardData.summary.tier3Suppliers}
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">ESG Score</p>
                <p className="text-3xl font-bold">{dashboardData.summary.overallESGScore}</p>
                <Progress value={dashboardData.summary.overallESGScore} className="mt-2" />
              </div>
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Risk Level</p>
                <p className="text-3xl font-bold">{dashboardData.summary.riskLevel}</p>
                <Badge className={getRiskColor(dashboardData.summary.riskLevel)} variant="secondary">
                  {dashboardData.summary.riskLevel} Risk
                </Badge>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Compliance Rate</p>
                <p className="text-3xl font-bold">{dashboardData.summary.complianceRate}%</p>
                <Progress value={dashboardData.summary.complianceRate} className="mt-2" />
              </div>
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* ESG Performance Radar */}
        <Card>
          <CardHeader>
            <CardTitle>ESG Performance vs Benchmark</CardTitle>
            <CardDescription>Multi-dimensional ESG assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer className="h-80" config={radarChartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={dashboardData.esgPerformance}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Risk Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Risk Distribution</CardTitle>
            <CardDescription>Supplier risk categorization</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer className="h-80" config={pieChartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dashboardData.riskDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {dashboardData.riskDistribution.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Carbon Footprint Trends */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Supply Chain Carbon Footprint</CardTitle>
          <CardDescription>Monthly emissions by scope (tons CO2e)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-80" config={barChartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dashboardData.carbonFootprint}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Top Risks */}
        <Card>
          <CardHeader>
            <CardTitle>Top Supply Chain Risks</CardTitle>
            <CardDescription>Critical risks requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.topRisks.map((risk: any, index: number) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{risk.supplier}</h4>
                    <Badge className={getRiskColor(risk.severity)}>{risk.severity}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Risk:</strong> {risk.risk}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Location:</strong> {risk.location}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Impact:</strong> {risk.impact}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Diversity Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Supplier Diversity</CardTitle>
            <CardDescription>Diversity and inclusion metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Women-Owned Businesses</span>
              <div className="flex items-center">
                <Progress value={dashboardData.diversityMetrics.womenOwnedBusinesses} className="w-20 mr-2" />
                <span className="text-sm font-bold">{dashboardData.diversityMetrics.womenOwnedBusinesses}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Minority-Owned Businesses</span>
              <div className="flex items-center">
                <Progress value={dashboardData.diversityMetrics.minorityOwnedBusinesses} className="w-20 mr-2" />
                <span className="text-sm font-bold">{dashboardData.diversityMetrics.minorityOwnedBusinesses}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Small Businesses</span>
              <div className="flex items-center">
                <Progress value={dashboardData.diversityMetrics.smallBusinesses} className="w-20 mr-2" />
                <span className="text-sm font-bold">{dashboardData.diversityMetrics.smallBusinesses}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Local Suppliers</span>
              <div className="flex items-center">
                <Progress value={dashboardData.diversityMetrics.localSuppliers} className="w-20 mr-2" />
                <span className="text-sm font-bold">{dashboardData.diversityMetrics.localSuppliers}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Link href="/dashboard/supply-chain/assess-supplier">
          <Button className="flex items-center">
            <Truck className="h-4 w-4 mr-2" />
            Assess New Supplier
          </Button>
        </Link>
        <Button variant="outline">Export Supply Chain Report</Button>
        <Button variant="outline">Schedule Risk Assessment</Button>
      </div>
    </div>
  )
}
