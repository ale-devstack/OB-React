import { Building2, Landmark, Scale, FileText } from 'lucide-react';

export const SERVICES = [
  {
    id: 'comercial',
    icon: Building2,
    title: 'Cobranza Comercial',
    descriptionShort:
      'Recuperación de cartera para empresas comerciales e industriales con enfoque en preservar relaciones.',
    description:
      'Recuperación especializada de cartera para el sector comercial e industrial, con estrategias diseñadas para preservar las relaciones comerciales.',
    featuresPreview: ['Gestión preventiva', 'Cobranza extrajudicial', 'Negociación de pagos'],
    features: [
      'Gestión preventiva y recordatorios',
      'Cobranza extrajudicial amistosa',
      'Negociación de convenios de pago',
      'Visitas domiciliarias',
      'Seguimiento personalizado',
      'Reportes de gestión detallados',
    ],
    stat: { value: '80%', label: 'Tasa de recuperación' },
    // NUEVO: URL de la imagen centralizada aquí
    // Tip PRO: Cuando descargues las imágenes, cámbialo a algo como '/services/comercial.webp'
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'financiera',
    icon: Landmark,
    title: 'Cobranza Financiera',
    descriptionShort:
      'Especialistas en recuperación para bancos, financieras y fintechs con altos estándares.',
    description:
      'Especialistas en recuperación de créditos para bancos, financieras y fintechs con estricto apego a la normatividad CONDUSEF.',
    featuresPreview: ['Créditos personales', 'Tarjetas de crédito', 'Préstamos digitales'],
    features: [
      'Créditos personales y nómina',
      'Tarjetas de crédito',
      'Préstamos digitales',
      'Créditos automotrices',
      'Líneas de crédito empresarial',
      'Reestructuración de deudas',
    ],
    stat: { value: '+$100M', label: 'Recuperados' },
    // NUEVO
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'judicial',
    icon: Scale,
    title: 'Cobranza Judicial',
    descriptionShort:
      'Representación legal para la recuperación de adeudos a través de procesos judiciales.',
    description:
      'Representación legal integral para la recuperación de adeudos mediante procedimientos judiciales y ejecución de garantías.',
    featuresPreview: ['Demandas mercantiles', 'Embargos', 'Ejecución de garantías'],
    features: [
      'Demandas mercantiles',
      'Juicios ejecutivos',
      'Embargo de bienes',
      'Ejecución de garantías',
      'Recuperación de activos',
      'Procedimientos concursales',
    ],
    stat: { value: '95%', label: 'Casos resueltos' },
    // NUEVO
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'consultoria',
    icon: FileText,
    title: 'Consultoría',
    descriptionShort:
      'Asesoría integral para optimizar políticas de crédito y procesos de cobranza internos.',
    description:
      'Asesoría estratégica para optimizar políticas de crédito y procesos de cobranza internos de tu empresa.',
    featuresPreview: ['Diagnóstico de cartera', 'Capacitación', 'Mejora de procesos'],
    features: [
      'Diagnóstico de cartera',
      'Diseño de políticas de crédito',
      'Capacitación de equipos',
      'Optimización de procesos',
      'Implementación de sistemas',
      'Mejores prácticas del sector',
    ],
    stat: { value: '+100', label: 'Empresas asesoradas' },
    // NUEVO
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
  },
];