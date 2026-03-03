# Colombia-IA

## Descripcion del Proyecto

Landing page de la comunidad Colombia-IA, un espacio abierto para aprender, experimentar y compartir conocimiento sobre inteligencia artificial. El proyecto busca facilitar el aprendizaje de IA a traves de proyectos practicos, codigo abierto y recursos gratuitos.

## Stack Tecnologico

- **Framework**: React 18 con Vite 6
- **Routing**: React Router DOM (HashRouter para GitHub Pages)
- **Estilos**: Tailwind CSS 3.4
- **Iconos**: lucide-react
- **Lenguaje**: JavaScript (JSX)

## Estructura del Proyecto

```
colombia-ia/
├── src/
│   ├── components/
│   │   └── ParticleBackground.jsx  # Efecto de particulas interactivas
│   ├── data/
│   │   └── aiTools.json            # Base de datos de herramientas IA
│   ├── pages/
│   │   └── Directory.jsx           # Pagina del directorio de IAs
│   ├── App.jsx                     # Pagina principal (landing)
│   ├── main.jsx                    # Entry point con rutas
│   └── index.css                   # Estilos globales y Tailwind
├── public/
│   └── favicon.svg                 # Favicon del sitio
├── index.html                      # HTML base
├── package.json                    # Dependencias y scripts
├── vite.config.js                  # Configuracion de Vite
├── tailwind.config.js              # Configuracion de Tailwind
└── postcss.config.js               # Configuracion de PostCSS
```

## Rutas

El proyecto usa HashRouter para compatibilidad con GitHub Pages:

| Ruta | Componente | URL en produccion |
|------|------------|-------------------|
| `/` | App.jsx | https://colombia-ia.github.io/ |
| `/directorio` | Directory.jsx | https://colombia-ia.github.io/#/directorio |

## Colores de la Bandera de Colombia

El proyecto usa variables de Tailwind para los colores de la bandera:
- `colombia-yellow`: Amarillo
- `colombia-blue`: Azul
- `colombia-red`: Rojo

## Secciones de la Pagina Principal (App.jsx)

1. **Navigation**: Barra de navegacion fija con logo y enlaces
2. **Hero**: Seccion principal con titulo y CTAs
3. **Mision**: Descripcion de la mision del proyecto
4. **Proyectos**: Cards de proyectos destacados
5. **Directorio CTA**: Promocion del directorio de herramientas IA
6. **Comunidad**: Seccion para unirse a la comunidad
7. **Footer**: Enlaces y redes sociales

## Directorio de Herramientas IA (Directory.jsx)

Pagina dedicada a listar herramientas de IA gratuitas y open source.

### Funcionalidades
- Buscador en tiempo real
- Filtros por categoria (LLM, Imagen, Audio, Codigo, etc.)
- Filtros por precio (Open Source, Gratis, Freemium)
- Filtro por soporte en espanol
- Seccion de herramientas destacadas

### Estructura de datos (aiTools.json)

```javascript
{
  "id": "1",
  "name": "Nombre de la herramienta",
  "description": "Descripcion breve",
  "category": "LLM",           // LLM, Imagen, Audio, Codigo, Busqueda, Productividad, Desarrollo, Plataforma
  "pricing": "open-source",    // open-source, free, freemium
  "spanish": true,             // Soporte en espanol
  "url": "https://...",
  "github": "https://github.com/...",  // null si no tiene
  "tags": ["tag1", "tag2"],
  "featured": true             // Mostrar en destacados
}
```

### Agregar nuevas herramientas
Editar `src/data/aiTools.json` y agregar un nuevo objeto al array `tools`.

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

- El sitio usa un fondo azul oscuro (#0a1628) con particulas interactivas (ParticleBackground.jsx)
- Las particulas reaccionan al cursor del mouse y usan los colores de Colombia
- Los proyectos se definen como un array de objetos con id, title, description, icon, tags, status y link
- El sitio es responsive usando clases de Tailwind (sm:, md:, lg:)
- Usa efectos visuales como blur, gradientes y glow para el estilo dark mode
- Para agregar nuevas paginas: crear en `src/pages/` y agregar ruta en `src/main.jsx`
