import UnityEmbed from "./unity-embed"

const Arcana = () => {

    const SRC = "/game-builds/arcana/index.html";

    return (
        <div className="mt-16">
            <UnityEmbed isPortrait={false}  src={SRC}></UnityEmbed>
        </div>
    )
}

export default Arcana