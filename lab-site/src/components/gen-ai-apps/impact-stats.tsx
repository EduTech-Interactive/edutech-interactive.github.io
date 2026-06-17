import { useTranslation } from 'react-i18next';
import { Users, GraduationCap, Building2, BookOpen, DollarSign } from 'lucide-react';

const ImpactStats = () => {
  const { t } = useTranslation();

  // Configuration array for unique styles and icons mapping to translation keys
  const statsConfig = [
    {
      id: 1,
      key: "studentsSupported",
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-edu-blue-600" />,
      textColor: "text-[#5B42B9]",
    },
    {
      id: 2,
      key: "educatorsEngaged",
      icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-[#1E9E74]" />,
      textColor: "text-[#1E9E74]",
    },
    {
      id: 3,
      key: "institutionsInvolved",
      icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 text-edu-blue-400" />,
      textColor: "text-[#2563EB]",
    },
    {
      id: 4,
      key: "researchProjects",
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-edu-gold-400" />,
      textColor: "text-[#1E293B]", 
    },
    {
      id: 5,
      key: "fundingReceived",
      icon: (
        <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#A855F7]">
          <DollarSign className="w-6 h-6 text-white" />
        </div>
      ),
      textColor: "text-[#5B42B9]",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto bg-[#F8F9FE] py-8 px-4 rounded-2xl font-body shadow">
      <h2 className="text-center text-2xl font-heading font-bold mb-6 text-gray-800">
        {t('genAiApps.impact.title')}
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-y-8 md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {statsConfig.map((stat) => (
          <div 
            key={stat.id} 
            className="flex flex-col items-center justify-center text-center px-4"
          >
            <div className="flex items-center justify-center h-14 mb-2">
              {stat.icon}
            </div>
            <span className={`text-2xl md:text-3xl font-bold tracking-tight ${stat.textColor}`}>
              {t(`genAiApps.impact.metrics.${stat.key}.value`)}
            </span>
            <span className="text-xs md:text-sm text-gray-600 font-medium mt-1">
              {t(`genAiApps.impact.metrics.${stat.key}.label`)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStats;