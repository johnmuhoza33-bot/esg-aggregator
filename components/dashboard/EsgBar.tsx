// components/dashboard/EsgBar.tsx
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/browser"; // or "../../lib/supabase/browser"
import {
BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid,
} from "recharts";

type Company = {
id: string;
name: string;
esg_e: number | null;
esg_s: number | null;
esg_g: number | null;
};

export default function EsgBar() {
const [rows, setRows] = useState<Company[]>([]);
const [loading, setLoading] = useState(true);
const [err, setErr] = useState<string | null>(null);

useEffect(() => {
async function load() {
setLoading(true);
const supabase = createClient();
const { data, error } = await supabase
.from("companies")
.select("name, esg_e, esg_s, esg_g")
.order("created_at", { ascending: false })
.limit(20);

console.log("EsgBar rows:", data, "error:", error);
setRows((data ?? []) as Company[]);
setErr(error?.message ?? null);
setLoading(false);
}
load();
}, []);

if (loading) return <div>Loading…</div>;
if (err) return <div className="text-red-600">Error: {err}</div>;
if (!rows.length) return <div>No companies yet. Add a company to see ESG scores.</div>;

return (
<ResponsiveContainer width="100%" height={360}>
<BarChart data={rows} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis domain={[0, 100]} />
<Tooltip />
<Legend />
<Bar dataKey="esg_e" name="Environmental" />
<Bar dataKey="esg_s" name="Social" />
<Bar dataKey="esg_g" name="Governance" />
</BarChart>
</ResponsiveContainer>
);
}

