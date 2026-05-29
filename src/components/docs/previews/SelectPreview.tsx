"use client";
import { Select } from "anexui";

export default function SelectPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Select placeholder="Choose a country…">
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="in">India</option>
        <option value="ca">Canada</option>
      </Select>
      <Select error>
        <option value="">Select a plan — error state</option>
        <option value="free">Free</option>
        <option value="pro">Pro</option>
      </Select>
    </div>
  );
}
