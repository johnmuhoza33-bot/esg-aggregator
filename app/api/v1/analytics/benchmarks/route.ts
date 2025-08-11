import { NextRequest, NextResponse } from "next/server";
// If you have a helper, keep it. Otherwise mock/use your own implementation:
import AdvancedESGAnalytics from "@/lib/advanced-analytics";

// ✅ Tell Next/Vercel this is dynamic (prevents static render error)
export const dynamic = "force-dynamic";
export const revalidate = 0; // no ISR cache for API
export const runtime = "nodejs"; // or "edge" if you prefer

// Optional CORS (uncomment if you call this from the browser on another origin)
/*
const corsHeaders = {
"Access-Control-Allow-Origin": "*",
"Access-Control-Allow-Methods": "GET, OPTIONS",
"Access-Control-Allow-Headers": "Content-Type, Authorization",
};
export async function OPTIONS() {
return new NextResponse(null, { status: 204, headers: corsHeaders });
}
*/

export async function GET(request: NextRequest) {
try {
// Parse and validate query params
const url = new URL(request.url);
const sector = url.searchParams.get("sector")?.trim();
const limitParam = url.searchParams.get("limit");
const limit = limitParam ? Math.max(1, Math.min(1000, Number(limitParam))) : 100;

if (!sector) {
return NextResponse.json(
{ error: "sector parameter is required" },
{ status: 400 }
);
}

// If you fetch other services, avoid caching
// await fetch("https://...", { cache: "no-store" });

// Your domain logic
const analytics = new AdvancedESGAnalytics();
const benchmarks = await analytics.generateIndustryBenchmarks({ sector, limit });

const payload = {
sector,
count: Array.isArray(benchmarks) ? benchmarks.length : 0,
benchmarks,
generatedAt: new Date().toISOString(),
};

// return new NextResponse(JSON.stringify(payload), { headers: { ...corsHeaders, "Content-Type": "application/json" }});
return NextResponse.json(payload, {
// headers: corsHeaders,
});
} catch (err: any) {
console.error("Benchmarks API error:", err);
return NextResponse.json(
{
error: "Failed to generate benchmarks",
message: err?.message ?? "Unknown error",
},
{ status: 500 }
);
}
}