import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next"
import { Button } from "../shared/ui/button";

const Collaborate = () => {
  const {t} = useTranslation();

  return(
    <section 
      className="bg-edu-blue-400 relative w-full py-12 px-6 flex flex-col items-center justify-center min-h-[300px]">
      {/*header container*/}
      <div className="flex items-center w-full max-w-6xl mb-8">
        <div className="grow h-[2px] bg-white"></div>
        <h2 className="px-6 text-3xl font-bold text-white font-heading tracking-wide whitespace-nowrap">
          {t("collaborate.title")}
        </h2>
        <div className="grow h-[2px] bg-white"></div>
      </div>

      {/*btns*/}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 w-full sm:w-auto justify-center lg:justify-start">
          
        <Link to="/projects">
            <Button>
                {t("collaborate.proposeBtn")}
            </Button>
        </Link>

        <Link to="/collaborate">
            <Button 
            bgClassName="bg-edu-purple-400"
            hoverBgClassName="hover:bg-edu-purple-600"
            borderClassName="border border-edu-purple-200/20"
            >
            {t("collaborate.joinBtn")}
            </Button>
        </Link>
          
      </div>
    </section>
  )
}
export default Collaborate