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

          
            "collaborators":
            {
              "title": "Collaborators",

              "udem": 
              {
                "neerushaGokool": 
                {
                  "name": "Neerusha Gokool - Project Lead",
                  "bio": "Neerusha is a professor at the University of Montreal, in the Faculty of Education, Department of Educational Psychology and Adult Education, where she specializes in educational psychology interventions in higher education, with a particular focus on teaching practices at the college level (CEGEP). She also directs EDUQLASSE, a research laboratory whose work focuses on the design, implementation, and evaluation of educational strategies in classroom management, the integration of digital technology, and inclusive teaching practices. Her research is grounded in robust theoretical frameworks, including Universal Design for Learning (UDL), socioconstructivist approaches, culturally relevant pedagogy, and inclusive perspectives in education. Her work focuses on analyzing and transforming teaching practices to support the diversity of student profiles and foster equitable, accessible, and meaningful learning environments. She is particularly interested in issues related to diversity, student engagement, and the relationship between classroom management, teaching practices, and the use of digital technology. Adopting a practice-based research approach, she prioritizes collaborative and pragmatic strategies that help bridge the gap between scientific knowledge and educational practices. In this regard, she works closely with faculty to co-develop evidence-based teaching strategies, thereby contributing to the success, retention, and well-being of students in higher education."
                }
              },
              "champlain": 
              {
                "saraHashem": 
                {
                  "name": "Sara Hashem - Co-project Lead",
                  "bio": "Sara Hashem currently serves as a pedagogical counselor at Champlain College Saint-Lambert, where she supports the development of innovative educational practices and the implementation of initiatives that promote learning, collaboration, and research in higher education. She is also a co-founder of the Artful Inquiry Research group at McGill University, a research collective dedicated to advancing educational research and promoting artistic and interdisciplinary approaches to pedagogy. Her work focuses on designing learning experiences that forge meaningful connections between theory, practice, and creation, while exploring the frontiers of contemporary pedagogical knowledge. In 2023, she co-directed the anthology Making Connections in and Through Arts-Based Educational Research. She is currently working on a new book exploring concepts of re-emergence in education and the transformation of teaching practices in evolving educational contexts."
                },
                "aïchaMein": 
                {
                  "name": "Aïcha Mein, MA - Professor at the Writing Center",
                  "bio": "Aïcha Mein, MA, is a professor at the Writing Center at Champlain College Saint-Lambert. She holds a bachelor’s degree in English literature and African studies, as well as a master’s degree in English, with a specialization in colonial and postcolonial literature. She co-coordinates the English department and previously coordinated the Writing Centre, where she redesigned the space, updated the online platform, and fostered a more inclusive environment. Passionate about equity, diversity, and inclusion (EDI), Aïcha incorporates these values into her work, particularly through EDI-focused training for tutors and workshops with the Student Access Centre. She has also participated in a Canada-wide pilot project with the Global Centre for Pluralism and continues to contribute to the College’s EDI initiatives, notably by serving on the strategic plan committee. Aïcha is currently developing new resources for the Writing Center, including tutor-led modules and a self-paced online component, to make writing support more accessible and engaging."
                },
                "bahmanZamani": 
                {
                  "name": "Bahman Zamani, PhD - Computer Science Professor",
                  "bio": "Bahman Zamani, PhD, is a computer science professor at Champlain College Saint-Lambert. He holds a PhD in computer science from Concordia University in Montreal, QC, Canada, where he conducted research on model language verification. He is currently a full-time faculty member in the College’s Department of Computer Technology and also teaches part-time at Concordia University. Dr. Zamani was previously an associate professor and is now an associate professor emeritus in the Department of Software Engineering at Isfahan University in Isfahan, Iran. His primary area of research is model-driven software engineering (MDSE), and he is the founder of the MDSE research group at Isfahan University."
                },
                "catherineNygren": 
                {
                  "name": "Catherine Nygren, PhD - English Faculty Member",
                  "bio": "Catherine Nygren, PhD, is an English faculty member at Champlain College Saint-Lambert, specializing in speculative fiction and the rhetoric of scientific writing. In addition to her teaching responsibilities, she works with students with special needs at the Student Access Centre, providing personalized academic support to help them overcome challenges and develop strategies for academic success. During her doctoral studies, Catherine used computational models to explore and analyze 18th-century travel writings. This interdisciplinary approach allowed her to combine literary analysis with computational techniques, thereby offering a new perspective on historical texts."
                },
                "jennyDoubt": 
                {
                  "name": "Jenny Doubt",
                  "bio": ""
                },
                "paulCatanu": 
                {
                  "name": "Paul Catanu, PhD - Professor of Humanities",
                  "bio": "Paul Catanu holds a PhD and is a professor of humanities at Champlain College Saint-Lambert; he also teaches part-time at Concordia University. He earned his PhD from the University of Montreal. His research focuses on the critical implementation of AI—more specifically, automated statistical models—in educational settings. While he acknowledges the importance of introducing students to new large-scale language models, he emphasizes the need to do so within ethical frameworks that prioritize data confidentiality and preserve the authenticity of students’ voices. Paul is the author of two books: Heidegger’s Nietzsche: Being and Becoming (Montreal, 2010) and Critical Thinking, Worldviews, and Logic (Montreal, 2016)."
                }
              },
              "dawson": 
              {
                "rafaelScapin":
                {
                  "name": "Dr. Rafael Scapin - Coordinator of Educational Technology",
                  "bio": "Dr. Rafael Scapin holds a B.S. degree in Theoretical Physics and also a M.S. and a Ph.D. in Computational Physics from the University of São Paulo (Brazil). He has been involved with e-learning and educational technology since 1996. Since his arrival in Canada in 2008 he has worked for different companies in the field of e-learning (including as a consultant for the Canadian Government), leading various projects involving course design and the use of technology in a pedagogical environment. In 2008 he became the Coordinator of Educational Technology at Dawson College in Montreal, where he is currently employed, working with new technologies for education. He also publishes a weekly newsletter on IT and Education called DawsonITE. He is one of the co-founders of the Association for the Development of Technology in Education (ADTE), a non-profit organization devoted to fostering the development of Educational Technology in Quebec. Dr. Scapin was also on the organizing committee for the Canadian Moodle Conference 2013 in Vancouver, 2015 in Montreal and 2018 in Toronto. He also organized TEDx Dawson College on May 2013. His language skills include English, French, Spanish, Portuguese, Italian and Esperanto."
                },
                "azraKhan": 
                {
                  "name": "Azra Khan - Pedagogical Counselor",
                  "bio": "Azra Khan is a pedagogical counselor in the Academic Development Office at Dawson College. She has worked on the professional integration of new faculty members, the Success Plan, and the inclusion of cultural communities and individuals with special needs, as well as strategic planning objectives. She serves as a liaison between Dawson and the network through AQPC, Performa, SALTISE, and other college network initiatives. She holds a master’s degree in urban development and has taught at the post-secondary level at Concordia, McGill, and in the United Kingdom before joining Dawson in 2011."
                }
              },
              "vanier": 
              {
                "elenaNaidenova": 
                {
                  "name": "Elena Naidenova - Mathematics Professor and Coordinator",
                  "bio": "Elena Naidenova is a mathematics professor and coordinator of the mathematics department at Vanier College in Montreal. A graduate of the Moldovan Academy of Sciences, she has extensive experience in postsecondary education, particularly in the fields of differential and integral calculus and differential equations. She is known for her rigorous and structured teaching approach, which focuses on clear explanations and a methodical progression of learning. She is recognized for her ability to make complex concepts accessible while maintaining high academic standards. Her assessments, though rigorous, are perceived as fair and encourage thorough preparation, active practice of exercises, and a genuine understanding of concepts. As a coordinator, she plays a central role in course planning, departmental organization, and the integration of educational innovations. She is actively involved in initiatives aimed at modernizing mathematics education, particularly through the use of technology. She is currently collaborating with Neerusha B. Gokool on the design of an intelligent chatbot intended to support students in calculus. This AI project aims to provide accessible and interactive educational support, enabling students to reinforce their learning outside the traditional classroom setting. Elena Naidenova’s entire career reflects a sustained commitment to student success, innovation in mathematics education, and making scientific knowledge accessible at the college level."
                },
                "karlLaroche": 
                {
                  "name": "Karl Laroche - Biology Instructor",
                  "bio": "Karl Laroche, a biology instructor at Vanier College, is recognized for his outstanding contributions to teaching and his innovative pedagogical approaches. In 2022, he received the Vanier College Award for Excellence in Teaching, recognizing his commitment to quality education (Education News Canada). He had previously been honored in 2017 with the SALTISE Innovator Award for his pedagogical innovations (SALTISE). Karl stands out for his ability to engage students through active learning, hands-on projects, and inclusive strategies. A notable example is a field lab he designed, in which students analyze the impact of an invasive plant in Côte-de-Liesse Park, allowing them to collect and interpret real-world data. He also helped develop active learning activities, such as the case study “Genetics: Patterns of Inheritance,” which links genetic concepts to real-world applications (SALTISE). In addition to his teaching, Karl is actively involved in the professional development of faculty and promotes the integration of digital technologies and the principles of universal design for learning (UDL) to meet the diverse needs of students. His work reflects a deep commitment to student success, educational innovation, and the educational community."
                },
                "kevinCasey": 
                {
                  "name": "Kevin F. Casey - Professor of Psychology",
                  "bio": "Kevin F. Casey is a professor of psychology at Vanier College in Montreal, where he teaches a variety of courses, including Introduction to Psychology, Cultural, Social, and Sports Psychology, as well as Psychological Disorders and Sexuality. He is known for his interactive teaching approach and accessible teaching style, which enable him to create a supportive learning environment. Mr. Casey also co-moderated a panel discussion at the 2023 SALTISE conference at Concordia University, highlighting the use of blended learning to improve student outcomes. Before joining Vanier, he taught at McGill University, where he was also recognized for his commitment to academic excellence. His dedication to education makes him a valued member of the academic community at both Vanier College and McGill."
                }
              },
              "johnAbbott": 
              {
                "ivoPendev": 
                {
                  "name": "Ivo Pendev - Mathematics Professor",
                  "bio": "Ivo Pendev has been a mathematics professor at John Abbott College since 2015. He is particularly interested in the integration of technology and artificial intelligence in higher education. He is part of the team developing an intelligent tutoring system for differential calculus designed to support students’ learning in mathematics. He is also contributing to a research project on the ethical and responsible use of artificial intelligence in educational settings. Recognized for his commitment to teaching and his interest in educational innovation, he is actively involved in developing educational practices that promote the thoughtful and critical integration of digital tools and artificial intelligence in middle school settings."
                },
                "ferencBalogh": 
                {
                  "name": "Dr. Ferenc Balogh - Professor of Mathematics",
                  "bio": "Dr. Ferenc Balogh has been a professor of mathematics in the Department of Mathematics at John Abbott College since 2013. Specializing in mathematics and mathematical physics, he is the author of numerous scientific articles as well as a monograph on mathematical physics. In addition to his research activities, he is actively involved in student and academic life at the college. In particular, he co-organizes the JAC Math Explorations Club, an extracurricular activity designed to expose students to stimulating and accessible mathematical ideas beyond the traditional classroom setting. Dr. Balogh is also involved in the development of an intelligent tutoring system for differential calculus, helping to create innovative educational tools to support student success in mathematics."
                },
                "michaelLautman": 
                {
                  "name": "Michael Lautman - Chemistry Professor",
                  "bio": "Michael Lautman has been a chemistry professor at John Abbott College since 2006, where he teaches a variety of chemistry-related courses. He earned a Bachelor of Science degree from Concordia University in 2000 and continued his studies at the University of Montreal, where he earned a master’s degree in organic and materials chemistry in 2002, followed by a Ph.D. in 2007. Before joining John Abbott, he taught at Dawson College and the University of Montreal. He draws on his expertise in organic chemistry and materials science to encourage students to explore sustainable solutions in chemistry. In addition to his teaching activities, his research focuses on the public perception of science, and he is actively developing projects aimed at promoting environmental sustainability on campus. Throughout his career, he has contributed to the integration of science education with an emphasis on practical applications, seeking to deepen students' understanding of chemistry and its impact on everyday life."
                }
              }
            },


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
                },
                "ahmedHassan": 
                {
                  "name": "Ahmed Hassan",
                  "bio": "I am a Computer Science graduate from John Abbott College. The EduQlasse projects I worked on include Earth Codex and PIM Calculus. I specialize primarily in game development, but I also have experience developing websites, applications, and securing networks. My hobbies include cooking, learning languages, and traveling."
                },
                "abdelmouhcineMessaad": 
                {
                  "name": "Abdelmouhcine Messaad",
                  "bio": "I am a Computer Science student with a strong interest in artificial intelligence. At EDUQLASSE, I have worked on The Integrity Rut Game and the Student Voice Game, and co-created Opération Diplôme with my team, the winning project of the 2026 Game Jam."
                },
                "muyangYu": 
                {
                  "name": "Muyang Yu",
                  "bio": "Programmer of ECQ-Physics. When she’s not coding, she draws."
                },
                "arielleWong": 
                {
                  "name": "Arielle Wong",
                  "bio": "Undergraduate student at Concordia in Computer Science and Computation Arts. Currently working as a graphic designer and illustrator for EduQlasse in the Ai Ethics project, Earth Codex and Classroom Management Simulator. Likes to draw silly cats in her free time."
                },
                "alhasanShnoot": 
                {
                  "name": "Alhasan Shnoot",
                  "bio": "Joint major in Physics and Computer Science at McGill University. At EDUQLASSE, I build interactive simulations and AI-driven educational tools for teaching electromagnetism. My work spans web development, AI integration, and simulation design. I'm particularly drawn to simulations, backend development, and game dev. In my spare time, I go on climbing adventures outdoors and make music."
                },
                "brandonBoros": 
                {
                  "name": "Brandon Boros",
                  "bio": "Hello! My name is Brandon and I'm currently studying Computer Science at Concordia. For EduQlasse, I am currently working on ECQ Earth Codex and PIM Calculus Project. I enjoy reading, hiking, and making cool stuff in my free time."
                },
                "mayaSabrineKabli": 
                {
                  "name": "Maya Sabrine Kabli",
                  "bio": "Although I am currently pursuing a Bachelor’s degree in Secondary French Education, I have been drawing in my free time since childhood. This passion eventually led me to become one of the artists working on the EDUQLASSE project!"
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

            "collaborators":
            {
              "title": "Collaborateurs",

              "udem":
              {
                "neerushaGokool":
                {
                  "name": "Neerusha Gokool - Responsable du projet",
                  "bio": "Neerusha est professeure à l'Université de Montréal, au sein de la Faculté des sciences de l'éducation, dans le Département de psychopédagogie et d'andragogie. Elle y est spécialisée dans les interventions en psychologie de l'éducation en enseignement supérieur, avec un intérêt particulier pour les pratiques enseignantes au niveau collégial (CEGEP). Elle dirige également EDUQLASSE, un laboratoire de recherche dont les travaux portent sur la conception, l'implantation et l'évaluation de stratégies éducatives en gestion de classe, l'intégration des technologies numériques et les pratiques d'enseignement inclusives. Ses recherches s'appuient sur des cadres théoriques robustes, notamment la conception universelle de l'apprentissage (CUA), les approches socioconstructivistes, la pédagogie culturellement pertinente et les perspectives inclusives en éducation. Ses travaux se concentrent sur l'analyse et la transformation des pratiques d'enseignement afin de soutenir la diversité des profils d'étudiants et de favoriser des environnements d'apprentissage équitables, accessibles et significatifs. Elle s'intéresse particulièrement aux questions liées à la diversité, à l'engagement des étudiants et à la relation entre la gestion de classe, les pratiques d'enseignement et l'utilisation des technologies numériques. Adoptant une approche de recherche axée sur la pratique, elle privilégie les stratégies collaboratives et pragmatiques qui permettent de combler le fossé entre les connaissances scientifiques et les pratiques éducatives. À cet égard, elle travaille en étroite collaboration avec le corps professoral pour co-développer des stratégies d'enseignement fondées sur des données probantes, contribuant ainsi à la réussite, à la rétention et au bien-être des étudiants en enseignement supérieur."
                }
              },
              "champlain":
              {
                "saraHashem":
                {
                  "name": "Sara Hashem - Coresponsable du projet",
                  "bio": "Sara Hashem est actuellement conseillère pédagogique au Collège Champlain Saint-Lambert, où elle soutient le développement de pratiques éducatives innovantes et la mise en œuvre d'initiatives qui favorisent l'apprentissage, la collaboration et la recherche en enseignement supérieur. Elle est également cofondatrice du groupe de recherche Artful Inquiry à l'Université McGill, un collectif de recherche dédié à l'avancement de la recherche en éducation et à la promotion d'approches artistiques et interdisciplinaires de la pédagogie. Son travail se concentre sur la conception d'expériences d'apprentissage qui créent des liens significatifs entre la théorie, la pratique et la création, tout en explorant les frontières des connaissances pédagogiques contemporaines. En 2023, elle a codirigé l'anthologie *Making Connections in and Through Arts-Based Educational Research*. Elle travaille actuellement sur un nouveau livre explorant les concepts de réémergence en éducation et la transformation des pratiques d'enseignement dans des contextes éducatifs en constante évolution."
                },
                "aïchaMein":
                {
                  "name": "Aïcha Mein, MA - Professeure au Centre d'aide en français / Centre d'écriture",
                  "bio": "Aïcha Mein, MA, est professeure au Centre d'écriture (Writing Center) du Collège Champlain Saint-Lambert. Elle détient un baccalauréat en littérature anglaise et en études africaines, ainsi qu'une maîtrise en anglais, avec une spécialisation en littérature coloniale et postcoloniale. Elle cocoordonne le département d'anglais et a auparavant coordonné le Centre d'écriture, dont elle a repensé l'espace, mis à jour la plateforme en ligne et favorisé un environnement plus inclusif. Passionnée par l'équité, la diversité et l'inclusion (EDI), Aïcha intègre ces valeurs dans son travail, notamment par le biais de formations sur l'EDI destinées aux tuteurs et d'ateliers avec le Centre d'accès des étudiants. Elle a également participé à un projet pilote pancanadien avec le Centre mondial du pluralisme et continue de contribuer aux initiatives d'EDI du Collège, notamment en siégeant au comité du plan stratégique. Aïcha développe actuellement de nouvelles ressources pour le Centre d'écriture, y compris des modules dirigés par des tuteurs et un volet en ligne adapté au rythme de chacun, afin de rendre le soutien à l'écriture plus accessible et engageant."
                },
                "bahmanZamani":
                {
                  "name": "Bahman Zamani, PhD - Professeur d'informatique",
                  "bio": "Bahman Zamani, PhD, est professeur d'informatique au Collège Champlain Saint-Lambert. Il détient un doctorat en informatique de l'Université Concordia à Montréal, QC, Canada, où il a mené des recherches sur la vérification des langages de modélisation. Il est actuellement membre du corps professoral à temps plein dans le Département de technologie informatique du Collège et enseigne également à temps partiel à l'Université Concordia. Dr. Zamani était auparavant professeur agrégé et est maintenant professeur agrégé émérite au Département de génie logiciel de l'Université d'Isfahan à Isfahan, en Iran. Son principal domaine de recherche est l'ingénierie logicielle dirigée par les modèles (IDM), et il est le fondateur du groupe de recherche en IDM de l'Université d'Isfahan."
                },
                "catherineNygren":
                {
                  "name": "Catherine Nygren, PhD - Enseignante au département d'anglais",
                  "bio": "Catherine Nygren, PhD, enseigne au département d'anglais du Collège Champlain Saint-Lambert, se spécialisant dans la fiction spéculative et la rhétorique de l'écriture scientifique. En plus de ses responsabilités d'enseignement, elle travaille auprès d'étudiants ayant des besoins particuliers au Centre d'accès des étudiants, offrant un soutien académique personnalisé pour les aider à surmonter les obstacles et à développer des stratégies de réussite universitaire. Au cours de ses études doctorales, Catherine a utilisé des modèles informatiques pour explorer et analyser les récits de voyage du XVIIIe siècle. Cette approche interdisciplinaire lui a permis de combiner l'analyse littéraire avec des techniques informatiques, offrant ainsi une perspective nouvelle sur les textes historiques."
                },
                "jennyDoubt":
                {
                  "name": "Jenny Doubt",
                  "bio": ""
                },
                "paulCatanu":
                {
                  "name": "Paul Catanu, PhD - Professeur de sciences humaines",
                  "bio": "Paul Catanu est titulaire d'un doctorat et professeur de sciences humaines au Collège Champlain Saint-Lambert ; il enseigne également à temps partiel à l'Université Concordia. Il a obtenu son doctorat à l'Université de Montréal. Ses recherches portent sur l'intégration critique de l'IA — plus précisément des modèles statistiques automatisés — en milieu scolaire. Tout en reconnaissant l'importance d'initier les étudiants aux nouveaux modèles linguistiques à grande échelle, il insiste sur la nécessité de le faire dans des cadres éthiques qui priorisent la confidentialité des données et préservent l'authenticité de la voix des étudiants. Paul est l'auteur de deux livres : *Heidegger’s Nietzsche: Being and Becoming* (Montréal, 2010) et *Critical Thinking, Worldviews, and Logic* (Montréal, 2016)."
                }
              },
              "dawson":
              {
                "rafaelScapin":
                {
                  "name": "Dr. Rafael Scapin - Coordinateur de la technologie éducative",
                  "bio": "Le Dr. Rafael Scapin détient un baccalauréat en physique théorique ainsi qu'une maîtrise et un doctorat en physique numérique de l'Université de São Paulo (Brésil). Il est impliqué dans l'apprentissage en ligne (e-learning) et les technologies éducatives depuis 1996. Depuis son arrivée au Canada en 2008, il a travaillé pour différentes entreprises du domaine du e-learning (notamment comme consultant pour le gouvernement canadien), menant divers projets impliquant la conception de cours et l'utilisation des technologies dans un environnement pédagogique. En 2008, il est devenu coordinateur de la technologie éducative au Collège Dawson à Montréal, où il est actuellement employé, travaillant avec les nouvelles technologies pour l'éducation. Il publie également un bulletin d'information hebdomadaire sur les TI et l'éducation appelé DawsonITE. Il est l'un des cofondateurs de l'Association pour le développement des technologies en éducation (ADTE), un organisme à but non lucratif voué à favoriser le développement de la technologie éducative au Québec. Le Dr. Scapin a également fait partie du comité organisateur de la Conférence canadienne Moodle en 2013 à Vancouver, en 2015 à Montréal et en 2018 à Toronto. Il a aussi organisé l'événement TEDx Dawson College en mai 2013. Ses compétences linguistiques comprennent l'anglais, le français, l'espagnol, le portugais, l'italien et l'espéranto."
                },
                "azraKhan":
                {
                  "name": "Azra Khan - Conseillère pédagogique",
                  "bio": "Azra Khan est conseillère pédagogique au Bureau de développement pédagogique du Collège Dawson. Elle a travaillé sur l'intégration professionnelle des nouveaux membres du corps professoral, le plan de réussite, et l'inclusion des communautés culturelles et des personnes ayant des besoins particuliers, ainsi que sur les objectifs de planification stratégique. Elle assure la liaison entre Dawson et le réseau par le biais de l'AQPC, Performa, SALTISE et d'autres initiatives du réseau collégial. Elle détient une maîtrise en développement urbain et a enseigné au niveau postsecondaire à Concordia, à McGill et au Royaume-Uni avant de se joindre à Dawson en 2011."
                }
              },
              "vanier":
              {
                "elenaNaidenova":
                {
                  "name": "Elena Naidenova - Professeure et coordinatrice de mathématiques",
                  "bio": "Elena Naidenova est professeure de mathématiques et coordinatrice du département de mathématiques au Collège Vanier à Montréal. Diplômée de l'Académie des sciences de Moldavie, elle possède une vaste expérience de l'enseignement postsecondaire, notamment dans les domaines du calcul différentiel et intégral et des équations différentielles. Elle est reconnue pour son approche pédagogique rigoureuse et structurée, centrée sur des explications claires et une progression méthodique des apprentissages. Elle se distingue par sa capacité à rendre les concepts complexes accessibles tout en maintenant des normes académiques élevées. Ses évaluations, bien que rigoureuses, sont perçues comme équitables et encouragent une préparation approfondie, la pratique active d'exercices et une réelle compréhension des concepts. En tant que coordinatrice, elle joue un rôle central dans la planification des cours, l'organisation départementale et l'intégration des innovations pédagogiques. Elle participe activement à des initiatives visant à moderniser l'enseignement des mathématiques, notamment par l'utilisation des technologies. Elle collabore actuellement avec Neerusha B. Gokool à la conception d'un agent conversationnel (chatbot) intelligent destiné à soutenir les étudiants en calcul différentiel et intégral. Ce projet d'IA vise à fournir un soutien éducatif accessible et interactif, permettant aux étudiants de renforcer leurs apprentissages en dehors de la classe traditionnelle. Toute la carrière d'Elena Naidenova témoigne d'un engagement soutenu envers la réussite des étudiants, l'innovation en enseignement des mathématiques et l'accessibilité des connaissances scientifiques au niveau collégial."
                },
                "karlLaroche":
                {
                  "name": "Karl Laroche - Enseignant en biologie",
                  "bio": "Karl Laroche, enseignant en biologie au Collège Vanier, est reconnu pour sa contribution exceptionnelle à l'enseignement et ses approches pédagogiques innovantes. En 2022, il a reçu le Prix d'excellence en enseignement du Collège Vanier, soulignant son engagement envers une éducation de qualité (Education News Canada). Il avait auparavant été honoré en 2017 par le prix de l'innovateur SALTISE pour ses innovations pédagogiques (SALTISE). Karl se démarque par sa capacité à engager les étudiants grâce à l'apprentissage actif, des projets pratiques et des stratégies inclusives. Un exemple notable est un laboratoire de terrain qu'il a conçu, dans lequel les étudiants analysent l'impact d'une plante envahissante dans le parc de la Côte-de-Liesse, ce qui leur permet de collecter et d'interpréter des données du monde réel. Il a également participé au développement d'activités d'apprentissage actif, comme l'étude de cas « Génétique : les modes de transmission héréditaire », qui relie les concepts génétiques à des applications concrètes (SALTISE). En plus de son enseignement, Karl est activement impliqué dans le développement professionnel du corps professoral et promeut l'intégration des technologies numériques et les principes de la conception universelle de l'apprentissage (CUA) pour répondre aux besoins diversifiés des étudiants. Son travail témoigne d'un profond engagement envers la réussite des étudiants, l'innovation pédagogique et la communauté éducative."
                },
                "kevinCasey":
                {
                  "name": "Kevin F. Casey - Professeur de psychologie",
                  "bio": "Kevin F. Casey est professeur de psychologie au Collège Vanier à Montréal, où il enseigne une variété de cours, notamment l'introduction à la psychologie, la psychologie culturelle, sociale et sportive, ainsi que les troubles psychologiques et la sexualité. Il est reconnu pour son approche pédagogique interactive et son style d'enseignement accessible, qui lui permettent de créer un environnement d'apprentissage favorable. M. Casey a également coanimé une table ronde lors de la conférence SALTISE 2023 à l'Université Concordia, mettant en lumière l'utilisation de l'apprentissage hybride pour améliorer les résultats des étudiants. Avant de se joindre à Vanier, il a enseigné à l'Université McGill, où il a également été reconnu pour son engagement envers l'excellence académique. Son dévouement envers l'éducation en fait un membre précieux de la communauté académique du Collège Vanier et de l'Université McGill."
                }
              },
              "johnAbbott":
              {
                "ivoPendev":
                {
                  "name": "Ivo Pendev - Professeur de mathématiques",
                  "bio": "Ivo Pendev est professeur de mathématiques au Collège John Abbott depuis 2015. Il s'intéresse particulièrement à l'intégration des technologies et de l'intelligence artificielle en enseignement supérieur. Il fait partie de l'équipe qui développe un système de tutorat intelligent pour le calcul différentiel, conçu pour soutenir l'apprentissage des étudiants en mathématiques. Il contribue également à un projet de recherche sur l'utilisation éthique et responsable de l'intelligence artificielle en milieu éducatif. Reconnu pour son engagement envers l'enseignement et son intérêt pour l'innovation pédagogique, il participe activement au développement de pratiques éducatives qui favorisent l'intégration réfléchie et critique des outils numériques et de l'intelligence artificielle dans les milieux d'enseignement secondaire et collégial."
                },
                "ferencBalogh":
                {
                  "name": "Dr. Ferenc Balogh - Professeur de mathématiques",
                  "bio": "Le Dr. Ferenc Balogh est professeur de mathématiques au Département de mathématiques du Collège John Abbott depuis 2013. Spécialisé en mathématiques et en physique mathématique, il est l'auteur de nombreux articles scientifiques ainsi que d'une monographie sur la physique mathématique. En plus de ses activités de recherche, il est activement impliqué dans la vie étudiante et académique du collège. Il coorganise notamment le club d'explorations mathématiques du JAC, une activité parascolaire conçue pour exposer les étudiants à des idées mathématiques stimulantes et accessibles au-delà du cadre de la classe traditionnelle. Le Dr. Balogh participe également au développement d'un système de tutorat intelligent pour le calcul différentiel, contribuant ainsi à la création d'outils pédagogiques innovants pour soutenir la réussite des étudiants en mathématiques."
                },
                "michaelLautman":
                {
                  "name": "Michael Lautman - Professeur de chimie",
                  "bio": "Michael Lautman est professeur de chimie au Collège John Abbott depuis 2006, où il enseigne une variété de cours liés à la chimie. Il a obtenu un baccalauréat ès sciences de l'Université Concordia en 2000 et a poursuivi ses études à l'Université de Montréal, où il a obtenu une maîtrise en chimie organique et des matériaux en 2002, suivie d'un doctorat en 2007. Avant de se joindre à John Abbott, il a enseigné au Collège Dawson et à l'Université de Montréal. Il s'appuie sur son expertise en chimie organique et en science des matériaux pour encourager les étudiants à explorer des solutions durables en chimie. En plus de ses activités d'enseignement, ses recherches portent sur la perception publique de la science, et il développe activement des projets visant à promouvoir la durabilité environnementale sur le campus. Tout au long de sa carrière, il a contribué à l'intégration de l'enseignement des sciences en mettant l'accent sur les applications pratiques, cherchant à approfondir la compréhension qu'ont les étudiants de la chimie et de son impact sur la vie quotidienne."
                }
              }
            },

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
                },

                "ahmedHassan": 
                {
                  "name": "Ahmed Hassan",
                  "bio": "Je suis diplômé en informatique du Collège John Abbott. Les projets d'EduQlasse sur lesquels j'ai travaillé incluent Earth Codex et PIM Calculus. Je me spécialise principalement dans le développement de jeux, mais j'ai aussi de l'expérience dans le développement de sites web, d'applications et la sécurisation de réseaux. Mes passe-temps incluent la cuisine, l'apprentissage des langues et les voyages."
                },
                "abdelmouhcineMessaad": 
                {
                  "name": "Abdelmouhcine Messaad",
                  "bio": "Je suis un étudiant en informatique avec un fort intérêt pour l'intelligence artificielle. Chez EDUQLASSE, j'ai travaillé sur The Integrity Rut Game et Student Voice Game, et j'ai co-créé Opération Diplôme avec mon équipe, le projet gagnant du Game Jam 2026."
                },
                "muyangYu": 
                {
                  "name": "Muyang Yu",
                  "bio": "Programmeuse de ECQ-Physics. Lorsqu'elle ne code pas, elle dessine."
                },
                "arielleWong": 
                {
                  "name": "Arielle Wong",
                  "bio": "Étudiante de premier cycle à Concordia en informatique et arts numériques (Computation Arts). Je travaille actuellement comme graphiste et illustratrice pour EduQlasse dans le cadre du projet Ai Ethics, de Earth Codex et de Classroom Management Simulator. Elle aime dessiner des chats rigolos pendant son temps libre."
                },
                "alhasanShnoot": 
                {
                  "name": "Alhasan Shnoot",
                  "bio": "Double majeure en physique et informatique à l'Université McGill. Chez EDUQLASSE, je conçois des simulations interactives et des outils pédagogiques basés sur l'IA pour l'enseignement de l'électromagnétisme. Mon travail englobe le développement web, l'intégration de l'IA et la conception de simulations. Je suis particulièrement attiré par les simulations, le développement backend et le développement de jeux. Pendant mon temps libre, je pars à l'aventure pour faire de l'escalade en plein air et je compose de la musique."
                },
                "brandonBoros": 
                {
                  "name": "Brandon Boros",
                  "bio": "Bonjour ! Je m'appelle Brandon et j'étudie actuellement l'informatique à Concordia. Pour EduQlasse, je travaille présentement sur les projets ECQ Earth Codex et PIM Calculus. J'aime lire, faire de la randonnée et créer des trucs cool pendant mon temps libre."
                },
                "mayaSabrineKabli": 
                {
                  "name": "Maya Sabrine Kabli",
                  "bio": "Bien que je poursuive actuellement un baccalauréat en enseignement du français au secondaire, je dessine pendant mon temps libre depuis mon enfance. Cette passion m'a finalement amenée à devenir l'une des artistes travaillant sur le projet EDUQLASSE !"
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