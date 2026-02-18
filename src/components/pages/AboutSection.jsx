import React from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  Award,
  Users,
  Shield,
  CheckCircle2,
  Hexagon,
} from "lucide-react";
import { useInView } from "../../hooks/useInView";

const values = [
  {
    icon: Shield,
    title: "Ética",
    description:
      "Actuamos con integridad y respeto en todas nuestras gestiones de cobranza.",
  },
  {
    icon: Award,
    title: "Transparencia",
    description:
      "Comunicación clara y reportes detallados sobre el avance de cada caso.",
  },
  {
    icon: Heart,
    title: "Efectividad",
    description:
      "Resultados medibles y comprobables en la recuperación de cartera.",
  },
  {
    icon: Users,
    title: "Profesionalismo",
    description:
      "Equipo capacitado y certificado en las mejores prácticas del sector.",
  },
];

const stats = [
  { value: "15+", label: "Años de Experiencia" },
  { value: "200+", label: "Empresas Atendidas" },
  { value: "$100M+", label: "Recuperados" },
  { value: "98%", label: "Efectividad" },
];

export default function AboutSection() {
  const [statsRef, statsInView] = useInView();
  const [historyLeftRef, historyLeftInView] = useInView();
  const [historyRightRef, historyRightInView] = useInView();
  const [missionRef, missionInView] = useInView();
  const [valuesHeaderRef, valuesHeaderInView] = useInView();
  const [valuesGridRef, valuesGridInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <section id="nosotros">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="hero-fade-up">
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Conoce a OrangeBee
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Despacho de cobranza profesional especializado en empresas,
              financieras y fintechs en México.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-12 bg-white border-b">
        <div
          ref={statsRef}
          className={`ob-stagger max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${statsInView ? 'visible' : ''}`}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-slate-900">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* History */}
      <div className="py-24 ob-section-soft">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={historyLeftRef}
            className={`ob-anim ob-fade-left ${historyLeftInView ? 'visible' : ''}`}
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              Nuestra Historia
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              Innovación en la Gestión de Cobranza
            </h3>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                OrangeBee surge de la necesidad de transformar la industria de
                la cobranza en México. Fundada por profesionales con amplia
                experiencia en el sector financiero.
              </p>
              <p>
                Atendemos empresas, financieras y fintechs que buscan un socio
                estratégico para la recuperación de su cartera vencida,
                manteniendo la integridad de las relaciones comerciales.
              </p>
              <p>
                Nuestra metodología cumple con normativas CONDUSEF y mejores
                prácticas internacionales.
              </p>
            </div>
          </div>

          <div
            ref={historyRightRef}
            className={`ob-anim ob-fade-right relative ${historyRightInView ? 'visible' : ''}`}
          >
            <div className="aspect-square bg-black rounded-3xl flex items-center justify-center text-center p-8">
              <div className="text-white">
                <Hexagon className="w-20 h-20 text-orange-500 fill-orange-500/20 mx-auto mb-6" />
                <div className="text-5xl font-bold mb-2">
                  <span className="text-orange-500">Orange</span><span className="text-white">Bee</span>
                </div>
                <div className="text-slate-400">Cobranza Inteligente</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-black rounded-2xl p-6 shadow-xl border border-white/10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-orange-500" />
                <div>
                  <div className="font-bold text-white">Cumplimiento</div>
                  <div className="text-white/60 text-sm">CONDUSEF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-24 bg-white">
        <div
          ref={missionRef}
          className={`ob-stagger max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 ${missionInView ? 'visible' : ''}`}
        >
          <div className="bg-black rounded-3xl p-10">
            <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Nuestra Misión
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Proporcionar soluciones de cobranza efectivas y éticas que
              maximicen la recuperación de cartera utilizando tecnología y
              procesos transparentes.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-10">
            <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Nuestra Visión
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Ser el despacho de cobranza más innovador y confiable de México,
              reconocido por nuestra efectividad y compromiso ético.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 ob-section-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={valuesHeaderRef}
            className={`ob-anim ob-fade-up text-center mb-16 ${valuesHeaderInView ? 'visible' : ''}`}
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              Nuestros Valores
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Principios que nos Definen
            </h3>
          </div>

          <div
            ref={valuesGridRef}
            className={`ob-stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ${valuesGridInView ? 'visible' : ''}`}
          >
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-neutral-950 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/25 rounded-full blur-[120px]" />
        </div>

        <div
          ref={ctaRef}
          className={`ob-anim ob-fade-up relative z-10 ${ctaInView ? 'visible' : ''}`}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Trabajar con Nosotros?
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Descubre cómo OrangeBee puede ayudarte a recuperar tu cartera
            vencida de manera efectiva y profesional.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Contáctanos Hoy
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
