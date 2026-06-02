import React from 'react';
import { BookOpen, Podcast, Folder } from 'lucide-react';
import IconCard, { type IconCardProps } from '../shared/ui/icon-card';
import { useTranslation } from 'react-i18next';

const KnowledgeHub: React.FC = () => {
  const { t } = useTranslation();

  const hubItems: IconCardProps[] = [
    {
      icon: BookOpen,
      title: t("knowledgeHub.cards.blog.title"),
      description: t("knowledgeHub.cards.blog.description"),
    },
    {
      icon: Podcast,
      title: t("knowledgeHub.cards.podcast.title"),
      description: t("knowledgeHub.cards.podcast.description"),
    },
    {
      icon: Folder,
      title: t("knowledgeHub.cards.resources.title"),
      description: t("knowledgeHub.cards.resources.description"),
    },
  ];

  return (
    <section 
      className="relative w-full py-12 px-6 bg-cover bg-center flex flex-col items-center justify-center min-h-[300px]"
      style={{ backgroundImage: "url('img/knowledge-hub/knowledge-hub.webp')" }}
    >
      {/*header container*/}
      <div className="flex items-center w-full max-w-6xl mb-8">
        <div className="grow h-[2px] bg-white"></div>
        <h2 className="px-6 text-3xl font-bold text-white font-heading tracking-wide whitespace-nowrap">
          {t("knowledgeHub.title")}
        </h2>
        <div className="grow h-[2px] bg-white"></div>
      </div>

      {/*cards*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl justify-items-center">
        {hubItems.map((item, idx) => (
          <IconCard
            key={idx}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default KnowledgeHub;