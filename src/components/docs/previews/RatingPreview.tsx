"use client";
import { useState } from "react";
import { Rating } from "anexui";

export default function RatingPreview() {
  const [value, setValue] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "center" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>
          Interactive — selected: {value || "—"}
        </span>
        <Rating value={value} onChange={setValue} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "center" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Read-only — 3.5 stars with half</span>
        <Rating value={3.5} readOnly allowHalf />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "center" }}>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>sm</span>
          <Rating defaultValue={4} size="sm" readOnly />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "center" }}>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>md</span>
          <Rating defaultValue={4} size="md" readOnly />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "center" }}>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>lg</span>
          <Rating defaultValue={4} size="lg" readOnly />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "center" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Disabled</span>
        <Rating defaultValue={3} disabled />
      </div>
    </div>
  );
}
