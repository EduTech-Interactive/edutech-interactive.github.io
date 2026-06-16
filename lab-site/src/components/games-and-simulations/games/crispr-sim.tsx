import UnityEmbed from './unity-embed';

const CrisprSim = () => {
    const SRC = "/game-builds/crispr-sim/index.html";
    return (
        <div className="w-full flex justify-center mt-10">
            <div className="w-full max-w-7xl">
                <UnityEmbed isPortrait={false} src={SRC} />
            </div>
        </div>
    )
}

export default CrisprSim