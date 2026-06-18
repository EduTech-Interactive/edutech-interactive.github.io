import UnityEmbed from "./unity-embed"

const EarthCodex = () => {

    const SRC = "/game-builds/earthcodex/index.html";

    return (
        <div className="mx-auto mt-16 max-w-7xl">
            <UnityEmbed isPortrait={false}  src={SRC}></UnityEmbed>
        </div>
    )
}

export default EarthCodex