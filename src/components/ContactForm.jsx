import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { companyInfo } from '../data/constants'

const HONEYPOT_NAME = 'website'
const recipient = companyInfo.email

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', [HONEYPOT_NAME]: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData[HONEYPOT_NAME]) return
    const subject = encodeURIComponent(`Solicitud de asesoría — ${formData.name}`)
    const body = encodeURIComponent(`Nombre: ${formData.name}\nCorreo: ${formData.email}\nTeléfono: ${formData.phone || 'No indicado'}\n\nMensaje:\n${formData.message}`)
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) return <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-10 text-center"><CheckCircle className="mx-auto mb-4 h-10 w-10 text-blue-700" /><h3 className="text-xl font-bold text-ink-950">Gracias por escribirnos</h3><p className="mt-2 text-sm text-slate-600">Su cliente de correo se abrirá con el mensaje preparado.</p><button onClick={() => setSubmitted(false)} className="mt-5 text-sm font-bold text-blue-700">Enviar otro mensaje</button></div>

  return <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8"><div className="grid gap-5 md:grid-cols-2"><div><label htmlFor="contact-name" className="field-label">Nombre</label><input id="contact-name" type="text" name="name" required value={formData.name} onChange={handleChange} className="field" placeholder="Su nombre" /></div><div><label htmlFor="contact-email" className="field-label">Correo electrónico</label><input id="contact-email" type="email" name="email" required value={formData.email} onChange={handleChange} className="field" placeholder="correo@empresa.com" /></div><div className="md:col-span-2"><label htmlFor="contact-phone" className="field-label">Teléfono <span className="font-normal text-slate-400">(opcional)</span></label><input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} className="field" placeholder="Su número de contacto" /></div><div className="md:col-span-2"><label htmlFor="contact-message" className="field-label">¿Qué necesita proteger?</label><textarea id="contact-message" name="message" rows={5} required value={formData.message} onChange={handleChange} className="field resize-none" placeholder="Cuéntenos brevemente sobre su necesidad" /></div></div><input type="text" name={HONEYPOT_NAME} value={formData[HONEYPOT_NAME]} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" /><button type="submit" className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-800 md:w-auto">Enviar solicitud <Send className="h-4 w-4" /></button></form>
}
