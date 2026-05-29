"use client";
import { Switch } from "anexui";

export default function SwitchPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <Switch label="Enable notifications" />
      <Switch label="Dark mode" defaultChecked />
      <Switch label="Beta features" />
      <Switch label="Unavailable toggle" disabled />
    </div>
  );
}
