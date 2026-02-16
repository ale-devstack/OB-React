import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Destello superior centrado */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/25 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para Recuperar tu
            <span className="text-orange-500"> Cartera Vencida</span>?
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Agenda una consulta gratuita con nuestros especialistas y descubre
            cómo OrangeBee puede mejorar tu flujo de efectivo.
          </p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-colors"
            >
              Solicitar Consulta Gratis
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="tel:+525555555555"
              className="flex items-center gap-3 text-slate-300 hover:text-orange-500 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500">Llámanos</div>
                <div className="font-semibold">
                  +52 (55) 5555-5555
                </div>
              </div>
            </a>

            <div className="hidden sm:block w-px h-12 bg-slate-700" />

            <a
              href="mailto:contacto@orangebee.mx"
              className="flex items-center gap-3 text-slate-300 hover:text-orange-500 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500">Escríbenos</div>
                <div className="font-semibold">
                  contacto@orangebee.mx
                </div>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}