import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Create your account</h1>
      <p className="text-gray-500">
        Start using ESG Analytics in minutes.
      </p>

      <div className="space-x-4">
        <Button asChild>
          <Link href="/signup">Create Free Account</Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/dashboard">Try Dashboard</Link>
        </Button>
      </div>
    </section>
  );
}
