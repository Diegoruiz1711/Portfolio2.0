import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locals/en/translation.json';
import translationES from './locals/es/translation.json';
import translationCA from './locals/ca/translation.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEN },
        es: { translation: translationES },
        ca: { translation: translationCA },
    },
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'es', // Idioma de reserva si la traducción no está disponible
    interpolation: {
        escapeValue: false, // React ya hace el escape de valores
    },
});

export default i18n;