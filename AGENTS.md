# AGENTS.md

## Build, Lint, and Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint (static code analysis)
npm run lint
```

**Note:** This project does NOT include a test framework. Do not add tests unless explicitly requested.

---

## Code Style Guidelines

### Project Overview

- **Framework**: React 19 + Vite + Tailwind CSS v4
- **Language**: JavaScript JSX (no TypeScript)
- **Styling**: Tailwind CSS v4 with CSS custom properties
- **Build Tool**: Vite

### File Structure

```
src/
  assets/          # Static resources (SVG icons, images)
  components/      # Reusable base components (Card, Link, Info)
  navbar/          # Navigation component
  hero/            # Hero section with icons
  sections/        # Page sections (Services, Form, Cta, etc.)
  hooks/           # Custom React hooks
  data/            # Static data (translations)
  App.jsx          # Main composition component
  main.jsx         # Entry point
  App.css          # Global styles
```

### Component Conventions

**Page Components** (rendered directly in App):
```jsx
function Navbar() {
  return (...)
}
export default Navbar
```

**Reusable Components** (imported from components/):
```jsx
export const Card = ({ icon, name, description }) => {
  return (...)
}
```

### Imports

- Use relative imports with `.jsx` extension
- Group imports: React imports, then third-party, then local
- CSS imports in main.jsx and App.jsx only
- Example:
```jsx
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
```

### Tailwind CSS

- Use responsive classes: `sm:`, `md:`, `lg:` breakpoints
- Prefer `neutral-*` over `gray-*` for dark backgrounds
- Use CSS custom properties for brand colors:
  ```jsx
  border-[var(--color-2)]      // instead of border-[#3AA1B8]
  ```
- Utility abbreviations: `center`, `v-stack`, `h-stack` (when configured)
- Always include focus states for interactive elements:
  ```jsx
  className="focus:ring-2 focus:ring-[var(--color-2)]"
  ```

### Accessibility

- Use semantic HTML: `<article>`, `<nav>`, `<main>`, `<section>`
- Avoid `<blockquote>` for non-quote content
- Include `aria-label`, `aria-expanded`, `aria-controls` for interactive elements
- Match `aria-labelledby` IDs with actual element IDs:
  ```jsx
  <article aria-labelledby={`card-title-${name}`}>
    <h3 id={`card-title-${name}`}>{name}</h3>
  </article>
  ```
- Use `sr-only` for screen-reader-only content
- Include keyboard navigation support
- Respect `prefers-reduced-motion`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .animated { animation: none; }
  }
  ```

### State Management

- Use `useState` for local component state
- Use `useCallback` for callbacks passed to child components:
  ```jsx
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])
  ```
- Lift state to the nearest common ancestor

### CSS Custom Properties

Define in `:root` with fallbacks:
```css
:root {
  --color-1: #171827;
  --color-2: #3AA1B8;
}
```

Use in Tailwind:
```jsx
className="bg-[var(--color-1)]"
```

### Animations

- Use CSS `transform` and `opacity` for compositor-friendly animations
- Add `will-change` for animated elements:
  ```css
  .animated { will-change: transform, opacity; }
  ```
- Avoid animating `width`, `height`, `top`, `left`

### Error Handling

- Remove `console.log` statements before production
- Use `import.meta.env.DEV` for development-only code:
  ```jsx
  if (import.meta.env.DEV) console.log(data)
  ```
- Validate form inputs with `required` and `aria-required`

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `Navbar`, `CardWork` |
| Files | PascalCase | `Navbar.jsx`, `Card.jsx` |
| Props | camelCase | `icon`, `cardTitle` |
| CSS classes | kebab-case | `card-container` |
| Constants | SCREAMING_SNAKE | `API_KEY` |

### ESLint Rules

- Unused variables must start with underscore or uppercase: `_unusedVar`, `UNUSED_VAR`
- React refresh: only export components can trigger hot reload warnings
- No console statements in production code

### HTML Semantics

- `<header>` for page headers
- `<nav>` for navigation with `role="navigation"`
- `<main>` for primary content
- `<footer>` for page footer
- `<article>` for self-contained content
- `<section>` for thematic groupings

---

## Conventions from Codebase Retrospectives

- Page components use `function` + `default export`
- Reusable components use `const` + `named export`
- SVGs should be optimized before commit (`npx svgo`)
- Avoid `break-all`; use `break-words` for content that should not be split
- Form data should not be logged to console

---

## What NOT to Do

1. **Do not add tests** unless explicitly requested
2. **Do not add TypeScript** - project uses plain JSX
3. **Do not use `gray-*`** - use `neutral-*` or CSS variables
4. **Do not log form data** to console
5. **Do not use `<blockquote>`** for non-quote content
6. **Do not use `aria-live`** on static content