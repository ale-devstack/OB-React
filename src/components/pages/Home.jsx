import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, TrendingUp, Users, Hexagon,
  Phone, Mail,
} from 'lucide-react';

import heroDesktop from '/hero-desktop.webp';
import heroMobile from '/hero-mobile.webp';

// Lazy-load below-the-fold sections
const Services    = lazy(() => import('../landing/Services'));
const WhyOrangeBee = lazy(() => import('../landing/WhyOrangeBee'));
const CTASection  = lazy(() => import('../landing/CTASection'));

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/[0.03] rounded-full blur-[150px]" />
        <img
          src={heroDesktop}
          alt=""
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-20 hidden md:block"
        />
        <img
          src={heroMobile}
          alt=""
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-20 block md:hidden"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 mb-8">
              <Hexagon className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="text-white/80 text-sm font-medium">Cobranza inteligente y efectiva</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Recuperamos tu
              <span className="block text-orange-500">cartera vencida</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              Soluciones profesionales de cobranza para empresas, financieras y fintechs. Maximizamos la recuperación con ética, transparencia y tecnología de punta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
              >
                Solicitar Consulta <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg rounded-xl font-semibold transition-colors"
              >
                Conocer Servicios
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div className="hidden lg:block" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="relative">
              <div className="bg-white/10 border border-white/15 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {[
                    { icon: Shield,     title: 'Cobranza Ética',       desc: 'Procesos respetuosos que preservan relaciones comerciales' },
                    { icon: TrendingUp, title: 'Alta Recuperación',    desc: 'Metodologías probadas para maximizar resultados' },
                    { icon: Users,      title: 'Equipo Especializado', desc: 'Profesionales certificados en gestión de cobranza' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 rounded-2xl px-8 py-4 shadow-xl shadow-orange-500/25 flex items-center gap-3">
                <div className="text-white font-bold text-lg">15+</div>
                <div className="text-white/80 text-xs">Años</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<div className="py-24 bg-slate-50" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="py-24 bg-white" />}>
        <WhyOrangeBee />
      </Suspense>
      <Suspense fallback={<div className="py-24 bg-neutral-900" />}>
        <CTASection />
      </Suspense>
    </main>
  );
}