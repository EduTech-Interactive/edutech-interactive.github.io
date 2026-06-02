import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: 
    {
      en: 
      {
        translation: 
        {
            "nav": 
            {
              "aboutLink": "About",
              "behindTheScenesLink": "Behind The Scenes",
              "minigamesLink": "Minigames"
            },

            "about":
            {
              "heading": "Our Team"
            },

            "behindTheScenes":
            {
              "heading": "Behind the Scenes"
            },

            "minigames": 
            {
              "heading": "Minigames"
            }
        }
      },
      fr: 
      {
        translation: 
        {
            "nav": 
            {
              "aboutLink": "À propos",
              "behindTheScenesLink": "Dans les coulisses",
              "minigamesLink": "Mini-jeux"
            },

            "about": 
            {
              "heading": "Notre équipe"
            },

            "behindTheScenes": 
            {
              "heading": "Dans les coulisses"
            },

            "minigames": 
            {
              "heading": "Mini-Jeux"
            }
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;