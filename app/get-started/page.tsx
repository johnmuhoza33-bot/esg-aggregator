import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function GetStartedPage() {
return (
<main className="container mx-auto px-6 py-12">
<div className="text-center mb-10">
<Badge className="mb-3 bg-green-100 text-green-700">Get Started</Badge>
<h1 className="text-4xl font-bold tracking-tight">Start Using ESG Data in Minutes</h1>
<p className="text-gray-600 mt-2 max-w-2xl mx-auto">
Create a free account, receive your API key instantly, and start building with real-time ESG data.
</p>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-12">
<Card>
<CardHeader>
<CardTitle className="flex items-center gap-2"><CheckCircle className="h-5 w-5" /> 1. Create Account</CardTitle>
<CardDescription>30-second signup. No credit card required.</CardDescription>
</CardHeader>
<CardContent>
<Button asChild className="w-full">
<Link href="/signup">Create Free Account</Link>
</Button>
</CardContent>
</Card>

<Card>
<CardHeader>
<CardTitle className="flex items-center gap-2"><CheckCircle className="h-5 w-5" /> 2. Get API Key</CardTitle>
<CardDescription>Your personal key is issued immediately.</CardDescription>
</CardHeader>
<CardContent>
<Button asChild variant="outline" className="w-full">
<Link href="/api-docs">View API Docs</Link>
</Button>
</CardContent>
</Card>

<Card>
<CardHeader>
<CardTitle className="flex items-center gap-2"><CheckCircle className="h-5 w-5" /> 3. Build</CardTitle>
<CardDescription>Use our SDK & examples to ship fast.</CardDescription>
</CardHeader>
<CardContent>
<Button asChild variant="secondary" className="w-full">
<Link href="/dashboard">Go to Dashboard</Link>
</Button>
</CardContent>
</Card>
</div>

<div className="text-center">
<Button asChild size="lg">
<Link href="/signup">Start Free <ArrowRight className="ml-2 h-5 w-5" /></Link>
</Button>
<p className="text-sm text-gray-500 mt-3">Free tier includes 1,000 requests/month.</p>
</div>
</main>
);
}
