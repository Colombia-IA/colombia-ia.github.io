import {
  Server,
  Shield,
  Scale,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ChevronRight,
  Code2,
  Database,
  Globe,
  Bot,
  ExternalLink,
  Terminal,
  Cpu
} from 'lucide-react'

function App() {
  const projects = [
    {
      id: 1,
      title: 'Infraestructura Digital Abierta',
      description: 'Desarrollo de infraestructura tecnologica de codigo abierto para instituciones publicas y organizaciones de la sociedad civil colombiana.',
      icon: Server,
      tags: ['Open Source', 'Cloud', 'DevOps'],
      status: 'Activo',
      link: '#'
    },
    {
      id: 2,
      title: 'Soberania Tecnologica',
      description: 'Iniciativas para reducir la dependencia de tecnologias extranjeras y fortalecer las capacidades locales de desarrollo de IA.',
      icon: Shield,
      tags: ['Politica Publica', 'Educacion', 'Investigacion'],
      status: 'En desarrollo',
      link: '#'
    },
    {
      id: 3,
      title: 'Bot Legal',
      description: 'Asistente de inteligencia artificial especializado en legislacion colombiana, accesible para ciudadanos y profesionales del derecho.',
      icon: Scale,
      tags: ['LLM', 'NLP', 'Derecho'],
      status: 'Beta',
      link: '#'
    }
  ]

  const values = [
    { icon: Code2, label: 'Codigo 100% abierto' },
    { icon: Globe, label: 'Acceso libre y gratuito' },
    { icon: Database, label: 'Aprende haciendo' },
    { icon: Bot, label: 'IA para todos' }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-colombia-yellow via-colombia-blue to-colombia-red flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Colombia-IA</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#mision" className="text-sm text-gray-400 hover:text-white transition-colors">Mision</a>
              <a href="#proyectos" className="text-sm text-gray-400 hover:text-white transition-colors">Proyectos</a>
              <a href="#comunidad" className="text-sm text-gray-400 hover:text-white transition-colors">Comunidad</a>
              <a
                href="https://github.com/orgs/Colombia-IA/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-colombia-yellow/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-colombia-yellow/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-colombia-blue/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-colombia-yellow/10 border border-colombia-yellow/20 text-colombia-yellow text-sm mb-6">
              <Terminal className="w-4 h-4" />
              <span>Construyendo el futuro de Colombia con IA</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Inteligencia Artificial
              <span className="block text-gradient from-colombia-yellow via-white to-colombia-blue">
                para Colombia
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
              Un espacio abierto para aprender, experimentar y compartir conocimiento
              sobre inteligencia artificial. Todo el codigo es libre y gratuito.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-colombia-yellow text-black font-semibold rounded-lg hover:bg-colombia-yellow/90 transition-colors"
              >
                Ver proyectos
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/orgs/Colombia-IA/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/10"
              >
                <Github className="w-5 h-5" />
                Contribuir
              </a>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-gray-800/50">
            {values.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-2">
                <item.icon className="w-6 h-6 text-colombia-yellow" />
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mision" className="py-20 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Nuestra Mision
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Facilitar el aprendizaje de inteligencia artificial a traves de
                proyectos practicos, codigo abierto y recursos gratuitos para
                cualquier persona interesada.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Este es un espacio para experimentar, aprender y compartir. No hay
                costos, no hay barreras. Solo curiosidad y ganas de construir cosas
                interesantes con IA.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Code2, text: 'Codigo abierto y transparente' },
                  { icon: Database, text: 'Datos soberanos y seguros' },
                  { icon: Globe, text: 'Accesible para todos' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-lg bg-colombia-blue/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-colombia-yellow" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 p-8 glow">
                <div className="h-full flex flex-col justify-center">
                  <pre className="font-mono text-sm text-gray-400 overflow-hidden">
                    <code>
{`// Colombia-IA Core
const mission = {
  vision: "IA para todos",
  values: [
    "Transparencia",
    "Colaboracion",
    "Soberania"
  ],
  goal: buildFuture("Colombia")
};

// Iniciando...
await colombia.transform();`}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-colombia-yellow/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Iniciativas activas donde puedes contribuir y hacer parte del cambio tecnologico en Colombia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-800 rounded-2xl p-6 hover:border-colombia-yellow/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-colombia-yellow/10 flex items-center justify-center group-hover:bg-colombia-yellow/20 transition-colors">
                    <project.icon className="w-6 h-6 text-colombia-yellow" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Activo'
                      ? 'bg-green-500/20 text-green-400'
                      : project.status === 'Beta'
                      ? 'bg-colombia-yellow/20 text-colombia-yellow'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-colombia-yellow transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm text-colombia-yellow hover:underline"
                >
                  Ver mas
                  <ExternalLink className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/orgs/Colombia-IA/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-gray-800 rounded-lg text-sm font-medium transition-colors"
            >
              Ver todos los repositorios
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="comunidad" className="py-20 px-4 bg-gradient-to-b from-transparent via-colombia-blue/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-3xl p-8 sm:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-colombia-yellow/10 rounded-full blur-3xl" />

            <div className="relative max-w-2xl">
              <Bot className="w-12 h-12 text-colombia-yellow mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Aprende con nosotros
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Explora los repositorios, clona el codigo, experimenta y aprende.
                Si quieres contribuir o tienes ideas, las puertas estan abiertas.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/orgs/Colombia-IA/repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/10"
                >
                  <Mail className="w-5 h-5" />
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-colombia-yellow via-colombia-blue to-colombia-red flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Colombia-IA</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Construyendo el futuro digital de Colombia con inteligencia artificial abierta.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Proyectos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Infraestructura Digital</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Soberania Tecnologica</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bot Legal</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Comunidad</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contribuir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentacion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terminos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Licencia MIT</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-800/50 gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Colombia-IA. Codigo abierto bajo licencia MIT.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/orgs/Colombia-IA/repositories" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
