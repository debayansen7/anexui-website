"use client";
import { Input } from "anexui";

export default function InputPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Input placeholder="Default input" />
      <Input type="email" placeholder="you@example.com" />
      <Input error placeholder="Invalid — error state" />
      <Input disabled placeholder="Disabled input" />
    </div>
  );
}
