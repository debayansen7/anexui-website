"use client";
import { useState } from "react";
import { NumberInput } from "anexui";

export default function NumberInputPreview() {
  const [qty, setQty] = useState(1);
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-1 items-center">
        <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Quantity (1–99)</p>
        <NumberInput value={qty} onChange={setQty} min={1} max={99} step={1} />
      </div>
      <div className="flex flex-col gap-1 items-center">
        <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Rating (0–5, step 0.5)</p>
        <NumberInput defaultValue={3} min={0} max={5} step={0.5} />
      </div>
    </div>
  );
}
