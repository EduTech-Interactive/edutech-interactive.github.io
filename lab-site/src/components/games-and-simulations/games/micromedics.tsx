import UnityEmbed from "./unity-embed"

const MicroMedics = () => {

    const SRC = "/game-builds/micromedics/index.html";

    return (
        <div className="w-full flex justify-center mt-10">
            <div className="w-full max-w-md">
                <UnityEmbed isPortrait={true} src={SRC} />
            </div>
        </div>
    )
}

export default MicroMedics