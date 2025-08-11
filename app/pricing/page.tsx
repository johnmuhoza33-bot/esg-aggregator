import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";

const features = {
free: ["1,000 requests/mo", "Basic endpoints", "Email support"],
pro: ["100,000 requests/mo", "All endpoints + SDK", "Priority support", "Rate-limit bursting"],
business: ["Custom limits", "SLA & uptime reports", "Dedicated support", "On-prem / VPC options"],
};

function List({ items }: { items: string[] }) {
return (
<ul className="space-y-2 mt-4">
{items.map((f) => (
<li key={f} className="flex items-center gap-2 text-gray-700">
<Check className="h-4 w-4" /> {f}
</li>
))}
</ul>
);
}

export default function PricingPage() {
return (
<main className="container mx-auto px-6 py-12">
<div className="text-center mb-10">
<Badge className="mb-3 bg-blue-100 text-blue-700">Pricing</Badge>
<h1 className="text-4xl font-bold tracking-tight">Simple, transparent pricing</h1>
<p className="text-gray-600 mt-2">Start free. Upgrade when you need more capacity.</p>
</div>

<div className="grid md:grid-cols-3 gap-6">
<Card>
<CardHeader>
<CardTitle>Free</CardTitle>
<CardDescription>For evaluation and prototypes</CardDescription>
<div className="text-3xl font-bold mt-2">$0<span className="text-base font-medium text-gray-500">/mo</span></div>
</CardHeader>
<CardContent><List items={features.free} /></CardContent>
<CardFooter>
<Button asChild className="w-full"><Link href="/signup">Start Free</Link></Button>
</CardFooter>
</Card>

<Card className="border-blue-600">
<CardHeader>
<CardTitle>Pro</CardTitle>
<CardDescription>For startups & teams</CardDescription>
<div className="text-3xl font-bold mt-2">$49<span className="text-base font-medium text-gray-500">/mo</span></div>
</CardHeader>
<CardContent><List items={features.pro} /></CardContent>
<CardFooter>
<Button asChild className="w-full"><Link href="/signup?plan=pro">Start 7-day Trial</Link></Button>
</CardFooter>
</Card>

<Card>
<CardHeader>
<CardTitle>Business</CardTitle>
<CardDescription>For production at scale</CardDescription>
<div className="text-3xl font-bold mt-2">Custom</div>
</CardHeader>
<CardContent><List items={features.business} /></CardContent>
<CardFooter>
<Button asChild variant="outline" className="w-full"><Link href="/contact">Talk to Sales</Link></Button>
</CardFooter>
</Card>
</div>

<p className="text-center text-sm text-gray-500 mt-6">
Need higher limits or on-prem? <Link href="/contact" className="underline">Contact us</Link>.
</p>
</main>
);
}
