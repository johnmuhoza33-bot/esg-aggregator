import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BarChart3, Zap, Shield, TrendingUp, CheckCircle, Star, Users, Building2 } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            🚀 Real-time ESG Data • AI-Powered • Starting at $500/month
          </Badge>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Stop Overpaying for Outdated ESG Data
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get <strong>real-time ESG insights</strong> powered by AI for <strong>95% less</strong> than traditional providers. 
            While others charge $50K+ for quarterly updates, we deliver fresh data daily starting at $500/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/api-docs">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                View Live Demo
              </Button>
            </Link>
          </div>
          
          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Building2 className="h-4 w-4 mr-2" />
              <span>10,000+ Companies Analyzed</span>
            </div>
            <div className="flex items-center">
              <BarChart3 className="h-4 w-4 mr-2" />
              <span>500,000+ ESG Metrics</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-2" />
              <span>Real-time Updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="container mx-auto px-6 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">The $50 Billion ESG Data Problem</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Traditional ESG providers are stuck in the past, charging enterprise prices for outdated data
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problem Side */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-6">❌ Traditional ESG Providers</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold mr-3 mt-1">!</div>
                <div>
                  <p className="font-semibold">$25K - $500K annually</p>
                  <p className="text-gray-600">Pricing that excludes 90% of potential users</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold mr-3 mt-1">!</div>
                <div>
                  <p className="font-semibold">Quarterly updates</p>
                  <p className="text-gray-600">Data that's 3-6 months behind reality</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold mr-3 mt-1">!</div>
                <div>
                  <p className="font-semibold">Generic scoring</p>
                  <p className="text-gray-600">One-size-fits-all that misses industry nuances</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold mr-3 mt-1">!</div>
                <div>
                  <p className="font-semibold">Enterprise sales only</p>
                  <p className="text-gray-600">6-month sales cycles, complex contracts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-6">✅ Our AI-First Approach</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</div>
                <div>
                  <p className="font-semibold">$500 - $10K monthly</p>
                  <p className="text-gray-600">95% cost reduction with transparent pricing</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</div>
                <div>
                  <p className="font-semibold">Real-time updates</p>
                  <p className="text-gray-600">AI monitors 24/7 for instant ESG changes</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</div>
                <div>
                  <p className="font-semibold">Industry-specific insights</p>
                  <p className="text-gray-600">Customized metrics for your sector</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</div>
                <div>
                  <p className="font-semibold">Self-service API</p>
                  <p className="text-gray-600">Start in minutes, not months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Built for Modern ESG Analysis</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to make better ESG-informed decisions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle className="text-green-700">Real-Time Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-600 mb-4">AI continuously monitors company websites, SEC filings, and news for ESG updates</p>
              <ul className="text-sm space-y-1">
                <li>• 24/7 automated data collection</li>
                <li>• Instant alerts on ESG incidents</li>
                <li>• Weekly data refreshes</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle className="text-blue-700">AI-Powered Scoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-600 mb-4">Advanced algorithms analyze unstructured data to generate accurate ESG scores</p>
              <ul className="text-sm space-y-1">
                <li>• GPT-4 powered analysis</li>
                <li>• Confidence scoring</li>
                <li>• Industry benchmarking</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-purple-200 bg-purple-50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle className="text-purple-700">Compliance Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-600 mb-4">Built for SEC climate rules, EU taxonomy, and other emerging regulations</p>
              <ul className="text-sm space-y-1">
                <li>• Regulatory reporting templates</li>
                <li>• Audit trail documentation</li>
                <li>• Data provenance tracking</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-indigo-200 bg-indigo-50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-indigo-600 mb-4" />
              <CardTitle className="text-indigo-700">Developer-First API</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-600 mb-4">RESTful API with comprehensive documentation and code examples</p>
              <ul className="text-sm space-y-1">
                <li>• JSON responses</li>
                <li>• Rate limiting</li>
                <li>• Webhook support</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-orange-200 bg-orange-50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-10 w-10 text-orange-600 mb-4" />
              <CardTitle className="text-orange-700">Team Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-600 mb-4">Share insights across your organization with role-based access</p>
              <ul className="text-sm space-y-1">
                <li>• Multi-user accounts</li>
                <li>• Custom dashboards</li>
                <li>• Export capabilities</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-teal-200 bg-teal-50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Building2 className="h-10 w-10 text-teal-600 mb-4" />
              <CardTitle className="text-teal-700">Enterprise Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-teal-600 mb-4">Handle thousands of companies with white-label options</p>
              <ul className="text-sm space-y-1">
                <li>• Unlimited API calls</li>
                <li>• Custom branding</li>
                <li>• Dedicated support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="container mx-auto px-6 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Trusted by Forward-Thinking Firms</h2>
          <p className="text-gray-600 text-lg">Join investment managers already using AI-powered ESG insights</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Finally, ESG data that doesn't break our budget. The real-time updates have helped us catch ESG risks before they impact our portfolio."
              </p>
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-sm text-gray-500">Portfolio Manager, GreenTech Capital</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The API integration was seamless. We went from idea to production in 2 weeks. The data quality rivals providers costing 10x more."
              </p>
              <div className="font-semibold">Michael Rodriguez</div>
              <div className="text-sm text-gray-500">CTO, Sustainable Investments Inc</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Game-changer for our ESG research. The AI finds insights in sustainability reports that we would have missed manually."
              </p>
              <div className="font-semibold">Dr. Amanda Foster</div>
              <div className="text-sm text-gray-500">Head of ESG Research, Impact Advisors</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Transparent Pricing That Scales</h2>
          <p className="text-gray-600 text-lg">No enterprise sales calls. No hidden fees. Start today.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-xl">Starter</CardTitle>
              <CardDescription>Perfect for small investment firms</CardDescription>
              <div className="text-4xl font-bold">$500<span className="text-lg font-normal text-gray-500">/month</span></div>
              <div className="text-sm text-gray-500">vs $25K+ traditional providers</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Up to 100 companies</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Weekly ESG updates</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />10,000 API calls/month</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Email support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Basic reporting</li>
              </ul>
              <Link href="/api-docs">
                <Button className="w-full">Start Free Trial</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 relative scale-105">
            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600">
              Most Popular
            </Badge>
            <CardHeader>
              <CardTitle className="text-xl">Professional</CardTitle>
              <CardDescription>For asset managers and consultants</CardDescription>
              <div className="text-4xl font-bold">$2,000<span className="text-lg font-normal text-gray-500">/month</span></div>
              <div className="text-sm text-gray-500">vs $100K+ traditional providers</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Up to 1,000 companies</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Daily ESG updates</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />100,000 API calls/month</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Priority support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom reports</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Webhook alerts</li>
              </ul>
              <Link href="/api-docs">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-xl">Enterprise</CardTitle>
              <CardDescription>For large institutions</CardDescription>
              <div className="text-4xl font-bold">$10,000<span className="text-lg font-normal text-gray-500">/month</span></div>
              <div className="text-sm text-gray-500">vs $500K+ traditional providers</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Unlimited companies</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Real-time updates</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Unlimited API calls</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Dedicated support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />White-label options</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom integrations</li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">All plans include 14-day free trial • No setup fees • Cancel anytime</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg mx-6">
        <h2 className="text-5xl font-bold mb-6">Ready to Transform Your ESG Analysis?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Join the growing number of investment firms using AI-powered ESG insights to make better decisions faster
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/api-docs">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              View Live Demo
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 text-sm opacity-75">
          <p>🚀 Setup in minutes • 📊 10,000+ companies ready • 🤖 AI-powered insights</p>
        </div>
      </section>
    </div>
  )
}
