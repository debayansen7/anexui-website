"use client";
import { useState, useMemo } from "react";
import { CommandPalette, Button } from "anexui";

const ALL_ITEMS = [
  { id: "button",    label: "Button",    group: "Components" },
  { id: "input",     label: "Input",     group: "Components" },
  { id: "modal",     label: "Modal",     group: "Components" },
  { id: "tabs",      label: "Tabs",      group: "Components" },
  { id: "toast",     label: "Toast",     group: "Components" },
  { id: "accordion", label: "Accordion", group: "Components" },
  { id: "install",   label: "Installation",  group: "Docs" },
  { id: "theming",   label: "Theming",        group: "Docs" },
  { id: "changelog", label: "Changelog",      group: "Docs" },
];

export default function CommandPalettePreview() {
  const [open, setOpen]   = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return ALL_ITEMS;
    const q = query.toLowerCase();
    return ALL_ITEMS.filter((i) => i.label.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Search components… &nbsp;<kbd style={{ opacity: 0.6, fontSize: "var(--text-xs)" }}>⌘K</kbd>
      </Button>

      <CommandPalette
        isOpen={open}
        onClose={() => { setOpen(false); setQuery(""); }}
        placeholder="Search components and docs…"
        items={filtered}
        onSearch={setQuery}
        emptyText="No results found."
      />
    </>
  );
}
