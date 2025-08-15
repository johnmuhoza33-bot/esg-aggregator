import Link from "next/link"

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Enterprise ESG Platform</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              AI-powered sustainability management that delivers enterprise-grade capabilities at a fraction of
              traditional costs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block text-center"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ESGIntel Over Traditional Providers?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Automation</h3>
              <p className="text-gray-600">Reduce manual work by 80% with intelligent data processing and insights</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">90% Cost Savings</h3>
              <p className="text-gray-600">
                Enterprise features starting at $500/month vs $50,000+ traditional solutions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Implementation</h3>
              <p className="text-gray-600">Deploy in days, not months with cloud-native architecture</p>
            </div>
          </div>
        </div>

        {/* Core Platform Modules */}
        <div className="space-y-16">
          {/* ESG & Sustainability Management */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise ESG & Sustainability Platform</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive sustainability management with AI-powered insights, automated reporting, and real-time
                  performance tracking across all ESG dimensions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Automated ESG data collection and validation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Real-time sustainability performance dashboards</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>AI-powered risk assessment and predictions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Integrated stakeholder engagement tools</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Data Accuracy</div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Environmental</span>
                    <span className="text-green-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Social</span>
                    <span className="text-blue-600">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Governance</span>
                    <span className="text-purple-600">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "94%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Reporting */}
          <div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h4 className="font-semibold mb-4">Automated Reporting Frameworks</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-600">GRI</div>
                    <div className="text-xs text-gray-600">Standards</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-600">SASB</div>
                    <div className="text-xs text-gray-600">Metrics</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="font-semibold text-purple-600">TCFD</div>
                    <div className="text-xs text-gray-600">Climate</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="font-semibold text-orange-600">CSRD</div>
                    <div className="text-xs text-gray-600">EU Directive</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Corporate Sustainability Reporting & Performance Management
                </h3>
                <p className="text-gray-600 mb-6">
                  Streamline compliance with global reporting standards through automated data collection, validation,
                  and report generation with AI-powered insights.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Multi-framework compliance (GRI, SASB, TCFD, CSRD)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Automated report generation and validation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Performance benchmarking and gap analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Stakeholder-ready sustainability reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Environmental Accounting */}
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Accounting & Financed Emissions</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive carbon accounting with Scope 1, 2, and 3 emissions tracking, financed emissions
                  calculation, and science-based target setting.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Complete Scope 1, 2, 3 emissions tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Financed emissions for financial institutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Science-based target setting and tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Carbon offset management and verification</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-4">Carbon Footprint Breakdown</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Scope 1 (Direct)</span>
                      <span>2,450 tCO2e</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Scope 2 (Energy)</span>
                      <span>1,890 tCO2e</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: "19%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Scope 3 (Value Chain)</span>
                      <span>5,660 tCO2e</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "56%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supply Chain Management */}
          <div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h4 className="font-semibold mb-4">Supply Chain Risk Matrix</h4>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-green-100 p-2 rounded text-center">
                    <div className="font-semibold">Low Risk</div>
                    <div className="text-green-600">65%</div>
                  </div>
                  <div className="bg-yellow-100 p-2 rounded text-center">
                    <div className="font-semibold">Medium Risk</div>
                    <div className="text-yellow-600">28%</div>
                  </div>
                  <div className="bg-red-100 p-2 rounded text-center">
                    <div className="font-semibold">High Risk</div>
                    <div className="text-red-600">7%</div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Environmental Compliance</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Labor Standards</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Human Rights</span>
                    <span className="text-yellow-600">⚠</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Transparency & Risk Management</h3>
                <p className="text-gray-600 mb-6">
                  End-to-end supply chain visibility with AI-powered risk assessment, supplier ESG scoring, and
                  automated compliance monitoring.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span>Multi-tier supplier mapping and assessment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span>Real-time ESG risk monitoring and alerts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span>Supplier engagement and improvement programs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span>Compliance tracking and audit management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Stewardship & LCA */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Stewardship & Life Cycle Assessment</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive product environmental impact assessment from cradle-to-grave with automated LCA
                  calculations and sustainability optimization recommendations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Automated LCA modeling and calculations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Product carbon footprint and water footprint</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Circular economy and waste reduction analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Sustainable design recommendations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-4">Product Impact Assessment</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Carbon Footprint</span>
                    <span className="text-sm font-semibold">2.4 kg CO2e</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Water Usage</span>
                    <span className="text-sm font-semibold">15.2 L</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Recyclability</span>
                    <span className="text-sm font-semibold text-green-600">85%</span>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="text-sm font-semibold text-green-800">Optimization Potential</div>
                    <div className="text-xs text-green-600 mt-1">
                      Switch to renewable materials could reduce impact by 23%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Advantage */}
        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ESGIntel vs Traditional Providers</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See how our AI-powered platform delivers enterprise capabilities at a fraction of the cost
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">ESGIntel</th>
                  <th className="text-center py-4 px-4">Traditional Providers</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Implementation Time</td>
                  <td className="py-4 px-4 text-center text-green-400">2-4 weeks</td>
                  <td className="py-4 px-4 text-center text-red-400">6-18 months</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Annual Cost</td>
                  <td className="py-4 px-4 text-center text-green-400">$500 - $10,000</td>
                  <td className="py-4 px-4 text-center text-red-400">$50,000 - $500,000</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Data Processing</td>
                  <td className="py-4 px-4 text-center text-green-400">AI-Automated</td>
                  <td className="py-4 px-4 text-center text-red-400">Manual/Semi-Manual</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Real-time Insights</td>
                  <td className="py-4 px-4 text-center text-green-400">✓ Included</td>
                  <td className="py-4 px-4 text-center text-red-400">✗ Limited</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">Customization</td>
                  <td className="py-4 px-4 text-center text-green-400">Flexible & Fast</td>
                  <td className="py-4 px-4 text-center text-red-400">Rigid & Slow</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your ESG Management?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading companies using ESGIntel to achieve their sustainability goals faster and more cost-effectively
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-block text-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
