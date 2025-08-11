import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function AddCompanyPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>
        
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-green-100 text-green-800">
            <Building2 className="h-3 w-3 mr-1" />
            Add Company
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Add New Company</h1>
          <p className="text-gray-600 text-lg">Add a company to start tracking ESG performance</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
            <CardDescription>Feature coming soon - add companies to your portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">Company addition feature is being developed.</p>
              <Link href="/dashboard">
                <Button>Return to Dashboard</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}