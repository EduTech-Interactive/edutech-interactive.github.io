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

          "gamesAndSimulations": 
          {
              "title": "Games & Simulations",
              "subtitle": "Education is the best way to grow your knowledge.",
              "gameData": 
              {
                "bioBot": 
                {
                  "title": "BioBot",
                  "author": "Neerusha Gokool",
                  "description": "Earth is under attack! Alien invaders have arrived on our planet, leaving devastation in their path. A robotic task force, the BioBots, have been deployed to create the next generation of super-humans to save the world. As a BioBot, you’ll be challenged with gathering and researching the cell’s organelles to supply the creation of enhanced warriors.",
                  "credits": "Neerusha Gokool, Devrin Aiden Tiongson, Thomas Rompré, Kamyar Karimi, Jenna Brown, Zi Di, Sarah Wari, Taryn Baupre, Zachary Dupe, Vincent Cloutier Duval, Abigail Lopez, Marysa, Olivier, Achraf, Veronica Marallag, Julius Napoleon Sargent",
                  "citation": "Gokool, Neerusha. (2026). BioBot [Educational Web Game]. https://eduqlasse.ca/games-and-simulations/biobot"
                },
                "classBuild": 
                {
                  "title": "ClassBuild",
                  "author": "Neerusha Gokool",
                  "description": "Design your own classroom in a brand new school! Follow your dean’s feedback and pick items that will improve your students’ quality of life.",
                  "credits": "Neerusha Gokool, Devrin Aiden Tiongson, Abigail Lopez",
                  "citation": "Gokool, Neerusha. (2026). Classroom Management Simulator [Web Training App]. https://eduqlasse.ca/games-and-simulations/class-build"
                },
                "divideAndConquer": 
                {
                  "title": "Divide and Conquer",
                  "author": "Terry Saropoulos & Neerusha Gokool",
                  "description": "Discover the cycle of life of the human cell in this rich interactive experience, and discover the cellular division process in this interactive experience. You will manage the growth, replication, and division of a cell.",
                  "credits": "Terry Saropoulos, Neerusha Gokool, Jenna Brown, Thomas Rompre, Devrin Aiden Tiongson, Katrina Frain, Katt Lee",
                  "citation": "Saropoulos, Terry & Gokool, Neerusha. (2026). Divide and Conquer [Educational Web Game]. https://eduqlasse.ca/games-and-simulations/divide-and-conquer"
                },
                "arcana": 
                {
                  "title": "Arcana Apotheca",
                  "author": "Tania Peres & Neerusha Gokool",
                  "description": "",
                  "credits": "Tania Peres, Alexandre Rogdrigue-Witchel, Neerusha Gokool, Sarah Wari, Alissia Bocarro, Vincent Gagnon, Devrin Aiden Tiongson",
                  "citation": "Peres, Tania, Rodrigue-Witchel, Alexandre & Gokool, Neerusha. (2026). Arcana Apotheca [Educational Web Game]. https://eduqlasse.ca/games-and-simulations/arcana"
                },
                "geneDoom": 
                {
                  "title": "GeneDoom",
                  "author": "Jason Letourneau & Neerusha Gokool",
                  "description": "In this fantasy world, monsters have started emerging from labs all across the country, and scientists are tasked with taking them back. Using their experimental genetic enhancement serums, they must fight their way through waves of monsters to take down mutated beasts. As a scientist, you will have to pick the correct genetic serums to enhance your abilities by changing the expression of your genes. Be careful, however, as some serums might degrade your attributes as well.",
                  "credits": "Jason Letourneau, Devrin Aiden Tiongson, Kamyar, Jeremy, Zaid Minhas, Noémie, Catherine, Mateo",
                  "citation": "Letourneau, Jason & Gokool, Neerusha. (2026). GeneDoom [Educational Web Game]. https://eduqlasse.ca/games-and-simulations/gene-doom"
                },
                "earthCodex": 
                {
                  "title": "Earth Codex",
                  "author": "Angelo Geovani Dos Santos Jr. & Neerusha Gokool",
                  "description": "In the near future, the Global Geological Network has started surveying geologically active areas on Earth to discover the planet’s many secrets. From rifts to volcanoes and beyond, the GGN’s agents work diligently to research every inch of the Earth’s layers. As a GGN agent, you’ll be exploring a narrative experience where you’ll discover and share knowledge of the Earth’s formation and tectonic activity.",
                  "credits": "Angelo Geovani Dos Santos Jr., Richard Léveillé, Neerusha Gokool, Devrin Aiden Tiongson, Adam Laurin, Ahmed Hassan, Brandon Boros, Thomas Scripcariu, Jimmy Lee, Zaid Minhas, Abigail Lopez, Arielle Wong, Johanne H. Rakotoson, Parsa Azarii, Nadia Abdul Aziz, Jake Guitard Lacass",
                  "citation": "Geovani Dos Santos Jr., Angelo & Gokool, Neerusha. (2026). Earth Codex [Educational Web Game]. https://eduqlasse.ca/games-and-simulations/earth-codex"
                },
                "microMedics": 
                {
                  "title": "Micro-Medics",
                  "author": "Jason Lapointe & Neerusha Gokool",
                  "description": "",
                  "credits": "Liver puzzle: Jason Lapointe, Devrin Aiden Tiongson. Nutrient pipe: Jason Lapointe, Zi Di.",
                  "citation": "https://eduqlasse.ca/games-and-simulations/micro-medics"
                },
                "vectorShock": 
                {
                  "title": "Vector Shock",
                  "author": "Nadim Boukhira & Neerusha Gokool",
                  "description": "In the twenty-third century, humanity finally established contact with otherworldly beings. Disappointment came quickly, however, as Earth’s intergalactic explorers soon discovered that they were billions of years too late to claim new worlds, instead fighting for scraps. Leymon-B, a barely habitable exoplanet, and one of humanity’s few interstellar claims, is your home. As a newly trained space cadet, one final step remains before you’re allowed to fight for your planet: a challenging graduation exam. Seated in a rugged fighter shuttle, and under the watchful eye of your examiner Lt. Vega, you will be challenged with flying and combat in Leymon-B’s rough electromagnetic field, and potentially discover some of its deep secrets.",
                  "credits": "Nadim Boukhira, Neerusha Gokool, Alain Ducharme, Devrin Aiden Tiongson, Taief Ahmed, Sara Katerji, Alhasan Shnoot, Ana Torres Bejarno, Abigail Lopez, Julia Axiuk, Olivia Axiuk, Erin Mahar, Katheryn Lee, Mateo Alarie",
                  "citation": "Boukhira, Nadim & Gokool, Neerusha. (2026). Vector Shock [Educational Computer Game]. https://eduqlasse.ca/games-and-simulations/vector-shock"
                },
                "crisprSim": 
                {
                  "title": "CrispRSim",
                  "author": "Karl Laroche & Neerusha Gokool",
                  "description": "",
                  "credits": "Karl Laroche, Neerusha Gokool, Devrin Aiden Tiongson, Adam Laurin, Brandon Boros, Emily Smelyansky, Hy Khang Tran, Zaid Minhas, Abigail Lopez, Thomas Scripcariu",
                  "citation": "Laroche, Karl & Gokool, Neerusha. (2026). CrispRSim [Web Training App]. https://eduqlasse.ca/games-and-simulations/crispr-sim"
                }
              },
              "gameBtnText": "Play Now!"
          },

          "genAiApps":
          {
            heroSection: 
            {
              title: "AI Projects",
              subtitle: "Advancing Teaching and Learning Through Responsible AI",
              description: "At EduQlasse, we design and study artificial intelligence tools that address real challenges in higher education. Grounded in learning sciences, inclusive pedagogy, and ethical AI practices, our projects are developed through collaboration with educators, researchers, students, and programmers.",
              leadership: 
              {
                label: "Led by",
                name: "Dr. Neerusha Gokool",
                title: "Founder & Principal Investigator, EduQlasse"
              }
            },
            ecosystem: 
            {
              title: "Our AI Ecosystem",
              apps: 
              {
                calculusBuddy: 
                {
                  title: "Calculus Buddy",
                  subtitle: "An AI learning companion for student success in mathematics",
                  description: "Supports students in differential calculus with scaffolded guidance, personalized feedback, and step-by-step problem solving to build conceptual understanding and confidence.",
                  features: 
                  [
                    "Personalized learning support",
                    "Step-by-step scaffolding",
                    "Guided problem-solving",
                    "Learning analytics & feedback",
                    "UDL-informed design"
                  ],
                  ctaText: "Learn more"
                },
                teachersCraft: 
                {
                  title: "Teacher's Craft",
                  subtitle: "An AI-powered pedagogical design assistant",
                  description: "Helps educators design inclusive, engaging, and evidence-informed learning experiences with tools for lesson planning, assessment, and student supports.",
                  features: 
                  [
                    "Lesson & course design support",
                    "Assessment & rubric creation",
                    "UDL-aligned recommendations",
                    "Inclusive teaching strategies",
                    "Ethical AI integration guidance"
                  ],
                  ctaText: "Learn more"
                },
                aiCompass: 
                {
                  title: "AI Compass",
                  subtitle: "Navigating AI with confidence, responsibility, and purpose",
                  description: "A self-assessment and professional learning tool that helps educators reflect on their use of AI and access personalized resources for ethical and effective integration.",
                  features: 
                  [
                    "AI readiness self-assessment",
                    "Personalized learning pathways",
                    "Ethical reflection prompts",
                    "Resource recommendations",
                    "Evidence-informed guidance"
                  ],
                  ctaText: "Learn more"
                }
              }
            },
            impact: 
            {
              title: "Our Impact",
              metrics: 
              {
                studentsSupported: 
                {
                  value: "3,200+",
                  label: "Students Supported"
                },
                educatorsEngaged: 
                {
                  value: "850+",
                  label: "Educators Engaged"
                },
                institutionsInvolved: 
                {
                  value: "25+",
                  label: "Institutions Involved"
                },
                researchProjects: 
                {
                  value: "18+",
                  label: "Research Projects"
                },
                fundingReceived: 
                {
                  value: "$1.2M+",
                  label: "Funding Received"
                }
              }
            },
            collaborators: 
            {
              title: "Collaborators",
              description: "Our projects are made possible through the expertise and commitment of educators, researchers, and technologists.",
              mathTeam: 
              {
                title: "Calculus Buddy Math Team",
                description: "Collaborative partnership with experienced mathematics educators.",
                ctaText: "View team",
                members: 
                [
                  {
                    name: "Dr. Elena Naidenova",
                    institution: "Vanier College"
                  },
                  {
                    name: "Dr. Ferenc Balogh",
                    institution: "John Abbott College"
                  },
                  {
                    name: "Mr. Ivo Pendev",
                    institution: "Mathematics"
                  }
                ]
              },
              technicalDevelopment: 
              {
                title: "Technical Development",
                description: "Built by a talented team of student programmers under the leadership of Dr. Neerusha Gokool.",
                ctaText: "Learn more"
              }
            },
            callToAction: 
            {
              title: "Let's Shape the Future of Teaching and Learning—Together",
              description: "Interested in collaborating, piloting a tool, or learning more about our research? We'd love to connect.",
              actions: 
              {
                partner: "Partner With Us",
                pilot: "Pilot a Tool",
                explore: "Explore Our Research"
              }
            }
          },

          "podcasts": 
          {
            "heroSection": 
            {
              "title": "VOICES",
              "title2": "OF HIGHER EDUCATION",
              "subtitle": "Conversations that inspire teaching, learning and innovation",
              "by": "A podcast by",
              "neerushaInfo": "Director, EduQlasse | Assistant Professor, Université de Montréal"
            },

            "featuredTheme": 
            {
              "tag": "FEATURED THEME",
              "title": "Generative AI Ethics and Responsible Use in Higher Education",
              "description": "Exploring the ethical, pedagogical, and practical implications of generative AI in college and university classrooms.",
              
              "pillars": 
              {
                "ethical": "Ethical Use",
                "integrity": "Integrity",
                "innovation": "Innovation",
                "inclusion": "Inclusion"
              },

              "slogan": 
              {
                "voices": "Real voices.",
                "experiences": "Real experiences.",
                "impact": "Real impact."
              }
            },

            "latestEpisodes": "LATEST EPISODES",

            "podcastData": 
            {
              "cardData":
              {
                "episode": "Episode",
                "guest": "Guest",
                "fullSynopsis": "Full Synopsis"
              },

              "episode1": 
              {
                "title": "Generative AI Ethics in College Biology Education",
                "guests": "Karl Laroche, Vanier College",
                "shortDescription": "Exploring the ethical and responsible integration of GenAI in biology classrooms and its impact on learning, assessment and scientific reasoning",
                "longDescription": "In this inaugural episode of Voices of Higher Education, we welcome Karl Laroche, an award-winning Biology faculty member at Vanier College, former Coordinator of the Science Program, and contributor to provincial science program reforms in Quebec.<br><br>Together, we explore the ethical and responsible integration of generative artificial intelligence in college biology classrooms.<br><br>Drawing on real-world examples from teaching practice, the conversation examines both the opportunities and challenges that AI presents for student learning, assessment, academic integrity, and the development of critical thinking skills.<br><br> As generative AI continues to reshape higher education, this episode highlights the important role educators play in helping students become thoughtful, ethical, and responsible users of emerging technologies. Through an engaging discussion grounded in experience and educational leadership, listeners are invited to reflect on how AI can be leveraged to support learning while preserving the values at the heart of science education."
              },

              "episode2": 
              {
                "title": "Generative AI in College Mathematics: Transforming Teaching and Learning",
                "guests": "Dr. Elena Naidenova (Vanier College), Dr Ferenc Balogh (John Abbott College), Mr. Ivo Pendev (Mathematics Educator)",
                "shortDescription": "Discussing how GenAI is transforming mathematics instruction, learning practices and student engagement.",
                "longDescription": "In this episode of Voices of Higher Education, we explore the evolving role of generative artificial intelligence in college mathematics education with three experienced educators: Dr. Elena Naidenova from Vanier College, Dr. Ferenc Balogh from John Abbott College, and Mr. Ivo Pendev, mathematics educator and collaborator.<br><br>Together, they discuss how generative AI is reshaping the teaching and learning of mathematics, from supporting problem-solving and personalized learning to creating new opportunities for feedback, scaffolding, and student engagement. The conversation also examines the challenges that accompany these innovations, including the development of mathematical reasoning, academic integrity, assessment practices, and the responsible use of AI tools. <br><br> Drawing on their extensive experience teaching mathematics at the college level, the guests share practical insights, classroom experiences, and reflections on how educators can harness AI to enhance learning while ensuring that students continue to develop the critical thinking and problem-solving skills that are central to mathematics."
              }
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

          "gamesAndSimulations":
            {
              "title": "Jeux et simulations",
              "subtitle": "L'éducation est le meilleur moyen de développer ses connaissances.",
              "gameData":
              {
                "bioBot":
                {
                  "title": "BioBot",
                  "author": "Neerusha Gokool",
                  "description": "La Terre est attaquée ! Des envahisseurs extraterrestres ont débarqué sur notre planète, laissant la désolation sur leur passage. Une unité robotique spéciale, les BioBots, a été déployée pour créer la prochaine génération de super-humains afin de sauver le monde. En tant que BioBot, vous aurez pour mission de collecter et d'étudier les organites de la cellule pour fournir les éléments nécessaires à la création de guerriers améliorés.",
                  "credits": "Neerusha Gokool, Devrin Aiden Tiongson, Thomas Rompré, Kamyar Karimi, Jenna Brown, Zi Di, Sarah Wari, Taryn Baupre, Zachary Dupe, Vincent Cloutier Duval, Abigail Lopez, Marysa, Olivier, Achraf, Veronica Marallag, Julius Napoleon Sargent",
                  "citation": "Gokool, Neerusha. (2026). BioBot [Jeu Web éducatif]. https://eduqlasse.ca/games-and-simulations/biobot"
                },
                "classBuild":
                {
                  "title": "ClasseBuild",
                  "author": "Neerusha Gokool",
                  "description": "Concevez votre propre salle de classe dans une toute nouvelle école ! Suivez les commentaires de votre doyen et choisissez des éléments qui amélioreront la qualité de vie de vos étudiants.",
                  "credits": "Neerusha Gokool, Devrin Aiden Tiongson, Abigail Lopez",
                  "citation": "Gokool, Neerusha. (2026). Simulateur de gestion de classe [Application de formation Web]. https://eduqlasse.ca/games-and-simulations/class-build"
                },
                "divideAndConquer":
                {
                  "title": "Diviser pour régner",
                  "author": "Terry Saropoulos & Neerusha Gokool",
                  "description": "Découvrez le cycle de vie de la cellule humaine dans cette riche expérience interactive, et explorez le processus de division cellulaire au cours de cette aventure immersive. Vous gérerez la croissance, la réplication et la division d'une cellule.",
                  "credits": "Terry Saropoulos, Neerusha Gokool, Jenna Brown, Thomas Rompre, Devrin Aiden Tiongson, Katrina Frain, Katt Lee",
                  "citation": "Saropoulos, Terry & Gokool, Neerusha. (2026). Diviser pour régner [Jeu Web éducatif]. https://eduqlasse.ca/games-and-simulations/divide-and-conquer"
                },
                "arcana": 
                {
                  "title": "Arcana Apotheca",
                  "author": "Tania Peres & Neerusha Gokool",
                  "description": "",
                  "credits": "Tania Peres, Alexandre Rogdrigue-Witchel, Neerusha Gokool, Sarah Wari, Alissia Bocarro, Vincent Gagnon, Devrin Aiden Tiongson",
                  "citation": "Peres, Tania, Rodrigue-Witchel, Alexandre & Gokool, Neerusha. (2026). Arcana Apotheca [Educational Web Game]. https://eduqlasse.ca/games-and-simulations/arcana"
                },
                "geneDoom":
                {
                  "title": "GeneDoom",
                  "author": "Jason Letourneau & Neerusha Gokool",
                  "description": "Dans ce monde fantastique, des monstres ont commencé à s'échapper de laboratoires aux quatre coins du pays, et les scientifiques ont pour mission de les capturer. À l'aide de leurs sérums expérimentaux d'amélioration génétique, they must fight their way through waves of monsters to take down mutated beasts. En tant que scientifique, vous devrez choisir les bons sérums génétiques pour améliorer vos capacités en modifiant l'expression de vos gènes. Soyez toutefois prudent, car certains sérums pourraient également détériorer vos attributs.",
                  "credits": "Jason Letourneau, Devrin Aiden Tiongson, Kamyar, Jeremy, Zaid Minhas, Noémie, Catherine, Mateo",
                  "citation": "Letourneau, Jason & Gokool, Neerusha. (2026). GeneDoom [Jeu Web éducatif]. https://eduqlasse.ca/games-and-simulations/gene-doom"
                },
                "earthCodex":
                {
                  "title": "Codex Terrestre",
                  "author": "Angelo Geovani Dos Santos Jr. & Neerusha Gokool",
                  "description": "Dans un avenir proche, le Réseau géologique mondial a commencé à arpenter les zones géologiquement actives de la Terre afin de découvrir les nombreux secrets de la planète. Des rifts aux volcans et bien plus encore, les agents du RGM travaillent d'arrache-pied pour étudier les moindres recoins des couches terrestres. En tant qu'agent du RGM, vous plongerez dans une expérience narrative où vous découvrirez et partagerez des connaissances sur la formation de la Terre et l'activité tectonique.",
                  "credits": "Angelo Geovani Dos Santos Jr., Richard Léveillé, Neerusha Gokool, Devrin Aiden Tiongson, Adam Laurin, Ahmed Hassan, Brandon Boros, Thomas Scripcariu, Jimmy Lee, Zaid Minhas, Abigail Lopez, Arielle Wong, Johanne H. Rakotoson, Parsa Azarii, Nadia Abdul Aziz, Jake Guitard Lacass",
                  "citation": "Geovani Dos Santos Jr., Angelo & Gokool, Neerusha. (2026). Codex Terrestre [Jeu Web éducatif]. https://eduqlasse.ca/games-and-simulations/earth-codex"
                },
                "microMedics":
                {
                  "title": "Micro-Médics",
                  "author": "Jason Lapointe & Neerusha Gokool",
                  "description": "",
                  "credits": "Casse-tête du foie : Jason Lapointe, Devrin Aiden Tiongson. Conduite de nutriments : Jason Lapointe, Zi Di.",
                  "citation": "https://eduqlasse.ca/games-and-simulations/micro-medics"
                },
                "vectorShock":
                {
                  "title": "Choc Vectoriel",
                  "author": "Nadim Boukhira & Neerusha Gokool",
                  "description": "Au vingt-troisième siècle, l'humanité a enfin établi le contact avec des êtres venus d'ailleurs. La déception fut toutefois rapide, car les explorateurs intergalactiques de la Terre ont vite découvert qu'ils arrivaient des milliards d'années trop tard pour revendiquer de nouveaux mondes, devant plutôt se battre pour des restes. Leymon-B, une exoplanète à la limite de l'habitable et l'un des rares territoires interstellaires de l'humanité, est votre patrie. En tant que cadet de l'espace fraîchement émoulu, une dernière étape vous sépare de l'autorisation de combattre pour votre planète : un examen de fin d'études des plus exigeants. Installé à bord d'une navette de combat robuste, et sous l'œil attentif de votre examinateur, le lieutenant Vega, vous devrez relever le défi du pilotage et du combat au sein du rude champ électromagnétique de Leymon-B, et potentiellement en percer les profonds secrets.",
                  "credits": "Nadim Boukhira, Neerusha Gokool, Alain Ducharme, Devrin Aiden Tiongson, Taief Ahmed, Sara Katerji, Alhasan Shnoot, Ana Torres Bejarno, Abigail Lopez, Julia Axiuk, Olivia Axiuk, Erin Mahar, Katheryn Lee, Mateo Alarie",
                  "citation": "Boukhira, Nadim & Gokool, Neerusha. (2026). Choc Vectoriel [Jeu d'ordinateur éducatif]. https://eduqlasse.ca/games-and-simulations/vector-shock"
                },
                "crisprSim":
                {
                  "title": "Sim CRISPR",
                  "author": "Karl Laroche & Neerusha Gokool",
                  "description": "",
                  "credits": "Karl Laroche, Neerusha Gokool, Devrin Aiden Tiongson, Adam Laurin, Brandon Boros, Emily Smelyansky, Hy Khang Tran, Zaid Minhas, Abigail Lopez, Thomas Scripcariu",
                  "citation": "Laroche, Karl & Gokool, Neerusha. (2026). Sim CRISPR [Application de formation Web]. https://eduqlasse.ca/games-and-simulations/crispr-sim"
                }
              },
              "gameBtnText": "Jouer maintenant!"
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
            heroSection: 
            {
              title: "Projets d'IA",
              subtitle: "Faire progresser l'enseignement et l'apprentissage grâce à une IA responsable",
              description: "Chez EduQlasse, nous concevons et étudions des outils d'intelligence artificielle qui répondent à des défis réels de l'enseignement supérieur. Ancrés dans les sciences de l'apprentissage, la pédagogie inclusive et les pratiques d'IA éthiques, nos projets sont développés en collaboration avec des éducateurs, des chercheurs, des étudiants et des programmeurs.",
              leadership: 
              {
                label: "Dirigé par",
                name: "Dr. Neerusha Gokool",
                title: "Fondatrice et chercheuse principale, EduQlasse"
              }
            },
            ecosystem: 
            {
              title: "Notre écosystème d'IA",
              apps: 
              {
                calculusBuddy: 
                {
                  title: "Calculus Buddy",
                  subtitle: "Un compagnon d'apprentissage de l'IA pour la réussite des étudiants en mathématiques",
                  description: "Soutient les étudiants en calcul différentiel grâce à un encadrement progressif, des rétroactions personnalisées et une résolution de problèmes étape par étape afin de renforcer la compréhension conceptuelle et la confiance.",
                  features: 
                  [
                    "Soutien à l'apprentissage personnalisé",
                    "Encadrement étape par étape",
                    "Résolution de problèmes guidée",
                    "Analyses de l'apprentissage et rétroaction",
                    "Conception inspirée de l'UDL (CUA)"
                  ],
                  ctaText: "En savoir plus"
                },
                teachersCraft: 
                {
                  title: "Teacher's Craft",
                  subtitle: "Un assistant de conception pédagogique propulsé par l'IA",
                  description: "Aide les éducateurs à concevoir des expériences d'apprentissage inclusives, engageantes et fondées sur des données probantes grâce à des outils de planification de cours, d'évaluation et de soutien aux étudiants.",
                  features: 
                  [
                    "Soutien à la conception de cours et de leçons",
                    "Création d'évaluations et de grilles de correction",
                    "Recommandations alignées sur l'UDL (CUA)",
                    "Stratégies d'enseignement inclusives",
                    "Guidage pour l'intégration éthique de l'IA"
                  ],
                  ctaText: "En savoir plus"
                },
                aiCompass: 
                {
                  title: "AI Compass",
                  subtitle: "Naviguer dans l'IA avec confiance, responsabilité et détermination",
                  description: "Un outil d'auto-évaluation et d'apprentissage professionnel qui aide les éducateurs à réfléchir à leur utilisation de l'IA et à accéder à des ressources personnalisées pour une intégration éthique et efficace.",
                  features: 
                  [
                    "Auto-évaluation de la préparation à l'IA",
                    "Parcours d'apprentissage personnalisés",
                    "Pistes de réflexion éthique",
                    "Recommandations de ressources",
                    "Guidage fondé sur des données probantes"
                  ],
                  ctaText: "En savoir plus"
                }
              }
            },
            impact: 
            {
              title: "Notre impact",
              metrics: 
              {
                studentsSupported: 
                {
                  value: "3 200+",
                  label: "Étudiants soutenus"
                },
                educatorsEngaged: 
                {
                  value: "850+",
                  label: "Éducateurs engagés"
                },
                institutionsInvolved: 
                {
                  value: "25+",
                  label: "Établissements impliqués"
                },
                researchProjects: 
                {
                  value: "18+",
                  label: "Projets de recherche"
                },
                fundingReceived: 
                {
                  value: "1,2 M$+",
                  label: "Financement reçu"
                }
              }
            },
            collaborators: 
            {
              title: "Collaborateurs",
              description: "Nos projets sont rendus possibles grâce à l'expertise et à l'engagement d'éducateurs, de chercheurs et de technologues.",
              mathTeam: 
              {
                title: "Équipe de mathématiques de Calculus Buddy",
                description: "Partenariat de collaboration avec des éducateurs en mathématiques chevronnés.",
                ctaText: "Voir l'équipe",
                members: 
                [
                  {
                    name: "Dr. Elena Naidenova",
                    institution: "Collège Vanier"
                  },
                  {
                    name: "Dr. Ferenc Balogh",
                    institution: "Collège John Abbott"
                  },
                  {
                    name: "M. Ivo Pendev",
                    institution: "Mathématiques"
                  }
                ]
              },
              technicalDevelopment: 
              {
                title: "Développement technique",
                description: "Créé par une équipe talentueuse d'étudiants programmeurs sous la direction de la Dre Neerusha Gokool.",
                ctaText: "En savoir plus"
              }
            },
            callToAction: 
            {
              title: "Façonnons ensemble l'avenir de l'enseignement et de l'apprentissage",
              description: "Vous souhaitez collaborer, piloter un outil ou en savoir plus sur nos recherches? Nous serions ravis de faire votre connaissance.",
              actions: 
              {
                partner: "Devenir partenaire",
                pilot: "Piloter un outil",
                explore: "Explorer nos recherches"
              }
            }
          },
          "podcasts": 
          {
            "heroSection": 
            {
              "title": "LES VOIX",
              "title2": "DE L'ENSEIGNEMENT SUPÉRIEUR",
              "subtitle": "Des conversations qui inspirent l'enseignement, l'apprentissage et l'innovation",
              "by": "Un balado par",
              "neerushaInfo": "Directrice, EduQlasse | Professeure adjointe, Université de Montréal"
            },

            "featuredTheme": 
            {
              "tag": "THÈME VEDETTE",
              "title": "Éthique de l'IA générative et utilisation responsable dans l'enseignement supérieur",
              "description": "Explorer les implications éthiques, pédagogiques et pratiques de l'IA générative dans les salles de classe des collèges et universités.",
              "pillars": 
              {
                "ethical": "Utilisation éthique",
                "integrity": "Intégrité",
                "innovation": "Innovation",
                "inclusion": "Inclusion"
              },
              "slogan": 
              {
                "voices": "Vraies voix.",
                "experiences": "Vrais vécus.",
                "impact": "Vrai impact."
              }
            },

            "latestEpisodes": "DERNIERS ÉPISODES",

            "podcastData": 
            {
              "cardData":
              {
                "episode": "Épisode",
                "guest": "Invité(e)",
                "fullSynopsis": "Synopsis complet"
              },

              "episode1": 
              {
                "title": "L'éthique de l'IA générative dans l'enseignement de la biologie au collégial",
                "guests": "Karl Laroche, Collège Vanier",
                "shortDescription": "Explorer l'intégration éthique et responsable de l'IAGen dans les classes de biologie et son impact sur l'apprentissage, l'évaluation et le raisonnement scientifique.",
                "longDescription": "Dans ce premier épisode de Voix de l'enseignement supérieur, nous accueillons Karl Laroche, professeur de biologie primé au Collège Vanier, ancien coordonnateur du programme de sciences et contributeur aux réformes provinciales du programme de sciences au Québec.<br><br>Ensemble, nous explorons l'intégration éthique et responsable de l'intelligence artificielle générative dans les classes de biologie au collégial.<br><br>S'appuyant sur des exemples concrets tirés de la pratique enseignante, la conversation examine à la fois les opportunités et les défis que l'IA présente pour l'apprentissage des étudiants, l'évaluation, l'intégrité académique et le développement de l'esprit critique.<br><br>Alors que l'IA générative continue de remodeler l'enseignement supérieur, cet épisode met en lumière le rôle crucial que jouent les éducateurs pour aider les étudiants à devenir des utilisateurs réfléchis, éthiques et responsables des technologies émergentes. À travers une discussion captivante, ancrée dans l'expérience et le leadership pédagogique, les auditeurs sont invités à réfléchir à la manière dont l'IA peut être mise à profit pour soutenir l'apprentissage tout en préservant les valeurs fondamentales de l'enseignement des sciences."
              },

              "episode2": 
              {
                "title": "L'IA générative en mathématiques au collégial : Transformer l'enseignement et l'apprentissage",
                "guests": "Dr Elena Naidenova (Collège Vanier), Dr Ferenc Balogh (Collège John Abbott), M. Ivo Pendev (éducateur en mathématiques)",
                "shortDescription": "Discussion sur la manière dont l'IAGen transforme l'enseignement des mathématiques, les pratiques d'apprentissage et l'engagement des étudiants.",
                "longDescription": "Dans cet épisode de Voix de l'enseignement supérieur, nous explorons le rôle évolutif de l'intelligence artificielle générative dans l'enseignement des mathématiques au collégial avec trois éducateurs chevronnés : la Dre Elena Naidenova du Collège Vanier, le Dr Ferenc Balogh du Collège John Abbott, et M. Ivo Pendev, éducateur et collaborateur en mathématiques.<br><br>Ensemble, ils discutent de la manière dont l'IA générative redéfinit l'enseignement et l'apprentissage des mathématiques, qu'il s'agisse de soutenir la résolution de problèmes et l'apprentissage personnalisé ou de créer de nouvelles occasions de rétroaction, d'échafaudage cognitif et d'engagement des étudiants. La conversation examine également les défis qui accompagnent ces innovations, notamment le développement du raisonnement mathématique, l'intégrité académique, les pratiques d'évaluation et l'utilisation responsable des outils d'IA.<br><br>S'appuyant sur leur vaste expérience de l'enseignement des mathématiques au niveau collégial, les invités partagent des perspectives pratiques, des expériences de classe et des réflexions sur la façon dont les éducateurs peuvent exploiter l'IA pour améliorer l'apprentissage tout en veillant à ce que les étudiants continuent de développer les compétences de pensée critique et de résolution de problèmes qui sont au cœur des mathématiques."
              }
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