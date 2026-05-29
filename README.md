# Anex UI — Documentation Website

The official documentation site for [Anex UI](https://github.com/debayansen7/anex-ui-library), built with **Next.js 16**, **Tailwind CSS v4**, and **MDX**.

---

## Routes

| Route | Description |
|---|---|
| `/` | Landing page — hero, feature highlights, quick-start snippet |
| `/docs/getting-started` | Installation, setup, and theming guide |
| `/docs/theming` | Full token reference and custom theme guide |
| `/docs/components` | Visual component catalog — all 53 components indexed by category |
| `/docs/components/[name]` | Individual component doc page (MDX) — live preview, usage, variants, props table, accessibility |
| `/builder` | Component picker — select components and download a custom `.zip` with source files, tokens, and a setup README |

---

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 16.x (App Router) |
| React | 19.x |
| Tailwind CSS | 4.x |
| MDX (`@next/mdx`) | — |
| `rehype-highlight` | Syntax highlighting in MDX code blocks |
| `remark-gfm` | GitHub-flavored Markdown (tables, strikethrough, task lists) |
| JSZip | Client-side `.zip` generation for the Builder |
| Zustand | Builder component selection state |
| TypeScript | 5.x |

---

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Type check
npx tsc --noEmit

# Production build
npm run build

# Start production server
npm run start
```

---

## Search

Search is **client-side** — it runs entirely in the browser against the component registry (`src/data/components.ts`) with no build step or external indexer required.

- Searches all 53 components by name, description, and category
- Also searches static doc pages (Getting Started, Theming, Changelog)
- Triggered via the search bar or `⌘K` / `Ctrl+K`
- Results are always up to date — adding a component to `components.ts` makes it instantly searchable

---

## Theming

The site ships with a **dark default** and a toggleable light mode. Theme state is persisted in `localStorage` and applied before React hydrates to prevent a flash of wrong theme.

| Feature | Implementation |
|---|---|
| Default theme | Dark (`data-theme="dark"` on `<html>`) |
| Persistence | `localStorage` key `"theme"` |
| FOUC prevention | Inline `<script>` in `<head>` before React hydration |
| Toggle | `src/components/site/ThemeToggle.tsx` — uses `Button` from `anexui` |

---

## Component Builder

The `/builder` page lets users pick individual components and download a `.zip` containing:

```
components/
  <ComponentName>/
    ComponentName.tsx
    ComponentName.module.css
    ComponentName.Type.ts
lib/
  cn.ts
tokens/
  index.css
  themes.css
README.md
```

Source files are served as static assets from `/public/registry/`. Import paths are rewritten from the library's relative paths to `@/lib/cn` during zip assembly.

---

## Adding a New Component Doc Page

1. Create the MDX page at `src/app/docs/components/<id>/page.mdx`
2. Create the preview component at `src/components/docs/previews/<Name>Preview.tsx`
3. Add an entry to `src/data/components.ts` (drives the sidebar nav, catalog, builder, and search)

The MDX page structure:

```mdx
import NamePreview from "@/components/docs/previews/NamePreview";

export const metadata = { title: "ComponentName" };

# ComponentName

Short description.

## Preview

<ComponentPreview code={`import { ComponentName } from "anexui";

<ComponentName prop="value" />`}>
  <NamePreview />
</ComponentPreview>

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `prop` | `string` | — | Description |
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                # Root layout (theme script, fonts)
│   ├── page.tsx                  # Landing page
│   ├── builder/
│   │   └── page.tsx              # Component picker + zip download
│   └── docs/
│       ├── layout.tsx            # Docs layout (Navbar, Sidebar, OnThisPage, Footer)
│       ├── page.tsx              # Docs index redirect
│       ├── components/
│       │   ├── page.tsx          # Component catalog
│       │   └── [name]/
│       │       └── page.mdx      # Per-component MDX doc (53 pages)
│       ├── getting-started/
│       │   └── page.mdx
│       └── theming/
│           └── page.mdx
├── components/
│   ├── site/
│   │   ├── Navbar.tsx            # Site header — uses Button from anexui
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx       # Uses Button from anexui
│   │   └── LogoIcon.tsx          # Inline SVG logo component
│   └── docs/
│       ├── Sidebar.tsx           # Desktop navigation sidebar
│       ├── MobileSidebar.tsx     # Mobile nav — uses Button + Drawer from anexui
│       ├── OnThisPage.tsx        # Scroll-spy heading TOC
│       ├── Search.tsx            # ⌘K search — client-side over components.ts
│       ├── CodeBlock.tsx         # MDX code block with copy button
│       ├── ComponentPreview.tsx  # Preview/Code tab switcher — uses Tabs + Button + Tooltip from anexui
│       └── previews/
│           └── <Name>Preview.tsx # One per component (53 files)
├── data/
│   └── components.ts             # Single source of truth — drives sidebar, catalog, builder, and search
└── store/
    └── builderStore.ts           # Zustand store for builder selection state

public/
└── registry/                     # Static component source files for Builder zip download
    ├── components/
    ├── lib/
    └── tokens/
```

---

## License

MIT © [Debayan Sen](mailto:debayan.sen7@gmail.com)
