cat > app/blog/page.tsx << 'EOF'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-purple-100 text-purple-800">📝 Blog</Badge>
        <h1 className="text-4xl font-bold mb-4">ESG Insights & Analysis</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Stay updated with the latest trends in ESG analytics.
        </p>
      </div>
      <div className="text-center">
        <p className="text-gray-600 mb-6">Blog posts coming soon!</p>
        <Link href="/signup">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
EOF