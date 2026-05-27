"use client";

import { useRef, useState } from "react";

export default function CodeBlock({ children }: React.PropsWithChildren) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = preRef.current?.innerText ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group mb-6">
      <pre
        ref={preRef}
        className="rounded-xl p-5 overflow-x-auto text-sm font-mono leading-relaxed"
        style={{
          background: "var(--pre-bg)",
          border: "1px solid var(--pre-border)",
          color: "var(--pre-text)",
          boxShadow: "0 0 24px var(--pre-border)",
        }}
      >
        {children}
      </pre>
      <button
        onClick={copy}
        aria-label={copied ? "Copied!" : "Copy code"}
        className={`absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium transition-all ${
          copied
            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 opacity-100"
            : "opacity-0 group-hover:opacity-100 bg-white/5 text-white/40 border border-white/10 hover:text-white/70 hover:bg-white/10"
        }`}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        {copied ? "Copied" : "Copy"}
      </button>
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
