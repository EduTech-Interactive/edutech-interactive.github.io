import { useTranslation } from "react-i18next";
import ImageCard from "../shared/ui/service-card";
import { TeamMember } from "./team-member-info";
import placeholderImg from "/img/shared/placeholder.png";
import React from "react";

export const About = () => {

  const { t } = useTranslation();

  //top: services
  const services = [
    {
      imageSrc: 'img/about/classroom-management.webp',
      title: t("about.classroomCardTitle"),
      description: t("about.classroomCardDesc"),
    },
    {
      imageSrc: 'img/about/inclusive-practices.webp',
      title: t("about.inclusiveCardTitle"),
      description: t("about.inclusiveCardDesc")
    },
    {
      imageSrc: 'img/about/ai-tools.webp',
      title: t("about.toolsCardTitle"),
      description: t("about.toolsCardDesc"),
    },
  ];

  //collaborators
  const udeMcollaborators = 
  [
    {
      key: "neerushaGokool",
      name: t("about.collaborators.udem.neerushaGokool.name"),
      description: t("about.collaborators.udem.neerushaGokool.bio"),
      imgSrc: placeholderImg
    }
  ];

  const champlainCollaborators = 
  [
    {
      key: "saraHashem",
      name: t("about.collaborators.champlain.saraHashem.name"),
      description: t("about.collaborators.champlain.saraHashem.bio"),
      imgSrc: placeholderImg
    },
    {
      key: "aïchaMein",
      name: t("about.collaborators.champlain.aïchaMein.name"),
      description: t("about.collaborators.champlain.aïchaMein.bio"),
      imgSrc: placeholderImg
    },
    {
      key: "bahmanZamani",
      name: t("about.collaborators.champlain.bahmanZamani.name"),
      description: t("about.collaborators.champlain.bahmanZamani.bio"),
      imgSrc: placeholderImg
    },
    {
      key: "catherineNygren",
      name: t("about.collaborators.champlain.catherineNygren.name"),
      description: t("about.collaborators.champlain.catherineNygren.bio"),
      imgSrc: placeholderImg
    },
    {
      key: "jennyDoubt",
      name: t("about.collaborators.champlain.jennyDoubt.name"),
      description: t("about.collaborators.champlain.jennyDoubt.bio"),
      imgSrc: placeholderImg
    },
    {
      key: "paulCatanu",
      name: t("about.collaborators.champlain.paulCatanu.name"),
      description: t("about.collaborators.champlain.paulCatanu.bio"),
      imgSrc: "img/about/collaborators/paul.webp"
    }
  ];

  const dawsonCollaborators = 
  [
    {
      key: "rafaelScapin",
      name: t("about.collaborators.dawson.rafaelScapin.name"),
      description: t("about.collaborators.dawson.rafaelScapin.bio"),
      imgSrc: placeholderImg
    },
    {
      key: "azraKhan",
      name: t("about.collaborators.dawson.azraKhan.name"),
      description: t("about.collaborators.dawson.azraKhan.bio"),
      imgSrc: placeholderImg
    },
  ]

  const vanierCollaborators = 
  [
    {
      key: "elenaNaidenova",
      name: t("about.collaborators.vanier.elenaNaidenova.name"),
      description: t("about.collaborators.vanier.elenaNaidenova.bio"),
      imgSrc: placeholderImg
    },
    {
      key: "karlLaroche",
      name: t("about.collaborators.vanier.karlLaroche.name"),
      description: t("about.collaborators.vanier.karlLaroche.bio"),
      imgSrc: placeholderImg
    },
    {
      key: "kevinCasey",
      name: t("about.collaborators.vanier.kevinCasey.name"),
      description: t("about.collaborators.vanier.kevinCasey.bio"),
      imgSrc: placeholderImg
    },
  ]

  const johnAbbottCollaborators = 
  [
    // John Abbott College
    {
      key: "ivoPendev",
      name: t("about.collaborators.johnAbbott.ivoPendev.name"),
      description: t("about.collaborators.johnAbbott.ivoPendev.bio"),
      imgSrc: placeholderImg
    },
    {
      key: "ferencBalogh",
      name: t("about.collaborators.johnAbbott.ferencBalogh.name"),
      description: t("about.collaborators.johnAbbott.ferencBalogh.bio"),
      imgSrc: "img/about/collaborators/ferenc.webp"
    },
    {
      key: "michaelLautman",
      name: t("about.collaborators.johnAbbott.michaelLautman.name"),
      description: t("about.collaborators.johnAbbott.michaelLautman.bio"),
      imgSrc: placeholderImg
    }
  ];

  //regular team members
  const teamMembers = [
    {
      key: "jimmyLe",
      name: t("about.meetTheTeam.teamMembers.jimmyLe.name"),
      description: t("about.meetTheTeam.teamMembers.jimmyLe.bio"),
      imgSrc: "img/about/team/jimmy.webp",
    },
    {
      key: "kellyAnnThuot",
      name: t("about.meetTheTeam.teamMembers.kellyAnnThuot.name"),
      description: t("about.meetTheTeam.teamMembers.kellyAnnThuot.bio"),
      imgSrc: "img/about/team/kellyann.webp",
    },
    {
      key: "adamLaurin",
      name: t("about.meetTheTeam.teamMembers.adamLaurin.name"),
      description: t("about.meetTheTeam.teamMembers.adamLaurin.bio"),
      imgSrc: "img/about/team/adam.webp",
    },
    {
      key: "thomasScripcariu",
      name: t("about.meetTheTeam.teamMembers.thomasScripcariu.name"),
      description: t("about.meetTheTeam.teamMembers.thomasScripcariu.bio"),
      imgSrc: "img/about/team/thomas.webp",
    },
    {
      key: "sylvainMiklohoun",
      name: t("about.meetTheTeam.teamMembers.sylvainMiklohoun.name"),
      description: t("about.meetTheTeam.teamMembers.sylvainMiklohoun.bio"),
      imgSrc: "img/about/team/sylvain.webp",
    },
    {
      key: "tarynBeaupre",
      name: t("about.meetTheTeam.teamMembers.tarynBeaupre.name"),
      description: t("about.meetTheTeam.teamMembers.tarynBeaupre.bio"),
      imgSrc: "img/about/team/taryn.webp",
    },
    {
      key: "sophieDomine",
      name: t("about.meetTheTeam.teamMembers.sophieDomine.name"),
      description: t("about.meetTheTeam.teamMembers.sophieDomine.bio"),
      imgSrc: "img/about/team/sophie.webp",
    },
    {
      key: "aliAwada",
      name: t("about.meetTheTeam.teamMembers.aliAwada.name"),
      description: t("about.meetTheTeam.teamMembers.aliAwada.bio"),
      imgSrc: "img/about/team/ali.webp",
    },
    {
      key: "roustomAbdeldjalelCherir",
      name: t("about.meetTheTeam.teamMembers.roustomAbdeldjalelCherir.name"),
      description: t("about.meetTheTeam.teamMembers.roustomAbdeldjalelCherir.bio"),
      imgSrc: "img/about/team/roustom.webp",
    },
    {
      key: "hyKhangTran",
      name: t("about.meetTheTeam.teamMembers.hyKhangTran.name"),
      description: t("about.meetTheTeam.teamMembers.hyKhangTran.bio"),
      imgSrc: "img/about/team/hykhang.webp",
    },
    {
      key: "wanXinZhang",
      name: t("about.meetTheTeam.teamMembers.wanXinZhang.name"),
      description: t("about.meetTheTeam.teamMembers.wanXinZhang.bio"),
      imgSrc: "img/about/team/wanxin.webp",
    },
    {
      key: "ahmedHassan",
      name: t("about.meetTheTeam.teamMembers.ahmedHassan.name"),
      description: t("about.meetTheTeam.teamMembers.ahmedHassan.bio"),
      imgSrc: "img/about/team/ahmed.webp"
    },
    {
      key: "abdelmouhcineMessaad",
      name: t("about.meetTheTeam.teamMembers.abdelmouhcineMessaad.name"),
      description: t("about.meetTheTeam.teamMembers.abdelmouhcineMessaad.bio"),
      imgSrc: "img/about/team/abdel.webp"
    },
    {
      key: "muyangYu",
      name: t("about.meetTheTeam.teamMembers.muyangYu.name"),
      description: t("about.meetTheTeam.teamMembers.muyangYu.bio"),
      imgSrc: "img/about/team/muyang.webp"
    },
    {
      key: "arielleWong",
      name: t("about.meetTheTeam.teamMembers.arielleWong.name"),
      description: t("about.meetTheTeam.teamMembers.arielleWong.bio"),
      imgSrc: "img/about/team/arielle.webp"
    },
    {
      key: "alhasanShnoot",
      name: t("about.meetTheTeam.teamMembers.alhasanShnoot.name"),
      description: t("about.meetTheTeam.teamMembers.alhasanShnoot.bio"),
      imgSrc: "img/about/team/alhasan.webp"
    },
    {
      key: "brandonBoros",
      name: t("about.meetTheTeam.teamMembers.brandonBoros.name"),
      description: t("about.meetTheTeam.teamMembers.brandonBoros.bio"),
      imgSrc: "img/about/team/brandon.webp"
    },
    {
      key: "mayaSabrineKabli",
      name: t("about.meetTheTeam.teamMembers.mayaSabrineKabli.name"),
      description: t("about.meetTheTeam.teamMembers.mayaSabrineKabli.bio"),
      imgSrc: "img/about/team/maya.webp"
    }
  ];

return (
    <>
      <section className="bg-white px-6 py-4 md:px-12">
        <div className="mx-auto max-w-6xl">
            {/*header*/}
            <div className="flex items-center w-full mb-3">
              <div className="flex-1 h-px bg-edu-blue-600 opacity-40"></div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-edu-blue-600 px-6 whitespace-nowrap">
                {t("about.title")}
              </h2>
              <div className="flex-1 h-px bg-edu-blue-600 opacity-40"></div>
            </div>

            {/*team info*/}
            <p className="text-lg md:text-xl text-edu-blue-600 font-medium mb-6 flex items-center gap-2 flex-wrap justify-center text-center">
              <span>{t("about.meetTheTeam.desc")}</span>
            </p>
          
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ImageCard
                key={index}
                imageSrc={service.imageSrc}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>


      {/*collaborators*/}
      <section className="font-body flex flex-col items-center w-full max-w-5xl mx-auto px-4 py-8">
      
        {/*header*/}
        <div className="flex items-center w-full mb-3">
          <div className="flex-1 h-px bg-edu-blue-600 opacity-40"></div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-edu-blue-600 px-6 whitespace-nowrap">
            {t("about.collaborators.title")}
          </h2>
          <div className="flex-1 h-px bg-edu-blue-600 opacity-40"></div>
        </div>


        <h3 className="text-3xl font-bold font-heading my-10">Université de Montréal</h3>
        {udeMcollaborators.map((member, index) => (
          <React.Fragment key={member.key}>
          <TeamMember
            name={member.name}
            description={member.description}
            imgSrc={member.imgSrc}
            flipped={index % 2 === 1}
          />
            <div className="mb-10"></div>
          </React.Fragment>
        ))}

        <h3 className="text-3xl font-bold font-heading my-10">Champlain St-Lambert College</h3>
        {champlainCollaborators.map((member, index) => (
          <React.Fragment key={member.key}>
          <TeamMember
            name={member.name}
            description={member.description}
            imgSrc={member.imgSrc}
            flipped={index % 2 === 1}
          />
            <div className="mb-10"></div>
          </React.Fragment>
        ))}

        <h3 className="text-3xl font-bold font-heading my-10">Dawson College</h3>
        {dawsonCollaborators.map((member, index) => (
          <React.Fragment key={member.key}>
          <TeamMember
            name={member.name}
            description={member.description}
            imgSrc={member.imgSrc}
            flipped={index % 2 === 1}
          />
            <div className="mb-10"></div>
          </React.Fragment>
        ))}

        <h3 className="text-3xl font-bold font-heading my-10">Vanier College</h3>
        {vanierCollaborators.map((member, index) => (
          <React.Fragment key={member.key}>
          <TeamMember
            name={member.name}
            description={member.description}
            imgSrc={member.imgSrc}
            flipped={index % 2 === 1}
          />
            <div className="mb-10"></div>
          </React.Fragment>
        ))}

        <h3 className="text-3xl font-bold font-heading my-10">John Abbott</h3>
        {johnAbbottCollaborators.map((member, index) => (
          <React.Fragment key={member.key}>
          <TeamMember
            name={member.name}
            description={member.description}
            imgSrc={member.imgSrc}
            flipped={index % 2 === 1}
          />
            <div className="mb-10"></div>
          </React.Fragment>
        ))}
      </section>


      {/*team*/}
      <section className="font-body flex flex-col items-center w-full max-w-5xl mx-auto px-4 py-8">
      
        {/*header*/}
        <div className="flex items-center w-full mb-3">
          <div className="flex-1 h-px bg-edu-blue-600 opacity-40"></div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-edu-blue-600 px-6 whitespace-nowrap">
            {t("about.meetTheTeam.title")}
          </h2>
          <div className="flex-1 h-px bg-edu-blue-600 opacity-40"></div>
        </div>
  
        {/*team info*/}
        <p className="text-lg md:text-xl text-edu-blue-600 font-medium mb-6 flex items-center gap-2 flex-wrap justify-center">
          <span>{t("about.meetTheTeam.stats")}</span>
        </p>
  
        {/*team img*/}
        <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-md mb-6">
        </div>

        {teamMembers.map((member, index) => (
          <React.Fragment key={member.key}>
          <TeamMember
            name={member.name}
            description={member.description}
            imgSrc={member.imgSrc}
            flipped={index % 2 === 1}
          />
            <div className="mb-10"></div>
          </React.Fragment>
        ))}
      </section>
    </>
  );
};