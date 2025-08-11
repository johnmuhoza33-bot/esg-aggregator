// app/pricing/page.tsx
import Link from "next/link";
import { Check } from "lucide-react";

const Row = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-2 text-gray-700">
    <Check className="h-4 w-4" /> <span>{children}</span>
  </li>
);

export default function PricingPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">ESG Analytics Pricing</h1>
        <p className="text-gray-600 mt-2">
          Choose a plan designed to fit your organization's ESG data needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Essential */}
        <div className="rounded-2xl border p-6">
          <h3 className="text-2xl font-semibold">Essential</h3>
          <p className="text-3xl font-bold mt-2">
            $1,000<span className="text-base font-medium text-gray-500">/mo</span>
          </p>
          <ul className="space-y-2 mt-4">
            <Row>Core ESG metrics</Row>
            <Row>Sector benchmarks</Row>
            <Row>PDF & CSV exports</Row>
            <Row>Email support</Row>
          </ul>
          <a
            href="https://buy.stripe.com/YOUR_ESSENTIAL_LINK"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block w-full text-center py-3 rounded-lg bg-blue-600 text-white hover:opacity-90"
          >
            Get Essential
          </a>
        </div>

        {/* Professional */}
        <div className="rounded-2xl border-2 border-blue-600 p-6">
          <h3 className="text-2xl font-semibold">Professional</h3>
          <p className="text-3xl font-bold mt-2">
            $10,000<span className="text-base font-medium text-gray-500">/mo</span>
          </p>
          <ul className="space-y-2 mt-4">
            <Row>Everything in Essential</Row>
            <Row>Full API access & higher limits</Row>
            <Row>White-label reporting</Row>
            <Row>Priority onboarding</Row>
          </ul>
          <a
            href="https://buy.stripe.com/YOUR_PROFESSIONAL_LINK"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block w-full text-center py-3 rounded-lg bg-blue-600 text-white hover:opacity-90"
          >
            Get Professional
          </a>
        </div>

        {/* Enterprise */}
        <div className="rounded-2xl border p-6">
          <h3 className="text-2xl font-semibold">Enterprise</h3>
          <p className="text-3xl font-bold mt-2">
            $20,000<span className="text-base font-medium text-gray-500">/mo</span>
          </p>
          <ul className="space-y-2 mt-4">
            <Row>Unlimited custom ESG metrics</Row>
            <Row>Dedicated data pipeline</Row>
            <Row>Private cloud or VPC hosting</Row>
            <Row>Executive-level support</Row>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-block w-full text-center py-3 rounded-lg border hover:bg-gray-50"
          >
            Contact Sales
          </Link>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Need a custom plan? <Link href="/contact" className="underline">Talk to us</Link>.
      </p>
    </main>
  );
}
