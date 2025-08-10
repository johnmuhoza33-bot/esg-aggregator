'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Building2, Globe, Hash, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AddCompany() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    ticker: '',
    sector: '',
    industry: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.website) {
      alert('Company name and website are required')
      return
    }

    try {
      setLoading(true)
      
      const response = await fetch('/api/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        const company = await response.json()
        alert(`✅ Successfully added ${company.name}!`)
        router.push('/dashboard')
      } else {
        const error = await response.json()
        alert(`❌ Failed to add company: ${error.error}`)
      }
    } catch (error) {
      alert(`❌ Error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <div className="mb-6">
        <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold">Add New Company</h1>
        <p className="text-gray-600 mt-2">Add a company to start collecting ESG data</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Building2 className="h-5 w-5 mr-2" />
            Company Information
          </CardTitle>
          <CardDescription>
            Enter the basic information about the company you want to analyze
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center">
                <Building2 className="h-4 w-4 mr-2" />
                Company Name *
              </Label>
              <Input
                id="name"
                placeholder="e.g., Apple Inc."
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                Website *
              </Label>
              <Input
                id="website"
                type="url"
                placeholder="e.g., https://apple.com"
                value={formData.website}
                onChange={(e) => handleChange('website', e.target.value)}
                required
              />
              <p className="text-sm text-gray-500">
                We'll use this to find sustainability and ESG information
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ticker" className="flex items-center">
                  <Hash className="h-4 w-4 mr-2" />
                  Stock Ticker
                </Label>
                <Input
                  id="ticker"
                  placeholder="e.g., AAPL"
                  value={formData.ticker}
                  onChange={(e) => handleChange('ticker', e.target.value.toUpperCase())}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sector" className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Sector
                </Label>
                <Input
                  id="sector"
                  placeholder="e.g., Technology"
                  value={formData.sector}
                  onChange={(e) => handleChange('sector', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input
                id="industry"
                placeholder="e.g., Consumer Electronics"
                value={formData.industry}
                onChange={(e) => handleChange('industry', e.target.value)}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" disabled={loading} className="flex-1">
                {loading ? 'Adding Company...' : 'Add Company'}
              </Button>
              <Link href="/dashboard">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">What happens next?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</div>
              <div>
                <p className="font-medium">Company Added</p>
                <p className="text-gray-600">The company will be added to your dashboard</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</div>
              <div>
                <p className="font-medium">Click "Analyze"</p>
                <p className="text-gray-600">Use the Analyze button to start collecting ESG data</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</div>
              <div>
                <p className="font-medium">AI Analysis</p>
                <p className="text-gray-600">Our AI will scrape and analyze ESG data from their website</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
