import { useTranslation } from 'react-i18next';
import placeholderSrc from "/img/shared/placeholder.png";

export default function CollaboratorsSection() {
  const { t } = useTranslation();

  const teamMembers = t('genAiApps.collaborators.mathTeam.members', { returnObjects: true }) || [];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 bg-white font-body">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A1128] mb-3">
          {t('genAiApps.collaborators.title')}
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t('genAiApps.collaborators.description')}
        </p>
      </div>

      {/* Collaborators Main Card Container */}
      <div className="bg-[#FAF9FF] border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-stretch justify-between gap-8 shadow-sm">
        
        {/* Left Section: Math Team Intro */}
        <div className="flex flex-col justify-between flex-1 lg:max-w-[220px] lg:border-r border-gray-200 lg:pr-6">
          <div>
            <h3 className="text-xl font-bold font-heading text-edu-blue-400 leading-snug mb-3 whitespace-pre-line">
              {/* Using whitespace-pre-line in case your translation file features line breaks */}
              {t('genAiApps.collaborators.mathTeam.title')}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('genAiApps.collaborators.mathTeam.description')}
            </p>
          </div>
          <button className="flex items-center text-sm font-semibold text-edu-blue-400 hover:underline mt-6 lg:mt-0 transition-colors group">
            {t('genAiApps.collaborators.mathTeam.ctaText')}
            <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Center Section: Core Team Profiles via i18n array mapping */}
        <div className="flex flex-col md:flex-row flex-[3] items-center justify-center gap-8 lg:px-4">
          {Array.isArray(teamMembers) && teamMembers.map((member, index) => (
            <div key={index} className="flex items-center gap-4 w-full md:w-auto min-w-[200px]">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <img 
                  src={placeholderSrc} 
                  alt={member.name || "Team Member"} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-base font-heading font-bold text-[#0A1128] leading-tight">
                  {member.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {member.institution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Technical Development */}
        <div className="flex flex-col justify-between flex-1 lg:max-w-[240px] lg:border-l border-gray-200 lg:pl-6">
          <div className="flex flex-col gap-3">
            <svg 
              className="w-10 h-10 text-edu-purple-400" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div>
              <h2 className="text-xl font-heading font-bold text-edu-purple-400 mb-2">
                {t("genAiApps.collaborators.technicalDevelopment.title")}
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                {t("genAiApps.collaborators.technicalDevelopment.description")}
              </p>
            </div>
          </div>
          <button className="flex items-center text-xs font-bold text-edu-purple-400 hover:underline mt-6 lg:mt-0 transition-colors group">
            {t("genAiApps.collaborators.technicalDevelopment.ctaText")}
            <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}