"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { docNav } from "@/data/components";
import { Button, Drawer } from "anexui";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <div className="lg:hidden sticky top-16 z-40 border-b border-white/8 bg-[#080808]/90 backdrop-blur-md px-4 h-11 flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          className="p-0! w-8 h-8"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
        <span className="text-sm text-white/50">Documentation</span>
      </div>

      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        side="left"
        title="Documentation"
      >
        <nav className="space-y-6">
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
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
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
      </Drawer>
    </>
  );
}
