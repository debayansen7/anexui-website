import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 mt-auto py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded bg-violet-600 flex items-center justify-center text-xs font-bold text-white">A</span>
          <span>Anex UI — MIT License</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/docs/getting-started" className="hover:text-white/70 transition-colors">Docs</Link>
          <a href="https://github.com/debayansen7/anex-ui-library" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">GitHub</a>
          <a href="https://www.npmjs.com/package/anexui" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">npm</a>
        </div>
        <span>Built by Debayan Sen</span>
      </div>
    </footer>
  );
}
