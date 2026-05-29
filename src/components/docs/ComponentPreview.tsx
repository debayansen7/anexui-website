"use client";

import { useState, type ReactNode } from "react";
import { Button, Tabs, TabList, Tab, Tooltip } from "anexui";

interface ComponentPreviewProps {
  /** The live rendered component demo */
  children: ReactNode;
  /** Raw code string shown in the Code tab */
  code: string;
}

export default function ComponentPreview({ children, code }: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

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
        <Tabs activeId={tab} onChange={(id) => setTab(id as "preview" | "code")} variant="pill">
          <TabList>
            <Tab id="preview">Preview</Tab>
            <Tab id="code">Code</Tab>
          </TabList>
        </Tabs>

        {tab === "code" && (
          <Tooltip content={copied ? "Copied!" : "Copy"} side="left">
            <Button
              variant="ghost"
              size="xs"
              onClick={copy}
              className={`gap-1.5 ${copied ? "text-emerald-400!" : ""}`}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? "Copied" : "Copy"}
            </Button>
          </Tooltip>
        )}
      </div>

      {/* Preview pane */}
      {tab === "preview" && (
        <div
          className="flex items-center justify-center flex-wrap gap-3 p-8 min-h-35"
          style={{ background: "var(--bg)" }}
        >
          {children}
        </div>
      )}

      {/* Code pane */}
      {tab === "code" && (
        <div style={{ background: "var(--pre-bg)" }}>
          <pre
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
