# J&A Partners - Prototipo Landing Page

Este proyecto es una landing page moderna y responsive diseñada para **J&A Partners**, una empresa enfocada en soluciones de IA, automatización y software para investigación y negocios.

El sitio ha sido desarrollado utilizando **React**, **Vite** para la configuración del proyecto y **Tailwind CSS** para un diseño ágil y adaptable.

## Características Principales

*   **Diseño Responsive:** Adaptado para dispositivos móviles, tabletas y escritorio mediante Tailwind CSS.
*   **Arquitectura Modular:** Componentes reutilizables que facilitan el mantenimiento y la escalabilidad.
*   **UI Moderna:** Interfaz limpia centrada en la experiencia de usuario (UX) para servicios de consultoría técnica.

## Estructura del Proyecto (`src/`)

La aplicación sigue una estructura de carpetas modular para separar responsabilidades:

*   `assets/`: Recursos estáticos (principalmente iconos en formato SVG).
*   `components/`: Componentes base reutilizables (`Card`, `Info`, `Link`) utilizados en diversas secciones.
*   `navbar/`: Componente de navegación principal, responsive con menú colapsable.
*   `hero/`: Componente de la sección principal (Hero) con eslogan y llamadas a la acción (CTA).
*   `services/`: Contiene los componentes de la sección de servicios, formularios de contacto y llamadas a la acción adicionales.
*   `footer/`: Pie de página del sitio.
*   `App.jsx`: Punto central de composición que ensambla todos los componentes.
*   `main.jsx`: Punto de entrada de la aplicación React.

## Tecnologías Utilizadas

*   [React](https://react.dev/)
*   [Vite](https://vite.dev/)
*   [Tailwind CSS](https://tailwindcss.com/)

## Instrucciones de Instalación y Ejecución

Asegúrate de tener instalado [Node.js](https://nodejs.org/).

1. **Clonar el repositorio** (o acceder a la carpeta del proyecto).
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## Scripts Disponibles

*   `npm run dev`: Inicia el servidor de desarrollo local.
*   `npm run build`: Genera la versión optimizada para producción.
*   `npm run lint`: Ejecuta el análisis estático de código con ESLint.
*   `npm run preview`: Previsualiza la build de producción localmente.
