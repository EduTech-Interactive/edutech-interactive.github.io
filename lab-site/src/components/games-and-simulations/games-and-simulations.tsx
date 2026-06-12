import { useTranslation } from "react-i18next";
import heroBg from "/img/games-and-simulations/hero.webp";
import { GameCard } from "./game-card";
import placeholderImgSrc from "/img/shared/placeholder.png"

const GamesAndSimulations = () => {
    const { t } = useTranslation();

    const GAME_DATA: GameData[] = 
    [
      {
        jsonKey: "gamesAndSimulations.gameData.bioBot",
        imgSrc: placeholderImgSrc,
        href: ""
      },
      {
        jsonKey: "gamesAndSimulations.gameData.cmSim",
        imgSrc: placeholderImgSrc,
        href: ""
      },
      {
        jsonKey: "gamesAndSimulations.gameData.divideAndConquer",
        imgSrc: placeholderImgSrc,
        href: ""
      },
      {
        jsonKey: "gamesAndSimulations.gameData.geneDoom",
        imgSrc: placeholderImgSrc,
        href: ""
      },
      {
        jsonKey: "gamesAndSimulations.gameData.earthCodex",
        imgSrc: placeholderImgSrc,
        href: ""
      },
      {
        jsonKey: "gamesAndSimulations.gameData.microMedics",
        imgSrc: placeholderImgSrc,
        href: ""
      },
      {
        jsonKey: "gamesAndSimulations.gameData.vectorShock",
        imgSrc: placeholderImgSrc,
        href: ""
      },
      {
        jsonKey: "gamesAndSimulations.gameData.crisprSim",
        imgSrc: placeholderImgSrc,
        href: ""
      }
    ];

    return (
        <>
          {/*hero section*/}
            <section 
            className="relative w-full min-h-[450px] md:min-h-[300px] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden px-6 sm:px-12 md:px-20 lg:px-32 py-16 text-white"
            style={{ backgroundImage: `url('${heroBg}')` }}
            >
                {/*left side has content, right side has empty space to show the background.*/}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl mx-auto items-center z-10">
                    
                    {/*left content*/}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
                    
                    {/*eduqlasse brand*/}
                    <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase drop-shadow-md">
                        {t("gamesAndSimulations.title")}
                    </h1>
                    
                    {/*subtitle*/}
                    <p className="font-body font-medium text-lg sm:text-xl md:text-2xl text-edu-slate-200 leading-relaxed max-w-2xl drop-shadow-sm">
                        {t("gamesAndSimulations.subtitle")}
                    </p>
                </div>

                {/*right column empty*/}
                <div className="hidden lg:block lg:col-span-5 h-full pointer-events-none" aria-hidden="true" />
                    
                </div>
            </section>

            <div className="px-10 lg:px-40 py-20 grid gap-10 grid-cols-1 lg:grid-cols-6 font-body">
              {GAME_DATA.map((d, idx) => (
                <div
                  key={idx}
                  className={idx < 2 ? "lg:col-span-3" : "lg:col-span-2"}
                >
                  <GameCard
                    imageSrc={d.imgSrc}
                    title={
                      t(`${d.jsonKey}.title`) +
                      " - " +
                      t(`${d.jsonKey}.author`)
                    }
                    description={t(`${d.jsonKey}.description`)}
                    credits={t(`${d.jsonKey}.citation`)}
                    buttonText={t(`gamesAndSimulations.gameBtnText`)}
                    href="/"
                  />
                </div>
              ))}
            </div>
        </>
  );
};

export default GamesAndSimulations;

interface GameData
{
  jsonKey: string,
  imgSrc: string,
  href: string
}