"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
const pathname = usePathname();
const isActive = (p: string) => pathname === p;

return (
<nav className="border-b bg-white shadow-sm">
<div className="container mx-auto px-6 py-4 flex items-center justify-between">
{/* Brand → Home */}
<Link href="/" className="flex items-center gap-2 hover:opacity-90">
<span className="text-xl font-bold text-blue-700">ESG Analytics</span>
</Link>

<div className="hidden md:flex items-center gap-6">
<Link href="/" className={isActive("/") ? "font-semibold" : ""}>Home</Link>
<Link href="/dashboard" className={isActive("/dashboard") ? "font-semibold" : ""}>Dashboard</Link>
<Link href="/api-docs" className={isActive("/api-docs") ? "font-semibold" : ""}>API</Link>
<Link href="/pricing" className={isActive("/pricing") ? "font-semibold" : ""}>Pricing</Link>
<Link href="/get-started" className={isActive("/get-started") ? "font-semibold" : ""}>Get Started</Link>
</div>
</div>
</nav>
);
}
