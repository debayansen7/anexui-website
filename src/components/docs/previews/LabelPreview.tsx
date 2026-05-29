"use client";
import { Label, Input } from "anexui";

export default function LabelPreview() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-xs">
      <div className="flex flex-col gap-1">
        <Label htmlFor="prev-email">Email address</Label>
        <Input id="prev-email" type="email" placeholder="you@example.com" />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="prev-name" required>Full name</Label>
        <Input id="prev-name" placeholder="John Doe" />
      </div>
    </div>
  );
}
