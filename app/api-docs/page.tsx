export default function ApiDocsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          API Documentation
        </div>
        <h1 className="text-4xl font-bold mb-4">ESG Data API</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Access real-time ESG data for 10,000+ companies through our simple REST API. Get started in minutes with
          transparent pricing and comprehensive documentation.
        </p>
      </div>

      {/* Quick Start */}
      <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">⚡ Quick Start</h2>
        <p className="text-gray-600 mb-6">Get your first ESG data in under 5 minutes</p>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Get API Key</h3>
            <p className="text-sm text-gray-600">Sign up for free and get your API key instantly</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">Make Request</h3>
            <p className="text-sm text-gray-600">Use our REST API to fetch ESG data</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">Get Results</h3>
            <p className="text-sm text-gray-600">Receive comprehensive ESG scores and metrics</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-flex items-center"
          >
            Start Free Trial →
          </a>
        </div>
      </div>

      {/* API Examples */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">📝 Get Company ESG Score</h3>
          <p className="text-gray-600 mb-4">Fetch ESG scores for any company</p>

          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
            <pre>{`curl -X GET \\
"https://api.esganalytics.com/v1/companies/AAPL/esg" \\
-H "Authorization: Bearer YOUR_API_KEY"`}</pre>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <pre>{`{
"company": {
  "name": "Apple Inc.",
  "ticker": "AAPL",
  "sector": "Technology"
},
"esg_score": {
  "overall": 78.5,
  "environmental": 82.1,
  "social": 75.3,
  "governance": 78.1
},
"last_updated": "2024-01-15T10:30:00Z"
}`}</pre>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">🔍 Search Companies</h3>
          <p className="text-gray-600 mb-4">Find companies by name or ticker</p>

          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
            <pre>{`curl -X GET \\
"https://api.esganalytics.com/v1/companies?search=tesla" \\
-H "Authorization: Bearer YOUR_API_KEY"`}</pre>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <pre>{`{
"companies": [
  {
    "id": "TSLA",
    "name": "Tesla Inc.",
    "ticker": "TSLA",
    "sector": "Automotive",
    "esg_score": 71.2
  }
],
"total": 1
}`}</pre>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white border rounded-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-2">API Pricing</h2>
          <p className="text-gray-600">Simple, transparent pricing that scales with your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <div className="text-3xl font-bold mb-4">
              $500<span className="text-lg font-normal text-gray-500">/mo</span>
            </div>
            <ul className="text-sm space-y-2 mb-6">
              <li>10,000 API calls/month</li>
              <li>100 companies</li>
              <li>Weekly updates</li>
              <li>Email support</li>
            </ul>
            <a
              href="/signup"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md inline-block"
            >
              Get Started
            </a>
          </div>

          <div className="text-center p-6 border-2 border-blue-500 rounded-lg relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
              Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Professional</h3>
            <div className="text-3xl font-bold mb-4">
              $2,000<span className="text-lg font-normal text-gray-500">/mo</span>
            </div>
            <ul className="text-sm space-y-2 mb-6">
              <li>100,000 API calls/month</li>
              <li>1,000 companies</li>
              <li>Daily updates</li>
              <li>Priority support</li>
            </ul>
            <a
              href="/signup"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md inline-block"
            >
              Get Started
            </a>
          </div>

          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-4">
              $10,000<span className="text-lg font-normal text-gray-500">/mo</span>
            </div>
            <ul className="text-sm space-y-2 mb-6">
              <li>Unlimited API calls</li>
              <li>Unlimited companies</li>
              <li>Real-time updates</li>
              <li>Dedicated support</li>
            </ul>
            <a
              href="/contact"
              className="w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md inline-block"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


