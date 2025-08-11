import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/get-started">Get Started</Link>
      <Link href="/api-docs">API</Link>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  );
}
