import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle2, Target, Eye, HeartHandshake } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import CTABanner from '../components/CTABanner'

const values = [
  { title: 'Integridad', description: 'Actuamos con honestidad, transparencia y responsabilidad en cada servicio de seguridad.' },
  { title: 'Vigilancia', description: 'Supervisión constante y atenta para detectar riesgos antes de que se conviertan en incidentes.' },
  { title: 'Seguridad', description: 'La protección de nuestros clientes, su personal y sus bienes es nuestra prioridad absoluta.' },
  { title: 'Compromiso', description: 'Cumplimos con profesionalismo, puntualidad y una atención personalizada en cada operación.' },
]

const milestones = [
  { year: '2010', text: 'Inicio de operaciones como empresa de seguridad privada en Costa Rica.' },
  { year: '2014', text: 'Expansión del servicio de control de acceso y protección perimetral.' },
  { year: '2018', text: 'Incorporación de seguridad para eventos y monitoreo especializado.' },
  { year: '2024', text: 'Más de 14 años protegiendo empresas, residenciales e instituciones en todo el país.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>Nosotros | Argos Security</title>
        <meta name="description" content="Conozca la historia, misión, visión y valores de Argos Security, empresa de seguridad privada en Costa Rica." />
      </Helmet>

      <section className="pt-32 pb-16 bg-brand-900">
        <div className="container-site text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Nosotros</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Más de 14 años de experiencia protegiendo personas, bienes e instalaciones en Costa Rica.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="section-title text-left">Nuestra historia</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Argos Security nació con la convicción de que la tranquilidad de nuestros clientes se construye con prevención, presencia profesional y protocolos claros. Desde nuestros inicios, hemos combinado personal capacitado, tecnología de apoyo y un compromiso inquebrantable con la seguridad.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Hoy atendemos a clientes en sectores como industria, comercio, hospitales, hoteles, restaurantes, condominios e instituciones públicas, ofreciendo vigilancia, control de acceso, monitoreo, protección de instalaciones y seguridad para eventos.
              </p>
              <ul className="space-y-2">
                {['Cobertura nacional', 'Personal capacitado', 'Protocolos de seguridad', 'Atención personalizada'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-energy-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img src="https://placehold.co/800x600/0b1f3a/60a5fa?text=Historia+Argos+Security" alt="Historia Argos Security" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <Target className="w-10 h-10 text-brand-700 mb-4" />
              <h3 className="text-xl font-bold text-brand-900 mb-3">Misión</h3>
              <p className="text-slate-600">Brindar servicios de seguridad privada confiables y profesionales que protejan personas, bienes e instalaciones, a través de un equipo capacitado, protocolos claros y una atención orientada a la prevención.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <Eye className="w-10 h-10 text-brand-700 mb-4" />
              <h3 className="text-xl font-bold text-brand-900 mb-3">Visión</h3>
              <p className="text-slate-600">Ser la empresa de referencia en Costa Rica en seguridad privada, reconocida por su confiabilidad, respuesta rápida y capacidad de diseñar soluciones de protección que superan las expectativas de nuestros clientes.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <HeartHandshake className="w-10 h-10 text-brand-700 mb-4" />
              <h3 className="text-xl font-bold text-brand-900 mb-3">Enfoque</h3>
              <p className="text-slate-600">Nos integramos como aliado estratégico de cada cliente, conociendo sus riesgos y necesidades para prevenir incidentes, reducir vulnerabilidades y garantizar la tranquilidad de su operación día a día.</p>
            </div>
          </div>

          <div className="mb-20">
            <SectionHeader title="Valores corporativos" subtitle="Los principios que guían cada acción de nuestro equipo." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-brand-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader title="Línea de tiempo" subtitle="Nuestra trayectoria de crecimiento y compromiso." />
            <div className="relative border-l-2 border-brand-200 ml-4 md:ml-8 space-y-10">
              {milestones.map((milestone, index) => (
                <motion.div key={milestone.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative pl-8 md:pl-12">
                  <span className="absolute -left-[9px] top-1 w-5 h-5 rounded-full bg-brand-700 border-4 border-white shadow" />
                  <span className="text-energy-600 font-bold text-lg">{milestone.year}</span>
                  <p className="text-slate-700 mt-1">{milestone.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Conozca de primera mano por qué empresas confían en nosotros" description="Solicite una cotización y descubra cómo podemos proteger su empresa o propiedad." />
    </>
  )
}
