import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function ApiDocsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-blue-100 text-blue-800">API Documentation</Badge>
        <h1 className="text-4xl font-bold mb-4">ESG Data API</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Access real-time ESG data for 10,000+ companies through our simple REST API.
        </p>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="h-5 w-5 mr-2" />
            Quick Start
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}