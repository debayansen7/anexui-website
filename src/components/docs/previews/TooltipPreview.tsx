"use client";
import { Tooltip, Button, Stack } from "anexui";

export default function TooltipPreview() {
  return (
    <Stack direction="row" gap="4" wrap align="center">
      <Tooltip content="Saves your progress" side="top">
        <Button size="sm" variant="primary">Save</Button>
      </Tooltip>
      <Tooltip content="Permanently removes the item" side="bottom">
        <Button size="sm" variant="danger">Delete</Button>
      </Tooltip>
      <Tooltip content="Copy to clipboard" side="right">
        <Button size="sm" variant="ghost">Copy</Button>
      </Tooltip>
      <Tooltip content="Opens in a new tab" side="left">
        <Button size="sm" variant="outline">External ↗</Button>
      </Tooltip>
    </Stack>
  );
}
