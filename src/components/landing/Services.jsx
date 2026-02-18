import React from 'react';
import { Building2, Landmark, Scale, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';

const services = [
  {
    icon: Building2,
    title: 'Cobranza Comercial',
    description:
      'Recuperación de cartera para empresas comerciales e industriales con enfoque en preservar relaciones.',
    features: ['Gestión preventiva', 'Cobranza extrajudicial', 'Negociación de pagos'],
  },
  {
    icon: Landmark,
    title: 'Cobranza Financiera',
    description:
      'Especialistas en recuperación para bancos, financieras y fintechs con altos estándares.',
    features: ['Créditos personales', 'Tarjetas de crédito', 'Préstamos digitales'],
  },
  {
    icon: Scale,
    title: 'Cobranza Judicial',
    description:
      'Representación legal para la recuperación de adeudos a través de procesos judiciales.',
    features: ['Demandas mercantiles', 'Embargos', 'Ejecución de garantías'],
  },
  {
    icon: FileText,
    title: 'Consultoría',
    description:
      'Asesoría integral para optimizar políticas de crédito y procesos de cobranza internos.',
    features: ['Diagnóstico de cartera', 'Capacitación', 'Mejora de procesos'],
  },
];

export default function ServicesPreview() {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <section className="py-24 ob-section-soft">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`ob-anim ob-fade-up text-center mb-16 ${headerInView ? 'visible' : ''}`}
        >
          <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Soluciones Integrales de Cobranza
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Servicios especializados para empresas, financieras y fintechs.
            Resultados efectivos con total transparencia.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className={`ob-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ${gridInView ? 'visible' : ''}`}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-900/5 flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors">
                <service.icon className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, fidx) => (
                  <li
                    key={fidx}
                    className="flex items-center gap-2 text-sm text-slate-500"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`ob-anim ob-fade-up text-center ${ctaInView ? 'visible' : ''}`}
        >
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          >
            Ver Todos los Servicios
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
