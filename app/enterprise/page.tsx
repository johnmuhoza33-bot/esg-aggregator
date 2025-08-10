import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Building2, Zap, Shield, Globe, Users, BarChart3, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-purple-100 text-purple-800">
            🏢 Enterprise Solutions
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Enterprise ESG Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            White-label ESG solutions, unlimited scale, and dedicated support for large institutions managing billions in assets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
              Schedule Enterprise Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="container mx-auto px-6 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Built for Enterprise Scale</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Everything you need to deliver ESG insights to thousands of users across your organization
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <Building2 className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle className="text-purple-700">White-Label Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-600 mb-4">Complete customization with your branding, domain, and user experience</p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom branding & logos</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Your domain & SSL</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Branded API documentation</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom color schemes</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <Zap className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle className="text-blue-700">Unlimited Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-600 mb-4">Handle millions of API calls and thousands of concurrent users</p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Unlimited API calls</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Auto-scaling infrastructure</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />99.9% uptime SLA</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Global CDN delivery</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <Shield className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle className="text-green-700">Enterprise Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-600 mb-4">Bank-grade security with compliance certifications</p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />SOC 2 Type II certified</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />GDPR compliant</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />End-to-end encryption</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Role-based access control</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <Globe className="h-10 w-10 text-indigo-600 mb-4" />
              <CardTitle className="text-indigo-700">Global Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-600 mb-4">ESG data for companies worldwide with local regulatory compliance</p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />50,000+ global companies</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Multi-language support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Regional compliance</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Local data centers</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <Users className="h-10 w-10 text-orange-600 mb-4" />
              <CardTitle className="text-orange-700">Dedicated Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-600 mb-4">White-glove service with dedicated customer success team</p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Dedicated CSM</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />24/7 priority support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom training</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Implementation support</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-teal-200 bg-teal-50">
            <CardHeader>
              <BarChart3 className="h-10 w-10 text-teal-600 mb-4" />
              <CardTitle className="text-teal-700">Advanced Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-teal-600 mb-4">Sophisticated analytics and reporting for institutional investors</p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Portfolio-level analysis</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Risk attribution</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Scenario modeling</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom benchmarks</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Enterprise Use Cases</h2>
          <p className="text-gray-600 text-lg">How leading institutions use our platform</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Asset Management Firms</h3>
                <p className="text-gray-600">$500B+ AUM firm uses our white-label solution to provide ESG insights to 10,000+ advisors</p>
              </div>
            </div>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Branded ESG portal for advisors</li>
              <li>• API integration with existing platforms</li>
              <li>• Custom ESG scoring methodology</li>
              <li>• Regulatory reporting automation</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Pension Funds</h3>
                <p className="text-gray-600">$200B pension fund monitors ESG risks across 5,000+ portfolio companies</p>
              </div>
            </div>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Real-time ESG risk monitoring</li>
              <li>• Fiduciary reporting dashboards</li>
              <li>• Engagement tracking</li>
              <li>• Climate scenario analysis</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Insurance Companies</h3>
                <p className="text-gray-600">Global insurer integrates ESG data into underwriting and investment processes</p>
              </div>
            </div>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• ESG-informed underwriting</li>
              <li>• Climate risk assessment</li>
              <li>• Investment portfolio analysis</li>
              <li>• Regulatory compliance reporting</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Smartphone className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">FinTech Platforms</h3>
                <p className="text-gray-600">Investment app embeds ESG scores for 1M+ retail investors</p>
              </div>
            </div>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• White-label ESG widgets</li>
              <li>• Mobile-optimized interface</li>
              <li>• Simplified ESG explanations</li>
              <li>• Social impact tracking</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Enterprise Pricing</h2>
          <p className="text-gray-600 text-lg">Flexible pricing based on your scale and requirements</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-xl">Enterprise</CardTitle>
              <CardDescription>For large institutions</CardDescription>
              <div className="text-4xl font-bold">$25,000<span className="text-lg font-normal text-gray-500">/month</span></div>
              <div className="text-sm text-gray-500">Up to 10,000 companies</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Unlimited API calls</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />White-label dashboard</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom domain</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Dedicated support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />SLA guarantee</li>
              </ul>
              <Button className="w-full">Contact Sales</Button>
            </CardContent>
          </Card>
          
          <Card className="border-purple-200 relative scale-105">
            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-purple-600">
              Most Popular
            </Badge>
            <CardHeader>
              <CardTitle className="text-xl">Enterprise Plus</CardTitle>
              <CardDescription>For global institutions</CardDescription>
              <div className="text-4xl font-bold">$75,000<span className="text-lg font-normal text-gray-500">/month</span></div>
              <div className="text-sm text-gray-500">Up to 50,000 companies</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Everything in Enterprise</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Multi-region deployment</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Advanced analytics</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom integrations</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />24/7 phone support</li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Contact Sales</Button>
            </CardContent>
          </Card>
          
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-xl">Custom</CardTitle>
              <CardDescription>Tailored solutions</CardDescription>
              <div className="text-4xl font-bold">Custom<span className="text-lg font-normal text-gray-500"> pricing</span></div>
              <div className="text-sm text-gray-500">Unlimited scale</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Everything in Enterprise Plus</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom data sources</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Bespoke features</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />On-premise deployment</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Dedicated infrastructure</li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your ESG Platform?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading institutions using our enterprise ESG solutions to serve millions of users
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
              Schedule Enterprise Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Download ROI Calculator
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
