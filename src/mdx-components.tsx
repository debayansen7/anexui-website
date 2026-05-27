import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-white mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-white mb-4 mt-8 pb-2 border-b border-white/10">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold text-white mb-3 mt-6">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-white/70 leading-7 mb-4">{children}</p>
    ),
    code: ({ children }) => (
      <code className="bg-white/10 text-emerald-400 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-[#0d0d0d] border border-white/10 rounded-xl p-5 overflow-x-auto mb-6 text-sm font-mono text-white/80">{children}</pre>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-white/70 mb-4 space-y-1.5">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-white/70 mb-4 space-y-1.5">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    a: ({ href, children }) => (
      <a href={href} className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">{children}</a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-violet-500 pl-4 text-white/60 italic my-4">{children}</blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-white/10 rounded-lg overflow-hidden">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="bg-white/5 px-4 py-3 font-semibold text-white border-b border-white/10">{children}</th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-white/70 border-b border-white/5">{children}</td>
    ),
    ...components,
  };
}
