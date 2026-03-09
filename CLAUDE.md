# Colombia-IA

## Descripcion del Proyecto

Landing page de la comunidad Colombia-IA, un espacio abierto para aprender, experimentar y compartir conocimiento sobre inteligencia artificial. El proyecto busca facilitar el aprendizaje de IA a traves de proyectos practicos, codigo abierto y recursos gratuitos.

## Stack Tecnologico

- **Framework**: React 18 con Vite 6
- **Routing**: React Router DOM (BrowserRouter con 404.html para GitHub Pages)
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
│   ├── favicon.svg                 # Favicon del sitio
│   ├── og-image.svg                # Imagen para Open Graph (redes sociales)
│   ├── robots.txt                  # Instrucciones para crawlers
│   └── sitemap.xml                 # Mapa del sitio para SEO
├── index.html                      # HTML base
├── package.json                    # Dependencias y scripts
├── vite.config.js                  # Configuracion de Vite
├── tailwind.config.js              # Configuracion de Tailwind
└── postcss.config.js               # Configuracion de PostCSS
```

## Rutas

El proyecto usa BrowserRouter con un 404.html fallback para GitHub Pages (URLs limpias, sin #):

| Ruta | Componente | URL en produccion |
|------|------------|-------------------|
| `/` | App.jsx | https://colombia-ia.github.io/ |
| `/directorio` | Directory.jsx | https://colombia-ia.github.io/directorio |

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

1. Editar `src/data/aiTools.json`
2. Agregar un nuevo objeto al array `tools` (copiar estructura de arriba)
3. Ejecutar:
   ```bash
   git add src/data/aiTools.json
   git commit -m "feat: add new AI tools"
   git push
   ```
4. GitHub Actions despliega automaticamente

**Categorias validas:** LLM, Imagen, Audio, Codigo, Busqueda, Productividad, Desarrollo, Plataforma

**Pricing valido:** open-source, free, freemium

**Nota:** El enfoque del directorio es ser CURADOR (las mejores herramientas) no RECOPILADOR (todas las herramientas). Calidad sobre cantidad.

## Scripts Disponibles

- `npm run dev`: Servidor de desarrollo
- `npm run build`: Build de produccion
- `npm run preview`: Preview del build

## Despliegue

El sitio se despliega en GitHub Pages mediante GitHub Actions (`.github/workflows/deploy.yml`).

## Comunidad

- **GitHub**: https://github.com/orgs/Colombia-IA/repositories
- **Telegram**: https://t.me/colombia_ia

## SEO y Google Search Console

### Configuracion SEO implementada (Marzo 2025)

- **BrowserRouter**: URLs limpias sin # para que Google pueda indexar
- **404.html**: Generado automaticamente en build para SPA en GitHub Pages
- **sitemap.xml**: Mapa del sitio en `public/sitemap.xml`
- **robots.txt**: Instrucciones para crawlers en `public/robots.txt`
- **Open Graph**: Meta tags para previews en redes sociales (og:image, og:title, etc.)
- **Canonical URL**: Evita contenido duplicado

### Google Search Console

**URL**: https://search.google.com/search-console (propiedad: colombia-ia.github.io)

**Sitemap enviado**: https://colombia-ia.github.io/sitemap.xml

**TODO - Revisar periodicamente:**
- [ ] Verificar que el sitemap fue procesado correctamente
- [ ] Revisar errores de cobertura/indexacion
- [ ] Monitorear palabras clave que generan trafico

### Mejoras SEO pendientes (opcional)

- Crear paginas individuales por herramienta (`/herramienta/[slug]`) para SEO long-tail
- Agregar Schema.org JSON-LD (SoftwareApplication) para rich results
- Convertir og-image.svg a PNG para mejor compatibilidad con Twitter
- Crear blog/contenido editorial para trafico organico sostenido

## Notas para Desarrollo

- El sitio usa un fondo azul oscuro (#0a1628) con particulas interactivas (ParticleBackground.jsx)
- Las particulas reaccionan al cursor del mouse y usan los colores de Colombia
- Los proyectos se definen como un array de objetos con id, title, description, icon, tags, status y link
- El sitio es responsive usando clases de Tailwind (sm:, md:, lg:)
- Usa efectos visuales como blur, gradientes y glow para el estilo dark mode
- Para agregar nuevas paginas: crear en `src/pages/` y agregar ruta en `src/main.jsx`
