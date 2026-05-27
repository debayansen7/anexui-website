import Link from "next/link";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const features = [
  {
    icon: "♿",
    title: "WCAG AA Accessible",
    desc: "Every component ships with correct ARIA roles, keyboard navigation, and focus management. No config required.",
  },
  {
    icon: "🌗",
    title: "Dark Mode Built In",
    desc: "CSS custom property theming with a single data-theme attribute. Switch at runtime with one line of code.",
  },
  {
    icon: "⚡",
    title: "React 19 Patterns",
    desc: "Ref as a prop, useId, no deprecated forwardRef. Built for the modern React API surface.",
  },
  {
    icon: "🎨",
    title: "CSS Modules + Tailwind v4",
    desc: "Scoped styles with design tokens. No global class leakage. Full TypeScript types on every prop.",
  },
  {
    icon: "📦",
    title: "Zero Heavy Dependencies",
    desc: "No Radix UI. No Headless UI. Native browser APIs — dialog, hidden, role — do the heavy lifting.",
  },
  {
    icon: "🌲",
    title: "Tree-Shakeable",
    desc: "ESM + CJS dual build. Import only what you use. Your bundle only pays for the components you ship.",
  },
];

const components = [
  { category: "Basic", items: ["Button", "Input", "Select", "Checkbox", "Switch", "Slider"] },
  { category: "Layout", items: ["Container", "Stack", "Grid", "Divider"] },
  { category: "Navigation", items: ["Tabs", "Breadcrumb", "Pagination", "Stepper"] },
  { category: "Feedback", items: ["Toast", "Alert", "Progress", "Skeleton", "Spinner", "Badge"] },
  { category: "Overlay", items: ["Modal", "Drawer", "Tooltip", "Popover"] },
  { category: "Data Display", items: ["Table", "Accordion", "Card", "Avatar", "Carousel", "Timeline", "Banner", "Tag"] },
];

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
            v0.1.0 — Now on npm
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Accessible React<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              components, done right.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            50+ production-ready components built with React 19, Tailwind CSS v4, and a11y as the foundation — not an afterthought.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/docs/getting-started"
              className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors"
            >
              Get started →
            </Link>
            <Link
              href="/docs/components"
              className="border border-white/15 hover:border-white/30 text-white/70 hover:text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors"
            >
              Browse components
            </Link>
          </div>

          <div className="inline-flex items-center gap-3 bg-[#111] border border-white/10 rounded-xl px-5 py-3 font-mono text-sm text-white/70">
            <span className="text-white/30">$</span>
            <span>npm install <span className="text-violet-400">anexui</span></span>
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
            {components.map((group) => (
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
              <h2 className="text-3xl font-bold text-white mb-4">Up and running in 60 seconds.</h2>
              <p className="text-white/50 mb-6 leading-relaxed">
                Install the package, import the stylesheet, set a theme attribute. That&apos;s it — all tokens, themes, and components are ready.
              </p>
              <Link href="/docs/getting-started" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">
                Read the full guide →
              </Link>
            </div>
            <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 font-mono text-sm space-y-1 text-white/70 overflow-x-auto">
              <p className="text-white/30"># 1. Install</p>
              <p className="mb-4">npm install <span className="text-violet-400">anexui</span></p>
              <p className="text-white/30"># 2. Import styles in your root</p>
              <p className="mb-4"><span className="text-emerald-400">import</span> <span className="text-orange-300">&quot;anexui/styles&quot;</span>;</p>
              <p className="text-white/30"># 3. Set theme on html element</p>
              <p className="mb-4">&lt;html <span className="text-emerald-400">data-theme</span>=<span className="text-orange-300">&quot;dark&quot;</span>&gt;</p>
              <p className="text-white/30"># 4. Use components</p>
              <p><span className="text-emerald-400">import</span> {`{ Button }`} <span className="text-emerald-400">from</span> <span className="text-orange-300">&quot;anexui&quot;</span>;</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-24 text-center border-t border-white/8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to build?</h2>
          <p className="text-white/50 mb-8">Start with the docs or explore all components.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/docs/getting-started" className="bg-violet-600 hover:bg-violet-500 text-white px-7 py-3 rounded-xl font-medium text-sm transition-colors">
              Read the docs
            </Link>
            <a href="https://github.com/debayansen7/anex-ui-library" target="_blank" rel="noopener noreferrer" className="border border-white/15 hover:border-white/30 text-white/70 hover:text-white px-7 py-3 rounded-xl font-medium text-sm transition-colors">
              Star on GitHub ★
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
