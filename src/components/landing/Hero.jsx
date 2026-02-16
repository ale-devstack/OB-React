import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Hexagon,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-[120px]" />
<div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-[150px]" />
        </div>

        {/* Hexagon pattern 
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        /> */}

        {/* Background image */}
                <div
        className="absolute inset-0 opacity-20 hidden md:block"
        style={{
          backgroundImage: `url("/hero-desktop.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="absolute inset-0 opacity-20 block md:hidden"
        style={{
          backgroundImage: `url("/hero-mobile.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 mb-8">
              <Hexagon className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="text-white/80 text-sm font-medium">
                Cobranza inteligente y efectiva
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Recuperamos tu
              <span className="block text-orange-500">
                cartera vencida
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              Soluciones profesionales de cobranza para empresas,
              financieras y fintechs. Maximizamos la recuperación
              con ética, transparencia y tecnología de punta.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
              >
                Solicitar Consulta
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg rounded-xl font-semibold transition-colors"
              >
                Conocer Servicios
              </a>
            </div>

            {/* Stats 
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "98%", label: "Efectividad" },
                { value: "+200", label: "Empresas" },
                { value: "+$100M", label: "Recuperados" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="text-center sm:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-orange-500">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>*/}
          </motion.div>

          {/* Right content */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-white/10 border border-white/15 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {[
                    {
                      icon: Shield,
                      title: "Cobranza Ética",
                      desc: "Procesos respetuosos que preservan relaciones comerciales",
                    },
                    {
                      icon: TrendingUp,
                      title: "Alta Recuperación",
                      desc: "Metodologías probadas para maximizar resultados",
                    },
                    {
                      icon: Users,
                      title: "Equipo Especializado",
                      desc: "Profesionales certificados en gestión de cobranza",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.title}
                      className="flex gap-4 items-start p-4 rounded-2xl hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.15 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-orange-500 rounded-2xl p-4 shadow-xl shadow-orange-500/25"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="text-white font-bold text-lg">15+</div>
                <div className="text-white/80 text-xs">Años</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}