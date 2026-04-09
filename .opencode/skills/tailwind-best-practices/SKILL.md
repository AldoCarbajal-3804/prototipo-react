---
  name: tailwind-best-practices
  description: Styling patterns and conventions for frontend applications. Contains 10 rules covering layout utilities, affordances, color schemes, responsive design, and className handling.

---

# Tailwind CSS Guidelines

## Cuándo aplicar

Referencia estas guías cuando:
- Escribas estilos de componentes con Tailwind
- Crees layouts (stacks, grids, centrado)
- Trabajes con diseño responsivo
- Manejes esquemas de color
- Combines props de `className`

---

## Layout Utilities `CRÍTICO`

### Usar stack utilities en lugar de clases flex

```jsx
// ❌ Malo
<div className="flex flex-col gap-4">
<div className="flex flex-row gap-4">

// ✅ Bueno
<div className="v-stack gap-4">
<div className="h-stack gap-4">
```

**Utilidades disponibles:**

| Clase | Descripción |
|---|---|
| `v-stack` | Stack vertical (flex column) |
| `h-stack` | Stack horizontal (flex row) |
| `v-stack-reverse` | Stack vertical invertido |
| `h-stack-reverse` | Stack horizontal invertido |
| `z-stack` | Stack superpuesto (grid-based, centra hijos uno encima del otro) |
| `center` | Centra contenido horizontal y verticalmente |
| `spacer` | Espaciador flexible que ocupa el espacio disponible |
| `circle` | Círculo perfecto con `aspect-ratio: 1/1` |

### Preferir `gap-*` en padres en lugar de márgenes en hijos

```jsx
// ❌ Malo
<div>
  <Item className="mb-4" />
  <Item className="mb-4" />
</div>

// ✅ Bueno
<div className="flex flex-col gap-4">
  <Item />
  <Item />
</div>
```

### Cambiar dirección de layout en breakpoints

```jsx
// Mobile: vertical → Desktop: horizontal
<div className="v-stack lg:h-stack gap-4">
  <main className="grow">...</main>
  <aside className="shrink-0 lg:w-80">...</aside>
</div>

// Mobile: horizontal → Desktop: vertical
<div className="h-stack md:v-stack">
```

---

## Esquemas de Color `CRÍTICO`

Usar esquemas de color basados en clases con una variante `dark` personalizada.

```jsx
<button className="rounded-full bg-gray-900 px-4 py-2 text-white dark:bg-gray-100 dark:text-gray-900">
  Toggle
</button>
```

---

## Manejo de `className` `CRÍTICO`

### Siempre usar `cn()` para combinar classNames en componentes

```tsx
import { cn } from "~/lib/cn";

function Button({ className, variant }: Props) {
  return (
    <button
      className={cn(
        "base-classes",
        {
          "variant-primary": variant === "primary",
          "variant-secondary": variant === "secondary",
        },
        className, // className externo siempre al final
      )}
    />
  );
}
```

### Usar los tipos correctos para props de `className`

```tsx
import type { ClassName, ClassNameRecord } from "~/lib/cn";

// Un solo elemento
type Props = {
  className?: ClassName;
};

// Múltiples elementos
type Props = {
  className?: ClassNameRecord<"root" | "label" | "input">;
};

// Uso
<Input className={{ root: "w-full", label: "font-bold" }} />;
```

---

## Affordances `ALTO`

Definir patrones visuales agnósticos al elemento que se componen con utilities.

```jsx
<label className="ui-button" htmlFor="document-upload">
  Choose file
</label>
```

---

## Diseño Responsivo `MEDIO`

### Breakpoints estándar

```jsx
// Breakpoints estándar (min-width)
<div className="px-4 md:px-8 lg:px-12">

// Mostrar/ocultar con breakpoints
<div className="hidden md:block">Solo desktop</div>
<div className="md:hidden">Solo mobile</div>
```

### Texto responsivo

```jsx
// Tamaño de fuente responsivo
<h1 className="text-2xl md:text-3xl lg:text-4xl">

// Line-height responsivo junto con texto
<p className="text-sm leading-5 md:text-base md:leading-6">
```

### Diseñar por capacidades de input (no por tipo de dispositivo)

```jsx
<button className="h-10 w-10 pointer-coarse:h-12 pointer-coarse:w-12">
  <Icon />
</button>
```

---

## Anti-Patrones

| ❌ No usar | ✅ Usar |
|---|---|
| `flex flex-col` | `v-stack` |
| `flex flex-row` | `h-stack` |
| `flex items-center justify-center` | `center` |
| `bg-gray-100` | `bg-neutral-100` |
| `bg-[#hex]` | Design tokens |
| `className="..."` sin `cn()` | `cn("...", className)` |
| `style` inline para responsivo | Prefijos de Tailwind |

---

## Archivos clave

| Archivo | Propósito |
|---|---|
| `tailwind.config.js` | Configuración, utilities personalizadas, colores |
| `app/styles/global.css` | Variables CSS de esquemas de color |
| `app/styles/tailwind.css` | Utilities adicionales |
| `app/utils/cn.ts` | Utilidad para combinar classNames |
