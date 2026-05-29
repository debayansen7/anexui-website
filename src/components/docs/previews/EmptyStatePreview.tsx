"use client";
import { EmptyState, Button } from "anexui";

const InboxIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
  </svg>
);

export default function EmptyStatePreview() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-8)",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <EmptyState
        icon={<InboxIcon />}
        title="No messages yet"
        description="When you receive a message it will appear here."
        action={<Button variant="primary" size="sm">Compose message</Button>}
      />

      <EmptyState title="Nothing to show" />
    </div>
  );
}
