"use client";
import { Avatar, Stack } from "anexui";

export default function AvatarPreview() {
  return (
    <Stack direction="row" gap="4" align="center" wrap>
      <Avatar initials="AC" size="xl" status="online" />
      <Avatar initials="BM" size="lg" status="away" />
      <Avatar initials="CW" size="md" status="busy" />
      <Avatar initials="DS" size="sm" status="offline" />
      <Avatar size="xs" />
    </Stack>
  );
}
