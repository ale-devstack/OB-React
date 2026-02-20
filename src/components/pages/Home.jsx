import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Users, Hexagon } from 'lucide-react';

import heroDesktop from '/hero-desktop.webp';
import heroMobile from '/hero-mobile.webp';
import Services from '../landing/Services';
import WhyOrangeBee from '../landing/WhyOrangeBee';
import CTASection from '../landing/CTASection';
import { usePageTitle } from '../../hooks/usePageTitle';

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const handleHeroImageLoad = () => {
    // Despachamos el evento de carga exactamente cuando el LCP (Largest Contentful Paint) ha terminado
    window.dispatchEvent(new Event('orangebee:home-ready'));
  };

  return (
    <section id="inicio" className="relative min-h-screen md:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 ob-dark-hero">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/[0.03] rounded-full blur-[150px]" />
        
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt="Hero Background"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            onLoad={handleHeroImageLoad} // <- AQUI ESTÁ LA MAGIA
          />
        </picture>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="hero-fade-left">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 mb-8">
              <Hexagon className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="text-white/80 text-sm font-medium">Cobranza inteligente y efectiva</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Recuperamos tu
              <span className="block text-orange-500">cartera vencida</span>
            </h1>
            <p className="text-lg text-neutral-300 mb-10 max-w-xl leading-relaxed">
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
                className="inline-flex items-center justify-center bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-4 text-lg rounded-xl font-semibold transition-colors"
              >
                Conocer Servicios
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:block hero-fade-right">
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
                        <p className="text-neutral-300 text-sm">{item.desc}</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────────

export default function Home() {
  usePageTitle();

  // El useEffect de carga fue removido de aquí, 
  // ahora está delegada su responsabilidad al evento `onLoad` del Hero

  return (
    <main className="bg-black">
      <Hero />
      <Services />
      <WhyOrangeBee />
      <CTASection />
    </main>
  );
}