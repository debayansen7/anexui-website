"use client";
import { Container } from "anexui";

export default function ContainerPreview() {
  return (
    <div className="w-full flex flex-col gap-2">
      {(["sm", "md", "lg", "xl"] as const).map((size) => (
        <Container key={size} maxWidth={size}>
          <div
            style={{ background: "var(--color-primary-subtle)", border: "1px dashed var(--color-primary)", borderRadius: "var(--radius-sm)", padding: "var(--space-2)", textAlign: "center", fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}
          >
            maxWidth=&quot;{size}&quot;
          </div>
        </Container>
      ))}
    </div>
  );
}
