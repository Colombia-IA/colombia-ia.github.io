import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  ExternalLink,
  Github,
  ArrowLeft,
  Sparkles,
  MessageSquare,
  Image,
  Mic,
  Code2,
  Briefcase,
  Wrench,
  LayoutGrid,
  Grid3X3,
  Star,
  Filter,
  Cpu,
  Globe,
  Send
} from 'lucide-react'
import aiToolsData from '../data/aiTools.json'
import ParticleBackground from '../components/ParticleBackground'

const iconMap = {
  Grid3X3,
  MessageSquare,
  Image,
  Mic,
  Code2,
  Search,
  Briefcase,
  Wrench,
  LayoutGrid
}

const pricingColors = {
  'open-source': 'bg-green-500/20 text-green-400 border-green-500/30',
  'free': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'freemium': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
}

const pricingLabels = {
  'open-source': 'Open Source',
  'free': 'Gratis',
  'freemium': 'Freemium'
}

function Directory() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPricing, setSelectedPricing] = useState('all')
  const [showSpanishOnly, setShowSpanishOnly] = useState(false)

  const filteredTools = useMemo(() => {
    return aiToolsData.tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory
      const matchesPricing = selectedPricing === 'all' || tool.pricing === selectedPricing
      const matchesSpanish = !showSpanishOnly || tool.spanish

      return matchesSearch && matchesCategory && matchesPricing && matchesSpanish
    })
  }, [searchQuery, selectedCategory, selectedPricing, showSpanishOnly])

  const featuredTools = useMemo(() => {
    return aiToolsData.tools.filter(tool => tool.featured)
  }, [])

  const stats = {
    total: aiToolsData.tools.length,
    openSource: aiToolsData.tools.filter(t => t.pricing === 'open-source').length,
    spanish: aiToolsData.tools.filter(t => t.spanish).length
  }

  return (
    <div className="min-h-screen bg-[#0a1628] text-gray-100">
      <ParticleBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a1628]/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-colombia-yellow via-colombia-blue to-colombia-red flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Colombia-IA</span>
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/orgs/Colombia-IA/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">Contribuir</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 px-4 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-colombia-yellow/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-colombia-blue/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-colombia-yellow/20 to-colombia-blue/20 border border-colombia-yellow/30 text-sm mb-6">
            <Sparkles className="w-4 h-4 text-colombia-yellow" />
            <span className="text-gray-200">{stats.total} herramientas de IA gratuitas y open source</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Directorio de
            <span className="block bg-gradient-to-r from-colombia-yellow via-white to-colombia-blue bg-clip-text text-transparent">
              Herramientas de IA
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Descubre las mejores herramientas de inteligencia artificial gratuitas y de codigo abierto.
            Sin suscripciones, sin barreras.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-colombia-yellow">{stats.total}</div>
              <div className="text-sm text-gray-400">Herramientas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{stats.openSource}</div>
              <div className="text-sm text-gray-400">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-colombia-blue">{stats.spanish}</div>
              <div className="text-sm text-gray-400">En Espanol</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar herramientas de IA..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-colombia-yellow/50 focus:ring-2 focus:ring-colombia-yellow/20 transition-all text-lg"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 px-4 border-y border-gray-800/50 bg-[#0a1628]/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {aiToolsData.categories.map(category => {
                const IconComponent = iconMap[category.icon] || Grid3X3
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-colombia-yellow text-black'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Right filters */}
            <div className="flex flex-wrap gap-2 items-center">
              {/* Pricing filter */}
              <div className="flex gap-1 bg-white/5 rounded-lg p-1">
                {aiToolsData.pricingTypes.map(pricing => (
                  <button
                    key={pricing.id}
                    onClick={() => setSelectedPricing(pricing.id)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      selectedPricing === pricing.id
                        ? 'bg-white/20 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {pricing.name}
                  </button>
                ))}
              </div>

              {/* Spanish toggle */}
              <button
                onClick={() => setShowSpanishOnly(!showSpanishOnly)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  showSpanishOnly
                    ? 'bg-colombia-blue text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>Espanol</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {selectedCategory === 'all' && selectedPricing === 'all' && !searchQuery && !showSpanishOnly && (
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-colombia-yellow fill-colombia-yellow" />
              <h2 className="text-2xl font-bold">Destacados</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredTools.slice(0, 4).map(tool => (
                <a
                  key={tool.id}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-br from-colombia-yellow/10 to-colombia-blue/10 border border-colombia-yellow/30 rounded-2xl p-5 hover:border-colombia-yellow/60 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="absolute top-3 right-3">
                    <Star className="w-4 h-4 text-colombia-yellow fill-colombia-yellow" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-colombia-yellow transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                    {tool.description}
                  </p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${pricingColors[tool.pricing]}`}>
                    {pricingLabels[tool.pricing]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tools Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              {filteredTools.length} herramienta{filteredTools.length !== 1 ? 's' : ''}
              {selectedCategory !== 'all' && ` en ${aiToolsData.categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
          </div>

          {filteredTools.length === 0 ? (
            <div className="text-center py-20">
              <Filter className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No se encontraron herramientas</h3>
              <p className="text-gray-400">Intenta con otros filtros o terminos de busqueda</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map(tool => (
                <article
                  key={tool.id}
                  className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-800 rounded-2xl p-6 hover:border-colombia-yellow/50 transition-all duration-300 hover:shadow-lg hover:shadow-colombia-yellow/5"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-colombia-yellow transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-xs text-gray-500">{tool.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {tool.spanish && (
                        <span className="px-2 py-1 bg-colombia-blue/20 text-colombia-blue rounded-full text-xs font-medium flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          ES
                        </span>
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${pricingColors[tool.pricing]}`}>
                        {pricingLabels[tool.pricing]}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {tool.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-colombia-yellow text-black font-semibold rounded-lg hover:bg-colombia-yellow/90 transition-colors text-sm"
                    >
                      Visitar
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    {tool.github && (
                      <a
                        href={tool.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Conoces una herramienta que falta?</h2>
          <p className="text-gray-400 mb-8">
            Ayudanos a mantener este directorio actualizado. Unete a nuestra comunidad y sugiere nuevas herramientas de IA.
          </p>
          <a
            href="https://t.me/colombia_ia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0088cc] hover:bg-[#0077b5] text-white font-semibold rounded-lg transition-colors"
          >
            <Send className="w-5 h-5" />
            Unete a Telegram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Colombia-IA. Codigo abierto para todos.</p>
        </div>
      </footer>
    </div>
  )
}

export default Directory
