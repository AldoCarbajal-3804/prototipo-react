# Retroalimentación: Frontend Design Quality

Evaluación del diseño basada en la skill `frontend-design`.

---

## 1. Tipografía (Alto)

**Problema**: Se usa `Inter` como única fuente. La skill lo clasifica explícitamente como *"generic font to avoid"* junto con Roboto, Arial y system fonts.

**Estado actual** (`App.css:1,9`):
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
body { font-family: 'Inter', sans-serif; }
```

**Sugerencia**: Usar un pairing distintivo — una display font con carácter para títulos y una body font refinada. Ejemplos de dirección:
- Brutalista: `Space Mono` (display) + `DM Sans` (body)
- Editorial: `Playfair Display` (display) + `Source Serif 4` (body)
- Tech-futurista: `Outfit` (display) + `Instrument Sans` (body)

---

## 2. Sistema de Color (Alto)

**Problema**: Solo 6 variables CSS definen toda la paleta. Son esencialmente 2 colores (azul oscuro + teal) con variaciones mínimas. No hay sistema de acentos, superficies, estados hover, estados de error/éxito, o variantes de opacidad.

**Estado actual** (`App.css:12-19`):
```css
--color-1: #171827;  /* dark bg */
--color-2: #3AA1B8;  /* accent */
--color-3: #D1D5DB;  /* text */
--color-4: #161B2E;  /* secondary bg */
--color-5: #111429;  /* tertiary bg */
--color-6: #1b1f2e;  /* card bg */
```

**Sugerencia**: Expandir a un sistema completo:
```css
:root {
  /* Base */
  --bg-deep: #0a0c1a;
  --bg-surface: #161B2E;
  --bg-elevated: #1b1f2e;
  --bg-hover: #232840;
  /* Accent */
  --accent-primary: #3AA1B8;
  --accent-glow: rgba(58, 161, 184, 0.15);
  --accent-secondary: /* un color complementario */;
  /* Text */
  --text-primary: #f0f0f5;
  --text-secondary: #D1D5DB;
  --text-muted: #6b7280;
  /* Semantic */
  --success, --error, --warning, --info;
}
```

Además, hay colores hardcodeados en JSX que no usan variables:
- `App.css:63` → `background-color: #1f364e`
- `App.css:67` → `background-color: #264a6a`
- `App.css:106` → `background-color: #232532`
- `Info.jsx:4` → `bg-[#1b1f2e]`

---

## 3. Motion & Animación (Alto)

**Problema**: El proyecto tiene UNA sola animación CSS (breathing en el Hero). La skill exige:
- Page load con staggered reveals (animation-delay)
- Scroll-triggered animations
- Hover states que sorprendan
- Micro-interacciones en botones, inputs, links

**Lo que falta**:
- **Entrada de secciones**: Las secciones aparecen sin transición al hacer scroll. No hay fade-in, slide-up, o reveal.
- **Staggered card reveals**: Las 6 cards del grid aparecen todas a la vez. Deberían entrar con delays escalonados.
- **Botones planos**: Solo `hover:opacity-90`. Falta scale, glow, ripple, o underline animation.
- **Inputs del form**: Sin animación de label floating, sin focus glow suave.
- **Navbar**: Los links no tienen animación de underline o highlight.
- **Transición entre secciones**: No hay separadores visuales animados.

**Referencia positiva**: La animación breathing del Hero (`IconHero.css`) está bien hecha — usa `will-change`, `transform-origin`, y respeta `prefers-reduced-motion`. Este nivel de detalle debería extenderse a todo el sitio.

---

## 4. Composición Espacial (Medio)

**Problema**: Todos los layouts son simétricos y predecibles. La skill pide:
- Asimetría
- Overlap entre elementos
- Diagonal flow
- Grid-breaking elements
- Generous negative space OR controlled density

**Estado actual**:
- Hero: dos columnas simétricas (texto + icono)
- Services: grid 3-col perfecto
- CTA: bloque centrado
- Form: dos columnas simétricas (info + formulario)
- Footer: tres columnas simétricas

**Sugerencias**:
- Hero: superponer el icono sobre el texto parcialmente, o usar un layout asimétrico (60/40 en vez de 50/50)
- Services: romper el grid — una card más grande, o cards con offsets verticales (masonry-like)
- CTA: diagonal o full-width con background pattern que se desborde
- Separadores entre secciones: usar formas diagonales o gradient fades en vez de `border-b`

