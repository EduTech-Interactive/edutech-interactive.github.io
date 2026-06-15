import UnityEmbed from "./unity-embed";

const BioBot = () => {
  const SRC = "/game-builds/biorobot/index.html";

  return (
    <div className="w-full flex justify-center mt-10">
        <div className="w-full max-w-7xl">
            <UnityEmbed isPortrait={false} src={SRC} />
        </div>
    </div>
  );
};

export default BioBot;