import { ArrowUpRight, Building2, ClipboardCheck, Eye, LockKeyhole, Shield, Users } from 'lucide-react'

const services = [
  { icon: Shield, number: '01', title: 'Seguridad y vigilancia privada', text: 'Protección para residenciales, condominios, comercios, oficinas y empresas.' },
  { icon: LockKeyhole, number: '02', title: 'Control de acceso', text: 'Gestión segura de ingreso y salida de personas, vehículos y proveedores.' },
  { icon: Eye, number: '03', title: 'Monitoreo y rondas preventivas', text: 'Detectamos situaciones de riesgo antes de que se conviertan en incidentes.' },
  { icon: Building2, number: '04', title: 'Protección de instalaciones y bienes', text: 'Cuidamos cada espacio con protocolos diseñados para su operación.' },
  { icon: Users, number: '05', title: 'Seguridad para eventos', text: 'Personal preparado para actividades especiales y momentos que requieren control.' },
  { icon: ClipboardCheck, number: '06', title: 'Reportes y control de novedades', text: 'Información clara y oportuna para mantenerlo siempre informado.' },
]

export default function ServicesHome() {
  return <section id="servicios" className="section bg-white"><div className="container-site px-5 sm:px-8 lg:px-12"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">Lo que hacemos</p><h2 className="section-title mt-4 max-w-xl">Seguridad diseñada para su realidad.</h2></div><p className="max-w-sm text-slate-600">Un servicio personalizado, adaptado a las necesidades de cada lugar.</p></div><div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, number, title, text }) => <article key={number} className="group bg-white p-7 transition-colors hover:bg-ink-950 hover:text-white"><div className="flex items-start justify-between"><Icon className="h-7 w-7 text-blue-700 transition-colors group-hover:text-cyan-300" /><span className="font-mono text-sm text-slate-400">{number}</span></div><h3 className="mt-12 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600 group-hover:text-slate-400">{text}</p><ArrowUpRight className="mt-7 h-5 w-5 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-cyan-300" /></article>)}</div></div></section>
}
