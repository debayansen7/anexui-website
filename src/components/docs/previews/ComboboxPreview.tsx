"use client";
import { useState } from "react";
import { Combobox } from "anexui";

const FRAMEWORKS = [
  { value: "react",   label: "React" },
  { value: "vue",     label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte",  label: "Svelte" },
  { value: "solid",   label: "SolidJS" },
  { value: "astro",   label: "Astro" },
  { value: "nuxt",    label: "Nuxt" },
  { value: "remix",   label: "Remix" },
];

export default function ComboboxPreview() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-6)",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Default</span>
        <Combobox
          options={FRAMEWORKS}
          value={value1}
          onChange={setValue1}
          placeholder="Select framework…"
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Clearable</span>
        <Combobox
          options={FRAMEWORKS}
          value={value2}
          onChange={setValue2}
          placeholder="Select framework…"
          clearable
        />
      </div>
    </div>
  );
}
