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
import { Truck, ArrowLeft, Building, Globe, Award } from "lucide-react"
import Link from "next/link"

export default function AssessSupplierPage() {
  const [formData, setFormData] = useState({
    name: "",
    tier: "1",
    country: "",
    region: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    annualRevenue: "",
    employeeCount: "",
    certifications: [] as string[],
    esgPolicies: false,
    laborStandards: false,
    environmentalManagement: false,
    ethicsCompliance: false,
    riskAreas: [] as string[],
    sustainabilityInitiatives: "",
    diversityPrograms: "",
    carbonReduction: "",
    wasteManagement: "",
    communityEngagement: "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/supply-chain/assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyId: "current-company", // This would come from user context
          assessmentType: "supplier",
          supplierData: formData,
        }),
      })

      if (response.ok) {
        alert("Supplier assessment completed successfully!")
        // Reset form or redirect
      } else {
        throw new Error("Failed to assess supplier")
      }
    } catch (error) {
      console.error("Error assessing supplier:", error)
      alert("Failed to assess supplier. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCertificationChange = (certification: string, checked: boolean) => {
    const updatedCertifications = checked
      ? [...formData.certifications, certification]
      : formData.certifications.filter((c) => c !== certification)
    handleChange("certifications", updatedCertifications)
  }

  const handleRiskAreaChange = (riskArea: string, checked: boolean) => {
    const updatedRiskAreas = checked
      ? [...formData.riskAreas, riskArea]
      : formData.riskAreas.filter((r) => r !== riskArea)
    handleChange("riskAreas", updatedRiskAreas)
  }

  const certificationOptions = [
    "ISO 14001 (Environmental)",
    "ISO 45001 (Occupational Health & Safety)",
    "ISO 9001 (Quality Management)",
    "SA8000 (Social Accountability)",
    "OHSAS 18001",
    "Fair Trade Certified",
    "B Corp Certification",
    "LEED Certification",
  ]

  const riskAreaOptions = [
    "Human Rights",
    "Labor Practices",
    "Environmental Impact",
    "Corruption & Ethics",
    "Data Security",
    "Supply Chain Disruption",
    "Regulatory Compliance",
    "Financial Stability",
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
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              <Truck className="h-3 w-3 mr-1" />
              Supplier Assessment
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Assess Supplier ESG Performance</h1>
            <p className="text-gray-600 text-lg">
              Comprehensive evaluation of supplier sustainability and risk factors
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                Supplier Information
              </CardTitle>
              <CardDescription>Basic details about the supplier</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Supplier Name *</Label>
                  <Input
                    id="name"
                    placeholder="ABC Manufacturing Co."
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tier">Supplier Tier *</Label>
                  <Select value={formData.tier} onValueChange={(value) => handleChange("tier", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Tier 1 (Direct)</SelectItem>
                      <SelectItem value="2">Tier 2 (Sub-supplier)</SelectItem>
                      <SelectItem value="3">Tier 3+ (Extended)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    placeholder="United States"
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region">Region</Label>
                  <Input
                    id="region"
                    placeholder="North America"
                    value={formData.region}
                    onChange={(e) => handleChange("region", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Contact Person</Label>
                  <Input
                    id="contactPerson"
                    placeholder="John Smith"
                    value={formData.contactPerson}
                    onChange={(e) => handleChange("contactPerson", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@supplier.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Profile */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Business Profile
              </CardTitle>
              <CardDescription>Company size and business information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select value={formData.businessType} onValueChange={(value) => handleChange("businessType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturer">Manufacturer</SelectItem>
                      <SelectItem value="distributor">Distributor</SelectItem>
                      <SelectItem value="service-provider">Service Provider</SelectItem>
                      <SelectItem value="raw-materials">Raw Materials</SelectItem>
                      <SelectItem value="logistics">Logistics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="annualRevenue">Annual Revenue (USD)</Label>
                  <Input
                    id="annualRevenue"
                    placeholder="50000000"
                    value={formData.annualRevenue}
                    onChange={(e) => handleChange("annualRevenue", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employeeCount">Employee Count</Label>
                  <Input
                    id="employeeCount"
                    placeholder="500"
                    value={formData.employeeCount}
                    onChange={(e) => handleChange("employeeCount", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  placeholder="https://www.supplier.com"
                  value={formData.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* ESG Compliance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                ESG Compliance & Certifications
              </CardTitle>
              <CardDescription>Sustainability policies and certifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">ESG Policies (Check all that apply)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="esgPolicies"
                      checked={formData.esgPolicies}
                      onCheckedChange={(checked) => handleChange("esgPolicies", checked as boolean)}
                    />
                    <Label htmlFor="esgPolicies">Formal ESG policies in place</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="laborStandards"
                      checked={formData.laborStandards}
                      onCheckedChange={(checked) => handleChange("laborStandards", checked as boolean)}
                    />
                    <Label htmlFor="laborStandards">Labor standards compliance</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="environmentalManagement"
                      checked={formData.environmentalManagement}
                      onCheckedChange={(checked) => handleChange("environmentalManagement", checked as boolean)}
                    />
                    <Label htmlFor="environmentalManagement">Environmental management system</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ethicsCompliance"
                      checked={formData.ethicsCompliance}
                      onCheckedChange={(checked) => handleChange("ethicsCompliance", checked as boolean)}
                    />
                    <Label htmlFor="ethicsCompliance">Ethics & compliance program</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Certifications</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {certificationOptions.map((cert) => (
                    <div key={cert} className="flex items-center space-x-2">
                      <Checkbox
                        id={cert}
                        checked={formData.certifications.includes(cert)}
                        onCheckedChange={(checked) => handleCertificationChange(cert, checked as boolean)}
                      />
                      <Label htmlFor={cert} className="text-sm">
                        {cert}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Risk Areas</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {riskAreaOptions.map((risk) => (
                    <div key={risk} className="flex items-center space-x-2">
                      <Checkbox
                        id={risk}
                        checked={formData.riskAreas.includes(risk)}
                        onCheckedChange={(checked) => handleRiskAreaChange(risk, checked as boolean)}
                      />
                      <Label htmlFor={risk} className="text-sm">
                        {risk}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sustainability Initiatives */}
          <Card>
            <CardHeader>
              <CardTitle>Sustainability Initiatives</CardTitle>
              <CardDescription>Detailed information about sustainability programs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="sustainabilityInitiatives">Sustainability Initiatives</Label>
                <Textarea
                  id="sustainabilityInitiatives"
                  placeholder="Describe current sustainability programs and initiatives..."
                  value={formData.sustainabilityInitiatives}
                  onChange={(e) => handleChange("sustainabilityInitiatives", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="diversityPrograms">Diversity & Inclusion Programs</Label>
                <Textarea
                  id="diversityPrograms"
                  placeholder="Describe diversity and inclusion initiatives..."
                  value={formData.diversityPrograms}
                  onChange={(e) => handleChange("diversityPrograms", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="carbonReduction">Carbon Reduction Efforts</Label>
                <Textarea
                  id="carbonReduction"
                  placeholder="Describe carbon reduction targets and achievements..."
                  value={formData.carbonReduction}
                  onChange={(e) => handleChange("carbonReduction", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="wasteManagement">Waste Management Practices</Label>
                <Textarea
                  id="wasteManagement"
                  placeholder="Describe waste reduction and recycling programs..."
                  value={formData.wasteManagement}
                  onChange={(e) => handleChange("wasteManagement", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="communityEngagement">Community Engagement</Label>
                <Textarea
                  id="communityEngagement"
                  placeholder="Describe community involvement and social impact programs..."
                  value={formData.communityEngagement}
                  onChange={(e) => handleChange("communityEngagement", e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? "Assessing Supplier..." : "Complete Supplier Assessment"}
              <Truck className="ml-2 h-4 w-4" />
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
