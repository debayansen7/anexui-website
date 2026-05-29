"use client";
import { Stack } from "anexui";

const Chip = ({ label }: { label: string }) => (
  <div style={{ padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-md)", background: "var(--color-primary-subtle)", border: "1px solid var(--color-border)", fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>
    {label}
  </div>
);

export default function StackPreview() {
  return (
    <div className="w-full flex flex-col gap-6">
      <Stack direction="row" gap="3" align="center">
        <Chip label="Row" />
        <Chip label="Item" />
        <Chip label="Stack" />
      </Stack>
      <Stack direction="row" gap="3" justify="between" align="center" style={{ width: "100%" }}>
        <Chip label="Left" />
        <Chip label="Center" />
        <Chip label="Right" />
      </Stack>
      <Stack direction="column" gap="2" style={{ width: 120 }}>
        <Chip label="Column" />
        <Chip label="Stack" />
        <Chip label="Items" />
      </Stack>
    </div>
  );
}
