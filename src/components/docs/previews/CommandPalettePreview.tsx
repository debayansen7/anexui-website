"use client";
import { useState, useMemo } from "react";

// CommandPalette uses a native <dialog> (browser top-layer) which cannot be CSS-contained.
// The panel UI is rendered inline so it stays within the preview area.

const ALL_ITEMS = [
  { id: "button",    label: "Button",       group: "Components" },
  { id: "input",     label: "Input",        group: "Components" },
  { id: "modal",     label: "Modal",        group: "Components" },
  { id: "tabs",      label: "Tabs",         group: "Components" },
  { id: "accordion", label: "Accordion",    group: "Components" },
  { id: "install",   label: "Installation", group: "Docs"       },
  { id: "theming",   label: "Theming",      group: "Docs"       },
];

export default function CommandPalettePreview() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return ALL_ITEMS;
    const q = query.toLowerCase();
    return ALL_ITEMS.filter((i) => i.label.toLowerCase().includes(q));
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof ALL_ITEMS>();
    for (const item of filtered) {
      if (!map.has(item.group)) map.set(item.group, []);
      map.get(item.group)!.push(item);
    }
    return map;
  }, [filtered]);

  return (
    <div style={{ width: "100%", maxWidth: 480 }}>
      <div style={{
        border: "1px solid var(--color-border-strong)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        background: "var(--color-surface-raised)",
        boxShadow: "var(--shadow-xl)",
      }}>
        {/* Input row */}
        <div style={{
          display: "flex", alignItems: "center", gap: "var(--space-3)",
          padding: "0 var(--space-4)", borderBottom: "1px solid var(--color-border)",
        }}>
          <SearchIcon />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search components and docs…"
            style={{
              flex: 1, background: "transparent", border: "none", outline: "none",
              padding: "var(--space-4) 0", fontSize: "var(--text-sm)",
              color: "var(--color-text)", fontFamily: "var(--font-sans)",
            }}
          />
        </div>

        {/* Results */}
        <div style={{ maxHeight: 220, overflowY: "auto", padding: "var(--space-2)" }}>
          {filtered.length === 0 && (
            <p style={{ textAlign: "center", padding: "var(--space-6)", margin: 0, fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>
              No results for &ldquo;{query}&rdquo;
            </p>
          )}
          {Array.from(grouped.entries()).map(([group, items]) => (
            <div key={group}>
              <p style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--color-text-disabled)", textTransform: "uppercase", letterSpacing: "0.06em", padding: "var(--space-2) var(--space-3) var(--space-1)", margin: 0 }}>
                {group}
              </p>
              {items.map((item) => (
                <div key={item.id} style={{
                  padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-lg)",
                  fontSize: "var(--text-sm)", color: "var(--color-text)",
                  cursor: "default",
                }}>
                  {item.label}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          display: "flex", gap: "var(--space-4)", padding: "var(--space-2-5) var(--space-4)",
          borderTop: "1px solid var(--color-border)", fontSize: "var(--text-xs)", color: "var(--color-text-disabled)",
        }}>
          <span><kbd style={{ border: "1px solid var(--color-border-strong)", borderRadius: "var(--radius-sm)", padding: "1px 4px" }}>↑↓</kbd> navigate</span>
          <span><kbd style={{ border: "1px solid var(--color-border-strong)", borderRadius: "var(--radius-sm)", padding: "1px 4px" }}>↵</kbd> select</span>
          <span><kbd style={{ border: "1px solid var(--color-border-strong)", borderRadius: "var(--radius-sm)", padding: "1px 4px" }}>Esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-text-subtle)", flexShrink: 0 }}>
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
