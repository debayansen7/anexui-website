"use client";
import { Progress } from "anexui";

export default function ProgressPreview() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Progress value={65} label="Upload progress" showValue />
      <Progress value={100} variant="success" label="Complete" showValue />
      <Progress value={42} variant="warning" label="Storage quota" showValue />
      <Progress value={88} variant="error" label="CPU usage" showValue />
    </div>
  );
}
