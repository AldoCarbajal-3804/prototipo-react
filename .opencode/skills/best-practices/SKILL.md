---
  name: best-practices 
  description: React and Next.js performance optimization guidelines from Vercel Engineering. Contains 40+ rules across 8 categories, prioritized by impact.
---


# Skills de Desarrollo Frontend

---

## `best-practices`

Optimizaciones de rendimiento para React y Next.js. Identifica cuellos de botella, waterfalls de red, problemas de bundle y re-renders innecesarios.

**Usar cuando:**
- Escribir nuevos componentes React o páginas Next.js
- Implementar data fetching (cliente o servidor)
- Revisar código por problemas de rendimiento
- Optimizar tamaño de bundle o tiempos de carga

**Categorías:**

| Categoría | Prioridad |
|---|---|
| Eliminación de waterfalls | Crítica |
| Optimización de bundle | Crítica |
| Rendimiento server-side | Alta |
| Data fetching client-side | Media-Alta |
| Optimización de re-renders | Media |
| Rendimiento de renderizado | Media |
| Micro-optimizaciones JS | Baja-Media |

---

## `web-design-guidelines`

Auditoría de código UI contra más de 100 reglas de buenas prácticas web: accesibilidad, rendimiento y UX.

**Usar cuando:**
- "Revisa mi UI"
- "Verifica accesibilidad"
- "Audita el diseño"
- "Revisa la UX"
- "Comprueba mi sitio contra buenas prácticas"

**Categorías:**

| Categoría | Qué cubre |
|---|---|
| Accesibilidad | aria-labels, HTML semántico, keyboard handlers |
| Focus States | Focus visible, patrones focus-visible |
| Formularios | autocomplete, validación, manejo de errores |
| Animaciones | prefers-reduced-motion, transforms en compositor |
| Tipografía | Comillas tipográficas, ellipsis, tabular-nums |
| Imágenes | Dimensiones, lazy loading, alt text |
| Rendimiento | Virtualización, layout thrashing, preconnect |
| Navegación y Estado | URL refleja estado, deep-linking |
| Dark Mode y Theming | color-scheme, theme-color meta |
| Touch e Interacción | touch-action, tap-highlight |
| Locale e i18n | Intl.DateTimeFormat, Intl.NumberFormat |

---

## `react-native-guidelines`

Buenas prácticas de React Native optimizadas para agentes de IA. 16 reglas en 7 secciones sobre rendimiento, arquitectura y patrones específicos de plataforma.

**Usar cuando:**
- Construir apps con React Native o Expo
- Optimizar rendimiento mobile
- Implementar animaciones o gestos
- Trabajar con módulos nativos o APIs de plataforma

**Categorías:**

| Categoría | Prioridad | Qué cubre |
|---|---|---|
| Rendimiento | Crítica | FlashList, memoización, cómputo pesado |
| Layout | Alta | Patrones flex, safe areas, manejo de teclado |
| Animaciones | Alta | Reanimated, manejo de gestos |
| Imágenes | Media | expo-image, caché, lazy loading |
| Estado | Media | Patrones Zustand, React Compiler |
| Arquitectura | Media | Estructura monorepo, imports |
| Plataforma | Media | Patrones específicos iOS/Android |

---

## `composition-patterns`

Patrones de composición en React que escalan. Evita la proliferación de props booleanas mediante compound components, elevación de estado y composición interna.

**Usar cuando:**
- Refactorizar componentes con muchas props booleanas
- Construir librerías de componentes reutilizables
- Diseñar APIs flexibles
- Revisar arquitectura de componentes

**Patrones cubiertos:**
- Extraer compound components
- Elevar estado para reducir props
- Componer internals para mayor flexibilidad
- Evitar prop drilling