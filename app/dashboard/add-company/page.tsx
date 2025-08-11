"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AddCompanyPage() {
  return (
    <main className="p-8">
      Add Company
      <div className="mt-6">
        <Button asChild>
          <Link href="/dashboard">Return to Dashboard</Link>
        </Button>
      </div>
    </main>
  );
}
