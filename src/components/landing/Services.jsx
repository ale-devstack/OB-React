import React from "react";

import { Link } from "react-router-dom";
import {
  Building2,
  Landmark,
  Scale,
  FileText,
  ArrowRight,
  CheckCircle2,
  Phone,
  TrendingUp,
  Users,
  FileSearch,
  Gavel,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Building2,
    title: "Cobranza Comercial",
    description:
      "Recuperación especializada de cartera para el sector comercial e industrial, con estrategias diseñadas para preservar las relaciones comerciales.",
    features: [
      "Gestión preventiva y recordatorios",
      "Cobranza extrajudicial amistosa",
      "Negociación de convenios de pago",
      "Visitas domiciliarias",
      "Seguimiento personalizado",
      "Reportes de gestión detallados",
    ],
  },
  {
    icon: Landmark,
    title: "Cobranza Financiera",
    description:
      "Especialistas en recuperación de créditos para bancos, financieras y fintechs con estricto apego a la normatividad CONDUSEF.",
    features: [
      "Créditos personales y nómina",
      "Tarjetas de crédito",
      "Préstamos digitales",
      "Créditos automotrices",
      "Líneas de crédito empresarial",
      "Reestructuración de deudas",
    ],
  },
  {
    icon: Scale,
    title: "Cobranza Judicial",
    description:
      "Representación legal integral para la recuperación de adeudos mediante procedimientos judiciales y ejecución de garantías.",
    features: [
      "Demandas mercantiles",
      "Juicios ejecutivos",
      "Embargo de bienes",
      "Ejecución de garantías",
      "Recuperación de activos",
      "Procedimientos concursales",
    ],
  },
  {
    icon: FileText,
    title: "Consultoría en Cobranza",
    description:
      "Asesoría estratégica para optimizar políticas de crédito y procesos de cobranza internos de tu empresa.",
    features: [
      "Diagnóstico de cartera",
      "Diseño de políticas de crédito",
      "Capacitación de equipos",
      "Optimización de procesos",
      "Implementación de sistemas",
      "Mejores prácticas del sector",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Análisis de Cartera",
    description:
      "Evaluamos detalladamente tu cartera vencida para diseñar la estrategia óptima de recuperación.",
    icon: FileSearch,
  },
  {
    step: "02",
    title: "Diseño de Estrategia",
    description:
      "Creamos un plan de acción personalizado basado en el perfil de deudores y tipo de adeudo.",
    icon: TrendingUp,
  },
  {
    step: "03",
    title: "Gestión Activa",
    description:
      "Implementamos la estrategia con nuestro equipo especializado utilizando múltiples canales.",
    icon: Users,
  },
  {
    step: "04",
    title: "Seguimiento Legal",
    description:
      "En casos necesarios, procedemos con acciones legales para garantizar la recuperación.",
    icon: Gavel,
  },
];

export default function Services() {
  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              Nuestros Servicios
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Soluciones Integrales de Cobranza
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Portafolio completo de servicios de recuperación de cartera para
              empresas, financieras y fintechs en México.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="grid lg:grid-cols-2 gap-16 items-center"
                >
                  {/* TEXT */}
                  <div
                    className={`order-1 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-orange-500" />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact">
                      <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-6">
                        Solicitar Información
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* CARD */}
                  <div
                    className={`order-2 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon className="w-32 h-32 text-orange-500/10" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="text-white">
                          <div className="text-3xl font-bold mb-1">+200</div>
                          <div className="text-white/70 text-sm">
                            Clientes satisfechos
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              Nuestro Proceso
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Metodología de Trabajo
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Proceso estructurado que garantiza la máxima efectividad en la
              recuperación de tu cartera vencida.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 relative"
              >
                <div className="absolute -top-4 left-8 bg-orange-500 text-white font-bold text-sm px-3 py-1 rounded-full">
                  {step.step}
                </div>
                <div className="w-14 h-14 rounded-xl bg-slate-900/10 flex items-center justify-center mb-6 mt-4">
                  <step.icon className="w-7 h-7 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Necesitas Recuperar tu Cartera Vencida?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Contáctanos hoy y recibe una evaluación gratuita de tu cartera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-xl font-semibold"
                >
                  Solicitar Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+525555555555">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-white hover:bg-slate-800 px-8 py-6 rounded-xl"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
