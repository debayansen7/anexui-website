"use client";
import { useState } from "react";
import { Button } from "anexui";

export default function ButtonPreview() {
  const [loading, setLoading] = useState(false);
  const trigger = () => { setLoading(true); setTimeout(() => setLoading(false), 1500); };
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <Button variant="primary" size="md">Primary</Button>
      <Button variant="secondary" size="md">Secondary</Button>
      <Button variant="outline" size="md">Outline</Button>
      <Button variant="ghost" size="md">Ghost</Button>
      <Button variant="danger" size="md">Danger</Button>
      <Button variant="primary" size="md" loading={loading} onClick={trigger}>
        {loading ? "Saving…" : "Click to load"}
      </Button>
    </div>
  );
}
