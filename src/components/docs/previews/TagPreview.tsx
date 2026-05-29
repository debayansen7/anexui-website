"use client";
import { useState } from "react";
import { Tag, Stack, Button } from "anexui";

const INITIAL = ["React", "TypeScript", "Tailwind", "Accessible", "MIT"];

export default function TagPreview() {
  const [tags, setTags] = useState(INITIAL);
  return (
    <Stack direction="row" gap="2" wrap align="center">
      {tags.map((t) => (
        <Tag key={t} variant="primary" onRemove={() => setTags((prev) => prev.filter((x) => x !== t))}>{t}</Tag>
      ))}
      {tags.length === 0 && (
        <Button size="sm" variant="ghost" onClick={() => setTags(INITIAL)}>Reset tags</Button>
      )}
    </Stack>
  );
}
