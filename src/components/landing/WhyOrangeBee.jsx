import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Award,
  Clock,
  Headphones,
  BarChart3,
  Lock,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description:
      "Más de 15 años gestionando cobranza para financieras y fintechs.",
  },
  {
    icon: BarChart3,
    title: "Resultados Medibles",
    description:
      "Dashboard en tiempo real con métricas claras de recuperación.",
  },
  {
    icon: Lock,
    title: "Confidencialidad Total",
    description:
      "Protección de datos conforme a LFPDPPP y estándares internacionales.",
  },
  {
    icon: Headphones,
    title: "Atención Dedicada",
    description:
      "Ejecutivo de cuenta asignado para seguimiento personalizado.",
  },
  {
    icon: Clock,
    title: "Respuesta Inmediata",
    description:
      "Inicio de gestión en menos de 24 horas desde la asignación.",
  },
  {
    icon: CheckCircle2,
    title: "Cobranza Ética",
    description:
      "Cumplimiento total de normativas CONDUSEF y mejores prácticas.",
  },
];

export default function WhyOrangeBee() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-square bg-neutral-900 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <motion.div
                    className="text-7xl font-bold mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    98%
                  </motion.div>
                  <div className="text-xl text-white/80">
                    Tasa de Recuperación
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="grid grid-cols-2 gap-8">
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <div className="text-3xl font-bold text-orange-500">
                          +200
                        </div>
                        <div className="text-white/60 text-sm">
                          Clientes Activos
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <div className="text-3xl font-bold text-orange-500">
                          24h
                        </div>
                        <div className="text-white/60 text-sm">
                          Tiempo de Respuesta
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative blobs 
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
            */}
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-grey/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="font-bold text-black">
                    cumplimiento
                  </div>
                  <div className="text-black/60 text-sm">CONDUSEF</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
              ¿Por Qué OrangeBee?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              La Diferencia de Trabajar con Profesionales
            </h2>

            <p className="text-slate-600 mb-10 leading-relaxed">
              En OrangeBee combinamos tecnología, experiencia y ética para
              ofrecer soluciones de cobranza que generan resultados reales y
              protegen la reputación de tu empresa.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={reason.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-slate-500 text-sm">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}