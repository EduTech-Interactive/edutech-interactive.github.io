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
            "homeLink": "home",
            "projectsLink": "projects",
            "calculusBuddyLink": "calc buddy",
            "collaborateLink": "collab",
            "fundingLink": "funding",
            "knowledgeHubPreviewLink": "knowledge hub preview",
            "knowledgeHubLink": "knowledge hub",
            "meetTheTeamLink": "team",
            "researchApproachLink": "research",
            "whatWeDoLink": "what we do"
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
            "hubBtnText": "Visit the Knowledge Hub"
          },

          "knowledgeHubPreview": 
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
            },

            "visitBtnText": "Visit the Knowledge Hub"
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
            "title": "Funding & Support",
            "desc": "EDUQLASSE’s activities are supported through institutional and program-based funding that enables pedagogical innovation and applied research in higher education.",
            "subtitle": "Supported By",
          },

          "collaborate": 
          {
            "title": "Collaborate With Us",
            "proposeBtn": "Propose a Collaboration",
            "joinBtn": "Join the Lab"
          }
        }
      },
      fr: {
        translation: 
        {
          "nav": 
          {
            "homeLink": "accueil",
            "projectsLink": "projets",
            "calculusBuddyLink": "calc buddy",
            "collaborateLink": "collab",
            "fundingLink": "financement",
            "knowledgeHubPreviewLink": "connaisances preview",
            "knowledgeHubLink": "connaissances",
            "meetTheTeamLink": "équipe",
            "researchApproachLink": "recherche",
            "whatWeDoLink": "ce que nous faisons"
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
            "hubBtnText": "Visiter le Carrefour de connaissances"
          },

          "knowledgeHubPreview": 
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
              },

              "visitBtnText": "Visiter le Centre de connaissances"
            }
          },

          "meetTheTeam": 
          {
            "title": "Rencontrez l'équipe EDUQLASSE",
            "stats": "Plus de 20 chercheurs et développeurs | 6 étudiants de cycles supérieurs",
            "desc": "EDUQLASSE réunit des chercheurs, des étudiants de troisième cycle, des programmeurs et des illustrateurs travaillant en collaboration sur des projets interdisciplinaires dans l'enseignement supérieur.",
            "learnMoreBtn": "En savoir plus"
          },

          "funding": 
          {
            "title": "Financement et soutien",
            "desc": "Les activités d'EDUQLASSE sont soutenues par un financement institutionnel et programmatique qui permet l'innovation pédagogique et la recherche appliquée dans l'enseignement supérieur.",
            "subtitle": "Avec le soutien de"
          },

          "collaborate": 
          {
            "title": "Collaborez avec nous",
            "proposeBtn": "Proposer une collaboration",
            "joinBtn": "Joindre le labo"
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