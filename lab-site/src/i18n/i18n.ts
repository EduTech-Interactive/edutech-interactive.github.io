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
            "researchProjectsLink": "Research Projects",
            "gamesAndSimulationsLink": "Games and Simulations",
            "genAiAppsLink": "GenAI Apps",
            "resourcesLink": "Resources",
            "blogLink": "Blogs",
            "podcastLink": "Podcast",
            "publicationsLink": "Publications",
            "partnersLink": "Partners",
            "aboutLink": "About"
          },

          "homepage":
          {
            "brand": "Eduqlasse",
            "brandSubtitle": "Innovating Inclusive, Digital & AI-Enhanced Learning in Higher Education.",
            "projectsBtn": "Explore Our Projects",
            "collabBtn": "Collaborate With Us"
          },

          "about": 
          {
            "title": "What We Do",

            "classroomCardTitle": "Classroom Management",
            "classroomCardDesc": "Engaging in positive behavior and organizational practices tailored for diverse learning environments.",
            "inclusiveCardTitle": "Inclusive & UDL Practices",
            "inclusiveCardDesc": "Designing accessible frameworks to maximize learning outcomes for higher education students.",
            "toolsCardTitle": "Digital & AI Tools",
            "toolsCardDesc": "Integrating innovative practices and variety to enhance modern teaching and student engagement.",

            "meetTheTeam": 
            {
              "title": "Meet the EDUQLASSE Team",
              "stats": "20+ Researchers & Developers | 6 Graduate Students",
              "desc": "EDUQLASSE brings together researchers, graduate students, programmers, and illustrators working collaboratively on interdisciplinary projects in higher education.",
              "learnMoreBtn": "Learn More",

              "teamMembers": 
              {
                "jimmyLe": 
                {
                  "name": "Jimmy Le",
                  "bio": "Hello~\n\nI am currently an Undergrad student at Concordia University doing a Joint Major in Computation Arts and Computer Science, and I worked as a programmer for the Earth Codex project.\nI like to play games, debug things, and I am interested in psychology stuff!"
                },
                "kellyAnnThuot": 
                {
                  "name": "Kelly-Ann Thuot",
                  "bio": "Hi ! I’m Kelly-Ann Thuot and I’m a student at the Cégep du Vieux Montréal in 2D animation, graduating this year ! I’ve taken part in many projects in EDUQLASSE, but I was mainly assigned to the Earth Codex and the mini games. I enjoy creating backgrounds and paintings but I’m also a big fan of animation ! Recently, I directed a horror and action animated short film that will come out pretty soon !"
                },
                "adamLaurin": 
                {
                  "name": "Adam Laurin",
                  "bio": "My name is Adam Laurin. I’m a computer science student graduating from John Abbott College, who did an internship with the EduQlasse lab at the Université de Montréal. Coming from an academic background in history before pivoting toward computer science, I’m passionate about education and I joined this project to help build something which could have a positive impact on the educational journeys of others."
                },
                "thomasScripcariu": 
                {
                  "name": "Thomas Scripcariu",
                  "bio": "I'm starting Electrical Engineering at Concordia University in fall 2026. I've worked on the Geoscience, Crispr, and Calculus projects as an artist and programmer. I love tinkering with electronics, motorcycles, and MMA."
                },
                "sylvainMiklohoun": 
                {
                  "name": "Sylvain Miklohoun",
                  "bio": "Sylvain Miklohoun is a doctoral candidate in the Faculty of Education at the University of Montreal. His research focuses on the ethics of designing AI systems in education, school inclusion through digital technology, and AI literacy, as well as the policies that underpin these aspects."
                },
                "tarynBeaupre": 
                {
                  "name": "Taryn Beaupré",
                  "bio": "Hi there, I’m Taryn. I’m currently pursuing a bachelor’s of Computer Science at Concordia university. I am a Web Developer at EduQlasse who has contributed to a variety of projects including BioBot and Calculus Buddy. I like exploring technology in creative spaces, leveraging the capabilities of AI, and have an interest in cybersecurity. Outside of tech, I enjoy art, films, video games, cooking and travelling!"
                },
                "sophieDomine": 
                {
                  "name": "Sophie Dominé",
                  "bio": "As a Ph.D. candidate in psychopedagogy at Université de Montréal, I am interested in students' development, well-being, and inclusive practices, particularly in secondary schools but also in postsecondary education. Beyond research, I have a deep interest in new technologies — including AI — as well as video games and manual activities. I will support Professor Neerusha Gokool across her various endeavors and contribute to the organization of events."
                },
                "roustomAbdeldjalelCherir": 
                {
                  "name": "Roustom Abdeldjalel Cherir",
                  "bio": "I am currently pursuing a Bachelor's degree in Computer Science at the Université de Montréal. I have worked on several game development projects within EDUQLASSE, including Operation Diplôme, the Student Voice Game, and the Academic Rut Game. I am passionate about AI-powered software development and cybersecurity, and I also have a strong interest in embedded systems. Outside of academics, I enjoy practicing combat sports, especially Brazilian Jiu-Jitsu (BJJ). I am always eager to learn new technologies and take on challenging projects."
                },
                "wanXinZhang": 
                {
                  "name": "Wan Xin Zhang",
                  "bio": "Studying at Concordia in the Design program, as a Designer for Eduqlasse, I usually help with the graphics of the websites and the visual parts of several projects. I have a strong interest in video games and design."
                },
                "aliAwada": 
                {
                  "name": "Ali Awada",
                  "bio": "CS undergrad at UdeM, working at the EduQlasse lab on AI-powered educational games and interactive learning tools for students. I specialize in AI agents and generative AI, with experience in RAG systems, LLM APIs, and full-stack dev. I love building things. When I’m not coding, I like to go outside and try new things."
                },
                "hyKhangTran": 
                {
                  "name": "Hy Khang Tran",
                  "bio": "Hello! I am a Computer Science student working at EduQ as a Unity programmer for our Physic projects. It has been a long journey but I have finally found my passion of making games here in Canada. I wish to create things that I can always be proud of. Cheers"
                }
              }
            },
          },
          
          "genAiApps":
          {
            "calcBuddy" : 
            {
              "heading": "Featured Project: Calculus Buddy",
              "desc": "AI-powered tutoring for higher education mathematics.",
              "btnText": "Discover The Project"
            }
          },

          "researchProjects": 
          {
            "title": "Research Projects",
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
            "researchProjectsLink": "Projets de recherche",
            "gamesAndSimulationsLink": "Jeux et simulations",
            "genAiAppsLink": "Applis IA",
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

          "about": 
          {
            "title": "Ce que nous faisons",

            "classroomCardTitle": "Gestion de classe",
            "classroomCardDesc": "Mise en œuvre de pratiques organisationnelles et de comportements positifs adaptés à des environnements d'apprentissage diversifiés.",
            "inclusiveCardTitle": "Pratiques inclusives et CUA",
            "inclusiveCardDesc": "Conception de cadres accessibles pour maximiser les résultats d'apprentissage des étudiants de l'enseignement supérieur.",
            "toolsCardTitle": "Outils numériques et IA",
            "toolsCardDesc": "Intégration de pratiques innovantes et diversifiées pour enrichir l'enseignement moderne et stimuler l'engagement des étudiants.",
          
            "meetTheTeam": 
            {
              "title": "Rencontrez l'équipe EDUQLASSE",
              "stats": "Plus de 20 chercheurs et développeurs | 6 étudiants de cycles supérieurs",
              "desc": "EDUQLASSE réunit des chercheurs, des étudiants de troisième cycle, des programmeurs et des illustrateurs travaillant en collaboration sur des projets interdisciplinaires dans l'enseignement supérieur.",
              "learnMoreBtn": "En savoir plus",

              "teamMembers": 
                {
                  "jimmyLe": 
                  {
                    "name": "Jimmy Le",
                    "bio": "Bonjour~\n\nJe suis actuellement étudiant de premier cycle à l'Université Concordia, où je poursuis une majeure conjointe en arts numériques (Computation Arts) et en informatique, et j'ai travaillé comme programmeur pour le projet Earth Codex.\nJ'aime jouer aux jeux vidéo, déboguer des choses, et je m'intéresse aux trucs liés à la psychologie !"
                  },
                  "kellyAnnThuot": 
                  {
                    "name": "Kelly-Ann Thuot",
                    "bio": "Salut ! Je m'appelle Kelly-Ann Thuot et je suis étudiante en animation 2D au Cégep du Vieux Montréal, diplômée cette année ! J'ai participé à de nombreux projets au sein d'EDUQLASSE, mais j'ai principalement été affectée à Earth Codex et aux mini-jeux. J'aime créer des décors et des peintures, mais je suis aussi une grande passionnée d'animation ! Récemment, j'ai réalisé un court-métrage d'animation d'horreur et d'action qui sortira très bientôt !"
                  },
                  "adamLaurin": 
                  {
                    "name": "Adam Laurin",
                    "bio": "Je m'appelle Adam Laurin. Je suis un étudiant en informatique diplômé du Collège John Abbott, et j'ai effectué un stage au laboratoire EduQlasse de l'Université de Montréal. Issu d'un parcours universitaire en histoire avant de me réorienter vers l'informatique, je suis passionné par l'éducation. J'ai rejoint ce projet pour aider à construire quelque chose qui pourrait avoir un impact positif sur le parcours éducatif des autres."
                  },
                  "thomasScripcariu": 
                  {
                    "name": "Thomas Scripcariu",
                    "bio": "Je commence un baccalauréat en génie électrique à l'Université Concordia à l'automne 2026. J'ai travaillé sur les projets Geoscience, Crispr et Calculus en tant qu'artiste et programmeur. J'adore bricoler l'électronique, les motos et faire du MMA."
                  },
                  "sylvainMiklohoun": 
                  {
                    "name": "Sylvain Miklohoun",
                    "bio": "Sylvain Miklohoun est doctorant à la Faculté des sciences de l'éducation de l'Université de Montréal. Ses recherches portent sur l'éthique de la conception des systèmes d'IA en éducation, l'inclusion scolaire par le numérique, et la littératie en IA, ainsi que sur les politiques qui sous-tendent ces aspects."
                  },
                  "tarynBeaupre": 
                  {
                    "name": "Taryn Beaupré",
                    "bio": "Bonjour, je m'appelle Taryn. Je poursuis actuellement un baccalauréat en informatique à l'Université Concordia. Je suis développeuse Web chez EduQlasse, où j'ai contribué à divers projets, notamment BioBot et Calculus Buddy. J'aime explorer la technologie dans les espaces créatifs, exploiter les capacités de l'IA, et je m'intéresse à la cybersécurité. En dehors de la technologie, j'aime l'art, les films, les jeux vidéo, la cuisine et les voyages !"
                  },
                  "sophieDomine": 
                  {
                    "name": "Sophie Dominé",
                    "bio": "En tant que doctorante en psychopédagogie à l'Université de Montréal, je m'intéresse au développement, au bien-être et aux pratiques inclusives des étudiants, particulièrement au secondaire mais aussi au postsecondaire. Au-delà de la recherche, j'ai un profond intérêt pour les nouvelles technologies — y compris l'IA — ainsi que pour les jeux vidéo et les activités manuelles. Je soutiendrai la professeure Neerusha Gokool dans ses diverses initiatives et je contribuerai à l'organisation d'événements."
                  },
                  "roustomAbdeldjalelCherir": 
                  {
                    "name": "Roustom Abdeldjalel Cherir",
                    "bio": "Je poursuis actuellement un baccalauréat en informatique à l'Université de Montréal. J'ai travaillé sur plusieurs projets de développement de jeux au sein d'EDUQLASSE, notamment Opération Diplôme, le Student Voice Game et l'Academic Rut Game. Je suis passionné par le développement de logiciels propulsés par l'IA et par la cybersécurité, et j'ai également un vif intérêt pour les systèmes embarqués. En dehors des études, j'aime pratiquer les sports de combat, particulièrement le jiu-jitsu brésilien (JJB). Je suis toujours enthousiaste à l'idée d'apprendre de nouvelles technologies et de relever des défis stimulants."
                  },
                  "wanXinZhang": 
                  {
                    "name": "Wan Xin Zhang",
                    "bio": "Étudiante à Concordia dans le programme de design, en tant que designer pour Eduqlasse, j'aide généralement pour le graphisme des sites Web et les aspects visuels de plusieurs projets. J'ai un fort intérêt pour les jeux vidéo et le design."
                  },
                  "aliAwada": 
                  {
                    "name": "Ali Awada",
                    "bio": "Étudiant de premier cycle en informatique à l'UdeM, je travaille au laboratoire EduQlasse sur des jeux éducatifs propulsés par l'IA et des outils d'apprentissage interactifs pour les étudiants. Je me spécialise dans les agents d'IA et l'IA générative, avec de l'expérience dans les systèmes RAG, les API de LLM et le développement full-stack. J'adore construire des choses. Quand je ne code pas, j'aime aller dehors et essayer de nouvelles activités."
                  },
                  "hyKhangTran": 
                  {
                    "name": "Hy Khang Tran",
                    "bio": "Bonjour ! Je suis un étudiant en informatique et je travaille chez EduQ en tant que programmeur Unity pour nos projets de physique. Le chemin a été long, mais j'ai enfin trouvé ma passion pour la création de jeux ici au Canada. Je souhaite créer des choses dont je pourrai toujours être fier. Santé !"
                  }
                }
            },
          },

          "genAiApps":
          {
            "calcBuddy": 
            {
              "heading": "Projet en vedette : Calculus Buddy",
              "desc": "Tutorat propulsé par l'IA pour l'enseignement supérieur en mathématiques.",
              "btnText": "Découvrir le projet"
            }
          },

          "researchProjects": 
          {
            "title": "Nos projets de recherche",
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