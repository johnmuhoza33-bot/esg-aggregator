'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/browser';

type Company = {
id: string;
name: string;
esg_e: number | null;
esg_s: number | null;
esg_g: number | null;
};

// Optional: filter to only your rows.
// If you want ALL rows, set USER_ID to null.
const USER_ID: string | null = '2ea4952a-61ee-4ed7-84ae-6fe84a023c55';

export default function EsgBar() {
const [rows, setRows] = useState<Company[]>([]);
const [loading, setLoading] = useState(true);
const [err, setErr] = useState<string | null>(null);

useEffect(() => {
async function load() {
setLoading(true);
const supabase = createClient();

let query = supabase
.from('companies')
.select('id, name, esg_e, esg_s, esg_g')
.order('created_at', { ascending: false })
.limit(20);

if (USER_ID) query = query.eq('user_id', USER_ID);

const { data, error } = await query;

console.log('EsgBar rows:', data, 'error:', error); // debug
if (error) setErr(error.message);
setRows(data ?? []);
setLoading(false);
}

load();
}, []);

if (loading) return <div>Loading…</div>;
if (err) return <div style={{ color: 'red' }}>Error: {err}</div>;
if (rows.length === 0) return <div>No companies yet. Add a company to see ESG scores.</div>;

return (
<div style={{ display: 'grid', gap: 12 }}>
<h3>Your companies</h3>
<ul style={{ lineHeight: 1.6 }}>
{rows.map((c) => (
<li key={c.id}>
<strong>{c.name}</strong> — E:{c.esg_e ?? '—'} S:{c.esg_s ?? '—'} G:{c.esg_g ?? '—'}
</li>
))}
</ul>

{/* Debug output */}
<pre style={{ background: '#111', color: '#0f0', padding: 12, borderRadius: 6 }}>
{JSON.stringify(rows, null, 2)}
</pre>
</div>
);
}
