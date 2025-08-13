import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  try {
    // Cheap reachability check (no tables required)
    const { data: sessionData } = await supabase.auth.getSession();

    return NextResponse.json({
      ok: true,
      supabaseReachable: true,
      authSessionKnown: !!sessionData?.session, // will be false if not logged in
    });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? String(e) },
      { status: 500 }
    );
  }
}
