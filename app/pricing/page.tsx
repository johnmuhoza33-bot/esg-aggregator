"use client"

import { useState } from "react"
import { Check, Star } from "lucide-react"

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            95% Cost Savings vs Traditional Providers
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Transparent Pricing That Scales
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No enterprise sales calls. No hidden fees. Start today with enterprise-grade ESG analytics at a fraction of
            traditional costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Starter Plan */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Starter</h2>
              <p className="text-gray-600 mb-6">Perfect for small investment firms</p>
              <div className="mb-4">
                <span className="text-5xl font-bold">$500</span>
                <span className="text-lg font-normal text-gray-500">/month</span>
              </div>
              <div className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full inline-block">
                vs $25K+ traditional providers
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Up to 100 companies</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Weekly ESG updates</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>10,000 API calls/month</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Email support</span>
              </li>
            </ul>

            <button
              onClick={() => handleSubscription("price_starter_500", "Starter")}
              disabled={loading === "Starter"}
              className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              {loading === "Starter" ? "Processing..." : "Start Free Trial"}
            </button>
          </div>

          {/* Professional Plan - Most Popular */}
          <div className="bg-white border-2 border-blue-500 rounded-2xl p-8 shadow-lg relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Professional</h2>
              <p className="text-gray-600 mb-6">For asset managers and consultants</p>
              <div className="mb-4">
                <span className="text-5xl font-bold">$2,000</span>
                <span className="text-lg font-normal text-gray-500">/month</span>
              </div>
              <div className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full inline-block">
                vs $100K+ traditional providers
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Up to 1,000 companies</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Daily ESG updates</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>100,000 API calls/month</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Priority support</span>
              </li>
            </ul>

            <button
              onClick={() => handleSubscription("price_professional_2000", "Professional")}
              disabled={loading === "Professional"}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              {loading === "Professional" ? "Processing..." : "Start Free Trial"}
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
              <p className="text-gray-600 mb-6">For large institutions</p>
              <div className="mb-4">
                <span className="text-5xl font-bold">$10,000</span>
                <span className="text-lg font-normal text-gray-500">/month</span>
              </div>
              <div className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full inline-block">
                vs $500K+ traditional providers
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Unlimited companies</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Real-time updates</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Unlimited API calls</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Dedicated support</span>
              </li>
            </ul>

            <button
              onClick={() => handleSubscription("price_enterprise_10000", "Enterprise")}
              disabled={loading === "Enterprise"}
              className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              {loading === "Enterprise" ? "Processing..." : "Start Free Trial"}
            </button>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-600 mb-8 text-lg">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              We work with large institutions to create tailored ESG data solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-blue-600 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-colors"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

