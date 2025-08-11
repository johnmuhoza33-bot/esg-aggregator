// components/navigation.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const item = (href: string, label: string) => (
    <Link
      href={href}
      className={`hidden md:inline-block hover:text-blue-600 ${
        pathname === href ? "text-blue-600 font-semibold" : "text-gray-700"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-white border-b">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-700">ESG Analytics</Link>
        <div className="flex items-center gap-6">
          {item("/", "Home")}
          {item("/api-docs", "API")}
          {item("/dashboard", "Dashboard")}
          {item("/get-started", "Get Started")}
          {item("/pricing", "Pricing")}
          {item("/contact", "Contact")}
        </div>
      </nav>
    </header>
  );
}
