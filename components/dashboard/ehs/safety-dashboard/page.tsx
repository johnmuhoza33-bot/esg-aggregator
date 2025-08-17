"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts"
import { AlertTriangle, TrendingUp, TrendingDown, Shield, Users, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EHSSafetyDashboard() {
  const [dashboardData, setDashboardData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedTimeRange, setSelectedTimeRange] = useState("6m")

  useEffect(() => {
    fetchDashboardData()
  }, [selectedTimeRange])

  const fetchDashboardData = async () => {
    setLoading(true)
    try {
      // Simulate API call to fetch EHS dashboard data
      const response = await fetch(`/api/ehs/metrics?timeRange=${selectedTimeRange}`)
      if (response.ok) {
        const data = await response.json()
        setDashboardData(data)
      } else {
        // Mock data for demonstration
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
      totalIncidents: 23,
      incidentTrend: -15.2,
      safetyScore: 87.3,
      daysWithoutIncident: 12,
      employeesAffected: 8,
      complianceRate: 94.7,
    },
    incidentTrends: [
      { month: "Jan", incidents: 8, severity: 2.1 },
      { month: "Feb", incidents: 6, severity: 1.8 },
      { month: "Mar", incidents: 4, severity: 1.5 },
      { month: "Apr", incidents: 3, severity: 1.2 },
      { month: "May", incidents: 2, severity: 0.9 },
      { month: "Jun", incidents: 0, severity: 0 },
    ],
    incidentsByType: [
      { name: "Slip/Fall", value: 8, color: "#ef4444" },
      { name: "Equipment", value: 6, color: "#f97316" },
      { name: "Chemical", value: 4, color: "#eab308" },
      { name: "Ergonomic", value: 3, color: "#22c55e" },
      { name: "Other", value: 2, color: "#6366f1" },
    ],
    severityDistribution: [
      { severity: "Minor", count: 15, percentage: 65.2 },
      { severity: "Moderate", count: 6, percentage: 26.1 },
      { severity: "Major", count: 2, percentage: 8.7 },
      { severity: "Critical", count: 0, percentage: 0 },
    ],
    departmentPerformance: [
      { department: "Manufacturing", incidents: 12, score: 82.1 },
      { department: "Warehouse", incidents: 6, score: 88.5 },
      { department: "Office", incidents: 3, score: 95.2 },
      { department: "Maintenance", incidents: 2, score: 91.7 },
    ],
    recentIncidents: [
      {
        id: "INC-2024-023",
        title: "Minor slip in warehouse",
        severity: "Minor",
        date: "2024-01-15",
        status: "Resolved",
        department: "Warehouse",
      },
      {
        id: "INC-2024-022",
        title: "Equipment malfunction",
        severity: "Moderate",
        date: "2024-01-12",
        status: "Under Investigation",
        department: "Manufacturing",
      },
      {
        id: "INC-2024-021",
        title: "Chemical spill contained",
        severity: "Major",
        date: "2024-01-08",
        status: "Resolved",
        department: "Manufacturing",
      },
    ],
    safetyMetrics: {
      ltir: 1.2, // Lost Time Injury Rate
      trir: 2.8, // Total Recordable Injury Rate
      dart: 0.8, // Days Away, Restricted, or Transferred
      nearMisses: 45,
      safetyTrainingHours: 1247,
      complianceAudits: 8,
    },
  }

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading EHS Safety Dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-200 text-red-900"
      case "Major":
        return "bg-red-100 text-red-800"
      case "Moderate":
        return "bg-orange-100 text-orange-800"
      case "Minor":
        return "bg-yellow-100 text-yellow-800"
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
            <Badge className="mb-4 bg-red-100 text-red-800">
              <Shield className="h-3 w-3 mr-1" />
              EHS Safety Dashboard
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Environmental, Health & Safety</h1>
            <p className="text-gray-600 text-lg">Real-time safety performance monitoring and incident analysis</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={selectedTimeRange === "1m" ? "default" : "outline"}
              onClick={() => setSelectedTimeRange("1m")}
              size="sm"
            >
              1M
            </Button>
            <Button
              variant={selectedTimeRange === "3m" ? "default" : "outline"}
              onClick={() => setSelectedTimeRange("3m")}
              size="sm"
            >
              3M
            </Button>
            <Button
              variant={selectedTimeRange === "6m" ? "default" : "outline"}
              onClick={() => setSelectedTimeRange("6m")}
              size="sm"
            >
              6M
            </Button>
            <Button
              variant={selectedTimeRange === "1y" ? "default" : "outline"}
              onClick={() => setSelectedTimeRange("1y")}
              size="sm"
            >
              1Y
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
                <p className="text-sm font-medium text-gray-600">Total Incidents</p>
                <p className="text-3xl font-bold">{dashboardData.summary.totalIncidents}</p>
                <div className="flex items-center mt-2">
                  {dashboardData.summary.incidentTrend < 0 ? (
                    <TrendingDown className="h-4 w-4 text-green-600 mr-1" />
                  ) : (
                    <TrendingUp className="h-4 w-4 text-red-600 mr-1" />
                  )}
                  <span
                    className={`text-sm ${dashboardData.summary.incidentTrend < 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {Math.abs(dashboardData.summary.incidentTrend)}% vs last period
                  </span>
                </div>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Safety Score</p>
                <p className="text-3xl font-bold">{dashboardData.summary.safetyScore}</p>
                <Progress value={dashboardData.summary.safetyScore} className="mt-2" />
              </div>
              <Shield className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Days Without Incident</p>
                <p className="text-3xl font-bold">{dashboardData.summary.daysWithoutIncident}</p>
                <p className="text-sm text-gray-500 mt-2">Current streak</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
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
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Incident Trends Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Incident Trends</CardTitle>
            <CardDescription>Monthly incident count and average severity</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              className="h-80"
              config={{
                incidents: {
                  label: "Incidents",
                  color: "#3b82f6",
                },
                severity: {
                  label: "Severity",
                  color: "#ef4444",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dashboardData.incidentTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar yAxisId="left" dataKey="incidents" fill="var(--color-incidents)" />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="severity"
                    stroke="var(--color-severity)"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Incidents by Type */}
        <Card>
          <CardHeader>
            <CardTitle>Incidents by Type</CardTitle>
            <CardDescription>Distribution of incident categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              className="h-80"
              config={{
                value: {
                  label: "Incidents",
                  color: "#8884d8",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dashboardData.incidentsByType}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name} ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dashboardData.incidentsByType.map((entry: any, index: number) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Department Performance */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Department Performance</CardTitle>
            <CardDescription>Safety scores and incident counts by department</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              className="h-64"
              config={{
                incidents: {
                  label: "Incidents",
                  color: "#ef4444",
                },
                score: {
                  label: "Safety Score",
                  color: "#22c55e",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dashboardData.departmentPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar yAxisId="left" dataKey="incidents" fill="var(--color-incidents)" />
                  <Bar yAxisId="right" dataKey="score" fill="var(--color-score)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Safety Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Safety Metrics</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">LTIR</span>
              <span className="text-lg font-bold">{dashboardData.safetyMetrics.ltir}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">TRIR</span>
              <span className="text-lg font-bold">{dashboardData.safetyMetrics.trir}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">DART</span>
              <span className="text-lg font-bold">{dashboardData.safetyMetrics.dart}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Near Misses</span>
              <span className="text-lg font-bold">{dashboardData.safetyMetrics.nearMisses}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Training Hours</span>
              <span className="text-lg font-bold">{dashboardData.safetyMetrics.safetyTrainingHours}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Incidents */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Incidents</CardTitle>
          <CardDescription>Latest safety incidents and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dashboardData.recentIncidents.map((incident: any) => (
              <div key={incident.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Badge className={getSeverityColor(incident.severity)}>{incident.severity}</Badge>
                  <div>
                    <p className="font-medium">{incident.title}</p>
                    <p className="text-sm text-gray-600">
                      {incident.id} • {incident.department} • {incident.date}
                    </p>
                  </div>
                </div>
                <Badge variant={incident.status === "Resolved" ? "default" : "secondary"}>{incident.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        <Link href="/dashboard/ehs/report-incident">
          <Button className="flex items-center">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Report New Incident
          </Button>
        </Link>
        <Button variant="outline">Export Safety Report</Button>
        <Button variant="outline">Schedule Safety Audit</Button>
      </div>
    </div>
  )
}
