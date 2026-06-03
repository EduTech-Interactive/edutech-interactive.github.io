import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { Button } from '../shared/ui/button';
const MeetTheTeam = () => {
  const { t } = useTranslation();

  return (
    <section className="font-body flex flex-col items-center w-full max-w-5xl mx-auto px-4 py-8">
      
      {/*header*/}
      <div className="flex items-center w-full mb-3">
        <div className="flex-1 h-px bg-edu-blue-600 opacity-40"></div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-edu-blue-600 px-6 whitespace-nowrap">
          {t("meetTheTeam.title")}
        </h2>
        <div className="flex-1 h-px bg-edu-blue-600 opacity-40"></div>
      </div>

      {/*team info*/}
      <p className="text-lg md:text-xl text-edu-blue-600 font-medium mb-6 flex items-center gap-2 flex-wrap justify-center">
        <span>{t("meetTheTeam.stats")}</span>
      </p>

      {/*team img*/}
      <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-md mb-6">
        <img 
          src="img/shared/placeholder.png" 
          alt="EDUQLASSE Team" 
          className="w-full h-auto object-cover block"
        />
      </div>

      {/*team info*/}
      <p className="text-lg md:text-xl text-edu-blue-600 font-medium mb-6 flex items-center gap-2 flex-wrap justify-center">
        <span>{t("meetTheTeam.desc")}</span>
      </p>

      {/*button*/}
      <div className="mt-2">
        <Link to="/partners">
          <Button>
            {t("meetTheTeam.learnMoreBtn")}
          </Button>
        </Link>
      </div>

      <div className='m-5'></div>
    </section>
  );
};

export default MeetTheTeam;