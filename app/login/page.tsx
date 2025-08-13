"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const router = useRouter();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setPending(true); setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setPending(false);
    if (error) return setError(error.message);
    router.push("/dashboard");
  }

  return (
    <main style={{maxWidth:400, margin:"auto", padding:"2rem"}}>
      <h1>Log in</h1>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="Email" value={email}
               onChange={(e)=>setEmail(e.target.value)} required style={{display:"block", width:"100%", marginBottom:"1rem"}}/>
        <input type="password" placeholder="Password" value={password}
               onChange={(e)=>setPassword(e.target.value)} required style={{display:"block", width:"100%", marginBottom:"1rem"}}/>
        {error && <p style={{color:"red"}}>{error}</p>}
        <button disabled={pending}>{pending ? "Signing in..." : "Sign In"}</button>
      </form>
      <p style={{marginTop:"1rem"}}>New here? <a href="/signup">Create an account</a></p>
    </main>
  );
}
