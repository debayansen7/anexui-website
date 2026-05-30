// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for all site-wide content.
// Imported by layout, Navbar, Footer, OG image, and page sections.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Anex UI",
  packageName: "anexui",
  version: "1.0.0",
  componentCount: 53,
  description: "53 accessible React components built with Tailwind CSS v4. WCAG AA. Dark mode. Zero UI library dependencies.",
  tagline: "53 components · React 19 · Tailwind CSS v4 · WCAG AA · Zero Radix",
  siteUrl: "https://anexui.com",
  github: "https://github.com/debayansen7/anex-ui-library",
  npm: "https://www.npmjs.com/package/anexui",
  docsUrl: "/docs/getting-started",
  componentsUrl: "/docs/components",
  themingUrl: "/docs/theming",
  builderUrl: "/builder",
  license: "MIT",
  ga: "G-HVQTRM5ZRJ",
};

export const author = {
  name: "Debayan Sen",
  email: "debayan.sen7@gmail.com",
  url: "https://www.debayansen.com",
  twitter: "@anexui",
};

// ── Navigation ────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Docs",       href: "/docs/getting-started", highlight: false },
  { label: "Components", href: "/docs/components",      highlight: false },
  { label: "Theming",    href: "/docs/theming",         highlight: false },
  { label: "Builder",    href: "/builder",              highlight: true  },
];

// ── Footer ────────────────────────────────────────────────────────────────────

export const footerLinks = [
  { label: "Docs",   href: "/docs/getting-started",                          external: false },
  { label: "GitHub", href: "https://github.com/debayansen7/anex-ui-library", external: true  },
  { label: "npm",    href: "https://www.npmjs.com/package/anexui",           external: true  },
];

// ── SEO / metadata ────────────────────────────────────────────────────────────

export const seo = {
  title: "Anex UI",
  titleTemplate: "%s — Anex UI",
  description: "53 accessible React components built with Tailwind CSS v4. WCAG AA. Dark mode. Zero UI library dependencies.",
  keywords: ["react", "ui library", "components", "accessibility", "tailwindcss", "typescript", "anex ui"],
};

// ── Landing page content ──────────────────────────────────────────────────────

export const hero = {
  badge: `v${site.version} — Now on npm`,
  headline: ["Accessible React", "components, done right."],
  subheadline: `${site.componentCount} production-ready components built with React 19, Tailwind CSS v4, and a11y as the foundation — not an afterthought.`,
  cta: { primary: "Get started →", secondary: "Browse components" },
};

export const componentGrid = {
  heading: `${site.componentCount} components. Every use case covered.`,
  subheading: "From a basic button to a full carousel with ARIA patterns — it's all here.",
};

export const quickStart = {
  heading: "Up and running in 60 seconds.",
  body: "Install the package, import the stylesheet, set a theme attribute. That's it — all tokens, themes, and components are ready.",
  linkText: "Read the full guide →",
};

export const cta = {
  heading: "Ready to build?",
  body: "Start with the docs or explore all components.",
  primary: "Read the docs",
  secondary: "Star on GitHub ★",
};

export const features = [
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
