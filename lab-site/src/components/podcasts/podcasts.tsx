import { useTranslation } from "react-i18next";

//hero assets
import podcastBg from "/img/podcasts/podcast-hero.webp";
import micIcon from "/img/podcasts/mic-icon.webp";
import neerushaSignature from "/img/podcasts/neerusha-signature.webp";
import { Scale, Blend, Lightbulb, UsersRound, BrainCircuit } from "lucide-react";
import WaveformLine from "./waveform-line";


const Podcasts = () => {
  const { t } = useTranslation();

  return (
    <>
      {/*hero section*/}
      <section className="relative w-full overflow-hidden select-none">
        {/*hero image*/}
        <img
          src={podcastBg}
          alt=""
          className="w-full h-auto min-h-[340px] md:min-h-[440px] object-cover block"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-0 w-full max-w-[1400px]">
            {/* Main Left-Aligned Text Column */}
            <div className="max-w-[80%] md:max-w-[80%] lg:max-w-[80%] flex flex-col justify-center">
              
              {/* Logo & Brand Title Header Layout */}
              <div className="flex items-center gap-4 md:gap-6 mb-2 md:mb-4 mt-[-70px]">
                {/* Left Side: Mic Logo Icon */}
                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36">
                  <img 
                    src={micIcon} 
                    alt="Voices Mic Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Right Side: Main Stacked Titles */}
                <div className="flex flex-col">
                  <h1 className="font-heading font-black tracking-tight leading-none text-edu-navy-600 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
                    {t("podcasts.heroSection.title")}
                  </h1>
                  <h2 className="font-heading font-bold tracking-tight leading-none text-edu-purple-600 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-1 md:mt-2">
                    {t("podcasts.heroSection.title2")}
                  </h2>
                </div>
              </div>

              {/* Divider Line & Subtitle Statement */}
              <div className="relative pl-4 md:pl-6 border-l-2 border-edu-edu-blue-400">
                <p className="font-body italic font-medium text-edu-navy-600 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  {t("podcasts.heroSection.subtitle")}
                </p>
              </div>

              {/* Footer / Hosting Credentials Signature Info */}
              <div className="flex flex-col gap-1 md:gap-2 pt-2 border-t border-edu-slate-200/60">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-heading font-bold text-edu-purple-600 text-xs sm:text-sm md:text-base lg:text-lg">
                    {t("podcasts.heroSection.by")}
                  </span>
                  
                  {/* Neerusha Handwritten Signature Image */}
                  <img 
                    src={neerushaSignature} 
                    alt="Dr. Neerusha Gokool Signature" 
                    className="h-7 sm:h-9 md:h-12 lg:h-14 object-contain"
                  />
                </div>

                {/* Professional Roles Description */}
                <p className="font-body font-semibold text-edu-navy-600 text-[10px] sm:text-xs md:text-sm lg:text-base">
                  {t("podcasts.heroSection.neerushaInfo")}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/*themes section*/}
      <div className="w-full py-3 px-4 sm:px-6 md:px-8 -mt-6 sm:-mt-10 md:-mt-20 relative z-10">
        <div className="max-w-[1400px] mx-auto rounded-2xl md:rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row bg-edu-navy-600 text-white">
          
          {/* Left Block: Main Theme Headline with AI Brain Icon */}
          <div className="flex items-center gap-4 p-4 md:p-6 lg:p-8 lg:w-[42%] border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-edu-purple-400 p-2 flex items-center justify-center bg-edu-navy-600">
              <BrainCircuit className="w-[50px] h-[50px] text-cyan-300"></BrainCircuit>
            </div>
            <div>
              <span className="block font-heading font-bold tracking-wider text-cyan-300 mb-1">
                {t("podcasts.featuredTheme.tag")}
              </span>
              <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-heading font-bold leading-snug text-white">
                {t("podcasts.featuredTheme.title")}
              </h3>
            </div>
          </div>

          {/* Center Block: Explainer & 4 Pillars with separate individual icons */}
          <div className="flex flex-col justify-center p-4 md:p-6 lg:p-8 lg:w-[40%] bg-edu-navy-600/50">
            <p className="text-xs sm:text-sm text-edu-slate-200 mb-4 font-body leading-relaxed">
              {t("podcasts.featuredTheme.description")}
            </p>
            
            {/* The 4 pillars individual grid layout */}
            <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/15">
              {[
                { icon: <Blend></Blend>, label: t("podcasts.featuredTheme.pillars.ethical") },
                { icon: <Scale></Scale>, label: t("podcasts.featuredTheme.pillars.integrity") },
                { icon: <Lightbulb></Lightbulb>, label: t("podcasts.featuredTheme.pillars.innovation") },
                { icon: <UsersRound></UsersRound>, label: t("podcasts.featuredTheme.pillars.inclusion") }
              ].map((pillar, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 mb-1 flex items-center justify-center">
                    {/* <img src={pillar.icon} alt={pillar.label} className="w-full h-full object-contain" /> */}
                    {pillar.icon}
                  </div>
                  <span className="text-[9px] sm:text-[10px] md:text-xs text-edu-slate-400 font-medium whitespace-normal sm:whitespace-nowrap">
                    {pillar.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Teal Block: Handwritten/Script Slogan Accent */}
          <div className="lg:w-[18%] bg-gradient-to-br from-teal-500 to-emerald-600 p-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative">
            <div className="font-serif italic tracking-wide text-white space-y-1 text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              <p className="opacity-95">{t("podcasts.featuredTheme.slogan.voices")}</p>
              <p className="opacity-95">{t("podcasts.featuredTheme.slogan.experiences")}</p>
              <p className="opacity-100 font-bold text-edu-gold-200">{t("podcasts.featuredTheme.slogan.impact")}</p>
            </div>
            {/* Artistic paint/brush stroke line at bottom of the slogan */}
            <div className="w-24 h-1 bg-edu-purple-600 mt-2 rounded-full opacity-60"></div>
          </div>

        </div>
      </div>

      <WaveformLine text={t("podcasts.latestEpisodes")}></WaveformLine>
    </>
  );
};

export default Podcasts;