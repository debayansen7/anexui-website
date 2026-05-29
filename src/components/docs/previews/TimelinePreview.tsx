"use client";
import { Timeline } from "anexui";

export default function TimelinePreview() {
  return (
    <Timeline items={[
      { id: "1", title: "Order placed", time: "10:00 AM", status: "completed", description: "Payment confirmed" },
      { id: "2", title: "Processing", time: "10:15 AM", status: "completed" },
      { id: "3", title: "Shipped", time: "2:00 PM", status: "current", description: "In transit with FedEx" },
      { id: "4", title: "Out for delivery", status: "upcoming" },
      { id: "5", title: "Delivered", status: "upcoming" },
    ]} />
  );
}
