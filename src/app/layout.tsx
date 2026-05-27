import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Anex UI", template: "%s — Anex UI" },
  description: "50+ accessible React components built with Tailwind CSS v4. WCAG AA. Dark mode. Zero Radix.",
  keywords: ["react", "ui library", "components", "accessibility", "tailwindcss", "typescript"],
  authors: [{ name: "Debayan Sen" }],
  openGraph: {
    title: "Anex UI",
    description: "50+ accessible React components built with Tailwind CSS v4.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anex UI",
    description: "50+ accessible React components built with Tailwind CSS v4.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme — runs before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
