import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Components" };

const categories = [
  {
    name: "Basic",
    description: "Form primitives and core interactive elements.",
    items: [
      { label: "Button", href: "/docs/components/button" },
      { label: "Input", href: "/docs/components/input" },
      { label: "Textarea", href: "/docs/components/textarea" },
      { label: "Select", href: "/docs/components/select" },
      { label: "Checkbox", href: "/docs/components/checkbox" },
      { label: "Radio Group", href: "/docs/components/radio-group" },
      { label: "Switch", href: "/docs/components/switch" },
      { label: "Slider", href: "/docs/components/slider" },
      { label: "Label", href: "/docs/components/label" },
    ],
  },
  {
    name: "Layout",
    description: "Structural helpers for spacing and arrangement.",
    items: [
      { label: "Container", href: "/docs/components/container" },
      { label: "Stack", href: "/docs/components/stack" },
      { label: "Grid", href: "/docs/components/grid" },
      { label: "Divider", href: "/docs/components/divider" },
    ],
  },
  {
    name: "Navigation",
    description: "Components for moving between views and steps.",
    items: [
      { label: "Tabs", href: "/docs/components/tabs" },
      { label: "Breadcrumb", href: "/docs/components/breadcrumb" },
      { label: "Pagination", href: "/docs/components/pagination" },
      { label: "Stepper", href: "/docs/components/stepper" },
    ],
  },
  {
    name: "Feedback",
    description: "Status indicators and user notifications.",
    items: [
      { label: "Alert", href: "/docs/components/alert" },
      { label: "Badge", href: "/docs/components/badge" },
      { label: "Spinner", href: "/docs/components/spinner" },
      { label: "Progress", href: "/docs/components/progress" },
      { label: "Skeleton", href: "/docs/components/skeleton" },
      { label: "Toast", href: "/docs/components/toast" },
    ],
  },
  {
    name: "Overlay",
    description: "Floating and modal UI layers.",
    items: [
      { label: "Modal", href: "/docs/components/modal" },
      { label: "Drawer", href: "/docs/components/drawer" },
      { label: "Tooltip", href: "/docs/components/tooltip" },
      { label: "Popover", href: "/docs/components/popover" },
    ],
  },
  {
    name: "Data Display",
    description: "Components for presenting structured content.",
    items: [
      { label: "Avatar", href: "/docs/components/avatar" },
      { label: "Card", href: "/docs/components/card" },
      { label: "Table", href: "/docs/components/table" },
      { label: "Accordion", href: "/docs/components/accordion" },
      { label: "Tag", href: "/docs/components/tag" },
      { label: "Carousel", href: "/docs/components/carousel" },
      { label: "Banner", href: "/docs/components/banner" },
      { label: "Timeline", href: "/docs/components/timeline" },
    ],
  },
  {
    name: "Form",
    description: "Composite form controls with built-in a11y wiring.",
    items: [
      { label: "FormField", href: "/docs/components/form-field" },
      { label: "SearchInput", href: "/docs/components/search-input" },
      { label: "NumberInput", href: "/docs/components/number-input" },
    ],
  },
];

const categoryColors: Record<string, string> = {
  Basic: "text-violet-400",
  Layout: "text-blue-400",
  Navigation: "text-cyan-400",
  Feedback: "text-amber-400",
  Overlay: "text-pink-400",
  "Data Display": "text-emerald-400",
  Form: "text-orange-400",
};

export default function ComponentsPage() {
  const total = categories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <div className="py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-3">Components</h1>
        <p className="text-white/50 text-lg">
          {total} components across {categories.length} categories — all accessible, typed, and dark-mode ready.
        </p>
      </div>

      <div className="space-y-10">
        {categories.map((category) => (
          <section key={category.name}>
            <div className="mb-4">
              <h2 className={`text-xs font-semibold uppercase tracking-wider mb-1 ${categoryColors[category.name]}`}>
                {category.name}
              </h2>
              <p className="text-sm text-white/40">{category.description}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {category.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between bg-[#111] border border-white/8 hover:border-white/20 hover:bg-white/[0.04] rounded-xl px-4 py-3 transition-colors"
                >
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                  <span className="text-white/20 group-hover:text-white/50 transition-colors text-xs">→</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
