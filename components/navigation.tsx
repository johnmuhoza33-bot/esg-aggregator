"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const item = (href: string, label: string) => (
    <Link
      href={href}
      className={`hover:text-blue-600 ${
        pathname === href ? "text-blue-600 font-semibold" : "text-gray-700"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* BRAND → always goes Home */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-700 cursor-pointer pointer-events-auto select-none"
        >
          ESG Analytics
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {item("/", "Home")}
          {item("/dashboard", "Dashboard")}
          {item("/api-docs", "API")}
          {item("/pricing", "Pricing")}
          {item("/get-started", "Get Started")}
        </div>
      </nav>
    </header>
  );
}
