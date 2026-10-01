import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Shield, LockKeyhole, Eye, Building2, Users, ClipboardCheck, ScanSearch, Radio } from 'lucide-react'
import CTABanner from '../components/CTABanner'

const securityServices = [
  {
    icon: Shield,
    title: 'Vigilancia y seguridad privada',
    description: 'Personal de seguridad capacitado para proteger residenciales, condominios, comercios, oficinas e industrias las 24 horas.',
  },
  {
    icon: LockKeyhole,
    title: 'Control de acceso',
    description: 'Regulamos el ingreso y salida de personas, vehículos y proveedores con protocolos claros y tecnología de apoyo.',
  },
  {
    icon: Eye,
    title: 'Monitoreo y rondas preventivas',
    description: 'Supervisión constante de instalaciones para detectar riesgos a tiempo y prevenir incidentes antes de que ocurran.',
  },
  {
    icon: Building2,
    title: 'Protección de instalaciones y bienes',
    description: 'Cuidamos cada espacio de su operación con planes de seguridad diseñados a la medida de su empresa o propiedad.',
  },
  {
    icon: Users,
    title: 'Seguridad para eventos',
    description: 'Personal preparado para actividades especiales, conferencias, conciertos y eventos corporativos que requieren control de aforo y orden.',
  },
  {
    icon: ClipboardCheck,
    title: 'Reportes y control de novedades',
    description: 'Informes claros, puntuales y documentados de cada ronda, incidente o situación relevante para mantenerlo siempre informado.',
  },
  {
    icon: ScanSearch,
    title: 'Vigilancia perimetral',
    description: 'Recorridos estratégicos alrededor de su propiedad para blindar puntos de acceso y zonas vulnerables.',
  },
  {
    icon: Radio,
    title: 'Coordinación con autoridades',
    description: 'En caso de incidente, activamos los protocolos de comunicación con las autoridades correspondientes de manera inmediata.',
  },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Servicios | Argos Security</title>
        <meta name="description" content="Servicios profesionales de seguridad privada en Costa Rica: vigilancia, control de acceso, protección de instalaciones y seguridad para eventos." />
      </Helmet>

      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 text-white">
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="container-site relative z-10 px-5 text-center sm:px-8 lg:px-12">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-cyan-300">
            Lo que hacemos
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .1 }} className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Nuestros servicios
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .2 }} className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Soluciones de seguridad privada diseñadas para proteger personas, bienes e instalaciones con profesionalismo y atención permanente.
          </motion.p>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-ink-950">
        <div className="container-site relative z-10 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-cyan-300">Especialidades</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-white md:text-5xl">Seguridad integral para cada necesidad.</h2>
            <p className="mt-4 text-slate-400">Cada servicio se adapta a las condiciones de su empresa, propiedad o evento.</p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {securityServices.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-cyan-300/30 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-cyan-300 transition-colors group-hover:bg-blue-600/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="¿Necesita proteger su empresa o propiedad?" description="Cuéntenos su necesidad y diseñaremos un plan de seguridad a la medida." href="/contacto" />
    </>
  )
}
