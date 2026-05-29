"use client";
import { Grid } from "anexui";

export default function GridPreview() {
  return (
    <div className="w-full">
      <Grid cols={3} gap="3" style={{ width: "100%" }}>
        {["One", "Two", "Three", "Four", "Five", "Six"].map((label) => (
          <div key={label} style={{ padding: "var(--space-3)", borderRadius: "var(--radius-md)", background: "var(--color-primary-subtle)", border: "1px solid var(--color-border)", textAlign: "center", fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>
            {label}
          </div>
        ))}
      </Grid>
    </div>
  );
}
