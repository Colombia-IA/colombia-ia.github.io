# Colombia-IA

## Descripcion del Proyecto

Landing page de la comunidad Colombia-IA, un espacio abierto para aprender, experimentar y compartir conocimiento sobre inteligencia artificial. El proyecto busca facilitar el aprendizaje de IA a traves de proyectos practicos, codigo abierto y recursos gratuitos.

## Stack Tecnologico

- **Framework**: React 18 con Vite 6
- **Estilos**: Tailwind CSS 3.4
- **Iconos**: lucide-react
- **Lenguaje**: JavaScript (JSX)

## Estructura del Proyecto

```
colombia-ia/
├── src/
│   ├── App.jsx          # Componente principal con toda la UI
│   ├── main.jsx         # Entry point de React
│   └── index.css        # Estilos globales y Tailwind
├── public/
│   └── favicon.svg      # Favicon del sitio
├── index.html           # HTML base
├── package.json         # Dependencias y scripts
├── vite.config.js       # Configuracion de Vite
├── tailwind.config.js   # Configuracion de Tailwind
└── postcss.config.js    # Configuracion de PostCSS
```

## Colores de la Bandera de Colombia

El proyecto usa variables de Tailwind para los colores de la bandera:
- `colombia-yellow`: Amarillo
- `colombia-blue`: Azul
- `colombia-red`: Rojo

## Secciones de la Pagina

1. **Navigation**: Barra de navegacion fija con logo y enlaces
2. **Hero**: Seccion principal con titulo y CTAs
3. **Mision**: Descripcion de la mision del proyecto
4. **Proyectos**: Cards de proyectos destacados
5. **Comunidad**: Seccion para unirse a la comunidad
6. **Footer**: Enlaces y redes sociales

## Scripts Disponibles

- `npm run dev`: Servidor de desarrollo
- `npm run build`: Build de produccion
- `npm run preview`: Preview del build

## Despliegue

El sitio se despliega en GitHub Pages mediante GitHub Actions (`.github/workflows/deploy.yml`).

## Comunidad

- **GitHub**: https://github.com/orgs/Colombia-IA/repositories
- **Telegram**: https://t.me/colombia_ia

## Notas para Desarrollo

- El componente App.jsx contiene toda la UI en un solo archivo
- Los proyectos se definen como un array de objetos con id, title, description, icon, tags, status y link
- El sitio es responsive usando clases de Tailwind (sm:, md:, lg:)
- Usa efectos visuales como blur, gradientes y glow para el estilo dark mode
