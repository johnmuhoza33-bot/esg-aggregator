export default function GetStartedPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <div className="inline-block mb-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
          🚀 Get Started
        </div>
        <h1 className="text-4xl font-bold mb-4">Start Using ESG Data Today</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Get your API key and start accessing real-time ESG data in under 5 minutes
        </p>
      </div>

      {/* 3-Step Process */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center border border-blue-200 bg-blue-50 rounded-lg p-6">
          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            1
          </div>
          <h3 className="text-lg font-bold text-blue-700 mb-2">Sign Up Free</h3>
          <p className="text-gray-600 mb-4">Create your account in 30 seconds</p>

          <ul className="text-sm space-y-2 mb-4">
            <li className="flex items-center justify-center">✅ No credit card required</li>
            <li className="flex items-center justify-center">✅ 14-day free trial</li>
            <li className="flex items-center justify-center">✅ 10,000 free API calls</li>
          </ul>

          <a
            href="/signup"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md inline-block"
          >
            Create Free Account
          </a>
        </div>

        <div className="text-center border border-green-200 bg-green-50 rounded-lg p-6">
          <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            2
          </div>
          <h3 className="text-lg font-bold text-green-700 mb-2">Get API Key</h3>
          <p className="text-gray-600 mb-4">Receive your key immediately</p>

          <ul className="text-sm space-y-2 mb-4">
            <li className="flex items-center justify-center">✅ Instant API key generation</li>
            <li className="flex items-center justify-center">✅ Full documentation access</li>
            <li className="flex items-center justify-center">✅ Code examples included</li>
          </ul>

          <a
            href="/api-docs"
            className="w-full border border-green-600 text-green-700 hover:bg-green-100 px-4 py-2 rounded-md inline-block"
          >
            View API Docs
          </a>
        </div>

        <div className="text-center border border-purple-200 bg-purple-50 rounded-lg p-6">
          <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            3
          </div>
          <h3 className="text-lg font-bold text-purple-700 mb-2">Start Building</h3>
          <p className="text-gray-600 mb-4">Make your first API call</p>

          <ul className="text-sm space-y-2 mb-4">
            <li className="flex items-center justify-center">✅ Get ESG data in seconds</li>
            <li className="flex items-center justify-center">✅ Real-time updates</li>
            <li className="flex items-center justify-center">✅ Try the dashboard</li>
          </ul>

          <a
            href="/demo"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md inline-block"
          >
            View Demo
          </a>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-90">Join thousands of developers using our ESG API</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="/signup"
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md inline-flex items-center justify-center"
          >
            Start Free Trial →
          </a>
          <a
            href="/api-docs"
            className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md inline-flex items-center justify-center"
          >
            View Documentation
          </a>
        </div>

        <div className="text-sm opacity-75">
          <div className="flex items-center justify-center gap-6">
            <div>⚡ Setup in minutes</div>
            <div>👥 10,000+ companies</div>
            <div>✅ No credit card required</div>
          </div>
        </div>
      </div>
    </div>
  )
}
