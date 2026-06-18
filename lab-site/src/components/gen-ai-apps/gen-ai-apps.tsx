import { useTranslation } from "react-i18next";

// This image asset contains the whole visual layout (white background + curve + team)
import heroImg from "/img/gen-ai-apps/ai-hero.webp"; 
import neerushaSrc from "/img/shared/placeholder.png";

import calcBuddyIcon from "/img/gen-ai-apps/cb-logo.webp";
import teachersCraftIcon from "/img/gen-ai-apps/tc-logo.webp";
import aiCompass from "/img/gen-ai-apps/ai-compass-icon.webp";
import EcosystemCard from "./ecosystem-card";
import { Blocks, BookCheck, BookOpen, BrainCircuit, BrickWall, ChartNetwork, Eye, GraduationCap, Network, PersonStanding, Puzzle, Terminal, University } from "lucide-react";
import ImpactStats from "./impact-stats";
import CollaboratorsSection from "./collaborators-section";
import FooterSection from "./footer-section";

const GenAiApps = () => {
  const { t } = useTranslation();

  // Fetch the localized feature arrays
  const calcFeatures = t("genAiApps.ecosystem.apps.calculusBuddy.features", { returnObjects: true }) as string[];
  const calcIcons = [BookOpen, BrickWall, Puzzle, ChartNetwork, PersonStanding]

  const teacherFeatures = t("genAiApps.ecosystem.apps.teachersCraft.features", { returnObjects: true }) as string[];
  const teacherIcons = [GraduationCap, BookCheck, Blocks, University, PersonStanding]

  const compassFeatures = t("genAiApps.ecosystem.apps.aiCompass.features", { returnObjects: true }) as string[];
  const compassIcons = [BrainCircuit, Network, Puzzle, Terminal, Eye]

  return (
    <>
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

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-3xl text-center font-bold mt-10 mb-12">
              {t("genAiApps.ecosystem.title")}
            </h1>

            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Calculus Buddy - Blue Theme */}
                <EcosystemCard
                  imageSrc={calcBuddyIcon}
                  imageAlt={t("genAiApps.ecosystem.apps.calculusBuddy.title")}
                  title={t("genAiApps.ecosystem.apps.calculusBuddy.title")}
                  subtitle={t("genAiApps.ecosystem.apps.calculusBuddy.subtitle")}
                  description={t("genAiApps.ecosystem.apps.calculusBuddy.description")}
                  textClass="text-edu-blue-600"
                  bgClass="bg-edu-blue-600"
                  buttonText={t("genAiApps.ecosystem.apps.calculusBuddy.ctaText")}
                  buttonTo="https://calculus-buddy.intg.eduqlasse.com/"
                  features={calcFeatures.map((text, idx) => ({
                    icon: calcIcons[idx],
                    text,
                }))}              />

                {/* Teacher's Craft - Green Theme */}
                <EcosystemCard
                  imageSrc={teachersCraftIcon}
                  imageAlt={t("genAiApps.ecosystem.apps.teachersCraft.title")}
                  title={t("genAiApps.ecosystem.apps.teachersCraft.title")}
                  subtitle={t("genAiApps.ecosystem.apps.teachersCraft.subtitle")}
                  description={t("genAiApps.ecosystem.apps.teachersCraft.description")}
                  textClass="text-emerald-600"
                  bgClass="bg-emerald-600"  
                  buttonText={t("genAiApps.ecosystem.apps.teachersCraft.ctaText")}
                  buttonTo="https://teacher-craft.intg.eduqlasse.com/"
                  features={teacherFeatures.map((text, idx) => ({
                    icon: teacherIcons[idx],
                    text,
              }))}            />

                {/* AI Compass - Purple Theme */}
                <EcosystemCard
                  imageSrc={aiCompass}
                  imageAlt={t("genAiApps.ecosystem.apps.aiCompass.title")}
                  title={t("genAiApps.ecosystem.apps.aiCompass.title")}
                  subtitle={t("genAiApps.ecosystem.apps.aiCompass.subtitle")}
                  description={t("genAiApps.ecosystem.apps.aiCompass.description")}
                  textClass="text-edu-purple-600"
                  bgClass="bg-edu-purple-600"
                  buttonText={t("genAiApps.ecosystem.apps.aiCompass.ctaText")}
                  buttonTo="https://www.eduqlasseonline.com/"
                  features={compassFeatures.map((text, idx) => ({
                    icon: compassIcons[idx],
                    text,
              }))}            />

              </div>
            </div>
          </section>

        <section className="">
          <ImpactStats></ImpactStats>
        </section>

        <div className="mt-20"></div>

        <section className="">
          <CollaboratorsSection></CollaboratorsSection>
        </section>

        <div className="mt-20"></div>

        <section className="">
            <FooterSection></FooterSection>
        </section>
    </>
  );
};

export default GenAiApps;