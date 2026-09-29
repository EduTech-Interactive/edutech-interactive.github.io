import React from 'react';
import { Button } from '../shared/ui/button';
import { useTranslation } from 'react-i18next';

interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  abstract: string;
  link: string;
}

export const Publications: React.FC = () => {
  const { t } = useTranslation();

  const publications: Publication[] = [
    {
      id: '1',
      title: t('publications.items.pub1.title'),
      authors: t('publications.items.pub1.authors'),
      journal: t('publications.items.pub1.journal'),
      year: t('publications.items.pub1.year'),
      abstract: t('publications.items.pub1.abstract'),
      link: 'https://example.com/publication-1',
    },
    {
      id: '2',
      title: t('publications.items.pub2.title'),
      authors: t('publications.items.pub2.authors'),
      journal: t('publications.items.pub2.journal'),
      year: t('publications.items.pub2.year'),
      abstract: t('publications.items.pub2.abstract'),
      link: 'https://example.com/publication-2',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 font-nav text-edu-navy-600">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-edu-navy-600 mb-4 tracking-tight">
          {t('publications.header.title')}
        </h1>
        <p className="text-lg md:text-xl text-edu-slate-600 font-body max-w-2xl mx-auto">
          {t('publications.header.subtitle')}
        </p>
        <div className="w-24 h-1 bg-edu-blue-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {publications.map((pub, idx) => (
          <article 
            key={idx}
            className="bg-white rounded-2xl shadow-md border border-edu-slate-200/80 p-6 md:p-8 transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3 text-sm flex-wrap">
                <span className="px-3 py-1 rounded-full bg-edu-blue-200 text-edu-blue-600 font-semibold text-xs">
                  {pub.journal}
                </span>
                <span className="text-edu-slate-600">{pub.year}</span>
                <span className="text-edu-slate-400">•</span>
                <span className="text-edu-slate-600 italic">
                  {t('publications.labels.authors', { authors: pub.authors })}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-edu-navy-600 tracking-tight">
                {pub.title}
              </h2>

              <p className="text-edu-slate-600 font-body text-base leading-relaxed">
                {pub.abstract}
              </p>
            </div>

            {/* Action Button */}
            <div className="self-start md:self-center shrink-0">
              <a 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  bgClassName="bg-edu-blue-400"
                  hoverBgClassName="hover:bg-edu-blue-600"
                >
                  {t('publications.buttons.viewPaper')}
                </Button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Publications;