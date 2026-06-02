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
            "homeLink": "Home",
            "projectsLink": "Projects",
            "calculusBuddyLink": "Calculus Buddy",
            "collaborateLink": "Collaborate",
            "fundingLink": "Funding & Support",
            "knowledgeHubLink": "Knowledge Hub",
            "meetTheTeamLink": "Meet the Team",
            "researchApproachLink": "Research Approach",
            "whatWeDoLink": "What We Do"
          },

          "homepage":
          {
            "brand": "Eduqlasse",
            "brandSubtitle": "Innovating Inclusive, Digital & AI-Enhanced Learning in Higher Education.",
            "projectsBtn": "Explore Our Projects",
            "collabBtn": "Collaborate With Us"
          }
        }
      },
      fr: {
        translation: 
        {
          "nav": 
          {
            "homeLink": "Accueil",
            "projectsLink": "Projets",
            "calculusBuddyLink": "Calculus Buddy",
            "collaborateLink": "Collaborer",
            "fundingLink": "Financement et Soutien",
            "knowledgeHubLink": "Carrefour des connaissances",
            "meetTheTeamLink": "Rencontrez l'équipe",
            "researchApproachLink": "Approche de recherche",
            "whatWeDoLink": "Ce que nous faisons"
          },

          "homepage":
          {
            "brand": "Eduqlasse",
            "brandSubtitle": "Innover pour un apprentissage inclusif, numérique et propulsé par l'IA en enseignement supérieur,",
            "projectsBtn": "Découvrir nos projets",
            "collabBtn": "Collaborer avec nous"
          }
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false //react already escapes values
    }
  });

export default i18n;