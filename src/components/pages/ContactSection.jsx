import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Hexagon,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    lines: ["Ciudad de México, México"],
  },
  {
    icon: Phone,
    title: "Teléfono",
    lines: ["+52 (55) 5555-5555"],
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    lines: ["contacto@orangebee.mx"],
  },
  {
    icon: Clock,
    title: "Horario",
    lines: ["Lunes a Viernes: 9:00 - 18:00"],
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceType: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contacto" className="pt-24">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-orange-500 font-semibold text-sm uppercase">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Hablemos de tu Cartera
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo OrangeBee puede
            ayudarte a recuperar tu cartera vencida.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Envíanos un Mensaje
            </h3>
            <p className="text-slate-500 mb-8">
              Te contactaremos en menos de 24 horas.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  ¡Mensaje Enviado!
                </h4>
                <p className="text-slate-500">
                  Un asesor se comunicará contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    required
                    placeholder="Nombre completo"
                    className="w-full rounded-xl border p-3"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <input
                    required
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full rounded-xl border p-3"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    placeholder="Teléfono"
                    className="w-full rounded-xl border p-3"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  <input
                    placeholder="Empresa"
                    className="w-full rounded-xl border p-3"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>

                <select
                  className="w-full rounded-xl border p-3"
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      serviceType: e.target.value,
                    })
                  }
                >
                  <option value="">Tipo de empresa</option>
                  <option>Empresa Comercial</option>
                  <option>Banco / Financiera</option>
                  <option>Fintech</option>
                  <option>Otro</option>
                </select>

                <textarea
                  required
                  rows={5}
                  placeholder="Cuéntanos sobre tu cartera..."
                  className="w-full rounded-xl border p-3 resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                />

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  Enviar Mensaje
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Información de Contacto
              </h3>
              <p className="text-slate-500">
                Estamos disponibles para atenderte.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border"
                >
                  <item.icon className="w-6 h-6 text-orange-500 mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  {item.lines.map((line) => (
                    <p key={line} className="text-slate-500 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center">
                  <Hexagon className="w-7 h-7 text-white fill-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">OrangeBee</h4>
                  <p className="text-slate-400 text-sm">
                    Cobranza Inteligente
                  </p>
                </div>
              </div>

              <p className="text-slate-400 mb-6">
                Somos tu socio estratégico para la recuperación de cartera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
