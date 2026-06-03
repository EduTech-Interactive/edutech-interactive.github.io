import { Link } from "@tanstack/react-router";
import { Button } from "../shared/ui/button";
import { useTranslation } from "react-i18next";
import homepageBg from "/img/homepage/homepage.webp";

const Homepage = () => {
    const { t } = useTranslation();
    return (
        <>
            <section 
            className="relative w-full min-h-[450px] md:min-h-[500px] lg:min-h-[550px] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden px-6 sm:px-12 md:px-20 lg:px-32 py-16 text-white"
            style={{ backgroundImage: `url('${homepageBg}')` }}
            >
                {/*left side has content, right side has empty space to show the background.*/}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl mx-auto items-center z-10">
                    
                    {/*left content*/}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
                    
                    {/*eduqlasse brand*/}
                    <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase drop-shadow-md">
                        {t("homepage.brand")}
                    </h1>
                    
                    {/*subtitle*/}
                    <p className="font-body font-medium text-lg sm:text-xl md:text-2xl text-edu-slate-200 leading-relaxed max-w-2xl drop-shadow-sm">
                        {t("homepage.brandSubtitle")}
                    </p>
                    
                    {/*btns*/}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 w-full sm:w-auto justify-center lg:justify-start">
                        
                        <Link to="/projects">
                            <Button>
                                {t("homepage.projectsBtn")}
                            </Button>
                        </Link>

                        <Link to="/partners">
                            <Button 
                            bgClassName="bg-edu-purple-400"
                            hoverBgClassName="hover:bg-edu-purple-600"
                            borderClassName="border border-edu-purple-200/20"
                            >
                            {t("homepage.collabBtn")}
                            </Button>
                        </Link>
                        
                    </div>
                </div>

                {/*right column empty*/}
                <div className="hidden lg:block lg:col-span-5 h-full pointer-events-none" aria-hidden="true" />
                    
                </div>
            </section>
        </>
  );
};

export default Homepage;