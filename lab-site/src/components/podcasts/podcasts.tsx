import { useTranslation } from "react-i18next";
import podcastBg from "/img/podcasts/podcast-hero.webp";
import micIcon from "/img/podcasts/mic-icon.webp";
import neerushaSignature from "/img/podcasts/neerusha-signature.webp"

const Podcasts = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full">
      <img
        src={podcastBg}
        alt=""
        className="w-full h-auto block"
      />
    </section>
  );
};

export default Podcasts;