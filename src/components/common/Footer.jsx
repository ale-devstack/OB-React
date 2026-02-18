import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";

import logoAbeja from '/logo-abeja.png';

const quickLinks = [
  { name: "Inicio",    to: "/" },
  { name: "Servicios", to: "/servicios" },
  { name: "Nosotros",  to: "/nosotros" },
  { name: "Contacto",  to: "/contacto" },
];

const serviceLinks = [
  "Cobranza Comercial",
  "Cobranza Financiera",
  "Cobranza Judicial",
  "Consultoría",
  "Gestión Preventiva",
];

const contactItems = [
  { icon: MapPin,  text: "Ciudad de México, México" },
  { icon: Phone,   text: "+52 (55) 5555-5555" },
  { icon: Mail,    text: "contacto@orangebee.mx" },
  { icon: Clock,   text: "Lun - Vie: 9:00 - 18:00" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logoAbeja} alt="OrangeBee" width={40} height={40} loading="lazy" decoding="async" className="w-10 h-10" />
              <span className="font-bold text-xl">
                <span className="text-orange-500">Orange</span>Bee
              </span>
            </Link>
            <p className="text-slate-300/90 text-sm leading-relaxed mb-6">
              Despacho de cobranza profesional especializado en empresas, financieras y fintechs.
              Recuperación efectiva con ética y transparencia.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Enlaces</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ name, to }) => (
                <li key={name}>
                  <Link to={to} className="text-slate-300 hover:text-orange-400 transition-colors text-sm">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link to="/servicios" className="text-slate-300 hover:text-orange-400 transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              {contactItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3">
                  <Icon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} OrangeBee. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/nosotros" className="text-slate-400 hover:text-white transition-colors">
              Aviso de Privacidad
            </Link>
            <Link to="/nosotros" className="text-slate-400 hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}