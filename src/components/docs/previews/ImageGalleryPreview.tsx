"use client";

// ImageGallery is available in anexui v1.0.0 — update the package to see the live preview.
export default function ImageGalleryPreview() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        borderRadius: "var(--radius-xl)",
        border: "1px dashed var(--color-border)",
        color: "var(--color-text-subtle)",
        fontSize: "var(--text-sm)",
      }}
    >
      Preview available after publishing <strong style={{ marginLeft: 4 }}>anexui@1.0.0</strong>
    </div>
  );
}
