import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView";
import { CONTACT } from "../../data/contact";

const stats = [
  { value: '15+',    label: 'Años de experiencia' },
  { value: '200+',   label: 'Empresas atendidas'  },
  { value: '98%',    label: 'Efectividad'          },
  { value: '$100M+', label: 'Recuperados'          },
];

export default function CTASection() {
  const [sectionRef, sectionInView] = useInView();

  return (
    <section className="py-28 bg-[#0b0b0c] relative overflow-hidden">
      {/* Orange atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-500/[0.11] rounded-full blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          ref={sectionRef}
          className={`ob-anim ob-fade-up ${sectionInView ? 'visible' : ''}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">Consulta 100% gratuita</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            ¿Listo para recuperar tu
            <span className="block text-orange-500">cartera vencida</span>?
          </h2>

          {/* Subtitle */}
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Agenda una consulta gratuita con nuestros especialistas y descubre
            cómo OrangeBee puede mejorar tu flujo de efectivo desde el primer día.
          </p>

          {/* Primary CTA */}
          <div className="flex justify-center mb-10">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-5 text-lg rounded-xl shadow-[0_16px_40px_rgba(255,85,0,0.40)] transition-all duration-200 hover:shadow-[0_20px_50px_rgba(255,85,0,0.50)] hover:-translate-y-0.5"
            >
              Solicitar Consulta Gratis
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Contact pills */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/[0.08] rounded-xl px-6 py-3.5 transition-colors"
            >
              <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
              <div className="text-left">
                <div className="text-white/40 text-xs leading-none mb-1">Llámanos</div>
                <div className="text-white text-sm font-medium">{CONTACT.phone}</div>
              </div>
            </a>
            <a
              href={CONTACT.emailHref}
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/[0.08] rounded-xl px-6 py-3.5 transition-colors"
            >
              <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
              <div className="text-left">
                <div className="text-white/40 text-xs leading-none mb-1">Escríbenos</div>
                <div className="text-white text-sm font-medium">{CONTACT.email}</div>
              </div>
            </a>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/[0.07] pt-10">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">{value}</div>
                <div className="text-white/40 text-xs uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
