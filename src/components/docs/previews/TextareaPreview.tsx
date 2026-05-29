"use client";
import { Textarea } from "anexui";

export default function TextareaPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Textarea placeholder="Write something…" rows={3} />
      <Textarea error placeholder="Error state" rows={2} resize="none" />
    </div>
  );
}
