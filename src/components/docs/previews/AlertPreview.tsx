"use client";
import { Alert } from "anexui";

export default function AlertPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      <Alert variant="success" title="Changes saved">Your profile has been updated.</Alert>
      <Alert variant="error" title="Upload failed">Max file size is 5 MB.</Alert>
      <Alert variant="warning">Your session expires in 5 minutes.</Alert>
      <Alert variant="info" title="New feature">Dark mode is now available.</Alert>
    </div>
  );
}
