import { CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '../shared/ui/button';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

const ResearchApproach = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto p-6 font-body text-edu-blue-600">
      {/*title*/}
      <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 tracking-wide text-center">
        {t("researchApproach.title")}
      </h2>

      {/*main info box*/}
      <div className="w-full bg-[#f4f7ff] border border-edu-blue-200 rounded-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8 md:divide-x md:divide-[#cbdcfd] relative mb-8 shadow-sm">
        
        {/*box left column*/}
        <div className="space-y-4 flex flex-col justify-center">
          {/*item 1: process flow*/}
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-10 h-10 text-edu-blue-400 shrink-0" fill="currentColor" stroke="white" strokeWidth={2} />
            <div className="flex items-center flex-wrap gap-1 text-sm md:text-base font-medium">
              <span>{t("researchApproach.items.process.step1")}</span>
              <ChevronRight className="w-4 h-4 text-gray-400 mx-0.5" />
              <span>{t("researchApproach.items.process.step2")}</span>
              <ChevronRight className="w-4 h-4 text-gray-400 mx-0.5" />
              <span>{t("researchApproach.items.process.step3")}</span>
            </div>
          </div>

          {/*item 2: interdisciplinaty collaboration*/}
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-10 h-10  text-edu-blue-400  shrink-0" fill="currentColor" stroke="white" strokeWidth={2} />
            <span className="text-sm md:text-base font-medium">{t("researchApproach.items.collaboration")}</span>
          </div>
        </div>

        {/*right column*/}
        <div className="space-y-4 flex flex-col justify-center md:pl-8 pt-4 md:pt-0 border-t md:border-t-0 border-[#cbdcfd]">
          {/*item 3: interdisciplinary*/}
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-10 h-10  text-edu-blue-400  shrink-0" fill="currentColor" stroke="white" strokeWidth={2} />
            <div className="flex items-center flex-wrap gap-2 text-sm md:text-base font-medium">
              <span>{t("researchApproach.items.methodology.type")}</span>
              <span className="text-gray-300">|</span>
              <span>{t("researchApproach.items.methodology.setting")}</span>
            </div>
          </div>
        </div>
      </div>

      {/*btn link*/}
      <div className="z-10 -mt-4">
        <Link to="/knowledge-hub">
          <Button>
            {t("researchApproach.hubBtnText")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ResearchApproach;