import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Eye, ShieldCheck, Sparkles, ScanLine } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink-950 pt-28 text-white lg:pt-32">
      <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="container-site relative z-10 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_.96fr] lg:gap-16">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.24em] text-cyan-300">
              <span className="h-px w-10 bg-cyan-400" /> Seguridad privada de confianza
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .1 }} className="text-balance text-5xl font-black leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-8xl">
              Vigilamos lo que <span className="text-cyan-300">más importa.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .2 }} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Su seguridad, nuestra responsabilidad. Brindamos soluciones de seguridad privada enfocadas en la prevención, vigilancia y protección de personas, bienes e instalaciones.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .3 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contacto" className="btn-accent">Solicitar asesoría <ArrowUpRight className="h-4 w-4" /></a>
              <Link to="/servicios" className="btn-ghost">Conocer nuestros servicios</Link>
            </motion.div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-cyan-300" /> Personal capacitado</span>
              <span className="flex items-center gap-2"><Eye className="h-4 w-4 text-cyan-300" /> Prevención activa</span>
              <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-cyan-300" /> Atención profesional</span>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -inset-4 rounded-[2rem] border border-cyan-300/20" />
            <div className="absolute -inset-10 rounded-[3rem] border border-white/5" />
            <div className="security-visual relative aspect-square overflow-hidden rounded-[1.6rem] border border-cyan-300/20 bg-ink-900 shadow-2xl shadow-cyan-950/50">
              <div className="security-orbit absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30" />
              <div className="security-orbit security-orbit-delayed absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20" />
              <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/60 bg-blue-950/60 shadow-[0_0_70px_rgba(34,211,238,.28)] sm:h-48 sm:w-48">
                <div className="absolute inset-3 rounded-full border border-cyan-300/20" />
                <Eye className="h-16 w-16 text-cyan-300 sm:h-20 sm:w-20" strokeWidth={1.2} />
              </div>
              <div className="absolute left-6 top-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-cyan-300"><span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" /> Sistema activo</div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between"><div><p className="text-xs uppercase tracking-[.22em] text-slate-400">Argos Security</p><p className="mt-1 text-sm font-medium text-white">Protección 360°</p></div><ScanLine className="h-6 w-6 text-cyan-300" /></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
