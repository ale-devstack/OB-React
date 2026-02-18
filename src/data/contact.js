import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const CONTACT = {
  phone: '+52 (55) 5555-5555',
  phoneHref: 'tel:+525555555555',
  email: 'conecta@orangebee.mx',
  emailHref: 'mailto:conecta@orangebee.mx',
  whatsappHref: 'https://wa.me/525555555555',
  address: 'Av. Manuel Gómez Morín 350 PB, Valle Campestre. C.P. 66265, San Pedro Garza García, Nuevo León',
  hours: 'Lunes a Viernes: 9:00 - 18:00',
  hoursShort: 'Lun - Vie: 9:00 - 18:00',
  social: {
    linkedin: 'https://www.linkedin.com/company/108113067',
    facebook: 'https://www.facebook.com/share/1C9zKLAWFf/?mibextid=wwXIfr',
  },
};

export const CONTACT_ITEMS = [
  { icon: MapPin, title: 'Ubicación',          lines: [CONTACT.address] },
  { icon: Phone,  title: 'Teléfono',           lines: [CONTACT.phone] },
  { icon: Mail,   title: 'Correo Electrónico', lines: [CONTACT.email] },
  { icon: Clock,  title: 'Horario',            lines: [CONTACT.hours] },
];
