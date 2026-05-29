"use client";
import { ToastProvider, useToast, Button, Stack } from "anexui";

function ToastButtons() {
  const { toast } = useToast();
  return (
    <Stack direction="row" gap="2" wrap>
      <Button size="sm" variant="secondary" onClick={() => toast("Default message")}>Default</Button>
      <Button size="sm" variant="secondary" onClick={() => toast({ message: "Saved!", type: "success" })}>Success</Button>
      <Button size="sm" variant="secondary" onClick={() => toast({ message: "Failed", type: "error" })}>Error</Button>
      <Button size="sm" variant="secondary" onClick={() => toast({ message: "Check input", type: "warning" })}>Warning</Button>
      <Button size="sm" variant="secondary" onClick={() => toast({ message: "FYI", type: "info" })}>Info</Button>
    </Stack>
  );
}

export default function ToastPreview() {
  return (
    <ToastProvider>
      <ToastButtons />
    </ToastProvider>
  );
}
