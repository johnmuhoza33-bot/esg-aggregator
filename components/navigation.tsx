"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BarChart3 } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md border border-blue-200">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ESG Aggregator</span>
          </a>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-600">Home</Link>
            <Link href="/api-docs" className="text-sm font-medium transition-colors hover:text-blue-600">API</Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-blue-600">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <a href="/dashboard">
              <Button variant="outline" size="sm">Dashboard</Button>
            </a>
            <a href="/get-started">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
