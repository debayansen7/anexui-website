"use client";
import { useState } from "react";
import { SearchInput } from "anexui";

export default function SearchInputPreview() {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full max-w-sm flex flex-col gap-2">
      <SearchInput placeholder="Search components…" value={query} onChange={(e) => setQuery(e.target.value)} onClear={() => setQuery("")} />
      {query && <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)", margin: 0 }}>Searching for: <strong>{query}</strong></p>}
    </div>
  );
}
