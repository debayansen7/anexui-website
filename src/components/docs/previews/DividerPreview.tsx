"use client";
import { Divider, Stack } from "anexui";

export default function DividerPreview() {
  return (
    <div className="w-full flex flex-col gap-5 max-w-sm">
      <Divider />
      <Divider label="or continue with" />
      <Stack direction="row" align="center" gap="4" style={{ height: 40 }}>
        <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>Left</span>
        <Divider orientation="vertical" />
        <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>Right</span>
      </Stack>
    </div>
  );
}
