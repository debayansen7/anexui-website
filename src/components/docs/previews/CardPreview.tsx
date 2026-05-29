"use client";
import { Card, CardHeader, CardBody, CardFooter, Button, Stack, Avatar, Badge } from "anexui";

export default function CardPreview() {
  return (
    <div className="flex flex-wrap gap-5 justify-center w-full">
      {/* Compound card */}
      <Card style={{ width: 260 }} shadow="sm" rounded="xl">
        <CardHeader>
          <p style={{ margin: 0, fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>Project report</p>
          <p style={{ margin: "var(--space-1) 0 0", fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Last updated 2 hours ago</p>
        </CardHeader>
        <CardBody>
          <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", lineHeight: 1.6 }}>
            Q2 metrics up 14% vs last quarter. All KPIs on track.
          </p>
        </CardBody>
        <CardFooter>
          <Stack direction="row" gap="2">
            <Button size="sm" variant="primary">View</Button>
            <Button size="sm" variant="ghost">Share</Button>
          </Stack>
        </CardFooter>
      </Card>

      {/* Profile card */}
      <Card style={{ width: 200 }} shadow="sm" rounded="xl">
        <CardBody>
          <Stack direction="column" gap="3" align="center">
            <Avatar initials="DS" size="lg" status="online" />
            <Stack direction="column" gap="1" align="center">
              <span style={{ fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>Debayan Sen</span>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Frontend Engineer</span>
              <Badge variant="primary" size="sm">Pro</Badge>
            </Stack>
          </Stack>
        </CardBody>
        <CardFooter>
          <Stack direction="row" gap="2" justify="center">
            <Button size="sm" variant="outline">Message</Button>
            <Button size="sm" variant="primary">Follow</Button>
          </Stack>
        </CardFooter>
      </Card>

      {/* Hoverable standalone card */}
      <Card padding="var(--space-5)" rounded="xl" shadow="md" hoverable style={{ width: 180 }}>
        <Stack direction="column" gap="2">
          <span style={{ fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>Hover me</span>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>hoverable + shadow="md"</span>
        </Stack>
      </Card>
    </div>
  );
}
