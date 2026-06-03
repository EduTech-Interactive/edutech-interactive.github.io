import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next"
import { Button } from "../shared/ui/button";

const Partners = () => {
  const {t} = useTranslation();

  const IMG_DATA = 
  [
    { src: "img/partners/pim.webp", link: "https://pim.quebec/en/" }
    //todo ECQ logo
  ]
  

  return(
    <section 
      className="bg-edu-blue-400 relative w-full py-12 px-6 md:px-40 flex flex-col items-center justify-center min-h-[300px]">
      
      {/*header container*/}
      <div className="flex items-center w-full max-w-6xl mb-8">
        <div className="grow h-[2px] bg-white"></div>
        <h2 className="px-6 text-3xl font-bold text-white font-heading tracking-wide whitespace-nowrap">
          {t("partners.fundingSection.title")}
        </h2>
        <div className="grow h-[2px] bg-white"></div>
      </div>

      {/*desc*/}
      <p className="text-lg md:text-xl text-white font-medium mb-6 flex items-center gap-2 flex-wrap justify-center">
        <span>{t("partners.fundingSection.desc")}</span>
      </p>

      {/*supported by*/}
      <p className="text-lg md:text-2xl text-white font-bold mb-6 flex items-center gap-2 flex-wrap justify-center">
        <span>{t("partners.fundingSection.subtitle")}</span>
      </p>

      {/*image links*/}
      {IMG_DATA.map( (d, idx) => 
        {
          return <>
            <Link key={idx} to={d.link}>
              <img src={d.src} alt="funding source"></img>
            </Link>
          </>
        } )
      }

      <div className="m-16"></div>
      
      
      {/*header container*/}
      <div className="flex items-center w-full max-w-6xl mb-8">
        <div className="grow h-[2px] bg-white"></div>
        <h2 className="px-6 text-3xl font-bold text-white font-heading tracking-wide whitespace-nowrap">
          {t("partners.collabSection.title")}
        </h2>
        <div className="grow h-[2px] bg-white"></div>
      </div>

      {/*btns*/}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 w-full sm:w-auto justify-center lg:justify-start items-center">
          
        <Link to="/projects">
            <Button>
                {t("partners.collabSection.proposeBtn")}
            </Button>
        </Link>

        <Link to="/collaborate">
            <Button 
            bgClassName="bg-edu-purple-400"
            hoverBgClassName="hover:bg-edu-purple-600"
            borderClassName="border border-edu-purple-200/20"
            >
            {t("partners.collabSection.joinBtn")}
            </Button>
        </Link>
      </div>
      
    </section>
  )
}
export default Partners