"use client";
import { useState } from "react";
import { Modal, Button, Stack } from "anexui";

export default function ModalPreview() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>Open modal</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm action" description="This cannot be undone." size="md">
        <p style={{ margin: "0 0 var(--space-4)", fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>
          Are you sure you want to delete this item? All associated data will be permanently removed.
        </p>
        <Stack direction="row" gap="2" justify="end">
          <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="danger" size="sm" onClick={() => setOpen(false)}>Delete</Button>
        </Stack>
      </Modal>
    </>
  );
}
