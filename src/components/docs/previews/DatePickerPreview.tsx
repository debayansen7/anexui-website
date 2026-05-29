"use client";
import { useState } from "react";
import { DatePicker } from "anexui";

function plusDays(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d;
}

export default function DatePickerPreview() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-6)",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>
          Default{value ? ` — ${value.toLocaleDateString()}` : ""}
        </span>
        <DatePicker value={value} onChange={setValue} placeholder="Pick a date" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>With Min / Max (today → +14 days)</span>
        <DatePicker
          placeholder="Today → +14 days"
          min={new Date()}
          max={plusDays(14)}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Disabled</span>
        <DatePicker placeholder="Disabled" disabled />
      </div>
    </div>
  );
}
