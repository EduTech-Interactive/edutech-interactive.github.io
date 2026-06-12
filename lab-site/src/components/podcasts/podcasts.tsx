import conf4pPodcast from "/podcasts/Conf4P.mp3";
import TGDPodcast from "/podcasts/TGD.ogg";
import placeholderImgSrc from "/img/shared/placeholder.png"
import { Button } from "../shared/ui/button";
import { useState } from "react";
import { PodcastRow, type PodcastRowProps } from "./podcast";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";


const Podcasts = () => {

  const {t} = useTranslation();

  const [active, setActive] = useState("newest");

  const PODCAST_DATA: Array<PodcastRowProps> = 
  [
    {title: "Conf4P Podcast", src: conf4pPodcast},
    {title: "TGD Podcast", src: TGDPodcast}
  ]

  function shareClicked()
  {
    try 
    {
      navigator.clipboard.writeText(window.location.href);
      toast.info(t("podcasts.copyLink.toastSuccess"));
    }
    catch(ex)
    {
      toast.error(t("podcasts.copyLink.toastError") + ex);
    }

  }

  return (
    <div className="px-10 lg:px-60 py-20 font-body">
      <section className="flex flex-col md:flex-row gap-10">

        {/*Left side*/}
        <div className="flex-1">
          <img className="w-full aspect-square" src={placeholderImgSrc} alt="placeholder">
          </img>


          <div className="my-4 font-bold">Lorem Ipsum</div>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        </div>

        {/*right side*/}
        <div className="md:flex-2">
          <div>
            <hr className="border-gray-400 mb-8"></hr>
            <Button onClick={() => {shareClicked()}}>{t("podcasts.shareBtnText")}</Button> 
            <hr className="border-gray-400 mt-8"></hr>
          </div>

          <div className="m-4"></div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="m-4"></div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="m-4"></div>

          <p className="text-sm">Updated June 12 2026</p>

          <div className="m-10"></div>

          <div className="w-full max-w-md">


          {/*tabs*/}
          <div className="relative flex border-b border-gray-200">
            
            {/*tab btns*/}
            <button
              onClick={() => setActive("newest")}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                active === "newest"
                  ? "text-edu-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t("podcasts.tabs.newestBtn")}
            </button>

            <button
              onClick={() => setActive("oldest")}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                active === "oldest"
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t("podcasts.tabs.oldestBtn")}
            </button>

            {/*underline*/}
            <div
              className={`absolute bottom-0 left-0 h-[2px] w-1/2 bg-edu-blue-600 transition-transform duration-300 ease-in-out ${
                active === "oldest" ? "translate-x-full" : "translate-x-0"
              }`}
            />
          </div>

          {/* Content area (optional) */}
          <div className="py-4 text-sm text-gray-600 md:w-[900px]">
            {active === "newest" ? 
              <div>
                {PODCAST_DATA.map
                  ( (d, idx) => 
                    <PodcastRow key={idx+"new"} title={d.title} src={d.src}></PodcastRow>
                  )
                }
              </div>: 
              <div>
                  {PODCAST_DATA.reverse().map
                  ((d, idx) => 
                    <PodcastRow key={idx+"old"} title={d.title} src={d.src}></PodcastRow>
                  )
                }
              </div>}
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Podcasts;