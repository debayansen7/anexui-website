import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Sidebar from "@/components/docs/Sidebar";
import MobileSidebar from "@/components/docs/MobileSidebar";
import OnThisPage from "@/components/docs/OnThisPage";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <MobileSidebar />
      <div className="max-w-7xl mx-auto px-6 flex gap-12 flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0 py-10 max-w-3xl" data-pagefind-body>
          {children}
        </main>
        <OnThisPage />
      </div>
      <Footer />
    </>
  );
}
