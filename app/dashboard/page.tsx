"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Building2, TrendingUp, AlertTriangle, CheckCircle, Plus } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

interface Company {
  id: string
  name: string
  ticker?: string
  sector?: string
  esgScore?: number
  lastAnalyzed?: string
}

interface DashboardStats {
  totalCompanies: number
  averageESGScore: number
  companiesAnalyzed: number
  pendingAnalyses: number
}

export default function Dashboard() {
  const [companies, setCompanies] = useState<Company[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    totalCompanies: 0,
    averageESGScore: 0,
    companiesAnalyzed: 0,
    pendingAnalyses: 0,
  })
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("/api/companies")
      const data = await response.json()

      // --- START DEBUGGING CODE ---
      console.log("API Response Data (full object):", data)
      console.log("API Response Data (companies property):", data.companies)

      if (Array.isArray(data.companies)) {
        setCompanies(data.companies)
      } else {
        console.error("API response data.companies is NOT an array. Received:", data.companies)
        setCompanies([]) // Fallback to empty array if not an array
      }
      // --- END DEBUGGING CODE ---

      // Calculate stats
      const totalCompanies = data.companies?.length || 0
      const companiesWithESG = data.companies?.filter((c: Company) => c.esgScore) || []
      const averageESGScore =
        companiesWithESG.length > 0
          ? companiesWithESG.reduce((sum: number, c: Company) => sum + (c.esgScore || 0), 0) / companiesWithESG.length
          : 0

      setStats({
        totalCompanies,
        averageESGScore: Math.round(averageESGScore),
        companiesAnalyzed: companiesWithESG.length,
        pendingAnalyses: totalCompanies - companiesWithESG.length,
      })
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
      setCompanies([]) // Ensure companies is an array even on error
    } finally {
      setLoading(false)
    }
  }

  const getESGScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getESGScoreBadge = (score: number) => {
    if (score >= 80) return "bg-green-100 text-green-800"
    if (score >= 60) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  const lowerCaseSearchTerm = searchTerm.toLowerCase()

  // --- START DEBUGGING CODE ---
  console.log("Value of 'companies' state before filter:", companies)
  // --- END DEBUGGING CODE ---

  const filteredCompanies = companies.filter((company) => {
    // --- START DEBUGGING CODE ---
    console.log("Attempting to filter company:", company)
    // --- END DEBUGGING CODE ---
    return (
      company.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      (company.ticker && company.ticker.toLowerCase().includes(lowerCaseSearchTerm)) ||
      (company.sector && company.sector.toLowerCase().includes(lowerCaseSearchTerm))
    )
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">ESG Dashboard</h1>
          <p className="text-gray-600 mt-2">Monitor and analyze ESG performance across your portfolio</p>
        </div>
        <Link href="/dashboard/add-company">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Company
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Companies</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCompanies}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average ESG Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageESGScore}</div>
            <Progress value={stats.averageESGScore} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Analyzed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.companiesAnalyzed}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingAnalyses}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="companies" className="space-y-4">
        <TabsList>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="companies" className="space-y-4">
          <div className="mb-4">
            <Input
              placeholder="Search companies by name, ticker, or sector..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Company Portfolio</CardTitle>
              <CardDescription>Overview of all companies in your ESG monitoring portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredCompanies.length === 0 ? (
                  <div className="text-center py-8">
                    <Building2 className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No companies found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {searchTerm
                        ? "No companies match your search criteria."
                        : "Get started by adding your first company."}
                    </p>
                    <div className="mt-6">
                      <Link href="/dashboard/add-company">
                        <Button>
                          <Plus className="w-4 h-4 mr-2" />
                          Add Company
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  filteredCompanies.map((company) => (
                    <div key={company.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-medium">{company.name}</h3>
                          <p className="text-sm text-gray-500">
                            {company.ticker} • {company.sector}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {company.esgScore ? (
                          <Badge className={getESGScoreBadge(company.esgScore)}>ESG: {company.esgScore}</Badge>
                        ) : (
                          <Badge variant="outline">Not Analyzed</Badge>
                        )}
                        <Link href={`/dashboard/companies/${company.id}`}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ESG Score Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={companies.filter((c) => c.esgScore)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="esgScore" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sector Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from(new Set(companies.map((c) => c.sector))).map((sector) => {
                    const sectorCompanies = companies.filter((c) => c.sector === sector)
                    const avgScore =
                      sectorCompanies.filter((c) => c.esgScore).reduce((sum, c) => sum + (c.esgScore || 0), 0) /
                      sectorCompanies.filter((c) => c.esgScore).length

                    return (
                      <div key={sector} className="flex items-center justify-between">
                        <span className="font-medium">{sector}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{sectorCompanies.length} companies</span>
                          {avgScore && <Badge className={getESGScoreBadge(avgScore)}>{Math.round(avgScore)}</Badge>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
