import Link from "next/link";
import LogoIcon from "./LogoIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 mt-auto py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <div className="flex items-center gap-2">
          <LogoIcon size={24} />
          <span>Anex UI — MIT License</span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/docs/getting-started"
            className="hover:text-white/70 transition-colors"
          >
            Docs
          </Link>
          <a
            href="https://github.com/debayansen7/anex-ui-library"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/anexui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition-colors"
          >
            npm
          </a>
        </div>
        <span>
          <a
            href="https://www.debayansen.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Designed and built by Debayan Sen"
            className="text-slate-400 cursor-pointer dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 border-b border-transparent hover:border-slate-400 dark:hover:border-slate-500 pb-1"
          >
            Designed and built by Debayan Sen
          </a>
        </span>
      </div>
    </footer>
  );
}
