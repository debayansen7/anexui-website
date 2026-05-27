# Anex UI — Documentation Website

The official documentation site for [Anex UI](https://github.com/debayansen7/anex-ui-library), built with **Next.js**, **Tailwind CSS v4**, and **MDX**.

---

## What's inside

| Route | Description |
|---|---|
| `/` | Landing page — hero, feature grid, quick-start snippet |
| `/docs/getting-started` | Installation, setup, and theming guide |
| `/docs/components` | Visual component catalog — all 35 component modules indexed by category |
| `/docs/components/[name]` | Individual component doc page (MDX) — usage, variants, props table, accessibility |
| `/docs/theming` | Token reference, dark/light switching, custom theme guide |
| `/builder` | Component picker — select components and download a custom `.zip` with source files, design tokens, and a README |

---

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 15.x (App Router) |
| React | 19.x |
| Tailwind CSS | 4.x |
| MDX (`@next/mdx`) | — |
| `rehype-highlight` | Syntax highlighting in MDX code blocks |
| `remark-gfm` | GitHub-flavored Markdown tables, strikethrough, task lists |
| JSZip | Client-side `.zip` generation for the Builder |
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
```

---

## Theming

The site ships with a **dark default** and a toggleable light mode. Theme state is persisted in `localStorage` and applied before React hydrates to prevent any flash of wrong theme.

| Feature | Implementation |
|---|---|
| Default theme | Dark (`data-theme="dark"` on `<html>`) |
| Persistence | `localStorage` key `"theme"` |
| FOUC prevention | Inline `<script>` in `<head>` before React hydration |
| Toggle component | `src/components/site/ThemeToggle.tsx` |
| CSS variables | `src/app/globals.css` — `[data-theme="dark"]` and `[data-theme="light"]` blocks |

Dark mode code colors use **neon blue** (`#00e5ff`); light mode uses **neon deep purple** (`#6d28d9`).

---

## Component Builder

The `/builder` page lets users pick individual components and download a `.zip` containing:

```
components/
  CategoryName/
    ComponentName/
      ComponentName.tsx
      ComponentName.module.css
lib/
  cn.ts
tokens/
  index.css
  themes.css
README.md
```

Component source files are served as static assets from `/public/registry/`. Import paths are rewritten from the library's relative paths to `@/lib/cn` during zip assembly.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout (Navbar, Footer, theme script)
│   ├── page.tsx              # Landing page
│   ├── globals.css           # CSS variable theming + Tailwind v4 base
│   ├── builder/
│   │   ├── layout.tsx        # Standalone layout (no docs sidebar)
│   │   └── page.tsx          # Component picker + zip download
│   └── docs/
│       ├── layout.tsx        # Docs layout with sidebar
│       ├── components/
│       │   ├── page.tsx      # Component catalog index
│       │   └── [name]/
│       │       └── page.mdx  # Per-component MDX doc (33 pages)
│       ├── getting-started/
│       │   └── page.mdx
│       └── theming/
│           └── page.mdx
├── components/
│   └── site/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── Sidebar.tsx
│       └── ThemeToggle.tsx
├── data/
│   └── registry.ts           # Component metadata + dependency graph
└── mdx-components.tsx        # MDX element overrides (headings, code, tables …)

public/
└── registry/                 # Static component source files (served for Builder zip)
    ├── components/
    ├── lib/
    └── tokens/
```

---

## License

MIT © [Debayan Sen](mailto:debayan.sen7@gmail.com)
