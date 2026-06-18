import UnityEmbed from "./unity-embed"

const GeneDoom = () => {

    const SRC = "/game-builds/genedoom/index.html";

    return (
        <div className="mx-auto max-w-7xl">
            <UnityEmbed isPortrait={false}  src={SRC}></UnityEmbed>
        </div>
    )
}

export default GeneDoom