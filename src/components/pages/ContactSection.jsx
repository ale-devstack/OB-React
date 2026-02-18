import { useState } from "react";
import { Send, CheckCircle2, Hexagon } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import { usePageTitle } from "../../hooks/usePageTitle";
import { CONTACT_ITEMS } from "../../data/contact";

const inputClass = "w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all";
const labelClass = "block text-sm font-medium text-slate-700 mb-1";

export default function ContactSection() {
  usePageTitle('Contacto');

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", serviceType: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formRef, formInView] = useInView();
  const [infoRef, infoInView] = useInView();
  const [cardsRef, cardsInView] = useInView();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", company: "", serviceType: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contacto">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="hero-fade-up">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Hablemos de tu Cartera
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo OrangeBee puede
              ayudarte a recuperar tu cartera vencida.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 ob-section-soft">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div
            ref={formRef}
            className={`ob-anim ob-fade-left bg-white rounded-3xl p-8 shadow-sm border ${formInView ? 'visible' : ''}`}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Envíanos un Mensaje
            </h2>
            <p className="text-slate-500 mb-8">
              Te contactaremos en menos de 24 horas.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-slate-500">
                  Un asesor se comunicará contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>Nombre completo</label>
                    <input
                      id="contact-name"
                      required
                      placeholder="Juan García"
                      className={inputClass}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>Correo electrónico</label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      placeholder="juan@empresa.com"
                      className={inputClass}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-phone" className={labelClass}>Teléfono</label>
                    <input
                      id="contact-phone"
                      placeholder="+52 55 1234 5678"
                      className={inputClass}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className={labelClass}>Empresa</label>
                    <input
                      id="contact-company"
                      placeholder="Mi Empresa S.A."
                      className={inputClass}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className={labelClass}>Tipo de empresa</label>
                  <select
                    id="contact-service"
                    className={inputClass}
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  >
                    <option value="">Selecciona una opción</option>
                    <option>Empresa Comercial</option>
                    <option>Banco / Financiera</option>
                    <option>Fintech</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>Mensaje</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Cuéntanos sobre tu cartera..."
                    className={`${inputClass} resize-none`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div
            ref={infoRef}
            className={`ob-anim ob-fade-right space-y-8 ${infoInView ? 'visible' : ''}`}
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Información de Contacto
              </h2>
              <p className="text-slate-500">
                Estamos disponibles para atenderte.
              </p>
            </div>

            <div
              ref={cardsRef}
              className={`ob-stagger grid sm:grid-cols-2 gap-6 ${cardsInView ? 'visible' : ''}`}
            >
              {CONTACT_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border"
                >
                  <item.icon className="w-6 h-6 text-orange-500 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-slate-500 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="bg-black rounded-3xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center">
                  <Hexagon className="w-7 h-7 text-white fill-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">
                    <span className="text-orange-500">Orange</span><span className="text-white">Bee</span>
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Cobranza Inteligente
                  </p>
                </div>
              </div>

              <p className="text-slate-400 mb-6">
                Somos tu socio estratégico para la recuperación de cartera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
