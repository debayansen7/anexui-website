"use client";
import { Badge, Stack } from "anexui";

export default function BadgePreview() {
  return (
    <Stack direction="row" gap="2" wrap align="center">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">New</Badge>
      <Badge variant="success">Approved</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="error">Failed</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="primary" dot />
      <Badge variant="success" dot />
      <Badge variant="error" dot />
    </Stack>
  );
}
