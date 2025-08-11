import "./globals.css";
import Navigation from "@/components/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Navigation />           {/* ← navbar included on every page */}
        <main className="relative z-0">{children}</main>
      </body>
    </html>
  );
}
