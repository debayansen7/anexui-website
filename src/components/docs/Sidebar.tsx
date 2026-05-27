"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  {
    section: "Getting Started",
    items: [
      { label: "Installation", href: "/docs/getting-started" },
      { label: "Theming", href: "/docs/theming" },
    ],
  },
  {
    section: "Basic",
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
    section: "Layout",
    items: [
      { label: "Container", href: "/docs/components/container" },
      { label: "Stack", href: "/docs/components/stack" },
      { label: "Grid", href: "/docs/components/grid" },
      { label: "Divider", href: "/docs/components/divider" },
    ],
  },
  {
    section: "Navigation",
    items: [
      { label: "Tabs", href: "/docs/components/tabs" },
      { label: "Breadcrumb", href: "/docs/components/breadcrumb" },
      { label: "Pagination", href: "/docs/components/pagination" },
      { label: "Stepper", href: "/docs/components/stepper" },
    ],
  },
  {
    section: "Feedback",
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
    section: "Overlay",
    items: [
      { label: "Modal", href: "/docs/components/modal" },
      { label: "Drawer", href: "/docs/components/drawer" },
      { label: "Tooltip", href: "/docs/components/tooltip" },
      { label: "Popover", href: "/docs/components/popover" },
    ],
  },
  {
    section: "Data Display",
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
    section: "Form",
    items: [
      { label: "FormField", href: "/docs/components/form-field" },
      { label: "SearchInput", href: "/docs/components/search-input" },
      { label: "NumberInput", href: "/docs/components/number-input" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 shrink-0 hidden lg:block">
      <nav className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto pr-4 py-8 space-y-6">
        {nav.map((group) => (
          <div key={group.section}>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-2 px-3">
              {group.section}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        active
                          ? "bg-violet-600/20 text-violet-300 font-medium"
                          : "text-white/50 hover:text-white/80 hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
