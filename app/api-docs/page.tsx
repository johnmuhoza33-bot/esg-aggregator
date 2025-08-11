import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          ESG Analytics Made Simple
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Access real-time ESG data, benchmark companies, and analyze
          sustainability performance with ease.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/get-started"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/pricing"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">📊 Real-Time Data</h3>
            <p className="text-gray-600">
              Instantly access updated ESG metrics for thousands of companies.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📈 Benchmarking</h3>
            <p className="text-gray-600">
              Compare ESG performance between companies and industries.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🔍 Deep Analysis</h3>
            <p className="text-gray-600">
              Dive into detailed reports to evaluate sustainability efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Start Tracking ESG Performance Today
        </h2>
        <p className="text-gray-600 mb-8">
          Sign up for free and unlock the power of ESG analytics in minutes.
        </p>
        <Link
          href="/get-started"
          className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Get Started Free
        </Link>
      </section>
    </div>
  );
}
