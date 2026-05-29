"use client";

import { useState, useRef, type ReactNode } from "react";

interface ComponentPreviewProps {
  /** The live rendered component demo */
  children: ReactNode;
  /** Raw code string shown in the Code tab */
  code: string;
}

export default function ComponentPreview({ children, code }: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const copy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden mb-6" style={{ border: "1px solid var(--border-md)" }}>
      {/* Tab bar */}
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex gap-1">
          {(["preview", "code"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-3 py-1 rounded-md text-xs font-medium capitalize transition-all"
              style={
                tab === t
                  ? { background: "var(--accent)", color: "#fff" }
                  : { color: "var(--text-muted)", background: "transparent" }
              }
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "code" && (
          <button
            onClick={copy}
            className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium transition-all"
            style={
              copied
                ? { background: "rgba(52,211,153,0.12)", color: "#34d399", border: "1px solid rgba(52,211,153,0.25)" }
                : { color: "var(--text-muted)", background: "transparent", border: "1px solid var(--border)" }
            }
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? "Copied" : "Copy"}
          </button>
        )}
      </div>

      {/* Preview pane */}
      {tab === "preview" && (
        <div
          className="flex items-center justify-center flex-wrap gap-3 p-8 min-h-[140px]"
          style={{ background: "var(--bg)" }}
        >
          {children}
        </div>
      )}

      {/* Code pane */}
      {tab === "code" && (
        <div style={{ background: "var(--pre-bg)" }}>
          <pre
            ref={codeRef}
            className="overflow-x-auto p-5 text-sm font-mono leading-relaxed m-0"
            style={{ color: "var(--pre-text)" }}
          >
            <code>{code.trim()}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
