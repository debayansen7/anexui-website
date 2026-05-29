"use client";
import { useState } from "react";
import { TableOfContents, Button } from "anexui";

const TOC_ITEMS = [
  { id: "preview",     label: "Preview",      level: 2 },
  { id: "usage",       label: "Usage",        level: 2 },
  { id: "controlled",  label: "Controlled",   level: 3 },
  { id: "props",       label: "Props",        level: 2 },
  { id: "toc-item",    label: "TocItem type", level: 3 },
  { id: "a11y",        label: "Accessibility", level: 2 },
];

export default function TableOfContentsPreview() {
  const [activeId, setActiveId] = useState("preview");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-lg)",
          padding: "var(--space-4)",
          width: "220px",
        }}
      >
        <TableOfContents items={TOC_ITEMS} activeId={activeId} label="On this page" />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", justifyContent: "center" }}>
        {TOC_ITEMS.map((item) => (
          <Button
            key={item.id}
            size="sm"
            variant={activeId === item.id ? "primary" : "ghost"}
            onClick={() => setActiveId(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
