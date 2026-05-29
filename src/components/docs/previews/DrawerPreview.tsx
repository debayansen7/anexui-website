"use client";

// Drawer uses a native <dialog> (browser top-layer) which cannot be CSS-contained.
// The panel is rendered inline as a split-view so it stays within the preview area.
export default function DrawerPreview() {
  return (
    <div style={{
      display: "flex",
      width: "100%",
      height: 220,
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
    }}>
      {/* Simulated page content */}
      <div style={{ flex: 1, padding: "var(--space-5)", background: "var(--color-background)" }}>
        <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>Page content</p>
      </div>

      {/* Simulated right drawer panel */}
      <div style={{
        width: 220,
        display: "flex",
        flexDirection: "column",
        background: "var(--color-surface-raised)",
        borderLeft: "1px solid var(--color-border)",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 var(--space-4)", height: "3.5rem",
          borderBottom: "1px solid var(--color-border)", flexShrink: 0,
        }}>
          <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--color-text)" }}>Right drawer</span>
          <span style={{ color: "var(--color-text-subtle)", cursor: "default" }}>✕</span>
        </div>
        <div style={{ padding: "var(--space-4)", flex: 1 }}>
          <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>
            Slides in from right, left, or bottom. Press Escape or click outside to close.
          </p>
        </div>
      </div>
    </div>
  );
}
