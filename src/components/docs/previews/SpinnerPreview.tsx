"use client";
import { Spinner, Stack } from "anexui";

export default function SpinnerPreview() {
  return (
    <Stack direction="row" gap="8" align="center">
      <Spinner size="sm" label="Loading" />
      <Spinner size="md" label="Loading" />
      <Spinner size="lg" label="Loading" />
    </Stack>
  );
}
