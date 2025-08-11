cat > app/enterprise/page.tsx << 'EOF'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function EnterprisePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-purple-100 text-purple-800">🏢 Enterprise</Badge>
        <h1 className="text-4xl font-bold mb-4">Enterprise ESG Analytics</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Scale your ESG analysis with enterprise-grade solutions.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto text-center">
        <CardHeader>
          <CardTitle>Custom Enterprise Solutions</CardTitle>
          <CardDescription>Built for large organizations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>• Unlimited companies and API calls</p>
            <p>• Dedicated support team</p>
            <p>• Custom integrations</p>
            <p>• Enterprise security</p>
          </div>
          <div className="mt-6">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
EOF