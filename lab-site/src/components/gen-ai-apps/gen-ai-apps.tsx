import { useTranslation } from "react-i18next";

// This image asset contains the whole visual layout (white background + curve + team)
import heroImg from "/img/gen-ai-apps/ai-hero.webp"; 
import neerushaSrc from "/img/shared/placeholder.png";

const GenAiApps = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-20 lg:py-24">
      {/* Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0 h-full w-full hidden md:block">
        <img 
          src={heroImg} 
          alt="AI Projects Banner" 
          className="h-full w-full object-cover object-center "
        />
      </div>

      {/* Foreground Content Wrapper */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Aligns text perfectly over the white area of the image */}
          <div className="flex flex-col space-y-6 max-w-xl">
            <div>
              <h1 className="font-header text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
                {t("genAiApps.heroSection.title")}
              </h1>
              <h2 className="font-header mt-4 text-xl sm:text-2xl font-semibold text-edu-purple-400 leading-snug">
                {t("genAiApps.heroSection.subtitle")}
              </h2>
            </div>
            
            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed">
              {t("genAiApps.heroSection.description")}
            </p>

            {/* Leadership Profile Section */}
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-100/50">
              {/* Profile Avatar Asset */}
              <img 
                src={neerushaSrc} 
                alt={t("genAiApps.heroSection.leadership.name")}
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <div className="flex flex-col">
                <span className="font-body text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  {t("genAiApps.heroSection.leadership.label")}
                </span>
                <span className="font-header text-base font-bold text-edu-purple-600">
                  {t("genAiApps.heroSection.leadership.name")}
                </span>
                <span className="font-body text-sm text-slate-500">
                  {t("genAiApps.heroSection.leadership.title")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Empty on desktop to let the image's team graphics show through */}
          <div className="hidden md:block aria-hidden" />

        </div>
      </div>
    </section>
  );
};

export default GenAiApps;