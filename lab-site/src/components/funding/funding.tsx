import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next"

const Funding = () => {
  const { t } = useTranslation();

  const IMG_DATA = 
  [
    { src: "img/funding/pim.webp", link: "https://pim.quebec/en/" }
    //todo ECQ logo
  ]
  
  return (
    <section className="font-body flex flex-col items-center w-full max-w-5xl mx-auto px-4 py-8">
      
      {/*header*/}
      <div className="flex items-center w-full mb-3">
        <div className="flex-1 h-px bg-edu-blue-600 opacity-40"></div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-edu-blue-600 px-6 whitespace-nowrap">
          {t("funding.title")}
        </h2>
        <div className="flex-1 h-px bg-edu-blue-600 opacity-40"></div>
      </div>

      {/*desc*/}
      <p className="text-lg md:text-xl text-edu-blue-600 font-medium mb-6 flex items-center gap-2 flex-wrap justify-center">
        <span>{t("funding.desc")}</span>
      </p>

      {/*supported by*/}
      <p className="text-lg md:text-2xl text-edu-blue-600 font-bold mb-6 flex items-center gap-2 flex-wrap justify-center">
        <span>{t("funding.subtitle")}</span>
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

    </section>
  )
}

export default Funding