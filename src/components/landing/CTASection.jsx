import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView";
import { CONTACT } from "../../data/contact";

export default function CTASection() {
  const [sectionRef, sectionInView] = useInView();

  return (
    <section className="py-24 ob-section-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={sectionRef}
          className={`ob-anim ob-fade-up text-center px-8 py-14 md:px-16 ${sectionInView ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            ¿Listo para Recuperar tu
            <span className="text-orange-600"> Cartera Vencida</span>?
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
            Agenda una consulta gratuita con nuestros especialistas y descubre
            cómo OrangeBee puede mejorar tu flujo de efectivo.
          </p>

          <div className="flex justify-center mb-8">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-[0_14px_34px_rgba(234,88,12,0.28)] transition-all"
            >
              Solicitar Consulta Gratis
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-3 text-slate-700 hover:text-orange-500 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500">Llámanos</div>
                <div className="font-semibold text-slate-900">{CONTACT.phone}</div>
              </div>
            </a>

            <div className="hidden sm:block w-px h-12 bg-slate-300" />

            <a
              href={CONTACT.emailHref}
              className="flex items-center gap-3 text-slate-700 hover:text-orange-500 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500">Escríbenos</div>
                <div className="font-semibold text-slate-900">{CONTACT.email}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
