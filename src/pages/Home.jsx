import { Helmet } from 'react-helmet-async'
import Hero from '../sections/Hero'
import AboutHome from '../sections/AboutHome'
import WhyUs from '../sections/WhyUs'
import ServicesHome from '../sections/ServicesHome'
import CTABanner from '../components/CTABanner'
import ContactHome from '../sections/ContactHome'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Argos Security | Protección que se siente</title>
        <meta name="description" content="Soluciones de seguridad privada para personas, bienes e instalaciones. Vigilancia, control de acceso y protección profesional." />
      </Helmet>
      <Hero />
      <AboutHome />
      <ServicesHome />
      <WhyUs />
      <CTABanner
        title="Su tranquilidad no puede esperar"
        description="Cuéntenos qué necesita proteger y diseñaremos una solución a la medida."
        href="#contacto"
        variant="blue"
      />
      <ContactHome />
    </>
  )
}
