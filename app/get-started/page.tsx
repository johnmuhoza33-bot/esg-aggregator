import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, CheckCircle } from 'lucide-react'
import Link from "next/link"

export default function GetStartedPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-green-100 text-green-800">🚀 Get Started</Badge>
        <h1 className="text-4xl font-bold mb-4">Start Using ESG Data Today</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Get your API key and start accessing real-time ESG data in under 5 minutes
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="text-center">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Create your free account instantly</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">No credit card required for 14-day trial</p>
            <Button className="w-full">Create Account</Button>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <CardTitle>Get API Key</CardTitle>
            <CardDescription>Receive your API key immediately</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Start with 10,000 free API calls</p>
            <Link href="/api-docs">
              <Button variant="outline" className="w-full bg-transparent">
                View API Docs
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <CardTitle>Start Building</CardTitle>
            <CardDescription>Make your first API call</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Get ESG data in seconds</p>
            <Link href="/dashboard">
              <Button className="w-full bg-green-600 hover:bg-green-700">Try Dashboard</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8">Join thousands of developers using our ESG API</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Link href="/api-docs">
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}// Updated Sun Aug 10 23:34:00 CDT 2025

