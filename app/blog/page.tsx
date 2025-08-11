import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Future of ESG Data: AI-Powered Analytics",
      excerpt: "How artificial intelligence is revolutionizing environmental, social, and governance data collection and analysis.",
      author: "Sarah Chen",
      date: "2024-01-15",
      category: "Technology",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "ESG Investing: Beyond the Hype", 
      excerpt: "A deep dive into the real impact of ESG investing and what investors need to know in 2024.",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      category: "Investment",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Corporate Transparency: The New Standard",
      excerpt: "Why companies are embracing transparency and how it's changing the business landscape.",
      author: "Emily Johnson", 
      date: "2024-01-10",
      category: "Corporate",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-purple-100 text-purple-800">📝 Blog</Badge>
        <h1 className="text-4xl font-bold mb-4">ESG Insights & Analysis</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Stay updated with the latest trends, insights, and developments in ESG analytics and sustainable investing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">{post.category}</Badge>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.readTime}</span>
                <Button variant="outline" size="sm">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-6">Want to stay updated with our latest insights?</p>
        <Link href="/signup">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Subscribe to Newsletter <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}