---

## 5. Backgrounds & Visual Details (Alto)

**Problema**: Cada sección tiene un fondo sólido plano (`background-color: var(--color-X)`). No hay atmósfera ni profundidad.

**Lo que falta**:
- **Noise/grain overlay**: Una textura sutil de grano sobre los fondos oscuros da profundidad
- **Gradient meshes**: Gradientes sutiles detrás del hero o del CTA
- **Glow effects**: El accent color `#3AA1B8` debería generar glows sutiles en elementos clave
- **Geometric patterns**: Puntos, líneas, o grid patterns como decoración de fondo
- **Layered transparencias**: Capas con opacidades diferentes para crear profundidad

**Ejemplo concreto** para el Hero:
```css
.hero-section {
  background:
    radial-gradient(ellipse at 70% 30%, rgba(58,161,184,0.08), transparent 60%),
    radial-gradient(ellipse at 20% 80%, rgba(58,161,184,0.04), transparent 50%),
    var(--bg-surface);
}
```

---

## 6. Identidad Visual / Aesthetic Direction (Alto)

**Problema**: El diseño actual es un "dark AI template" genérico. No hay una dirección estética clara ni un elemento que sea memorable. La skill enfatiza: *"What's the one thing someone will remember?"*

**Direcciones posibles** (elegir una y comprometerse):
- **Retro-futurismo**: Scanlines, colores neón, monospace, grid lines
- **Luxury/Refined**: Serifs elegantes, mucho whitespace, dorados sutiles, transiciones lentas
- **Brutalista**: Tipografía bold oversized, contrastes extremos, layouts que rompen la grid
- **Organic/Nature**: Formas redondeadas, verdes/ámbar, texturas naturales, motion fluida

---

## 7. HTML Semántico (Medio)

**Problemas encontrados**:

| Archivo | Línea | Issue |
|---------|-------|-------|
| `Card.jsx` | 3 | `<blockquote>` usado para cards. Debería ser `<article>` o `<div>` |
| `Footer.jsx` | 23-28 | `<h3>` dentro de `<ul>` — invalid nesting |
| `Navbar.jsx` | 27-32 | `<a>` del logo está vacío — sin texto ni contenido visible |
| `Cta.jsx` | 4 | `<blockquote>` usado para CTA section — semánticamente incorrecto |
| `Hero.jsx` | 8 | `<h1>` sin `id` correspondiente a `aria-labelledby` en el section padre |

---

## 8. Micro-interacciones (Medio)

**Botones**:
- Solo `hover:opacity-90` — debería tener scale, glow, color shift, o underline animation
- El `<a>` dentro de `<button>` en Hero:25-28 y Cta:7 es semánticamente inválido

**Cards**:
- El hover del icon-wrapper (`App.css:64-74`) está bien: scale + rotate + drop-shadow
- Pero la card en sí no tiene hover state — falta elevación, brillo de borde, o sutil transform

**Inputs del form**:
- Solo `focus:ring-2 focus:ring-[#3AA1B8]` — falta animación de transición suave
- Labels deberían flotar o animarse al focus

**Links del navbar**:
- Solo `hover:text-white hover:underline` — falta animación de underline que se deslice

---

## 9. Jerarquía Visual (Medio)

**Problemas**:
- Las secciones no tienen separación visual clara más que `border-b` planos
- El CTA (`Cta.jsx`) usa el mismo fondo (`--color-4`) que Hero y Form — no se destaca
- El título "Our Expertise" y "Get in Touch" tienen el mismo peso visual — sin variación
- Los subtítulos no se diferencian claramente de los párrafos descriptivos

---

## Resumen de Prioridades

| Prioridad | Categoría | Impacto |
|-----------|-----------|---------|
| 1 | Tipografía (cambiar Inter) | Transforma la percepción del sitio |
| 2 | Motion (staggered reveals, scroll animations) | Aporta vida y profesionalismo |
| 3 | Backgrounds (gradients, glow, texture) | Añade profundidad y atmósfera |
| 4 | Sistema de color expandido | Permite estados y variaciones |
| 5 | Composición espacial asimétrica | Rompe el aspecto de template |
| 6 | HTML semántico | Corrección estructural |
| 7 | Micro-interacciones en botones/inputs | Refinamiento de UX |
| 8 | Identidad visual clara | Diferenciación memorable |
