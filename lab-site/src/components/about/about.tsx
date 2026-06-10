import { useTranslation } from "react-i18next";
import ImageCard from "../shared/ui/service-card";

export const About = () => {

  const { t } = useTranslation();

  const services = [
    {
      imageSrc: 'img/what-we-do/classroom-management.webp',
      title: t("whatWeDo.classroomCardTitle"),
      description: t("whatWeDo.classroomCardDesc"),
    },
    {
      imageSrc: 'img/what-we-do/inclusive-practices.webp',
      title: t("whatWeDo.inclusiveCardTitle"),
      description: t("whatWeDo.inclusiveCardDesc")
    },
    {
      imageSrc: 'img/what-we-do/ai-tools.webp',
      title: t("whatWeDo.toolsCardTitle"),
      description: t("whatWeDo.toolsCardDesc"),
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
              {t("whatWeDo.title")}
            </h2>
            <div className="flex-1 h-px bg-edu-blue-600 opacity-40"></div>
          </div>

          {/*team info*/}
          <p className="text-lg md:text-xl text-edu-blue-600 font-medium mb-6 flex items-center gap-2 flex-wrap justify-center text-center">
            <span>{t("meetTheTeam.desc")}</span>
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
              {t("meetTheTeam.title")}
            </h2>
            <div className="flex-1 h-px bg-edu-blue-600 opacity-40"></div>
          </div>
    
          {/*team info*/}
          <p className="text-lg md:text-xl text-edu-blue-600 font-medium mb-6 flex items-center gap-2 flex-wrap justify-center">
            <span>{t("meetTheTeam.stats")}</span>
          </p>
    
          {/*team img*/}
          <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-md mb-6">
          </div>
    
          <div className='m-5'></div>
        </section>
    </>
  );
};