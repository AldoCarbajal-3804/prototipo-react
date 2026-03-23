# Revisión Best-Practices — prototipo-react

**Fecha:** 2026-03-23  
**Stack:** React 19 + Vite + Tailwind CSS v4  
**Archivos revisados:** 14 (12 `.jsx`, 2 `.css`)

---

## Resumen Ejecutivo

| Categoría | Calificación | Issues |
|---|---|---|
| Optimización de bundle | ⚠️ Media | 1 crítica, 1 media |
| Rendimiento de renderizado | ⚠️ Media | 2 media |
| Optimización de re-renders | ✅ Buena | 1 baja |
| Accesibilidad | ✅ Buena | 2 media |
| Semántica HTML | ❌ Deficiente | 3 media |
| Arquitectura de componentes | ✅ Buena | 1 baja |
| CSS / Animaciones | ⚠️ Media | 2 media |

---

## 1. Optimización de Bundle — Prioridad Crítica

### 🔴 `main.jsx:4` — Import de CSS inexistente
```js
import './index.css'  // El archivo se llama App.css
```
Esto fallará en build si no existe `index.css`. Debe ser `./App.css` o crear un alias.

### 🟡 SVGs no optimizados
Los 6 SVGs en `assets/svg/` se importan como módulos de texto. Vite los trata como URLs, lo cual es correcto, pero los SVGs podrían:
- Incluirse inline con `react-inlinesvg` para animar paths.
- Optimizarse con SVGO antes del commit.
- Usar `loading="lazy"` si fueran `<img>` (ya se hace implícitamente via Vite).

**Recomendación:** Ejecutar `npx svgo -f src/assets/svg/` para reducir tamaño.

---

## 2. Rendimiento de Renderizado — Prioridad Media

### 🟡 `services/Services.jsx:27` — `aria-live="polite"` innecesario
```jsx
<div ... aria-live="polite">
```
El grid de cards es contenido estático. `aria-live` fuerza al lector de pantalla a anunciar cambios que nunca ocurren, añadiendo overhead de accessibility tree.

**Fix:** Eliminar `aria-live="polite"` del grid.

### 🟡 Animaciones CSS sin `will-change`
`IconHero.css` define 4 animaciones simultáneas (`breathing-lg`, `breathing-md`, `breathing-sm`, `breathing-svg`). Ninguna usa `will-change: transform`.

**Fix:** Añadir a cada clase animada:
```css
will-change: transform, opacity;
```

---

## 3. Semántica HTML — Prioridad Media

### 🟡 `services/Cta.jsx:4` — `<blockquote>` mal usado
```jsx
<blockquote className="cta ...">
```
`<blockquote>` es para citas textuales, no para cards o banners. Lo mismo ocurre en `Card.jsx:3`.

**Fix:** Cambiar a `<div>` o `<article>`.

### 🟡 `components/Card.jsx:3` — `aria-labelledby` con ID incoherente
```jsx
aria-labelledby={`card - ${name}`}  // Genera "card - Custom Software"
id={`card-title-${name}`}           // Genera "card-title-Custom Software"
```
Los IDs no coinciden. El `aria-labelledby` apunta a un ID que no existe.

**Fix:**
```jsx
<article aria-labelledby={`card-title-${name}`}>
```

### 🟡 `services/Form.jsx:12` — `console.log` en producción
```js
console.log(Object.fromEntries(formData));
```
Esto filtrará datos del formulario en consola. Eliminar o envolver en `import.meta.env.DEV`.

---

## 4. Optimización de Re-renders — Prioridad Media

### 🟢 `navbar/Navbar.jsx` — Estado local bien aislado
El `useState` para el menú móvil está correctamente localizado. No hay re-renders innecesarios propagándose a otros componentes.

