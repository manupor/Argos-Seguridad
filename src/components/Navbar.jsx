import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = () => setIsOpen(false)

  const scrollToContact = () => {
    setIsOpen(false)
    if (location.pathname === '/') {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-ink-950/90 text-white backdrop-blur-xl">
      <nav className="container-site flex h-20 items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center">
          <img src="/logo-argos.jpeg" alt="Argos Security" className="h-14 w-24 object-contain object-center mix-blend-screen" />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300">
              {link.label}
            </Link>
          ))}
          {location.pathname === '/' ? (
            <button onClick={scrollToContact} className="btn-nav">
              Solicitar asesoría <ArrowUpRight className="h-4 w-4" />
            </button>
          ) : (
            <Link to="/contacto" className="btn-nav">
              Solicitar asesoría <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
        <button className="rounded-lg p-2 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-white/10 bg-ink-950 px-5 pb-5 md:hidden">
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={handleNavClick} className="block border-b border-white/10 py-4 text-sm text-slate-300">
              {link.label}
            </Link>
          ))}
          {location.pathname === '/' ? (
            <button onClick={scrollToContact} className="btn-accent mt-4 w-full">
              Solicitar asesoría <ArrowUpRight className="h-4 w-4" />
            </button>
          ) : (
            <Link to="/contacto" onClick={handleNavClick} className="btn-accent mt-4 flex w-full items-center justify-center gap-2">
              Solicitar asesoría <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}
    </header>
  )
}
