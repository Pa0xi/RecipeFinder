import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Load translations using HTTP backend
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    fallbackLng: "en", // Default language
    debug: false, // Set to true for debugging
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
  });

export default i18n;