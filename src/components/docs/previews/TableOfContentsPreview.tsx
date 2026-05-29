"use client";
import { useState } from "react";
import { TableOfContents, Button } from "anexui";

const TOC_ITEMS = [
  { id: "preview",     text: "Preview",       level: 2 as const },
  { id: "usage",       text: "Usage",         level: 2 as const },
  { id: "controlled",  text: "Controlled",    level: 3 as const },
  { id: "props",       text: "Props",         level: 2 as const },
  { id: "toc-item",    text: "TocItem type",  level: 3 as const },
  { id: "a11y",        text: "Accessibility", level: 2 as const },
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
            {item.text}
          </Button>
        ))}
      </div>
    </div>
  );
}
