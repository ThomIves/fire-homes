import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/auth";
import AuthButtons from "@/components/auth-buttons";
import { HomeIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fire Homes",
  description: "For learning next.js with firebase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AuthProvider>
          <nav className="bg-sky-950 text-white p-5 h-24 flex items-center justify-between">
            <Link
              href="/"
              className="text-3xl tracking-widest flex gap-2 items-center uppercase"
            >
              <HomeIcon />
              <span>Fire Homes</span>
            </Link>
            <ul className="flex gap-6 items-center">
              <li>
                <Link
                  href="/property-search"
                  className="uppercase tracking-widest hover:underline"
                >
                  Property Search
                </Link>
              </li>
              <li>
                <AuthButtons />
              </li>
            </ul>
          </nav>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
