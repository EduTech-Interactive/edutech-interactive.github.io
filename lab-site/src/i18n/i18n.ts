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
            "researchApproachLink": "Research",
            "whatWeDoLink": "What We Do"
          },

          "homepage":
          {
            "brand": "Eduqlasse",
            "brandSubtitle": "Innovating Inclusive, Digital & AI-Enhanced Learning in Higher Education.",
            "projectsBtn": "Explore Our Projects",
            "collabBtn": "Collaborate With Us"
          },

          "whatWeDo": 
          {
            "title": "What We Do",

            "classroomCardTitle": "Classroom Management",
            "classroomCardDesc": "Engaging in positive behavior and organizational practices tailored for diverse learning environments.",
            "inclusiveCardTitle": "Inclusive & UDL Practices",
            "inclusiveCardDesc": "Designing accessible frameworks to maximize learning outcomes for higher education students.",
            "toolsCardTitle": "Digital & AI Tools",
            "toolsCardDesc": "Integrating innovative practices and variety to enhance modern teaching and student engagement.",
          },
          
          "calculusBuddy":
          {
            "heading": "Featured Project: Calculus Buddy",
            "desc": "AI-powered tutoring for higher education mathematics.",
            "btnText": "Discover The Project"
          },

          "researchApproach": 
          {
            "title": "Our Research Approach",
            "items": 
            {
              "process": 
              {
                "step1": "Design",
                "step2": "Implementation",
                "step3": "Evaluation"
              },
              "collaboration": "Interdisciplinary Collaboration",
              "methodology": 
              {
                "type": "Interdisciplinary",
                "setting": "Classroom-based Research"
              }
            },
            "hubBtnText": "Visit the Knowledge Hub"
          },

          "knowledgeHub": 
          {
            "title": "Knowledge Hub",
            "cards": 
            {
              "blog": 
              {
                "title": "Blog",
                "description": "Design Teaching & Inclusion"
              },
              "podcast": 
              {
                "title": "Podcast",
                "description": "Conversations on Education & AI"
              },
              "resources": 
              {
                "title": "Resources",
                "description": "Guides & Toolkits"
              }
            }
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
            "knowledgeHubLink": "Connaissances",
            "meetTheTeamLink": "L'équipe",
            "researchApproachLink": "Recherche",
            "whatWeDoLink": "Ce que nous faisons"
          },

          "homepage":
          {
            "brand": "Eduqlasse",
            "brandSubtitle": "Innover pour un apprentissage inclusif, numérique et propulsé par l'IA en enseignement supérieur,",
            "projectsBtn": "Découvrir nos projets",
            "collabBtn": "Collaborer avec nous"
          },

          "whatWeDo": 
          {
            "title": "Ce que nous faisons",

            "classroomCardTitle": "Gestion de classe",
            "classroomCardDesc": "Mise en œuvre de pratiques organisationnelles et de comportements positifs adaptés à des environnements d'apprentissage diversifiés.",
            "inclusiveCardTitle": "Pratiques inclusives et CUA",
            "inclusiveCardDesc": "Conception de cadres accessibles pour maximiser les résultats d'apprentissage des étudiants de l'enseignement supérieur.",
            "toolsCardTitle": "Outils numériques et IA",
            "toolsCardDesc": "Intégration de pratiques innovantes et diversifiées pour enrichir l'enseignement moderne et stimuler l'engagement des étudiants.",
          },

          "calculusBuddy":
          {
            "heading": "Projet en vedette : Calculus Buddy",
            "desc": "Tutorat propulsé par l'IA pour l'enseignement supérieur en mathématiques.",
            "btnText": "Découvrir le projet"
          },

          "researchApproach": 
          {
            "title": "Notre approche de recherche",
            "items": 
            {
              "process": 
              {
                "step1": "Conception",
                "step2": "Mise en œuvre",
                "step3": "Évaluation"
              },
              "collaboration": "Collaboration interdisciplinaire",
              "methodology": 
              {
                "type": "Interdisciplinaire",
                "setting": "Recherche en milieu scolaire"
              }
            },
            "hubBtnText": "Visiter le Carrefour de connaissances"
          },

          "knowledgeHub": 
          {
            "title": "Carrefour des connaissances",
            "cards": 
            {
              "blog": 
              {
                "title": "Blogue",
                "description": "Enseignement du design et inclusion"
              },
              "podcast": 
              {
                "title": "Balado",
                "description": "Discussions sur l'éducation et l'IA"
              },
              "resources": 
              {
                "title": "Ressources",
                "description": "Guides et boîtes à outils"
              }
            }
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