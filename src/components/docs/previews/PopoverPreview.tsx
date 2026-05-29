"use client";
import { Popover, Button, Stack } from "anexui";

export default function PopoverPreview() {
  return (
    <Stack direction="row" gap="3" wrap>
      <Popover
        content={
          <div style={{ minWidth: 150, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            <p style={{ margin: "0 0 var(--space-2)", fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--color-text-subtle)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Filter by</p>
            {["Date", "Name", "Status", "Owner"].map((o) => (
              <button key={o} style={{ textAlign: "left", padding: "var(--space-1) var(--space-2)", background: "none", border: "none", borderRadius: "var(--radius-sm)", cursor: "pointer", fontSize: "var(--text-sm)", color: "var(--color-text)" }}>{o}</button>
            ))}
          </div>
        }
        side="bottom" align="start"
      >
        <Button size="sm" variant="outline">Filter ▾</Button>
      </Popover>

      <Popover
        content={
          <div style={{ minWidth: 130, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            {["Edit", "Duplicate", "Archive", "Delete"].map((o) => (
              <button key={o} style={{ textAlign: "left", padding: "var(--space-1) var(--space-2)", background: "none", border: "none", borderRadius: "var(--radius-sm)", cursor: "pointer", fontSize: "var(--text-sm)", color: o === "Delete" ? "var(--color-danger)" : "var(--color-text)" }}>{o}</button>
            ))}
          </div>
        }
        side="bottom" align="end"
      >
        <Button size="sm" variant="ghost">Actions ⋯</Button>
      </Popover>
    </Stack>
  );
}
