# AGENTS.md

## Commands

```bash
npm install          # install deps
npm run dev          # Vite dev server (hot reload)
npm run build        # production build
npm run preview      # preview production build
npm run lint         # ESLint (runs eslint .)
```

No test framework exists.

## Stack

- **React 19** + **Vite 8** + **Tailwind v4** (CSS-first via `@import "tailwindcss"` in App.css, NOT PostCSS/tailwind.config.js)
- **JavaScript JSX only** — no TypeScript
- Tailwind v4 configured via `@tailwindcss/vite` plugin in `vite.config.js`

## Architecture

- **Single-page landing** — no router. Hash-based scroll nav (`#hero-section`, etc.) using `useScrollTo` hook.
- **All layout sections lazy-loaded** in `App.jsx` via `React.lazy`.
- **i18n**: `LanguageContext` + `src/data/translations.js` (`en`/`es` keys). Hook: `useLanguage()` returns `{ language, toggleLanguage, t }`.

## Custom Utilities (App.css)

```css
@utility v-stack   { display: flex; flex-direction: column; }
@utility h-stack   { display: flex; flex-direction: row; }
@utility center    { display: flex; align-items: center; justify-content: center; }
@utility z-stack   { display: grid; grid-template-areas: "stack"; }
```

Prefer `v-stack` over `flex flex-col`, `center` over `flex items-center justify-center`.

## Component Patterns

| Where | Pattern | Example |
|-------|---------|---------|
| `layouts/` (page sections) | `function Name() { ... }; export default Name` | `Navbar.jsx`, `Hero.jsx` |
| `components/` (reusable) | `export const Name = (...) => { ... }` | `Card.jsx`, `Link.jsx` |

Imports use `.jsx` extension. Group: React → third-party → local.

## ESLint Rules (eslint.config.js)

- `no-unused-vars`: error, ignore pattern `^[A-Z_]`
- `react-refresh/only-export-components`: warn, `allowConstantExport: true`
- Remove `console.log` before production

## Accessibility Patterns

- Hash-link nav items render as `<button>` (not `<a>`), with `aria-current="page"` when active
- `aria-labelledby` IDs use `${name}` suffixes matching actual element `id`s

## What NOT to Do

1. **No tests** unless explicitly requested
2. **No TypeScript** — plain JSX only
3. **No `gray-*`** — use `neutral-*` or CSS variables (migrated)
4. **No form data logging**
5. **No `<blockquote>`** for non-quote content
6. **No `aria-live`** on static content
7. Optimize SVGs before commit: `npx svgo -f src/assets/svg/`
