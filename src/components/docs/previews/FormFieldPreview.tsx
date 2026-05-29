"use client";
import { FormField, Input, Textarea } from "anexui";

export default function FormFieldPreview() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <FormField label="Email address" helperText="We'll never share your email." required>
        <Input type="email" placeholder="you@example.com" />
      </FormField>
      <FormField label="Password" required error errorText="Must be at least 8 characters.">
        <Input type="password" placeholder="Enter password" />
      </FormField>
      <FormField label="Bio" helperText="Max 200 characters.">
        <Textarea rows={3} placeholder="Tell us about yourself…" />
      </FormField>
    </div>
  );
}
