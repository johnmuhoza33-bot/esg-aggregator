"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, TrendingUp, AlertTriangle, CheckCircle, Plus } from "lucide-react"
import Link from "next/link"

interface Company {
  id: string
  name: string
  ticker: string
  sector: string
  esgScore: number
  lastAnalyzed: string
}

interface DashboardStats {
  totalCompanies: number
  averageEsgScore: number
  companiesAbove80: number
  companiesBelow60: number
}

export default function Dashboard() {
  const [companies, setCompanies] = useState<Company[]>([])
  const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch("/api/companies")

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || "Failed to fetch companies")
        }

        const data = await response.json()
        console.log("API Response:", data)

        if (!data || !Array.isArray(data.companies)) {
          console.error("Expected data.companies to be an array, but got:", data.companies)
          setError("Invalid data format received from API")
          setCompanies([])
          return
        }

        setCompanies(data.companies)
        setDashboardStats({
          totalCompanies: data.companies.length,
          averageEsgScore:
            data.companies.reduce((sum: number, c: Company) => sum + (c.esgScore || 0), 0) / data.companies.length || 0,
          companiesAbove80: data.companies.filter((c: Company) => (c.esgScore || 0) >= 80).length,
          companiesBelow60: data.companies.filter((c: Company) => (c.esgScore || 0) < 60).length,
        })
      } catch (err) {
        console.error("Error fetching companies:", err)
        setError((err as Error).message || "An unexpected error occurred.")
        setCompanies([])
      } finally {
        setLoading(false)
      }
    }

    fetchCompanies()
  }, [])

  const formatScore = (score: number): string => {
    return score.toFixed(1)
  }

  const getScoreBadgeColor = (score: number): string => {
    if (score >= 80) return "bg-green-100 text-green-800"
    if (score >= 60) return "bg-yellow-100 text-yellow-800"
    if (score >= 40) return "bg-orange-100 text-orange-800"
    return "bg-red-100 text-red-800"
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
          <p className="text-lg text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md p-6 text-center">
          <CardHeader>
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-2xl font-bold text-red-600">Error Loading Data</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 mb-4">{error}</CardDescription>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">ESG Dashboard</h1>
          <p className="text-gray-600">Monitor and analyze ESG performance</p>
        </div>
        <Link href="/dashboard/add-company">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Company
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Companies</CardTitle>
            <Building2 className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats?.totalCompanies || 0}</div>
            <p className="text-xs text-gray-500">Companies monitored</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average ESG Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatScore(dashboardStats?.averageEsgScore || 0)}</div>
            <p className="text-xs text-gray-500">Overall portfolio performance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">High Performers</CardTitle>
            <CheckCircle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats?.companiesAbove80 || 0}</div>
            <p className="text-xs text-gray-500">Companies with ESG score ≥ 80</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Needs Attention</CardTitle>
            <AlertTriangle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats?.companiesBelow60 || 0}</div>
            <p className="text-xs text-gray-500">Companies with ESG score &lt; 60</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Companies</CardTitle>
          <CardDescription>Your monitored companies and their ESG performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {companies.length > 0 ? (
              companies.map((company) => (
                <div key={company.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="font-medium">{company.name}</div>
                      <div className="text-sm text-gray-500">
                        {company.ticker && `${company.ticker} • `}
                        {company.sector || "Unknown Sector"}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge className={getScoreBadgeColor(company.esgScore || 0)}>
                      {formatScore(company.esgScore || 0)}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Analyze
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">No companies found.</p>
                <Link href="/dashboard/add-company">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Company
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
