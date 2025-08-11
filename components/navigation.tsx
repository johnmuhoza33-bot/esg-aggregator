"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"; // shadcn button

export default function Navigation() {
  const pathname = usePathname();
  const link = (href: string, label: string) => (
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
        {/* Brand → Home */}
        <Link href="/" className="text-xl font-bold text-blue-700">
          ESG Analytics
        </Link>

        {/* Left links (desktop) */}
        <div className="flex items-center gap-6">
          {link("/", "Home")}
          {link("/api-docs", "API")}
          {link("/dashboard", "Dashboard")}
          {link("/get-started", "Get Started")}
        </div>

        {/* Primary CTA: Pricing */}
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href="/pricing">Pricing</Link>
        </Button>
      </nav>
    </header>
  );
}
