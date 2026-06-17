import { Link } from '@tanstack/react-router';
import { Handshake, Beaker, BookOpen, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FooterSection() {
  const { t } = useTranslation();

  const cards = [
    {
      title: t('genAiApps.callToAction.actions.partner'),
      icon: Handshake,
      to: '/partner',
    },
    {
      title: t('genAiApps.callToAction.actions.pilot'),
      icon: Beaker,
      to: '/pilot',
    },
    {
      title: t('genAiApps.callToAction.actions.explore'),
      icon: BookOpen,
      to: '/research',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#1e1145] via-[#161245] to-[#120e36] text-white px-6 py-12 md:px-12 md:py-14 flex flex-col lg:flex-row items-center justify-between gap-8 font-body">
      <div className="max-w-[2000px] mx-auto flex gap-20">
        {/* Left Text Column */}
        <div className="max-w-xl text-left">
          <h2 className="font-heading text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight mb-4">
            {t("genAiApps.callToAction.title")}
          </h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            {t('genAiApps.callToAction.description')}
          </p>
        </div>

        {/* Right Cards Column */}
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto justify-center">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link
                key={index}
                to={card.to}
                className="group relative flex items-center gap-4 p-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 w-full sm:w-[220px] h-[115px]"
              >
                {/* Icon */}
                <div className="flex-shrink-0 text-white/90">
                  <Icon size={44} strokeWidth={1.2} />
                </div>

                {/* Text Block */}
                <div className="flex flex-col justify-start h-full pt-1 relative w-full">
                  <span className="text-[15px] font-medium leading-snug tracking-wide text-white/90 max-w-[110px]">
                    {card.title}
                  </span>

                  {/* Arrow Pinned to Bottom-Left */}
                  <ArrowRight
                    size={24}
                    className="absolute bottom-1 left-0 text-white/80 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}