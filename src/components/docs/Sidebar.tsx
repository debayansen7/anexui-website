"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docNav } from "@/data/components";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 shrink-0 hidden lg:block">
      <nav className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto pr-4 py-8 space-y-6">
        {docNav.map((group) => (
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
