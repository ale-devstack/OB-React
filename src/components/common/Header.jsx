import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logoAbeja from '/logo-abeja.png';

const navLinks = [
  { name: "Inicio",    to: "/",          chunk: null },
  { name: "Servicios", to: "/servicios", chunk: () => import('../pages/ServicesPage') },
  { name: "Nosotros",  to: "/nosotros",  chunk: () => import('../pages/AboutSection') },
  { name: "Contacto",  to: "/contacto",  chunk: () => import('../pages/ContactSection') },
];

const linkBase    = "font-medium transition-colors";
const linkMuted   = "text-white/80 hover:text-white";
const linkActive  = "text-orange-500";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prefetch route on hover for near-instant navigation
  const handlePrefetch = useCallback((chunk) => {
    if (chunk) chunk();
  }, []);

  const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/75 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" onClick={closeMobile} className="flex items-center gap-2">
            <img src={logoAbeja} alt="OrangeBee logo" width={40} height={40} className="w-10 h-10" />
            <span className="font-bold text-xl text-white">
              <span className="text-orange-500">Orange</span>Bee
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onMouseEnter={() => handlePrefetch(link.chunk)}
                onFocus={() => handlePrefetch(link.chunk)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkMuted}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <NavLink
              to="/contacto"
              onMouseEnter={() => import('../pages/ContactSection')}
              className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 bg-orange-500 hover:bg-orange-600 shadow-[0_10px_30px_rgba(241,85,0,0.35)] text-white font-medium transition-colors"
            >
              Consulta Gratis
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-white"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `block py-2 font-medium ${isActive ? "text-orange-500" : "text-white/70 hover:text-orange-500"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contacto"
              onClick={closeMobile}
              className="block text-center bg-orange-500 hover:bg-orange-600 shadow-[0_10px_30px_rgba(241,85,0,0.35)] text-white rounded-xl py-3 font-medium mt-4 transition-colors"
            >
              Consulta Gratis
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}