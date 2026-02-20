import {
  CheckCircle2, Award, Clock, Headphones, BarChart3, Lock,
} from "lucide-react";
import { useInView } from "../../hooks/useInView";

const reasons = [
  { icon: Award,        title: "Experiencia Comprobada", description: "Más de 15 años gestionando cobranza para financieras y fintechs." },
  { icon: BarChart3,    title: "Resultados Medibles",    description: "Dashboard en tiempo real con métricas claras de recuperación." },
  { icon: Lock,         title: "Confidencialidad Total", description: "Protección de datos conforme a LFPDPPP y estándares internacionales." },
  { icon: Headphones,   title: "Atención Dedicada",      description: "Ejecutivo de cuenta asignado para seguimiento personalizado." },
  { icon: Clock,        title: "Respuesta Inmediata",    description: "Inicio de gestión en menos de 24 horas desde la asignación." },
  { icon: CheckCircle2, title: "Cobranza Ética",         description: "Cumplimiento total de normativas CONDUSEF y mejores prácticas." },
];

export default function WhyOrangeBee() {
  const [leftRef, leftInView] = useInView();
  const [rightRef, rightInView] = useInView();
  const [reasonsRef, reasonsInView] = useInView();

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <div ref={sectionRef} className={cn("ob-anim ob-fade-up", sectionInView && "visible")}>
            <div className="aspect-square bg-[#0b0b0c] rounded-3xl overflow-hidden relative border border-orange-500/20">
              {/* Orange top accent line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-orange-500" />

              {/* Subtle orange glow */}
              <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-orange-500/[0.07] to-transparent pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-7xl font-bold mb-2 text-orange-500">98%</div>
                  <div className="text-xl text-white/70">Tasa de Recuperación</div>
                  <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-3xl font-bold text-orange-500">+200</div>
                      <div className="text-white/50 text-sm mt-1">Clientes Activos</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-500">24h</div>
                      <div className="text-white/50 text-sm mt-1">Tiempo de Respuesta</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-neutral-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Cumplimiento</div>
                  <div className="text-neutral-500 text-sm">CONDUSEF</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div
            ref={rightRef}
            className={`ob-anim ob-fade-right ${rightInView ? 'visible' : ''}`}
          >
            <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">¿Por Qué OrangeBee?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6">
              La Diferencia de Trabajar con Profesionales
            </h2>
            <p className="text-neutral-600 mb-10 leading-relaxed">
              En OrangeBee combinamos tecnología, experiencia y ética para ofrecer soluciones de cobranza
              que generan resultados reales y protegen la reputación de tu empresa.
            </p>
            <div
              ref={reasonsRef}
              className={`ob-stagger grid sm:grid-cols-2 gap-6 ${reasonsInView ? 'visible' : ''}`}
            >
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">{reason.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
