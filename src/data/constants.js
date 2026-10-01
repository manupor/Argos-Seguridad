import {
  Shield, LockKeyhole, Eye, Building2, Users, ClipboardCheck,
  ScanSearch, Radio, ShieldCheck, BadgeCheck,
  Factory, Stethoscope, Hotel, UtensilsCrossed, Home,
  Landmark, Briefcase, Clock, MapPin,
} from 'lucide-react'

export const services = [
  {
    id: 'vigilancia-seguridad',
    title: 'Vigilancia y seguridad privada',
    description: 'Personal de seguridad capacitado para proteger residenciales, condominios, comercios, oficinas e industrias las 24 horas.',
    icon: Shield,
    category: 'seguridad',
  },
  {
    id: 'control-acceso',
    title: 'Control de acceso',
    description: 'Gestión segura de ingreso y salida de personas, vehículos y proveedores.',
    icon: LockKeyhole,
    category: 'seguridad',
  },
  {
    id: 'monitoreo-rondas',
    title: 'Monitoreo y rondas preventivas',
    description: 'Supervisión constante para detectar riesgos antes de que se conviertan en incidentes.',
    icon: Eye,
    category: 'seguridad',
  },
  {
    id: 'proteccion-instalaciones',
    title: 'Protección de instalaciones y bienes',
    description: 'Cuidamos cada espacio con protocolos diseñados a la medida de su operación.',
    icon: Building2,
    category: 'seguridad',
  },
  {
    id: 'seguridad-eventos',
    title: 'Seguridad para eventos',
    description: 'Personal preparado para actividades especiales y momentos que requieren control.',
    icon: Users,
    category: 'eventos',
  },
  {
    id: 'reportes-novedades',
    title: 'Reportes y control de novedades',
    description: 'Informes claros y oportunos de cada ronda, incidente o situación relevante.',
    icon: ClipboardCheck,
    category: 'seguridad',
  },
  {
    id: 'vigilancia-perimetral',
    title: 'Vigilancia perimetral',
    description: 'Recorridos estratégicos para blindar puntos de acceso y zonas vulnerables.',
    icon: ScanSearch,
    category: 'seguridad',
  },
  {
    id: 'coordinacion-autoridades',
    title: 'Coordinación con autoridades',
    description: 'Activación inmediata de protocolos con las autoridades correspondientes.',
    icon: Radio,
    category: 'seguridad',
  },
]

export const sectors = [
  { label: 'Industria', icon: Factory },
  { label: 'Comercio', icon: Building2 },
  { label: 'Hospitales', icon: Stethoscope },
  { label: 'Hoteles', icon: Hotel },
  { label: 'Restaurantes', icon: UtensilsCrossed },
  { label: 'Condominios', icon: Home },
  { label: 'Instituciones públicas', icon: Landmark },
  { label: 'Empresas de servicios', icon: Briefcase },
]

export const benefits = [
  {
    title: 'Respuesta rápida',
    description: 'Atención ágil en todo el territorio nacional ante emergencias o requerimientos de seguridad.',
    icon: Clock,
  },
  {
    title: 'Personal capacitado',
    description: 'Guardias de seguridad entrenados y con actitud de servicio para cada tipo de instalación.',
    icon: Users,
  },
  {
    title: 'Cobertura nacional',
    description: 'Operamos en todo Costa Rica, llevando soluciones de seguridad donde las necesite.',
    icon: MapPin,
  },
  {
    title: 'Seguridad',
    description: 'Protocolos claros, seguros de responsabilidad civil y cumplimiento de normativa vigente.',
    icon: Shield,
  },
  {
    title: 'Calidad garantizada',
    description: 'Supervisión de rutas, reportes oportunos y control constante de nuestros servicios.',
    icon: BadgeCheck,
  },
  {
    title: 'Experiencia de +14 años',
    description: 'Más de una década protegiendo empresas, residenciales e instituciones costarricenses.',
    icon: ShieldCheck,
  },
]

