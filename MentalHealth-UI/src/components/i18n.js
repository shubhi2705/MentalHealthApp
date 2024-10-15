// src/i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next) // passes i18next down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          title: "Your mental health matters",
          description: "Get access to personalized mental health support.",
          service1: "AI Chat Support",
          service1_desc: "Our chatbot, powered by IBM Watson, provides real-time mental health assistance.",
          service2: "Contact a Counselor",
          service2_desc: "Connect directly with a licensed mental health counselor.",
        }
      },
      es: {
        translation: {
          title: "Tu salud mental importa",
          description: "Obtén acceso a apoyo de salud mental personalizado.",
          service1: "Soporte de Chat AI",
          service1_desc: "Nuestro chatbot, potenciado por IBM Watson, proporciona asistencia en salud mental en tiempo real.",
          service2: "Contactar a un Consejero",
          service2_desc: "Conéctate directamente con un consejero de salud mental con licencia.",
        }
      },
      // Add more languages here...
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false, // React already does escaping
    }
  });

export default i18next;
