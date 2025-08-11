import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">ESG Aggregator</h1>
        <p className="text-gray-600 mt-4">
          Enterprise-grade ESG analytics, reports, and API — without the 6-figure contract.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/pricing" className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:opacity-90">See Pricing</Link>
          <a
            href="https://buy.stripe.com/YOUR_PRO_LINK"  // ← replace with your Stripe link
            className="px-6 py-3 rounded-lg border hover:bg-gray-50"
            target="_blank" rel="noreferrer"
          >
            Start Now
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mt-16">
        <div><h3 className="text-xl font-semibold">Real-time Data</h3><p className="text-gray-600 mt-2">Live ESG metrics and sector benchmarks.</p></div>
        <div><h3 className="text-xl font-semibold">Instant Reports</h3><p className="text-gray-600 mt-2">PDF/CSV exports for stakeholders.</p></div>
        <div><h3 className="text-xl font-semibold">Secure API</h3><p className="text-gray-600 mt-2">Integrate ESG into your apps & models.</p></div>
      </section>
    </main>
  );
}
