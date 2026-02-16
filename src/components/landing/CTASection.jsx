import React from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para Recuperar tu
            <span className="text-orange-500"> Cartera Vencida</span>?
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Agenda una consulta gratuita con nuestros especialistas y descubre
            cómo OrangeBee puede mejorar tu flujo de efectivo.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-colors"
            >
              Solicitar Consulta Gratis
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}