### 🟡 `navbar/Navbar.jsx:15-19` — Funciones inline recreadas cada render
```js
const toggleMenu = () => { setIsOpen(!isOpen); };
const closeMenu = () => { setIsOpen(false); };
```
Para este caso (componente simple), el impacto es mínimo. Pero `toggleMenu` debería usar `setIsOpen(prev => !prev)` para evitar stale closures si se pasa como callback.

**Fix:**
```js
const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
```

---

## 5. Accesibilidad — Prioridad Alta (Positivo)

### ✅ Buenas prácticas detectadas
- `aria-label`, `aria-expanded`, `aria-controls` en el menú hamburguesa.
- `role="navigation"`, `role="menubar"`, `role="menu"`, `role="menuitem"` correctamente usados.
- Labels con `htmlFor` en todos los inputs del formulario.
- `aria-required="true"` + `required` en campos obligatorios.
- `sr-only` para contenido solo-lectura de pantalla.
- `focus:ring-2 focus:ring-[#3AA1B8]` en elementos interactivos.

### 🟡 `components/Link.jsx:5` — `aria-current` usa `window.location.pathname`
```js
aria-current={link === window.location.pathname ? "page" : undefined}
```
En una SPA con hash routing (`#services-section`), `window.location.pathname` nunca cambiará. `aria-current="page"` nunca se activará. Considerar usar `useLocation()` si se añade un router.

### 🟡 `components/Info.jsx:5` — `break-all` agresivo
```css
break-all
```
Rompe palabras arbitrariamente. Mejor `break-words` para no cortar emails/números a la mitad.

---

## 6. Arquitectura de Componentes

### ✅ Separación correcta
- Page components (`Navbar`, `Hero`, `Services`, `Form`, `Cta`, `Footer`) con `function` + `export default`.
- Reusable components (`Card`, `Link`, `Info`) con `const` + `export const`.
- Consistente con las convenciones de `AGENTS.md`.

### 🟡 `services/Form.jsx:10-11` — Componente `Submit` sin export
```jsx
function Submit(){ ... }
```
Está definido en el mismo archivo que `Form`. Es aceptable para un componente tan pequeño, pero si crece, extraer a `components/SubmitButton.jsx`.

---

## 7. CSS / Animaciones

### 🟡 Custom properties sin fallback
```css
background-color: var(--color-1);
```
Si `:root` no carga (error de red en fuentes), los colores desaparecen. Agregar fallbacks:
```css
background-color: var(--color-1, #171827);
```

### 🟡 Fuente externa sin `font-display`
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
```
Google Fonts ya incluye `display=swap` en la URL, lo cual es correcto. ✅

### 🟡 Animaciones sin `prefers-reduced-motion`
Ninguna animación respeta la preferencia del usuario.

**Fix:** Añadir al inicio de `IconHero.css`:
```css
@media (prefers-reduced-motion: reduce) {
  .breathing-lg, .breathing-md, .breathing-sm, .breathing-svg {
    animation: none;
  }
}
```

---

## Acciones Recomendadas (ordenadas por impacto)

| # | Acción | Prioridad | Archivo |
|---|---|---|---|
| 1 | Corregir import `./index.css` → `./App.css` | 🔴 Crítica | `main.jsx:4` |
| 2 | Eliminar `console.log` del form handler | 🔴 Alta | `Form.jsx:12` |
| 3 | Corregir `aria-labelledby` en Card | 🟡 Media | `Card.jsx:3` |
| 4 | Reemplazar `<blockquote>` por `<article>`/`<div>` | 🟡 Media | `Cta.jsx:4`, `Card.jsx:3` |
| 5 | Eliminar `aria-live="polite"` del grid | 🟡 Media | `Services.jsx:27` |
| 6 | Añadir `prefers-reduced-motion` | 🟡 Media | `IconHero.css` |
| 7 | Añadir `will-change` a animaciones | 🟢 Baja | `IconHero.css` |
| 8 | Cambiar `break-all` → `break-words` | 🟢 Baja | `Info.jsx:5` |
