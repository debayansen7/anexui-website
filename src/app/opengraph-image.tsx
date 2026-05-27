import { ImageResponse } from "next/og";

export const alt = "Anex UI — Accessible React components built with Tailwind CSS v4";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Radial gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "380px",
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.28), transparent)",
          }}
        />

        {/* Version badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(124,58,237,0.30)",
            borderRadius: "100px",
            padding: "6px 18px",
            marginBottom: "32px",
            color: "#c4b5fd",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "100%",
              background: "#a78bfa",
            }}
          />
          v0.1.0 — Now on npm
        </div>

        {/* Logo + name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "68px",
              height: "68px",
              background: "rgba(124,58,237,0.18)",
              border: "1px solid rgba(124,58,237,0.40)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "38px",
              fontWeight: "800",
              color: "#a78bfa",
            }}
          >
            A
          </div>
          <span
            style={{
              fontSize: "64px",
              fontWeight: "800",
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            Anex UI
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "26px",
            color: "rgba(255,255,255,0.45)",
            textAlign: "center",
            maxWidth: "740px",
            marginBottom: "48px",
            lineHeight: 1.5,
          }}
        >
          50+ components · React 19 · Tailwind CSS v4 · WCAG AA · Zero Radix
        </div>

        {/* Install command */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "14px",
            padding: "16px 32px",
            color: "rgba(255,255,255,0.65)",
            fontSize: "22px",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.22)" }}>$</span>
          <span>npm install </span>
          <span style={{ color: "#a78bfa" }}>anexui</span>
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            color: "rgba(255,255,255,0.18)",
            fontSize: "18px",
            letterSpacing: "0.02em",
          }}
        >
          anexui.com
        </div>
      </div>
    ),
    { ...size },
  );
}
