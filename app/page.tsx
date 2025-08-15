export const dynamic = "force-dynamic"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚀 Real-time ESG Data • AI-Powered • Starting at $500/month
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Stop Overpaying for Outdated ESG Data
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Get real-time ESG insights powered by AI for 95% less than traditional providers. While others charge $50K+
            for quarterly updates, we deliver fresh data daily starting at $500/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-md inline-flex items-center justify-center"
            >
              Start Free Trial
            </a>
            <a
              href="/demo"
              className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 rounded-md inline-flex items-center justify-center"
            >
              View Live Demo
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why AI-Powered ESG Analytics Beats Traditional Methods
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-4">❌ Traditional ESG Providers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Quarterly updates (3-month delays)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>$50,000+ annual subscriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Manual data collection & analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Limited company coverage (500-1,000)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Static reports with no predictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Human bias in scoring methodology</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">✅ Our AI-Powered Platform</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Real-time updates (hourly refresh)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Starting at $500/month (95% savings)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>AI-automated data processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>10,000+ companies covered globally</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Predictive ESG risk modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Consistent AI-driven methodology</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            The AI Advantage: Beyond Traditional ESG Analysis
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 border">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Machine Learning Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Our AI processes millions of data points from news, reports, social media, and regulatory filings to
                identify ESG trends and risks that humans miss.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Natural language processing of 10,000+ sources daily</li>
                <li>• Pattern recognition across industries and regions</li>
                <li>• Sentiment analysis of stakeholder communications</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Real-Time Risk Detection</h3>
              <p className="text-gray-600 mb-4">
                Get instant alerts when ESG risks emerge. Our AI monitors global events and immediately updates company
                scores when incidents occur.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Environmental disaster impact assessment</li>
                <li>• Labor dispute and safety incident tracking</li>
                <li>• Regulatory violation early warning system</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Don't just see current ESG performance - predict future risks and opportunities with our proprietary
                forecasting models.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 12-month ESG score trajectory predictions</li>
                <li>• Climate risk scenario modeling</li>
                <li>• Regulatory compliance probability scoring</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">ROI That Speaks for Itself</h3>
                <p className="text-blue-100 mb-6">
                  Companies using our AI-powered ESG analytics report significant improvements in decision-making speed
                  and investment performance.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm text-blue-200">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">10x</div>
                    <div className="text-sm text-blue-200">Faster Analysis</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Traditional Provider Annual Cost:</h4>
                  <div className="text-2xl font-bold text-red-300 mb-2">$50,000 - $200,000</div>
                  <div className="text-sm text-blue-200 mb-4">+ Implementation fees + Data delays</div>

                  <h4 className="font-semibold mb-3">Our AI Platform Annual Cost:</h4>
                  <div className="text-2xl font-bold text-green-300 mb-2">$6,000 - $24,000</div>
                  <div className="text-sm text-blue-200">Real-time data + Predictive insights included</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">See It In Action</h2>
            <p className="text-lg text-gray-600">Explore our platform with real ESG data from top companies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">Apple Inc.</h3>
                  <p className="text-gray-500">AAPL</p>
                  <p className="text-sm text-gray-400">Technology • Market Cap: $3.0T</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">78.5</div>
                  <div className="text-xs text-gray-500">Overall ESG Score</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Environmental</span>
                  <span className="font-medium">82.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Social</span>
                  <span className="font-medium">75.3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Governance</span>
                  <span className="font-medium">78.1</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">Last updated: 2 hours ago</div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">Microsoft Corp.</h3>
                  <p className="text-gray-500">MSFT</p>
                  <p className="text-sm text-gray-400">Technology • Market Cap: $2.8T</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">82.1</div>
                  <div className="text-xs text-gray-500">Overall ESG Score</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Environmental</span>
                  <span className="font-medium">79.8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Social</span>
                  <span className="font-medium">84.2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Governance</span>
                  <span className="font-medium">82.3</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">Last updated: 1 hour ago</div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">Tesla Inc.</h3>
                  <p className="text-gray-500">TSLA</p>
                  <p className="text-sm text-gray-400">Automotive • Market Cap: $800B</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-600">71.3</div>
                  <div className="text-xs text-gray-500">Overall ESG Score</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Environmental</span>
                  <span className="font-medium">85.7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Social</span>
                  <span className="font-medium">62.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Governance</span>
                  <span className="font-medium">66.1</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">Last updated: 30 minutes ago</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              This is live data from our API. Ready to access 10,000+ more companies?
            </p>
            <a
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-flex items-center"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
