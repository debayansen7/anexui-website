import type { Metadata } from "next";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Component Builder — Anex UI",
  description: "Pick only the components you need and download a custom zip with source files, tokens, and setup instructions.",
};

export default function BuilderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
