import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';
import { SERVICES } from '../../data/services';
import { cn } from '../../utils/cn'; // Importamos utilidad

export default function ServicesPreview() {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <section className="py-24 ob-section-soft">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn("ob-anim ob-fade-up text-center mb-16", headerInView && "visible")}
        >
          <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
            Nuestros servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mt-3 mb-4">
            Recuperación profesional orientada a resultados
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Gestionamos la recuperación de cartera bajo un esquema integral que cubre todas las etapas del proceso, desde la recuperación temprana y extrajudicial hasta la ejecución de acciones legales, con seguimiento medible y control operativo continuo.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className={cn("ob-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", gridInView && "visible")}
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200/70 hover:border-orange-200"
            >
              <div className="w-full h-40 rounded-xl overflow-hidden mb-5 border border-neutral-200">
                <img
                  src={service.imageUrl} // <-- Limpio, la URL viene directamente de la data
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {service.title}
              </h3>

              <p className="text-neutral-600 text-sm mb-5 leading-relaxed">
                {service.descriptionShort}
              </p>

              <ul className="space-y-2">
                {service.featuresPreview.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-neutral-500"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={cn("ob-anim ob-fade-up text-center", ctaInView && "visible")}
        >
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          >
            Ver más
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}