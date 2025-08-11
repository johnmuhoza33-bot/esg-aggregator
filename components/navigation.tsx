"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "API", path: "/api-docs" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "Get Started", path: "/get-started" },
  ];

  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-between items-center">
      {/* Brand Logo → Home */}
      <Link href="/" className="flex items-center gap-2 hover:opacity-80">
        <span className="text-xl font-bold text-blue-700">ESG Analytics</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`hover:text-blue-600 ${
              pathname === link.path ? "text-blue-600 font-semibold" : "text-gray-700"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
