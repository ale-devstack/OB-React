import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Hexagon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                <img src="/logo-abeja.png" alt="OrangeBee" className="w-10 h-10" />
              </div>
              <span className="font-bold text-xl">
                <span className="text-orange-500">Orange</span>Bee
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Despacho de cobranza profesional especializado en empresas,
              financieras y fintechs. Recuperación efectiva con ética y
              transparencia.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Enlaces</h4>
            <ul className="space-y-3">
              {["Inicio", "Servicios", "Nosotros", "Contacto"].map((name) => (
                <li key={name}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {[
                "Cobranza Comercial",
                "Cobranza Financiera",
                "Cobranza Judicial",
                "Consultoría",
                "Gestión Preventiva",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Ciudad de México, México
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  +52 (55) 5555-5555
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  contacto@orangebee.mx
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  Lun - Vie: 9:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} OrangeBee. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Aviso de Privacidad
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
