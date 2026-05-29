"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Spinner } from "anexui";

interface PagefindResult {
  url: string;
  excerpt: string;
  meta: { title?: string };
}

interface PagefindAPI {
  search: (q: string) => Promise<{
    results: Array<{ data: () => Promise<PagefindResult> }>;
  }>;
}

async function loadPagefind(): Promise<PagefindAPI | null> {
  try {
    // pagefind.js is generated into /public/pagefind/ at build time — doesn't exist during TS check
    // @ts-expect-error: generated file, not resolvable at compile time
    const pf = await import(/* webpackIgnore: true */ "/pagefind/pagefind.js");
    return pf as PagefindAPI;
  } catch {
    return null;
  }
}

export default function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PagefindResult[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const pagefindRef = useRef<PagefindAPI | null>(null);
  const router = useRouter();

  const openModal = useCallback(async () => {
    setOpen(true);
    if (!pagefindRef.current) {
      pagefindRef.current = await loadPagefind();
    }
    setTimeout(() => inputRef.current?.focus(), 30);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    setQuery("");
    setResults([]);
    setActiveIdx(0);
  }, []);

  // ⌘K / Ctrl+K global shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        open ? closeModal() : openModal();
      }
      if (e.key === "Escape" && open) closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, openModal, closeModal]);

  const handleSearch = async (q: string) => {
    setQuery(q);
    setActiveIdx(0);
    if (!q.trim() || !pagefindRef.current) { setResults([]); return; }
    setLoading(true);
    const res = await pagefindRef.current.search(q);
    const data = await Promise.all(res.results.slice(0, 8).map((r) => r.data()));
    setResults(data);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, results.length - 1)); }
    if (e.key === "ArrowUp")   { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)); }
    if (e.key === "Enter" && results[activeIdx]) {
      router.push(results[activeIdx].url);
      closeModal();
    }
  };

  const navigate = (url: string) => { router.push(url); closeModal(); };

  return (
    <>
      {/* Desktop trigger */}
      <Button
        variant="ghost"
        size="sm"
        onClick={openModal}
        aria-label="Search docs"
        className="hidden md:flex items-center gap-2 w-44 justify-start! font-normal!"
      >
        <SearchIcon />
        <span className="flex-1 text-left">Search docs...</span>
        <kbd className="text-[11px] opacity-30 border border-current/20 rounded px-1 py-0.5 leading-none">⌘K</kbd>
      </Button>

      {/* Mobile trigger */}
      <Button
        variant="ghost"
        size="sm"
        onClick={openModal}
        aria-label="Search"
        className="md:hidden p-0! w-8 h-8"
      >
        <SearchIcon />
      </Button>

      {/* Modal */}
      {open && (
        <>
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={closeModal} aria-hidden="true" />
          <div
            role="dialog"
            aria-label="Search documentation"
            aria-modal="true"
            className="fixed inset-x-4 top-[12%] z-50 mx-auto max-w-xl"
          >
            <div className="bg-[#111] border border-white/15 rounded-2xl shadow-2xl overflow-hidden">
              {/* Input row */}
              <div className="flex items-center gap-3 px-4 border-b border-white/8">
                <SearchIcon className="text-white/30 shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search docs..."
                  autoComplete="off"
                  spellCheck={false}
                  className="flex-1 bg-transparent py-4 text-white placeholder-white/30 text-sm outline-none"
                />
                <kbd className="text-xs text-white/20 border border-white/10 rounded px-1.5 py-0.5 shrink-0">Esc</kbd>
              </div>

              {/* Results */}
              <div className="max-h-72 overflow-y-auto">
                {!query && (
                  <p className="px-4 py-6 text-center text-sm text-white/30">Type to search components and docs</p>
                )}
                {loading && (
                  <div className="flex justify-center py-6">
                    <Spinner size="sm" label="Searching" />
                  </div>
                )}
                {!loading && query && results.length === 0 && (
                  <p className="px-4 py-6 text-center text-sm text-white/30">No results for &quot;{query}&quot;</p>
                )}
                {!loading && results.length > 0 && (
                  <ul className="p-2" role="listbox">
                    {results.map((r, i) => (
                      <li key={r.url} role="option" aria-selected={activeIdx === i}>
                        <button
                          onClick={() => navigate(r.url)}
                          onMouseEnter={() => setActiveIdx(i)}
                          className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors ${
                            activeIdx === i ? "bg-violet-600/20" : "hover:bg-white/5"
                          }`}
                        >
                          <p className="text-sm text-white/80 font-medium mb-0.5 truncate">
                            {r.meta?.title ?? r.url}
                          </p>
                          <p
                            className="text-xs text-white/40 line-clamp-2 [&_mark]:bg-violet-500/30 [&_mark]:text-violet-300 [&_mark]:rounded-sm [&_mark]:px-0.5"
                            dangerouslySetInnerHTML={{ __html: r.excerpt }}
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer hints */}
              <div className="px-4 py-2.5 border-t border-white/8 flex items-center gap-4 text-xs text-white/20">
                <span><kbd className="border border-white/10 rounded px-1 py-0.5">↑↓</kbd> navigate</span>
                <span><kbd className="border border-white/10 rounded px-1 py-0.5">↵</kbd> open</span>
                <span><kbd className="border border-white/10 rounded px-1 py-0.5">Esc</kbd> close</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
