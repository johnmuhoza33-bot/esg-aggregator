import type React from "react"
import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import "./globals.css"

export const metadata: Metadata = {
  title: "ESGIntel - AI-Powered ESG Analytics Platform",
  description:
    "Get real-time ESG insights powered by AI for 95% less than traditional providers. ESGIntel delivers comprehensive ESG analytics and risk assessment.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/689e2d72dfe9e71926fd3e96/1j2ku32bv';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
