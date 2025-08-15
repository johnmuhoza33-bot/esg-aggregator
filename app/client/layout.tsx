"use client"

import type React from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className={inter.className}>
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white rounded-full relative">
                    <div className="absolute inset-0 border-t-2 border-white rounded-full transform rotate-45"></div>
                  </div>
                </div>
                <span className="text-xl font-bold text-gray-900">ESGIntel</span>
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-blue-600">
                About Us
              </a>
              <a href="/dashboard" className="text-gray-700 hover:text-blue-600">
                Dashboard
              </a>
              <a href="/pricing" className="text-gray-700 hover:text-blue-600">
                Pricing
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
              <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          backgroundColor: "#2563eb",
          color: "white",
          padding: "12px 20px",
          borderRadius: "25px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          fontSize: "14px",
          fontWeight: "600",
        }}
        onClick={() => {
          alert(
            "Contact us directly:\n\nEmail: john.esganalytics@gmail.com\nPhone: (309) 236-9995\n\nWe respond within 24 hours!",
          )
        }}
      >
        💬 Chat with us
      </div>
    </body>
  )
}
