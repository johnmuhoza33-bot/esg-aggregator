export const dynamic = "force-dynamic"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <div className="inline-block mb-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
          📞 Contact ESGIntel
        </div>
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Have questions about ESGIntel's AI-powered ESG data platform? We're here to help you get started.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Send us a Message</h2>
          <p className="text-gray-600 mb-6">We'll respond within 24 hours</p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Smith"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Work Email *
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@company.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium">
                Company
              </label>
              <input
                id="company"
                type="text"
                placeholder="Acme Investment Management"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message *
              </label>
              <textarea
                id="message"
                placeholder="Tell us about your ESG data needs..."
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Send Message ✉️
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Contact Information</h2>
            <p className="text-gray-600 mb-6">Multiple ways to reach the ESGIntel team</p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-blue-600 mr-3 mt-1">✉️</div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">john.esganalytics@gmail.com</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-600 mr-3 mt-1">📞</div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">(309) 236-9995</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-blue-600 mr-3 mt-1">👤</div>
                <div>
                  <p className="font-medium">Founder & CEO</p>
                  <p className="text-gray-600">John Muhoza</p>
                  <p className="text-sm text-gray-500">Available for consultations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-700 mb-2">Enterprise Sales</h3>
            <p className="text-gray-600 mb-4">Need a custom ESGIntel solution for your organization?</p>
            <p className="text-sm text-gray-600 mb-4">
              For enterprise customers requiring custom integrations, dedicated support, or volume pricing.
            </p>
            <a
              href="/enterprise"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md inline-block text-center"
            >
              Schedule Enterprise Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
