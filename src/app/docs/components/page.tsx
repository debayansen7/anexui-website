import type { Metadata } from "next";
import Link from "next/link";
import { catalog, components } from "@/data/components";

export const metadata: Metadata = { title: "Components" };

export default function ComponentsPage() {
  return (
    <div className="py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-3">Components</h1>
        <p className="text-white/50 text-lg">
          {components.length} components across {catalog.length} categories — all accessible, typed, and dark-mode ready.
        </p>
      </div>

      <div className="space-y-10">
        {catalog.map(({ category, meta, items }) => (
          <section key={category}>
            <div className="mb-4">
              <h2 className={`text-xs font-semibold uppercase tracking-wider mb-1 ${meta.textColor}`}>
                {category}
              </h2>
              <p className="text-sm text-white/40">{meta.description}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between bg-[#111] border border-white/8 hover:border-white/20 hover:bg-white/4 rounded-xl px-4 py-3 transition-colors"
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
