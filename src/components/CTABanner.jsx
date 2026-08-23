import { ArrowUpRight } from 'lucide-react'

export default function CTABanner({ title, description }) {
  return <section className="bg-cyan-300"><div className="container-site flex flex-col items-start justify-between gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center lg:px-12"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-900">Hablemos de protección</p><h2 className="mt-3 text-3xl font-black tracking-tight text-ink-950 md:text-4xl">{title}</h2><p className="mt-2 text-blue-950/75">{description}</p></div><a href="#contacto" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-950 px-6 py-3 font-bold text-white transition-transform hover:-translate-y-0.5">Contactar a un asesor <ArrowUpRight className="h-4 w-4" /></a></div></section>
}
