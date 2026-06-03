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
            "researchApproachLink": "Research",
            "projectsLink": "Projects",
            "resourcesLink": "Resources",
            "blogLink": "Blog",
            "podcastLink": "Podcast",
            "publicationsLink": "Publications",
            "partnersLink": "Partners",
            "meetTheTeamLink": "Team",
            "aboutLink": "About"
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
          
          "projects":
          {
            "calcBuddy" : 
            {
              "heading": "Featured Project: Calculus Buddy",
              "desc": "AI-powered tutoring for higher education mathematics.",
              "btnText": "Discover The Project"
            }
          },

          "researchApproach": 
          {
            "title": "Our Research Approach",
            "desc": "EDUQLASSE adopts a <b>design-based and applied research approach</b>, combining theory, practice, and iterative evaluation in authentic teaching contexts.",
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
            "hubBtnText": "View Resources"
          },

          "resources": 
          {
            "title": "Resources",
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
              },
              "gallery":
              {
                "title": "Gallery",
                "description": "Photos and Videos of Events"
              }
            },
          },

          "meetTheTeam": 
          {
            "title": "Meet the EDUQLASSE Team",
            "stats": "20+ Researchers & Developers | 6 Graduate Students",
            "desc": "EDUQLASSE brings together researchers, graduate students, programmers, and illustrators working collaboratively on interdisciplinary projects in higher education.",
            "learnMoreBtn": "Learn More"
          },

          "funding": 
          {

          },

          "partners": 
          {
            "fundingSection": 
            {
              "title": "Funding & Support",
              "desc": "EDUQLASSE’s activities are supported through institutional and program-based funding that enables pedagogical innovation and applied research in higher education.",
              "subtitle": "Supported By",
            },

            "collabSection": 
            {
              "title": "Collaborate With Us",
              "proposeBtn": "Propose a Collaboration",
              "joinBtn": "Join the Lab"
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
            "researchApproachLink": "Recherche",
            "projectsLink": "Projets",
            "resourcesLink": "Ressources",
            "blogLink": "Blogue",
            "podcastLink": "Balado",
            "publicationsLink": "Publications",
            "partnersLink": "Partenaires",
            "meetTheTeamLink": "Équipe",
            "aboutLink": "À propos"
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

          "projects":
          {
            "calcBuddy": 
            {
              "heading": "Projet en vedette : Calculus Buddy",
              "desc": "Tutorat propulsé par l'IA pour l'enseignement supérieur en mathématiques.",
              "btnText": "Découvrir le projet"
            }
          },

          "researchApproach": 
          {
            "title": "Notre approche de recherche",
            "desc": "EDUQLASSE adopte une approche de recherche <b>appliquée et axée sur la conception, combinant théorie, pratique et évaluation</b> itérative dans des contextes d'enseignement authentiques.",
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
            "hubBtnText": "Voir les Ressources"
          },

          "resources": 
          {
            "title": "Ressources",
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
              },
              "gallery":
              {
                "title": "Galerie",
                "description": "Photos et vidéos d'événements"
              },
            }
          },

          "meetTheTeam": 
          {
            "title": "Rencontrez l'équipe EDUQLASSE",
            "stats": "Plus de 20 chercheurs et développeurs | 6 étudiants de cycles supérieurs",
            "desc": "EDUQLASSE réunit des chercheurs, des étudiants de troisième cycle, des programmeurs et des illustrateurs travaillant en collaboration sur des projets interdisciplinaires dans l'enseignement supérieur.",
            "learnMoreBtn": "En savoir plus"
          },

          "partners": 
          {
            "fundingSection": 
            {
              "title": "Financement et soutien",
              "desc": "Les activités d’EDUQLASSE sont soutenues par des financements institutionnels et sectoriels qui permettent l’innovation pédagogique et la recherche appliquée en enseignement supérieur.",
              "subtitle": "Soutenu par"
            },

            "collabSection": 
            {
              "title": "Collaborer avec nous",
              "proposeBtn": "Proposer une collaboration",
              "joinBtn": "Rejoindre le laboratoire"
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