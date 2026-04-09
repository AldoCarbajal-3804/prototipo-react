# Retroalimentación: Tailwind Best Practices

## Resumen general

Se revisaron 12 archivos JSX en `src/`. Se encontraron múltiples anti-patrones relacionados con las utilidades de layout, colores y manejo de clases. El proyecto no implementa las utilidades personalizadas (`v-stack`, `h-stack`, `center`, etc.) mencionadas en la skill, por lo que aplicarlas directamente rompería el diseño.

---

## 1. Layout Utilities (Crítico)

### Anti-patrón: `flex flex-col` → usar `v-stack`

| Archivo | Línea | Código actual | Sugerencia |
|---------|-------|---------------|------------|
| `Footer.jsx` | 17 | `flex flex-col gap-2` | `v-stack gap-2` |
| `Form.jsx` | 45 | `flex flex-col gap-4...` | `v-stack gap-4...` |
| `Form.jsx` | 67 | `flex flex-col gap-2` | `v-stack gap-2` |
| `Form.jsx` | 85 | `flex flex-col gap-2` | `v-stack gap-2` |
| `Form.jsx` | 103 | `flex flex-col gap-2...` | `v-stack gap-2...` |
| `Form.jsx` | 121 | `flex flex-col gap-2...` | `v-stack gap-2...` |
| `Navbar.jsx` | 50 | `flex flex-col gap-1.5` | `v-stack gap-1.5` |
| `Navbar.jsx` | 87 | `flex flex-col list-none...` | `v-stack list-none...` |
| `Hero.jsx` | 7 | `flex flex-col justify-center...` | `v-stack justify-center...` |

### Anti-patrón: `flex flex-col sm:flex-row` (responsive stacks)

| Archivo | Línea | Código actual | Sugerencia |
|---------|-------|---------------|------------|
| `Footer.jsx` | 7 | `flex flex-col sm:flex-row` | `v-stack sm:h-stack` |
| `Form.jsx` | 25 | `flex flex-col lg:flex-row` | `v-stack lg:h-stack` |
| `Hero.jsx` | 5 | `flex flex-col lg:flex-row` | `v-stack lg:h-stack` |
| `Hero.jsx` | 24 | `flex flex-col sm:flex-row` | `v-stack sm:h-stack` |

### Anti-patrón: `flex items-center justify-center` → usar `center`

| Archivo | Línea | Código actual | Sugerencia |
|---------|-------|---------------|------------|
| `Card.jsx` | 4 | `flex items-center justify-center` | `center` |
| `Hero.jsx` | 38 | `flex justify-center items-center` | `center` |
| `IconHero.jsx` | 7 | `flex justify-center items-center` | `center` |
| `IconHero.jsx` | 8 | `flex justify-center items-center` | `center` |

---

## 2. Esquemas de Color (Crítico)

### Anti-patrón: colores `gray-*` → usar `neutral-*` o design tokens

| Archivo | Línea | Color usado | Sugerencia |
|---------|-------|-------------|------------|
| `Link.jsx` | 4 | `text-gray-300` | `text-neutral-300` |
| `Navbar.jsx` | 17 | `border-gray-600` | `border-neutral-600` |
| `Navbar.jsx` | 87 | `border-gray-700` | `border-neutral-700` |
| `Navbar.jsx` | 91,101,111 | `text-gray-300` | `text-neutral-300` |
| `Hero.jsx` | 5 | `border-gray-500` | `border-neutral-500` |
| `Hero.jsx` | 30 | `border-gray-300` | `border-neutral-300` |
| `Footer.jsx` | 7 | `text-gray-300`, `border-gray-600` | `text-neutral-300`, `border-neutral-600` |
| `Services.jsx` | 14 | `border-gray-600` | `border-neutral-600` |

### Anti-patrón: colores hex `[#...]` → usar design tokens

| Archivo | Línea | Color usado | Sugerencia |
|---------|-------|-------------|------------|
| `Info.jsx` | 4 | `bg-[#1b1f2e]` | Variable CSS (ej: `bg-[var(--color-1)]`) |
| `IconHero.jsx` | 6,7,8 | `border-[#3AA1B8]` | Variable CSS (ej: `border-[var(--color-2)]`) |
| `Form.jsx` | 77,95,113,130 | `focus:ring-[#3AA1B8]` | Variable CSS (ej: `focus:ring-[var(--color-2)]`) |
| `Navbar.jsx` | 50 | `focus:ring-[#3AA1B8]` | Variable CSS |

---

## 3. Manejo de `className` (Crítico)

No se encontró uso de la utilidad `cn()` para combinar clases. Sin embargo, **ningún componente recibe `className` como prop**, por lo que no es estrictamente necesario actualmente. Se recomienda implementar `cn()` si en el futuro se exponen componentes para extensión.

---

## 4. Diseño Responsivo (Medio)

El proyecto implementa correctamente:
- Breakpoints estándar (`sm:`, `md:`, `lg:`)
- Texto responsivo (`text-sm sm:text-base md:text-lg`)
- Padding/margin responsivo

**Observación:** No se usa el patrón de diseño por capacidades de input (`pointer-coarse:`), pero no es obligatorio.

---

## 5. Affordances (Alto)

Los componentes no definen clases de affordance reutilizables (ej: `ui-button`). Los estilos de botones se repiten manualmente en `Hero.jsx`, `Cta.jsx` y `Form.jsx`. Se sugiere crear clases utilitarias personalizadas para botones.

---

## Archivos sin issues

- `App.jsx` — Solo composición, sin clases Tailwind.
- `main.jsx` — Entry point, sin clases.
- `Services.jsx` — Grid layout correcto, sin anti-patrones mayores.

---

## Recomendaciones prioritarias

1. **Configurar utilidades de stack** en `tailwind.config.js` (`v-stack`, `h-stack`, `center`) antes de aplicar los cambios.
2. **Reemplazar `flex flex-col`** por `v-stack` y `flex flex-col sm:flex-row` por `v-stack sm:h-stack`.
3. **Reemplazar `flex items-center justify-center`** por `center`.
4. **Migrar colores `gray-*`** a `neutral-*` o a variables CSS definidas en `:root`.
5. **Reemplazar colores hex** (`[#...]`) por variables CSS para mantener consistencia con el sistema de diseño.
