"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">ESGIntel</span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              href="/"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/platform"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Platform
            </Link>
            <Link
              href="/demo"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Demo
            </Link>
            <Link
              href="/dashboard"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/pricing"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors duration-200"
                style={{ minWidth: "48px", minHeight: "48px" }}
                aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    className="block h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 border border-transparent hover:border-gray-200"
              >
                <span className="flex items-center gap-3">
                  <span className="text-blue-600">🏠</span>
                  Home
                </span>
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 border border-transparent hover:border-gray-200"
              >
                <span className="flex items-center gap-3">
                  <span className="text-blue-600">ℹ️</span>
                  About
                </span>
              </Link>
              <Link
                href="/platform"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 border border-transparent hover:border-gray-200"
              >
                <span className="flex items-center gap-3">
                  <span className="text-blue-600">🔧</span>
                  Platform
                </span>
              </Link>
              <Link
                href="/demo"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 border border-transparent hover:border-gray-200"
              >
                <span className="flex items-center gap-3">
                  <span className="text-blue-600">🚀</span>
                  Demo
                </span>
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 border border-transparent hover:border-gray-200"
              >
                <span className="flex items-center gap-3">
                  <span className="text-blue-600">📊</span>
                  Dashboard
                </span>
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 border border-transparent hover:border-gray-200"
              >
                <span className="flex items-center gap-3">
                  <span className="text-blue-600">💰</span>
                  Pricing
                </span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 border border-transparent hover:border-gray-200"
              >
                <span className="flex items-center gap-3">
                  <span className="text-blue-600">📞</span>
                  Contact
                </span>
              </Link>

              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900 block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 text-center border border-gray-200"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />
        )}
      </div>
    </nav>
  )
}

