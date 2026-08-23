import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'

const highlights = ['Prevención antes que reacción', 'Protocolos claros y supervisión constante', 'Servicio personalizado para cada entorno']

export default function AboutHome() {
  return (
    <section id="nosotros" className="section bg-slate-50">
      <div className="container-site grid items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-24 lg:px-12">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-cyan-200" />
          <div className="relative rounded-3xl bg-ink-950 p-8 text-white shadow-2xl sm:p-12">
            <span className="text-7xl font-black leading-none text-cyan-300">01</span>
            <p className="mt-12 max-w-xs text-2xl font-semibold leading-tight">Una mirada atenta cambia la forma de proteger.</p>
            <div className="mt-16 h-px bg-white/15" />
            <p className="mt-5 text-sm leading-relaxed text-slate-400">ARGOS SECURITY · Prevención, vigilancia y protección</p>
          </div>
        </div>
        <div>
          <p className="eyebrow">Nuestra filosofía</p>
          <h2 className="section-title mt-4 max-w-2xl">La confianza se construye estando presentes.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">En Argos Security entendemos que la seguridad no es solo reaccionar ante un incidente. Es conocer el entorno, anticipar riesgos y acompañar a nuestros clientes con profesionalismo.</p>
          <ul className="mt-8 space-y-4">
            {highlights.map((item) => <li key={item} className="flex items-center gap-3 font-semibold text-ink-900"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-700"><Check className="h-4 w-4" /></span>{item}</li>)}
          </ul>
          <Link to="/nosotros" className="mt-9 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-cyan-600">Conozca más sobre nosotros <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  )
}
