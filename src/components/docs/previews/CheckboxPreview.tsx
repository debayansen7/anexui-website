"use client";
import { Checkbox } from "anexui";

export default function CheckboxPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <Checkbox label="Accept terms and conditions" />
      <Checkbox label="Subscribe to newsletter" defaultChecked />
      <Checkbox label="Partial selection" indeterminate />
      <Checkbox label="Unavailable option" disabled />
    </div>
  );
}
