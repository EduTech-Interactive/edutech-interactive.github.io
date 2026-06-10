import { useTranslation } from "react-i18next";
import ImageCard from "../shared/ui/service-card";
import { TeamMember } from "./team-member-info";

export const About = () => {

  const { t } = useTranslation();

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
            <>
            <TeamMember
              key={member.key}
              name={member.name}
              description={member.description}
              imgSrc={member.imgSrc}
              flipped={index % 2 === 1}
            />
              <div className="mb-10"></div>
            </>
          ))}
        </section>
    </>
  );
};