export const faqs = [
  {
    question: '¿Ofrecen servicio de seguridad las 24 horas?',
    answer: 'Sí. Contamos con personal y supervisores disponibles para turnos diurnos, nocturnos y fines de semana según las necesidades de su operación.',
  },
  {
    question: '¿Cómo solicito una cotización?',
    answer: 'Puede completar el formulario de cotización en esta web, escribirnos por WhatsApp o llamarnos directamente. Un asesor le contactará para entender su necesidad y enviarle una propuesta detallada.',
  },
  {
    question: '¿Trabajan en todo Costa Rica?',
    answer: 'Sí. Argos Security tiene cobertura nacional y puede desplazar personal de seguridad a cualquier zona del país.',
  },
  {
    question: '¿Qué tipo de garantía ofrecen sobre sus servicios?',
    answer: 'Garantizamos el cumplimiento de protocolos, reportes puntuales y personal capacitado. Cada servicio incluye documentación de respaldo y seguimiento según el alcance contratado.',
  },
  {
    question: '¿Sus guardias están capacitados y uniformados?',
    answer: 'Sí. Nuestro personal cuenta con formación continua, uniforme identificado y supervisión permanente para brindar un servicio profesional.',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Protección de centro comercial',
    category: 'Vigilancia',
    client: 'Centro comercial en San José',
    description: 'Vigilancia diurna y nocturna con rondas preventivas, control de accesos y reportes diarios para comercios y zonas comunes.',
    beforeImage: 'https://placehold.co/800x450/1e293b/94a3b8?text=Antes+-+Vigilancia',
    afterImage: 'https://placehold.co/800x450/0f172a/60a5fa?text=Después+-+Vigilancia',
    serviceType: 'vigilancia',
  },
  {
    id: 2,
    title: 'Control de acceso para oficinas',
    category: 'Control de acceso',
    client: 'Empresa de servicios',
    description: 'Gestión de ingreso y salida de colaboradores, visitantes y proveedores con registro detallado y protocolos de seguridad.',
    beforeImage: 'https://placehold.co/800x450/1e293b/94a3b8?text=Antes+-+Acceso',
    afterImage: 'https://placehold.co/800x450/0f172a/60a5fa?text=Después+-+Acceso',
    serviceType: 'control-acceso',
  },
  {
    id: 3,
    title: 'Seguridad para evento corporativo',
    category: 'Seguridad para eventos',
    client: 'Conferencia empresarial',
    description: 'Coordinación de personal de seguridad, control de aforo, ingresos y zonas restringidas para evento de 500 personas.',
    beforeImage: 'https://placehold.co/800x450/1e293b/94a3b8?text=Antes+-+Evento',
    afterImage: 'https://placehold.co/800x450/0f172a/60a5fa?text=Después+-+Evento',
    serviceType: 'eventos',
  },
  {
    id: 4,
    title: 'Protección de condominio residencial',
    category: 'Vigilancia residencial',
    client: 'Condominio en Escazú',
    description: 'Vigilancia perimetral, control de accesos y rondas nocturnas para proteger residentes y bienes comunes.',
    beforeImage: 'https://placehold.co/800x450/1e293b/94a3b8?text=Antes+-+Residencial',
    afterImage: 'https://placehold.co/800x450/0f172a/60a5fa?text=Después+-+Residencial',
    serviceType: 'residencial',
  },
  {
    id: 5,
    title: 'Seguridad para institución educativa',
    category: 'Seguridad institucional',
    client: 'Institución pública',
    description: 'Personal de seguridad en accesos principales, rondas preventivas y acompañamiento durante horarios de ingreso y salida.',
    beforeImage: 'https://placehold.co/800x450/1e293b/94a3b8?text=Antes+-+Institucional',
    afterImage: 'https://placehold.co/800x450/0f172a/60a5fa?text=Después+-+Institucional',
    serviceType: 'institucional',
  },
  {
    id: 6,
    title: 'Monitoreo de zona industrial',
    category: 'Vigilancia industrial',
    client: 'Planta industrial',
    description: 'Rondas programadas, control de acceso de proveedores y reportes de novedades para proteger instalaciones industriales.',
    beforeImage: 'https://placehold.co/800x450/1e293b/94a3b8?text=Antes+-+Industrial',
    afterImage: 'https://placehold.co/800x450/0f172a/60a5fa?text=Después+-+Industrial',
    serviceType: 'vigilancia',
  },
]

export const gallery = [
  { id: 1, src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Personal+de+seguridad', alt: 'Personal de Argos Security', category: 'personal' },
  { id: 2, src: 'https://placehold.co/800x600/0f172a/60a5fa?text=Vehículos+y+equipos', alt: 'Vehículos y equipos', category: 'equipos' },
  { id: 3, src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Ronda+preventiva', alt: 'Ronda preventiva', category: 'trabajos' },
  { id: 4, src: 'https://placehold.co/800x600/0f172a/60a5fa?text=Control+de+acceso', alt: 'Control de acceso', category: 'instalaciones' },
  { id: 5, src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Evento+corporativo', alt: 'Seguridad para eventos', category: 'equipos' },
  { id: 6, src: 'https://placehold.co/800x600/0f172a/60a5fa?text=Vigilancia+perimetral', alt: 'Vigilancia perimetral', category: 'equipos' },
  { id: 7, src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Reporte+de+novedades', alt: 'Reporte de novedades', category: 'trabajos' },
  { id: 8, src: 'https://placehold.co/800x600/0f172a/60a5fa?text=Protección+residencial', alt: 'Protección residencial', category: 'instalaciones' },
]

export const testimonials = [
  {
    id: 1,
    text: 'La presencia de Argos Security en nuestro condominio nos dio tranquilidad. Son puntuales, profesionales y reportan todo.',
    author: 'María F.',
    role: 'Administradora de condominio',
  },
  {
    id: 2,
    text: 'El control de acceso y las rondas preventivas redujeron incidentes en nuestra empresa. Totalmente recomendados.',
    author: 'Ing. Carlos M.',
    role: 'Gerente de planta',
  },
  {
    id: 3,
    text: 'Nos apoyaron en un evento corporativo grande. Muy buena organización y personal atento.',
    author: 'Andrés Q.',
    role: 'Coordinador de eventos',
  },
]

export const companyInfo = {
  name: 'Argos Security',
  slogan: 'Seguridad privada profesional',
  phone: '+506 7243 7781',
  email: 'info@argossecurity.com',
  address: 'Costa Rica',
  schedule: 'Lunes a domingo: 24 horas',
  years: 14,
  whatsapp: '50672437781',
}

export const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Clientes', to: '/clientes' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contáctenos', to: '/contacto' },
  { label: 'Cotizar', to: '/cotizar' },
]

export const siteKeywords = [
  'seguridad privada Costa Rica',
  'vigilancia privada Costa Rica',
  'control de acceso Costa Rica',
  'seguridad para eventos Costa Rica',
  'protección de instalaciones Costa Rica',
  'guardias de seguridad Costa Rica',
  'seguridad residencial Costa Rica',
  'empresa de seguridad Costa Rica',
]
