import conf4pPodcast from "/podcasts/Conf4P.mp3";
import TGDPodcast from "/podcasts/TGD.ogg";

const Podcast = () => {
  return (
    <div>
      <h1>Podcasts</h1>
      
      <div style={{ marginBottom: "30px" }}>
        <h3>Conf4P Podcast</h3>
        <audio src={conf4pPodcast} controls />
      </div>

      <div>
        <h3>TGD Podcast</h3>
        <audio src={TGDPodcast} controls />
      </div>
    </div>
  );
};

export default Podcast;