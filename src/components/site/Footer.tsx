import Link from "next/link";
import LogoIcon from "./LogoIcon";
import { site, author, footerLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 mt-auto py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <div className="flex items-center gap-2">
          <LogoIcon size={24} />
          <span>{site.name} — {site.license} License</span>
        </div>
        <div className="flex items-center gap-6">
          {footerLinks.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="hover:text-white/70 transition-colors">
                {link.label}
              </Link>
            )
          )}
        </div>
        <span>
          <a
            href={author.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Designed and built by ${author.name}`}
            className="text-slate-400 cursor-pointer dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 border-b border-transparent hover:border-slate-400 dark:hover:border-slate-500 pb-1"
          >
            Designed and built by {author.name}
          </a>
        </span>
      </div>
    </footer>
  );
}
