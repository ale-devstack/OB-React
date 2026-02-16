import React from 'react';
import { Building2, Landmark, Scale, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-medium transition-colors"
          >
            Ver Todos los Servicios
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
