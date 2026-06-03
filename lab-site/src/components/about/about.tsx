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
    <section className="bg-white px-6 py-16 md:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <h2 className="font-heading mb-12 text-center text-3xl sm:text-4xl">
          {t("whatWeDo.title")}
        </h2>
        
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
  );
};