"use client";
import { useState } from "react";
import { Drawer, Button, Stack } from "anexui";

export default function DrawerPreview() {
  const [side, setSide] = useState<"right" | "left" | "bottom">("right");
  const [open, setOpen] = useState(false);
  const openWith = (s: typeof side) => { setSide(s); setOpen(true); };
  return (
    <>
      <Stack direction="row" gap="2" wrap>
        <Button size="sm" variant="secondary" onClick={() => openWith("right")}>Right</Button>
        <Button size="sm" variant="secondary" onClick={() => openWith("left")}>Left</Button>
        <Button size="sm" variant="secondary" onClick={() => openWith("bottom")}>Bottom</Button>
      </Stack>
      <Drawer isOpen={open} onClose={() => setOpen(false)} side={side} size="md" title={`${side.charAt(0).toUpperCase() + side.slice(1)} drawer`}>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", margin: 0 }}>
          Slides in from the {side}. Press Escape or click outside to close.
        </p>
      </Drawer>
    </>
  );
}
