import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const CONTACT = {
  phone: '+52 (55) 5555-5555',
  phoneHref: 'tel:+525555555555',
  email: 'contacto@orangebee.mx',
  emailHref: 'mailto:contacto@orangebee.mx',
  whatsappHref: 'https://wa.me/525555555555',
  address: 'Ciudad de México, México',
  hours: 'Lunes a Viernes: 9:00 - 18:00',
  hoursShort: 'Lun - Vie: 9:00 - 18:00',
  social: {
    linkedin: 'https://linkedin.com/company/orangebee',
    facebook: 'https://facebook.com/orangebee',
  },
};

export const CONTACT_ITEMS = [
  { icon: MapPin, title: 'Ubicación',          lines: [CONTACT.address] },
  { icon: Phone,  title: 'Teléfono',           lines: [CONTACT.phone] },
  { icon: Mail,   title: 'Correo Electrónico', lines: [CONTACT.email] },
  { icon: Clock,  title: 'Horario',            lines: [CONTACT.hours] },
];
