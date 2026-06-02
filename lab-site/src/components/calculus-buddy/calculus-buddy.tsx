import { Link } from "@tanstack/react-router";
import { Button } from "../shared/ui/button";
import { useTranslation } from "react-i18next";

const CalculusBuddy = () => {
  const { t } = useTranslation();
  return (
    <>
      <section 
        className="relative w-full min-h-[400px] md:h-[500px] flex items-center bg-cover bg-center bg-no-repeat px-6 md:px-16 lg:px-32"
        style={{ backgroundImage: `url('img/calculus-buddy/laptop-bg.webp')` }}
      >
        {/*text content*/}
        <div className="text-white z-10 space-y-4 md:space-y-6">
          
          {/*heading*/}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            {t("calculusBuddy.heading")}
          </h2>
          
          {/*line*/}
          <div className="w-full h-[2px] bg-white/30 rounded" />
          
          {/*desc*/}
          <p className="font-body text-lg md:text-xl lg:text-2xl text-blue-100/90 leading-relaxed">
            {t("calculusBuddy.desc")}
          </p>
          
          {/*btn*/}
          <div className="pt-2">
          <Link to="/projects">
            <Button>
              {t("calculusBuddy.btnText")}
            </Button>
          </Link>
          </div>

        </div>

        {/*improves mobile readability*/}
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/40 to-transparent md:hidden pointer-events-none" />
      </section>
    </>
  );
};

export default CalculusBuddy;