"use client";
import { useState } from "react";
import { OTPInput } from "anexui";

export default function OTPInputPreview() {
  const [otp6, setOtp6] = useState("");
  const [otp4, setOtp4] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Default — 6 digits</span>
        <OTPInput length={6} value={otp6} onChange={setOtp6} />
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>
          Value: <strong>{otp6 || "—"}</strong>
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>4-digit text mode</span>
        <OTPInput length={4} value={otp4} onChange={setOtp4} type="text" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "center" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>Disabled</span>
        <OTPInput length={6} value="123456" disabled />
      </div>
    </div>
  );
}
