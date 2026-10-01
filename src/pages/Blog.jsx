import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import CTABanner from '../components/CTABanner'

const posts = [
  {
    id: 1,
    title: '5 señales de que su empresa necesita seguridad privada',
    excerpt: 'Rotación de personal, incidentes recientes o activos de alto valor son señales claras de que requiere protección profesional.',
    category: 'Seguridad privada',
    date: '2024-06-15',
    image: 'https://placehold.co/800x450/0b1f3a/60a5fa?text=Seguridad+privada',
  },
  {
    id: 2,
    title: '¿Cómo funciona el control de acceso en una empresa?',
    excerpt: 'Registre el ingreso y salida de personas y vehículos, reduzca riesgos y mejore la trazabilidad de visitas.',
    category: 'Control de acceso',
    date: '2024-05-28',
    image: 'https://placehold.co/800x450/0b1f3a/60a5fa?text=Control+de+acceso',
  },
  {
    id: 3,
    title: 'Seguridad para eventos: lo que debe considerar',
    excerpt: 'Planifique el control de aforo, ingresos, zonas restringidas y respuesta ante emergencias para un evento seguro.',
    category: 'Eventos',
    date: '2024-05-10',
    image: 'https://placehold.co/800x450/0b1f3a/60a5fa?text=Seguridad+eventos',
  },
  {
    id: 4,
    title: 'Rondas preventivas: prevención antes del incidente',
    excerpt: 'Las rondas regulares permiten detectar riesgos, puertas forzadas o situaciones anómalas antes de que escalen.',
    category: 'Vigilancia',
    date: '2024-04-22',
    image: 'https://placehold.co/800x450/0b1f3a/60a5fa?text=Rondas+preventivas',
  },
  {
    id: 5,
    title: '¿Por qué contratar una empresa de seguridad certificada?',
    excerpt: 'Un proveedor formal garantiza personal capacitado, protocolos claros, seguros y respaldo ante cualquier eventualidad.',
    category: 'Consejos',
    date: '2024-04-05',
    image: 'https://placehold.co/800x450/0b1f3a/60a5fa?text=Empresa+certificada',
  },
  {
    id: 6,
    title: 'Proteja su condominio o residencial con vigilancia profesional',
    excerpt: 'La seguridad perimetral y el control de acceso son clave para proteger residentes, visitantes y bienes comunes.',
    category: 'Residenciales',
    date: '2024-03-18',
    image: 'https://placehold.co/800x450/0b1f3a/60a5fa?text=Seguridad+residencial',
  },
]

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Argos Security</title>
        <meta name="description" content="Artículos sobre seguridad privada, vigilancia, control de acceso y protección de instalaciones en Costa Rica." />
      </Helmet>

      <section className="pt-32 pb-16 bg-brand-900">
        <div className="container-site text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Blog técnico</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Consejos, normativas y tendencias del sector de seguridad privada.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <SectionHeader title="Últimas publicaciones" subtitle="Contenido preparado para posicionar el sitio en búsquedas técnicas." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video bg-slate-100">
                  <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="px-2 py-1 rounded bg-brand-50 text-brand-700 font-medium">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-900 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>
                  <button className="text-brand-700 font-semibold text-sm hover:text-brand-900 text-left">Leer más</button>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-10 text-sm">Las publicaciones pueden conectarse a un CMS o generarse como páginas estáticas.</p>
        </div>
      </section>

      <CTABanner title="¿Necesita asesoría en seguridad?" description="Nuestros especialistas pueden orientarle sobre la mejor solución para su caso." />
    </>
  )
}
