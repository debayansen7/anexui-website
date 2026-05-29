"use client";
import { Callout } from "anexui";

export default function CalloutPreview() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
        width: "100%",
        maxWidth: "560px",
      }}
    >
      <Callout variant="info" title="Heads up">
        This feature is in beta. Expect breaking changes in future releases.
      </Callout>
      <Callout variant="warning" title="Deprecated">
        The <code>color</code> prop is deprecated — use <code>variant</code> instead.
      </Callout>
      <Callout variant="success" title="Deployed">
        Your changes have been published to production successfully.
      </Callout>
      <Callout variant="danger" title="Destructive action">
        Deleting this record cannot be undone. Proceed with caution.
      </Callout>
      <Callout variant="neutral" title="Note">
        Components follow the WAI-ARIA Authoring Practices Guide.
      </Callout>
    </div>
  );
}
