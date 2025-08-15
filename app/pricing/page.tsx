"use client"

import { useState } from "react"

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleSubscription = async (priceId: string, planName: string) => {
    setLoading(planName)

    try {
      const response = await fetch("/api/payments/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          planName,
          successUrl: `${window.location.origin}/dashboard?subscription=success`,
          cancelUrl: `${window.location.origin}/pricing?subscription=cancelled`,
        }),
      })

      const { url } = await response.json()

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("Payment failed. Please try again.")
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing That Scales</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No enterprise sales calls. No hidden fees. Start today with 95% cost savings over traditional providers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Starter</h2>
            <p className="text-gray-600 mb-4">Perfect for small investment firms</p>
            <div className="text-4xl font-bold mb-2">
              $500<span className="text-lg font-normal text-gray-500">/month</span>
            </div>
            <div className="text-sm text-gray-500 mb-6">vs $25K+ traditional providers</div>

            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center">✅ Up to 100 companies</li>
              <li className="flex items-center">✅ Weekly ESG updates</li>
              <li className="flex items-center">✅ 10,000 API calls/month</li>
              <li className="flex items-center">✅ Email support</li>
            </ul>

            <button
              onClick={() => handleSubscription("price_starter_500", "Starter")}
              disabled={loading === "Starter"}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-md"
            >
              {loading === "Starter" ? "Processing..." : "Start Free Trial"}
            </button>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 relative scale-105">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
              Most Popular
            </div>
            <h2 className="text-xl font-bold mb-2">Professional</h2>
            <p className="text-gray-600 mb-4">For asset managers and consultants</p>
            <div className="text-4xl font-bold mb-2">
              $2,000<span className="text-lg font-normal text-gray-500">/month</span>
            </div>
            <div className="text-sm text-gray-500 mb-6">vs $100K+ traditional providers</div>

            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center">✅ Up to 1,000 companies</li>
              <li className="flex items-center">✅ Daily ESG updates</li>
              <li className="flex items-center">✅ 100,000 API calls/month</li>
              <li className="flex items-center">✅ Priority support</li>
            </ul>

            <button
              onClick={() => handleSubscription("price_professional_2000", "Professional")}
              disabled={loading === "Professional"}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-md"
            >
              {loading === "Professional" ? "Processing..." : "Start Free Trial"}
            </button>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Enterprise</h2>
            <p className="text-gray-600 mb-4">For large institutions</p>
            <div className="text-4xl font-bold mb-2">
              $10,000<span className="text-lg font-normal text-gray-500">/month</span>
            </div>
            <div className="text-sm text-gray-500 mb-6">vs $500K+ traditional providers</div>

            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center">✅ Unlimited companies</li>
              <li className="flex items-center">✅ Real-time updates</li>
              <li className="flex items-center">✅ Unlimited API calls</li>
              <li className="flex items-center">✅ Dedicated support</li>
            </ul>

            <button
              onClick={() => handleSubscription("price_enterprise_10000", "Enterprise")}
              disabled={loading === "Enterprise"}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-md"
            >
              {loading === "Enterprise" ? "Processing..." : "Start Free Trial"}
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">All plans include 14-day free trial • No setup fees • Cancel anytime</p>
          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Need a custom solution?</h3>
            <p className="text-gray-600 mb-4">We work with large institutions to create tailored ESG data solutions.</p>
            <a
              href="/contact"
              className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md inline-block"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
