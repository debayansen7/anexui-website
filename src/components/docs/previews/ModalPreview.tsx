"use client";
import { Button, Stack } from "anexui";

// Modal uses a native <dialog> (browser top-layer) which cannot be CSS-contained.
// The panel is rendered inline so it stays within the preview area.
export default function ModalPreview() {
  return (
    <div style={{ width: "100%", maxWidth: 480 }}>
      <div style={{
        background: "var(--color-surface-raised)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-xl)",
        overflow: "hidden",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "var(--space-4) var(--space-5)",
          borderBottom: "1px solid var(--color-border)",
        }}>
          <h3 style={{ margin: 0, fontSize: "var(--text-lg)", fontWeight: 600, color: "var(--color-text)" }}>
            Confirm action
          </h3>
          <span style={{ color: "var(--color-text-subtle)", cursor: "default", fontSize: "var(--text-base)" }}>✕</span>
        </div>
        <p style={{ margin: "var(--space-3) var(--space-5) 0", fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>
          This cannot be undone.
        </p>
        <div style={{ padding: "var(--space-5)" }}>
          <p style={{ margin: "0 0 var(--space-4)", fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>
            Are you sure you want to delete this item? All associated data will be permanently removed.
          </p>
          <Stack direction="row" gap="2" justify="end">
            <Button variant="ghost" size="sm">Cancel</Button>
            <Button variant="danger" size="sm">Delete</Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
