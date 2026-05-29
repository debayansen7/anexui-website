"use client";
import { useState } from "react";
import { Sidebar } from "anexui";

const NAV_ITEMS = ["Dashboard", "Projects", "Team", "Analytics", "Settings"];

export default function SidebarPreview() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Dashboard");

  return (
    <div
      style={{
        display: "flex",
        height: 340,
        width: "100%",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
      }}
    >
      <Sidebar
        isOpen={open}
        onToggle={setOpen}
        header={
          <span style={{ fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>
            Anex UI
          </span>
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-0-5)", padding: "0 var(--space-2)" }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "var(--space-1-5) var(--space-3)",
                borderRadius: "var(--radius-lg)",
                border: "none",
                background: active === item ? "var(--color-primary-subtle)" : "transparent",
                color: active === item ? "var(--color-primary)" : "var(--color-text-subtle)",
                fontWeight: active === item ? 500 : 400,
                fontSize: "var(--text-sm)",
                fontFamily: "var(--font-sans)",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </Sidebar>

      <main style={{ flex: 1, padding: "var(--space-6)", overflow: "hidden" }}>
        <p style={{ margin: 0, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--color-text)" }}>
          {active}
        </p>
        <p style={{ margin: "var(--space-2) 0 0", fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>
          Toggle with the chevron button on the sidebar edge.
        </p>
      </main>
    </div>
  );
}
