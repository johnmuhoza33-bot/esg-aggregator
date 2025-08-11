// app/api/v1/analytics/benchmarks/route.ts
import { NextRequest, NextResponse } from "next/server";
import { AdvancedESGAnalytics } from "@/lib/advanced-analytics";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const sector = url.searchParams.get("sector")?.trim();
    const limitParam = url.searchParams.get("limit");
    const limit = limitParam ? Math.max(1, Math.min(1000, Number(limitParam))) : 100;

    if (!sector) {
      return NextResponse.json({ error: "sector parameter is required" }, { status: 400 });
    }

    // If you fetch other services, avoid caching:
    // await fetch("https://...", { cache: "no-store" });

    const analytics = new AdvancedESGAnalytics();
    const benchmarks = await analytics.generateIndustryBenchmarks({ sector, limit });

    return NextResponse.json({
      sector,
      count: Array.isArray(benchmarks) ? benchmarks.length : 0,
      benchmarks,
      generatedAt: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error("Benchmarks API error:", err);
    return NextResponse.json(
      { error: "Failed to generate benchmarks", message: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
