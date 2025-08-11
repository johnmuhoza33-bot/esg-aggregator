import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle } from 'lucide-react'
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
            <CardTitle>1. Sign Up Free</CardTitle>
            <CardDescription>Create your account in 30 seconds</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/signup">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Create Free Account</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle>2. Get API Key</CardTitle>
            <CardDescription>Receive your key immediately</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/api-docs">
              <Button variant="outline" className="w-full">View API Docs</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle>3. Start Building</CardTitle>
            <CardDescription>Make your first API call</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard">
              <Button className="w-full">Try Dashboard</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Link href="/signup">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}