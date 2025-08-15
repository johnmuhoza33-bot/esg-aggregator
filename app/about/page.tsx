export const dynamic = "force-dynamic"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">About ESGIntel</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionizing ESG analytics with AI-powered insights that make sustainable investing accessible,
              affordable, and actionable for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                ESGIntel democratizes access to enterprise-grade ESG analytics by leveraging artificial intelligence to
                deliver comprehensive sustainability insights at 95% less cost than traditional providers.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We believe that sustainable investing shouldn't be limited to large institutions. Our AI-powered
                platform makes it possible for investors of all sizes to make informed decisions based on real-time ESG
                data and predictive analytics.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why ESGIntel?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">95% cost reduction vs traditional ESG providers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Real-time data updates vs quarterly reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">AI-powered predictive analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">10,000+ companies covered globally</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Leadership Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the team behind ESGIntel's innovative approach to ESG analytics
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-xl p-8 text-center shadow-2xl border border-blue-200 relative overflow-hidden">
              {/* Professional background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10"></div>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
                }}
              ></div>

              <div className="relative z-10">
                <div className="relative">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8931%20%281%29.jpg-CP0R05Ngm7nV2a8H4EpGp9lcWAtfVy.jpeg"
                      alt="John Muhoza - Founder & CEO"
                      className="w-full h-full object-cover brightness-110 contrast-110 saturate-110"
                      style={{
                        filter: "brightness(1.1) contrast(1.15) saturate(1.1) drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      FOUNDER & CEO
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-3xl font-bold text-white">John Muhoza</h3>
                  <p className="text-blue-200 font-semibold text-lg mt-2">Chief Executive Officer</p>

                  <div className="mt-6 bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <p className="text-gray-800 leading-relaxed font-medium">
                      Visionary leader driving the democratization of ESG analytics through AI innovation. Committed to
                      making sustainable investing accessible to all investors while delivering enterprise-grade
                      insights at unprecedented affordability.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg flex items-center justify-center space-x-3">
                      <span className="text-blue-600 text-lg">📧</span>
                      <span className="text-gray-800 font-semibold">john.esganalytics@gmail.com</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg flex items-center justify-center space-x-3">
                      <span className="text-green-600 text-lg">📞</span>
                      <span className="text-gray-800 font-semibold">(309) 236-9995</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg flex items-center justify-center space-x-3">
                      <span className="text-purple-600 text-lg">🕒</span>
                      <span className="text-gray-800 font-semibold">Available Mon-Fri, 9AM-6PM EST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Technology</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              ESGIntel leverages cutting-edge AI and machine learning to process vast amounts of ESG data and deliver
              actionable insights.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">AI-Powered Analysis</h3>
              <p className="mt-2 text-gray-600">
                Advanced machine learning algorithms analyze ESG data patterns and trends in real-time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Predictive Modeling</h3>
              <p className="mt-2 text-gray-600">
                Forecast ESG performance and identify potential risks before they impact your portfolio.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Real-Time Updates</h3>
              <p className="mt-2 text-gray-600">
                Continuous monitoring and instant updates ensure you always have the latest ESG insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Transform Your ESG Analytics?</h2>
            <p className="mt-4 text-xl text-blue-100">
              Join the future of sustainable investing with ESGIntel's AI-powered platform.
            </p>
            <div className="mt-8 space-x-4">
              <a href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
                Get Started
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
