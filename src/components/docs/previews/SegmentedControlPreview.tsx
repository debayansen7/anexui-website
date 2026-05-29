"use client";
import { useState } from "react";
import { SegmentedControl } from "anexui";

const ListIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

const GridIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
  </svg>
);

const MapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" />
  </svg>
);

const VIEW_OPTIONS = [
  { value: "list", label: "List", icon: <ListIcon /> },
  { value: "grid", label: "Grid", icon: <GridIcon /> },
  { value: "map",  label: "Map",  icon: <MapIcon /> },
];

const SIZE_OPTIONS_SM = [
  { value: "sm", label: "Small" },
  { value: "md", label: "Medium" },
];

const FULL_OPTIONS = [
  { value: "day",   label: "Day" },
  { value: "week",  label: "Week" },
  { value: "month", label: "Month" },
];

export default function SegmentedControlPreview() {
  const [view,    setView]    = useState("list");
  const [sizeSel, setSizeSel] = useState("sm");
  const [period,  setPeriod]  = useState("week");

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
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>With icons</span>
        <SegmentedControl options={VIEW_OPTIONS} value={view} onChange={setView} />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", justifyContent: "center", alignItems: "flex-end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "center" }}>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Size: sm</span>
          <SegmentedControl options={SIZE_OPTIONS_SM} value={sizeSel} onChange={setSizeSel} size="sm" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "center" }}>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Size: md</span>
          <SegmentedControl options={SIZE_OPTIONS_SM} value={sizeSel} onChange={setSizeSel} size="md" />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "center", width: "100%", maxWidth: "320px" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Full width</span>
        <SegmentedControl options={FULL_OPTIONS} value={period} onChange={setPeriod} fullWidth />
      </div>
    </div>
  );
}
