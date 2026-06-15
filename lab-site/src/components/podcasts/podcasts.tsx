import { useTranslation } from "react-i18next";
import podcastBg from "/img/podcasts/podcast-hero.webp";
import micIcon from "/img/podcasts/mic-icon.webp";
import neerushaSignature from "/img/podcasts/neerusha-signature.webp";

const Podcasts = () => {
  const { t } = useTranslation();

  return (
    <>
    <section className="relative w-full overflow-hidden select-none">
      {/* Background Hero Image representing the layout structure in image_754080.jpg */}
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
            <div className="flex items-center gap-4 md:gap-6 mb-2 md:mb-4">
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
            <div className="relative pl-4 md:pl-6 border-l-2 border-edu-edu-blue-400 mb-6 md:mb-8">
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

    </>
  );
};

export default Podcasts;