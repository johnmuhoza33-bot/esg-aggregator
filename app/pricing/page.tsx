"use client";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$1,000/mo",
      description: "Perfect for small teams getting started with ESG compliance.",
      features: [
        "Access to ESG database",
        "Basic analytics dashboard",
        "Email support",
      ],
      link: "/get-started",
    },
    {
      name: "Professional",
      price: "$10,000/mo",
      description: "Advanced tools for growing organizations.",
      features: [
        "Everything in Starter",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom data exports",
      ],
      link: "/get-started",
    },
    {
      name: "Enterprise",
      price: "$20,000/mo",
      description: "Full ESG suite for enterprises with complex needs.",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 support",
      ],
      link: "/get-started",
    },
    {
      name: "Flagship",
      price: "$200,000/yr",
      description: "Limited, exclusive access to our highest-level ESG solutions.",
      features: [
        "Full enterprise package",
        "Exclusive data sets",
        "On-site consultations",
        "Tailored compliance strategy",
      ],
      link: "/get-started",
    },
  ];

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Pricing Plans</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="text-gray-600">{plan.description}</p>
            <p className="text-3xl font-bold mt-4">{plan.price}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature}>✅ {feature}</li>
              ))}
            </ul>
            <Link
              href={plan.link}
              className="mt-6 block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
