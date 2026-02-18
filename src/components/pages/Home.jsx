import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, TrendingUp, Users, Hexagon,
  Phone, Mail, Building2, Landmark, Scale, FileText,
  CheckCircle2, Award, Clock, Headphones, BarChart3, Lock,
} from 'lucide-react';

import heroDesktop from '/hero-desktop.webp';
import heroMobile from '/hero-mobile.webp';

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Building2,
    title: 'Cobranza Comercial',
    description: 'Recuperación de cartera para empresas comerciales e industriales con enfoque en preservar relaciones.',
    features: ['Gestión preventiva', 'Cobranza extrajudicial', 'Negociación de pagos'],
  },
  {
    icon: Landmark,
    title: 'Cobranza Financiera',
    description: 'Especialistas en recuperación para bancos, financieras y fintechs con altos estándares.',
    features: ['Créditos personales', 'Tarjetas de crédito', 'Préstamos digitales'],
  },
  {
    icon: Scale,
    title: 'Cobranza Judicial',
    description: 'Representación legal para la recuperación de adeudos a través de procesos judiciales.',
    features: ['Demandas mercantiles', 'Embargos', 'Ejecución de garantías'],
  },
  {
    icon: FileText,
    title: 'Consultoría',
    description: 'Asesoría integral para optimizar políticas de crédito y procesos de cobranza internos.',
    features: ['Diagnóstico de cartera', 'Capacitación', 'Mejora de procesos'],
  },
];

const reasons = [
  { icon: Award,       title: 'Experiencia Comprobada',  description: 'Más de 15 años gestionando cobranza para financieras y fintechs.' },
  { icon: BarChart3,   title: 'Resultados Medibles',      description: 'Dashboard en tiempo real con métricas claras de recuperación.' },
  { icon: Lock,        title: 'Confidencialidad Total',   description: 'Protección de datos conforme a LFPDPPP y estándares internacionales.' },
  { icon: Headphones,  title: 'Atención Dedicada',        description: 'Ejecutivo de cuenta asignado para seguimiento personalizado.' },
  { icon: Clock,       title: 'Respuesta Inmediata',      description: 'Inicio de gestión en menos de 24 horas desde la asignación.' },
  { icon: CheckCircle2,title: 'Cobranza Ética',           description: 'Cumplimiento total de normativas CONDUSEF y mejores prácticas.' },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 opacity-20 hidden md:block" style={{ backgroundImage: `url(${heroDesktop})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 opacity-20 block md:hidden"  style={{ backgroundImage: `url(${heroMobile})`,  backgroundSize: 'cover', backgroundPosition: 'center' }} />
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
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#contacto" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30">
                Solicitar Consulta <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#servicios" className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg rounded-xl font-semibold transition-colors">
                Conocer Servicios
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div className="hidden lg:block" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="relative">
              <div className="bg-white/10 border border-white/15 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {[
                    { icon: Shield,     title: 'Cobranza Ética',        desc: 'Procesos respetuosos que preservan relaciones comerciales' },
                    { icon: TrendingUp, title: 'Alta Recuperación',     desc: 'Metodologías probadas para maximizar resultados' },
                    { icon: Users,      title: 'Equipo Especializado',  desc: 'Profesionales certificados en gestión de cobranza' },
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

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">Nuestros Servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">Soluciones Integrales de Cobranza</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Servicios especializados para empresas, financieras y fintechs. Resultados efectivos con total transparencia.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200">
              <div className="w-14 h-14 rounded-xl bg-slate-900/5 flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors">
                <service.icon className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-5 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <Link to="/servicios" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-medium transition-colors">
            Ver Todos los Servicios <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── WhyOrangeBee ─────────────────────────────────────────────────────────────

function WhyOrangeBee() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <motion.div className="relative" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="aspect-square bg-neutral-900 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <motion.div className="text-7xl font-bold mb-4" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                    98%
                  </motion.div>
                  <div className="text-xl text-white/80">Tasa de Recuperación</div>
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="grid grid-cols-2 gap-8">
                      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                        <div className="text-3xl font-bold text-orange-500">+200</div>
                        <div className="text-white/60 text-sm">Clientes Activos</div>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                        <div className="text-3xl font-bold text-orange-500">24h</div>
                        <div className="text-white/60 text-sm">Tiempo de Respuesta</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-grey/10"
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="font-bold text-black">cumplimiento</div>
                  <div className="text-black/60 text-sm">CONDUSEF</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">¿Por Qué OrangeBee?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">La Diferencia de Trabajar con Profesionales</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              En OrangeBee combinamos tecnología, experiencia y ética para ofrecer soluciones de cobranza que generan resultados reales y protegen la reputación de tu empresa.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, idx) => (
                <motion.div key={reason.title} className="flex gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{reason.title}</h4>
                    <p className="text-slate-500 text-sm">{reason.description}</p>
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

// ─── CTASection ───────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-24 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/25 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para Recuperar tu<span className="text-orange-500"> Cartera Vencida</span>?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Agenda una consulta gratuita con nuestros especialistas y descubre cómo OrangeBee puede mejorar tu flujo de efectivo.
          </p>

          <motion.div className="flex justify-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <a href="#contacto" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-colors">
              Solicitar Consulta Gratis <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-8 justify-center items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            <a href="tel:+525555555555" className="flex items-center gap-3 text-slate-300 hover:text-orange-500 transition-colors">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500">Llámanos</div>
                <div className="font-semibold">+52 (55) 5555-5555</div>
              </div>
            </a>
            <div className="hidden sm:block w-px h-12 bg-slate-700" />
            <a href="mailto:contacto@orangebee.mx" className="flex items-center gap-3 text-slate-300 hover:text-orange-500 transition-colors">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500">Escríbenos</div>
                <div className="font-semibold">contacto@orangebee.mx</div>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Home (default export) ────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyOrangeBee />
      <CTASection />
    </main>
  );
}