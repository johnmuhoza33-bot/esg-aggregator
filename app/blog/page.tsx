import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const BLOG_POSTS = [
  {
    id: 'sec-climate-rules-2024',
    title: 'SEC Climate Disclosure Rules: What Asset Managers Need to Know',
    excerpt: 'The new SEC climate disclosure requirements are reshaping how investment firms approach ESG data. Here\'s your complete guide to compliance.',
    author: 'ESG Analytics Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Regulation',
    featured: true
  },
  {
    id: 'ai-esg-analysis-2024',
    title: 'How AI is Revolutionizing ESG Data Analysis',
    excerpt: 'Traditional ESG data providers are being disrupted by AI. Learn how machine learning is making ESG analysis faster, cheaper, and more accurate.',
    author: 'Dr. Sarah Chen',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Technology'
  },
  {
    id: 'esg-scoring-methodology',
    title: 'Beyond Traditional ESG Scores: A New Methodology',
    excerpt: 'Why generic ESG scores fail and how industry-specific, AI-powered scoring provides better investment insights.',
    author: 'Michael Rodriguez',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Methodology'
  },
  {
    id: 'real-time-esg-monitoring',
    title: 'The Case for Real-Time ESG Monitoring',
    excerpt: 'Quarterly ESG updates are too slow for modern markets. Here\'s why real-time ESG monitoring is becoming essential for risk management.',
    author: 'Amanda Foster',
    date: '2024-01-01',
    readTime: '7 min read',
    category: 'Risk Management'
  }
]

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find(post => post.featured)
  const regularPosts = BLOG_POSTS.filter(post => !post.featured)

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">ESG Insights & Analysis</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Stay ahead of ESG trends with insights from our team of experts and AI-powered analysis
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <Card className="mb-12 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-blue-600">Featured</Badge>
              <Badge variant="outline">{featuredPost.category}</Badge>
            </div>
            <CardTitle className="text-2xl mb-2">{featuredPost.title}</CardTitle>
            <CardDescription className="text-base">{featuredPost.excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{featuredPost.author}</span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(featuredPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {featuredPost.readTime}
                </div>
              </div>
              <Link href={`/blog/${featuredPost.id}`}>
                <div className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Regular Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{post.category}</Badge>
              </div>
              <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <div className="flex items-center mb-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <div className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Read <ArrowRight className="h-3 w-3 ml-1" />
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <Card className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Stay Updated on ESG Trends</CardTitle>
          <CardDescription className="text-base">
            Get weekly insights on ESG regulations, market trends, and AI innovations delivered to your inbox
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Join 5,000+ ESG professionals. Unsubscribe anytime.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
