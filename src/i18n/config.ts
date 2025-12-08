import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../locales/en.json';
import frTranslations from '../locales/fr.json';

// Détecter la langue du navigateur ou utiliser celle sauvegardée
const getInitialLanguage = (): string => {
  const saved = localStorage.getItem('language-storage');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed?.state?.language) {
        return parsed.state.language;
      }
    } catch (e) {
      // Ignorer les erreurs de parsing
    }
  }
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'fr' ? 'fr' : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      fr: {
        translation: frTranslations,
      },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React échappe déjà les valeurs
    },
  });

export default i18n;
