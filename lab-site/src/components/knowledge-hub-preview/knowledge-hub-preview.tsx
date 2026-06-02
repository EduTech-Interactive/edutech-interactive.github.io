import React from 'react';
import { BookOpen, Podcast, Folder, Image } from 'lucide-react';
import IconCard, { type IconCardProps } from '../shared/ui/icon-card';
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';
import { Button } from '../shared/ui/button';

const KnowledgeHubPreview: React.FC = () => {
  const { t } = useTranslation();

  const hubItems: IconCardProps[] = [
    {
      icon: BookOpen,
      title: t("knowledgeHubPreview.cards.blog.title"),
      description: t("knowledgeHubPreview.cards.blog.description"),
    },
    {
      icon: Podcast,
      title: t("knowledgeHubPreview.cards.podcast.title"),
      description: t("knowledgeHubPreview.cards.podcast.description"),
    },
    {
      icon: Folder,
      title: t("knowledgeHubPreview.cards.resources.title"),
      description: t("knowledgeHubPreview.cards.resources.description"),
    },
    {
      icon: Image,
      title: t("knowledgeHubPreview.cards.resources.title"),
      description: t("knowledgeHubPreview.cards.resources.description"),
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
          {t("knowledgeHubPreview.title")}
        </h2>
        <div className="grow h-[2px] bg-white"></div>
      </div>

      {/*cards*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl justify-items-center">
        {hubItems.map((item, idx) => (
          <IconCard
            key={idx}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className='m-4'></div>

      <Link to="/knowledge-hub">
        <Button>
          {t("researchApproach.hubBtnText")}
        </Button>
      </Link>
    </section>
  );
};

export default KnowledgeHubPreview;