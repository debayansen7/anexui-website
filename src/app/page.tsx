import Link from "next/link";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { features, hero, quickStart, cta, site } from "@/data/site";
import { landingGrid } from "@/data/components";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(124,58,237,0.15),transparent)]" />

          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            {hero.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            {hero.headline[0]}<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400">
              {hero.headline[1]}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href={site.docsUrl} className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors">
              {hero.cta.primary}
            </Link>
            <Link href="/docs/components" className="border border-white/15 hover:border-white/30 text-white/70 hover:text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors">
              {hero.cta.secondary}
            </Link>
          </div>

          <div className="inline-flex items-center gap-3 bg-[#111] border border-white/10 rounded-xl px-5 py-3 font-mono text-sm text-white/70">
            <span className="text-white/30">$</span>
            <span>npm install <span className="text-violet-400">{site.packageName}</span></span>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-[#111] border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Component grid */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-3">50+ components. Every use case covered.</h2>
            <p className="text-white/50">From a basic button to a full carousel with ARIA patterns — it&apos;s all here.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {landingGrid.map((group) => (
              <div key={group.category} className="bg-[#111] border border-white/8 rounded-2xl p-5">
                <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-3">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="bg-white/5 border border-white/8 text-white/60 text-xs px-2.5 py-1 rounded-lg">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick start */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">{quickStart.heading}</h2>
              <p className="text-white/50 mb-6 leading-relaxed">{quickStart.body}</p>
              <Link href={site.docsUrl} className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">
                {quickStart.linkText}
              </Link>
            </div>
            <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 font-mono text-sm space-y-1 text-white/70 overflow-x-auto">
              <p className="text-white/30"># 1. Install</p>
              <p className="mb-4">npm install <span className="text-violet-400">{site.packageName}</span></p>
              <p className="text-white/30"># 2. Import styles in your root</p>
              <p className="mb-4"><span className="text-emerald-400">import</span> <span className="text-orange-300">&quot;{site.packageName}/styles&quot;</span>;</p>
              <p className="text-white/30"># 3. Set theme on html element</p>
              <p className="mb-4">&lt;html <span className="text-emerald-400">data-theme</span>=<span className="text-orange-300">&quot;dark&quot;</span>&gt;</p>
              <p className="text-white/30"># 4. Use components</p>
              <p><span className="text-emerald-400">import</span> {`{ Button }`} <span className="text-emerald-400">from</span> <span className="text-orange-300">&quot;{site.packageName}&quot;</span>;</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-24 text-center border-t border-white/8">
          <h2 className="text-3xl font-bold text-white mb-4">{cta.heading}</h2>
          <p className="text-white/50 mb-8">{cta.body}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={site.docsUrl} className="bg-violet-600 hover:bg-violet-500 text-white px-7 py-3 rounded-xl font-medium text-sm transition-colors">
              {cta.primary}
            </Link>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="border border-white/15 hover:border-white/30 text-white/70 hover:text-white px-7 py-3 rounded-xl font-medium text-sm transition-colors">
              {cta.secondary}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
