"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ReportIncidentPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    severity: "",
    location: "",
    reportedBy: "",
    incidentDate: "",
    incidentTime: "",
    injuryOccurred: false,
    environmentalImpact: false,
    equipmentDamage: false,
    witnesses: "",
    immediateActions: "",
    rootCause: "",
    preventiveMeasures: "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/ehs/incidents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "report",
          ...formData,
          reportedAt: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        alert("Incident reported successfully!")
        // Reset form
        setFormData({
          title: "",
          description: "",
          severity: "",
          location: "",
          reportedBy: "",
          incidentDate: "",
          incidentTime: "",
          injuryOccurred: false,
          environmentalImpact: false,
          equipmentDamage: false,
          witnesses: "",
          immediateActions: "",
          rootCause: "",
          preventiveMeasures: "",
        })
      } else {
        throw new Error("Failed to report incident")
      }
    } catch (error) {
      console.error("Error reporting incident:", error)
      alert("Failed to report incident. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const severityLevels = [
    { value: "Minor", label: "Minor", color: "bg-yellow-100 text-yellow-800" },
    { value: "Moderate", label: "Moderate", color: "bg-orange-100 text-orange-800" },
    { value: "Major", label: "Major", color: "bg-red-100 text-red-800" },
    { value: "Critical", label: "Critical", color: "bg-red-200 text-red-900" },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <div className="text-center">
            <Badge className="mb-4 bg-red-100 text-red-800">
              <AlertTriangle className="h-3 w-3 mr-1" />
              EHS Incident Report
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Report Safety Incident</h1>
            <p className="text-gray-600 text-lg">Document workplace incidents for analysis and prevention</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Incident Details
              </CardTitle>
              <CardDescription>Provide basic information about the incident</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Incident Title *</Label>
                <Input
                  id="title"
                  placeholder="Brief description of the incident"
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a detailed description of what happened..."
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  rows={4}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="severity">Severity Level *</Label>
                  <Select value={formData.severity} onValueChange={(value) => handleChange("severity", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      {severityLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          <div className="flex items-center">
                            <Badge className={`mr-2 ${level.color}`}>{level.label}</Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    placeholder="Building, floor, room, or area"
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reportedBy">Reported By *</Label>
                  <Input
                    id="reportedBy"
                    placeholder="Your name"
                    value={formData.reportedBy}
                    onChange={(e) => handleChange("reportedBy", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="incidentDate">Incident Date *</Label>
                  <Input
                    id="incidentDate"
                    type="date"
                    value={formData.incidentDate}
                    onChange={(e) => handleChange("incidentDate", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="incidentTime">Incident Time</Label>
                  <Input
                    id="incidentTime"
                    type="time"
                    value={formData.incidentTime}
                    onChange={(e) => handleChange("incidentTime", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact Assessment */}
          <Card>
            <CardHeader>
              <CardTitle>Impact Assessment</CardTitle>
              <CardDescription>Check all that apply to this incident</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="injuryOccurred"
                  checked={formData.injuryOccurred}
                  onCheckedChange={(checked) => handleChange("injuryOccurred", checked as boolean)}
                />
                <Label htmlFor="injuryOccurred">Personal injury occurred</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="environmentalImpact"
                  checked={formData.environmentalImpact}
                  onCheckedChange={(checked) => handleChange("environmentalImpact", checked as boolean)}
                />
                <Label htmlFor="environmentalImpact">Environmental impact</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="equipmentDamage"
                  checked={formData.equipmentDamage}
                  onCheckedChange={(checked) => handleChange("equipmentDamage", checked as boolean)}
                />
                <Label htmlFor="equipmentDamage">Equipment or property damage</Label>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>Provide additional context and analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="witnesses">Witnesses</Label>
                <Textarea
                  id="witnesses"
                  placeholder="Names and contact information of witnesses..."
                  value={formData.witnesses}
                  onChange={(e) => handleChange("witnesses", e.target.value)}
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="immediateActions">Immediate Actions Taken</Label>
                <Textarea
                  id="immediateActions"
                  placeholder="What immediate actions were taken to address the incident..."
                  value={formData.immediateActions}
                  onChange={(e) => handleChange("immediateActions", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rootCause">Root Cause Analysis</Label>
                <Textarea
                  id="rootCause"
                  placeholder="What do you believe caused this incident..."
                  value={formData.rootCause}
                  onChange={(e) => handleChange("rootCause", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preventiveMeasures">Recommended Preventive Measures</Label>
                <Textarea
                  id="preventiveMeasures"
                  placeholder="What measures could prevent similar incidents in the future..."
                  value={formData.preventiveMeasures}
                  onChange={(e) => handleChange("preventiveMeasures", e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? "Reporting Incident..." : "Submit Incident Report"}
              <AlertTriangle className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/dashboard">
              <Button type="button" variant="outline" className="px-8 bg-transparent">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
