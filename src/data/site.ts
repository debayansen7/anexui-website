// Site-wide constants and landing page content.

export const site = {
  name: "Anex UI",
  packageName: "anexui",
  version: "0.1.0",
  description: "50+ accessible React components built with Tailwind CSS v4. WCAG AA. Dark mode. Zero Radix.",
  siteUrl: "https://anexui.com",
  github: "https://github.com/debayansen7/anex-ui-library",
  npm: "https://www.npmjs.com/package/anexui",
  docsUrl: "/docs/getting-started",
  builderUrl: "/builder",
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

export const hero = {
  badge: "v0.1.0 — Now on npm",
  headline: ["Accessible React", "components, done right."],
  subheadline:
    "50+ production-ready components built with React 19, Tailwind CSS v4, and a11y as the foundation — not an afterthought.",
  cta: { primary: "Get started →", secondary: "Browse components" },
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
