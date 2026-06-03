import { BookOpen, Podcast, Folder, Image } from 'lucide-react';
import IconCard, { type IconCardProps } from '../shared/ui/icon-card';
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';

interface IconCardWithLink extends IconCardProps 
{
  link: string
}

const Resources = () => {
  const { t } = useTranslation();

  const hubItems: IconCardWithLink[] = [
    {
      icon: BookOpen,
      title: t("resources.cards.blog.title"),
      description: t("resources.cards.blog.description"),
      link: "/blog"
    },
    {
      icon: Podcast,
      title: t("resources.cards.podcast.title"),
      description: t("resources.cards.podcast.description"),
      link: "podcast"
    },
    {
      icon: Folder,
      title: t("resources.cards.resources.title"),
      description: t("resources.cards.resources.description"),
      link: ""
    },
    {
      icon: Image,
      title: t("resources.cards.gallery.title"),
      description: t("resources.cards.gallery.description"),
      link: ""
    },
  ];

  return (
    <section 
      className="relative w-full py-12 px-6 bg-cover bg-center flex flex-col items-center justify-center min-h-[400px]"
      style={{ backgroundImage: "url('img/knowledge-hub/knowledge-hub.webp')" }}
    >
      {/*header container*/}
      <div className="flex justify-center items-center w-full max-w-6xl mb-8">
        <div className="grow h-[2px] bg-white"></div>
        <h2 className="px-6 text-3xl font-bold text-white font-heading tracking-wide whitespace-nowrap">
          {t("resources.title")}
        </h2>
        <div className="grow h-[2px] bg-white"></div>
      </div>

      {/*cards*/}
      <div className='w-full flex justify-center'>
        <div className="w-[90%] flex flex-col md:flex-row justify-between">
          {hubItems.map((item, idx) => (
            <Link key={idx} className='w-full mb-1 md:mb-0 md:w-[20vw] h-full' to={item.link}>
              <IconCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className='m-4'></div>
    </section>
  );
};

export default Resources;