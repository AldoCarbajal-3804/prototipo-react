# AGENTS.md

## Project Overview

React 19 single-page application scaffolded with Vite. Uses Tailwind CSS v4 for styling and ESLint 9 for linting. No TypeScript, no test framework installed.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Production build → dist/
npm run lint       # Run ESLint on all files
npm run preview    # Preview production build locally
```

**No test runner is configured.** If tests are added (e.g. Vitest), update this file with single-test commands like `npx vitest run src/path/to/test.test.jsx`.

## Project Structure

```
src/
├── main.jsx           # Entry point
├── App.jsx            # Root layout, composes all sections
├── App.css            # Global styles, CSS custom properties, Tailwind imports
├── navbar/Navbar.jsx  # Sticky nav with mobile hamburger
├── hero/              # Hero section + animated icon
├── services/          # Services grid, CTA, contact form
├── footer/Footer.jsx  # Site footer
├── components/        # Reusable: Card, Link, Info
└── assets/            # Static SVGs
```

## Code Style

### Components
- **Page-level components** (Navbar, Hero, Services, Footer, Form, Cta): use `function` declarations with `export default` at bottom.
- **Small reusable components** (Card, Link, Info): use `const` arrow functions with `export const` at declaration.
- All files are `.jsx`. No TypeScript.

### Naming
- Component files: `PascalCase.jsx`
- Component folders: `camelCase/` (e.g., `navbar/`, `hero/`)
- Variables/functions: `camelCase`
- CSS custom properties: `--color-1`, `--color-2`, etc.

### Imports
- React imports: destructured (`import { useState } from 'react'`)
- Component imports: use explicit `.jsx` extension (`import App from './App.jsx'`)
- Asset imports: relative paths (`import auto from '../assets/svg/auto.svg'`)
- Keep imports at top of file, one blank line after last import

### JSX & Styling
- Use Tailwind utility classes directly in `className`
- Responsive design: mobile-first with `sm:`, `md:`, `lg:` breakpoints (always specify all breakpoints)
- Custom styles: CSS nesting in `App.css` using CSS custom properties from `:root`
- Use `<>...</>` fragments, not `<div>` wrappers when possible

### Accessibility
- Include `aria-label`, `aria-labelledby`, `aria-describedby`, `role` attributes on semantic elements
- Use `sr-only` class for screen-reader-only content
- Form inputs: always have `<label htmlFor="...">`, `aria-required="true"`, and error `<span>` placeholders

### State & Interactivity
- `useState` for local UI state (e.g., mobile menu toggle)
- `react-dom` form actions for form submission (`useFormStatus`, `action={handleFormSubmit}`)

## CSS Architecture

- Tailwind v4 via `@import "tailwindcss"` in `App.css`
- Custom properties defined in `:root` block
- Nested CSS selectors group styles by section (`.nav-bar`, `.hero-section`, etc.)
- Color palette: `--color-1` (#171827) dark bg, `--color-2` (#3AA1B8) accent, `--color-3` (#D1D5DB) text

## Known Issues

- `Footer.jsx` mixes `class` and `className` attributes — should use `className` throughout in React.
- `main.jsx` imports `./index.css` but the file is named `App.css` — verify this resolves at build time.

## ESLint Rules

- Flat config format (ESLint 9)
- `no-unused-vars`: error, but ignores variables starting with uppercase or underscore (`^[A-Z_]`)
- `react-hooks` and `react-refresh` plugins enabled
- Targets `**/*.{js,jsx}`, ignores `dist/`
