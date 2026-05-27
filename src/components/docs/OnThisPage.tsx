"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

export default function OnThisPage() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("main h2[id], main h3[id]")
    );
    const parsed: Heading[] = els.map((el) => ({
      id: el.id,
      text: el.textContent ?? "",
      level: el.tagName === "H2" ? 2 : 3,
    }));
    setHeadings(parsed);
    setActiveId(parsed[0]?.id ?? "");
  }, [pathname]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-8% 0% -80% 0%", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="w-48 shrink-0 hidden xl:block">
      <nav aria-label="On this page" className="sticky top-20 pt-8">
        <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3 px-1">
          On this page
        </p>
        <ul className="space-y-0.5">
          {headings.map(({ id, text, level }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block text-sm py-1 px-1 rounded transition-colors leading-snug ${
                  level === 3 ? "pl-4" : ""
                } ${
                  activeId === id
                    ? "text-violet-400"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
