import { ArrowUpRight } from 'lucide-react'

import { Link } from 'react-router-dom'

export default function CTABanner({ title, description, href = '/contacto', variant = 'cyan' }) {
  const isBlue = variant === 'blue'
  return (
    <section className={isBlue ? 'bg-ink-950' : 'bg-cyan-300'}>
      <div className="container-site flex flex-col items-start justify-between gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center lg:px-12">
        <div>
          <p className={`text-xs font-bold uppercase tracking-[.2em] ${isBlue ? 'text-white/70' : 'text-blue-900'}`}>Hablemos de protección</p>
          <h2 className={`mt-3 text-3xl font-black tracking-tight md:text-4xl ${isBlue ? 'text-white' : 'text-ink-950'}`}>{title}</h2>
          <p className={`mt-2 ${isBlue ? 'text-white/75' : 'text-blue-950/75'}`}>{description}</p>
        </div>
        <Link to={href} className={`inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 font-bold transition-transform hover:-translate-y-0.5 ${isBlue ? 'bg-white text-ink-950 hover:bg-white/90' : 'bg-ink-950 text-white'}`}>Contactar a un asesor <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </section>
  )
}
