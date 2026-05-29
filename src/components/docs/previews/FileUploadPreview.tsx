"use client";
import { FileUpload } from "anexui";

export default function FileUploadPreview() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)",
        width: "100%",
        maxWidth: "480px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Default (single file)</span>
        <FileUpload />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Multiple images</span>
        <FileUpload multiple accept="image/*" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Disabled</span>
        <FileUpload disabled />
      </div>
    </div>
  );
}
