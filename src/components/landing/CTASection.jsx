import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-12 ob-section-soft">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center px-8 py-14 md:px-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            ¿Listo para Recuperar tu
            <span className="text-orange-600"> Cartera Vencida</span>?
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
            Agenda una consulta gratuita con nuestros especialistas y descubre
            cómo OrangeBee puede mejorar tu flujo de efectivo.
          </p>

          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-[0_14px_34px_rgba(234,88,12,0.28)] transition-all"
            >
              Solicitar Consulta Gratis
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="tel:+525555555555"
              className="flex items-center gap-3 text-slate-700 hover:text-orange-500 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500">Llámanos</div>
                <div className="font-semibold text-slate-900">
                  +52 (55) 5555-5555
                </div>
              </div>
            </a>

            <div className="hidden sm:block w-px h-12 bg-slate-300" />

            <a
              href="mailto:contacto@orangebee.mx"
              className="flex items-center gap-3 text-slate-700 hover:text-orange-500 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500">Escríbenos</div>
                <div className="font-semibold text-slate-900">
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
