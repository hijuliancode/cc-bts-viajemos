# BTS Viajemos - Technical Test

Este repositorio contiene la solución para la prueba técnica de **Maquetador React-Next.js** para Browser Travel Solutions.

## 🚀 Tecnologías

El proyecto ha sido construido utilizando un stack moderno y enfocado en rendimiento y escalabilidad:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** SASS (SCSS) con arquitectura 7-1 y Design Tokens
- **Estado/Data Fetching:** [TanStack Query](https://tanstack.com/query/latest) (React Query)
- **Internacionalización:** `next-intl` (Soporte para ES, EN, PT)
- **Iconos:** Lucide React

## 🛠 Instalación y Uso

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/hijuliancode/bts-viajemos.git
    cd bts-viajemos
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Correr el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en `http://localhost:3000`.

## 🏗 Arquitectura y Decisiones Técnicas

### Estructura de Carpetas

Se ha seguido una estructura modular para facilitar el mantenimiento:

```
src/
├── app/              # Rutas de Next.js (App Router)
├── components/       # Componentes React
│   ├── ui/           # Componentes base (Botones, Dropdowns)
│   ├── results/      # Componentes de negocio (Cards de autos)
│   └── layouts/      # Estructuras de página
├── hooks/            # Custom Hooks (Lógica separada de vista)
├── scss/             # Estilos globales y tokens (Arquitectura ITCSS)
├── services/         # Capa de comunicación con API
└── i18n/             # Configuración de idiomas
```

### Sistema de Estilos (SASS)

Se implementó un sistema de **Design Tokens** para mantener la consistencia visual. Los estilos no están harcodeados en los componentes, sino que consumen variables de:

- `_colors.scss`: Paleta de colores semántica.
- `_spacing.scss`: Escala de espaciado.
- `_typography.scss`: Tamaños y pesos de fuente.
- `_breakpoints.scss`: Mixins para diseño Mobile-First.

### Accesibilidad (a11y)

Se han integrado mejoras de accesibilidad como:
- Indicadores de foco visibles (`focus-ring`).
- Soporte para `prefers-reduced-motion`.
- Textos alternativos y estructura semántica.

## 🌍 Internacionalización

El proyecto soporta cambio de idioma dinámico. Las traducciones se encuentran en `messages/`.
- Español (Default)
- Inglés
- Portugués

## 🧪 API Mock

Se utilizan **Next.js API Routes** (`src/app/api/`) para simular un backend real, permitiendo probar la carga de datos, estados de error y tiempos de respuesta.
