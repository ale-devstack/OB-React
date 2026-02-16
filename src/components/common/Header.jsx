import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Hexagon } from "lucide-react";


const navLinks = [
  { name: "Inicio", to: "/" },
  { name: "Servicios", to: "/servicios" },
  { name: "Nosotros", to: "/nosotros" },
  { name: "Contacto", to: "/contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBase =
    "font-medium transition-colors";

  const linkScrolled = 
  "text-white/80 hover:text-white";

  const linkTransparent =
    "text-white/80 hover:text-white";

  const linkActive = "text-orange-500";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
            ? "bg-black/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <img src="/logo-abeja.png" alt="OrangeBee" className="w-10 h-10" />
            </div>
            <span
              className={`font-bold text-xl ${
                "text-white"
              }`}
            >
              <span className="text-orange-500">Orange</span>Bee
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? linkActive
                      : isScrolled
                      ? linkScrolled
                      : linkTransparent
                  }`
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
              className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors"
            >
              Consulta Gratis
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              "text-white"
            }`}
            aria-label={
              isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"
            }
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
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
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 font-medium ${
                    isActive
                      ? "text-orange-500"
                      : "text-white/70 hover:text-orange-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 font-medium mt-4 transition-colors"
            >
              Consulta Gratis
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
