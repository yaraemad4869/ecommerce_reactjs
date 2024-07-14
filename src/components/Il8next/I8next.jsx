import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from "../../components/Translations/en.json";
import arTranslation from '../../components/Translations/ar.json';

// const I8next = () => {
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en', // Set the default language
        fallbackLng: 'en', // Fallback language if a translation is missing
        resources: {
            en: { translation: enTranslation }, // English translations
            ar: { translation: arTranslation }, // French translations
        },
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });
// }

export default i18n

