import UnityEmbed from './unity-embed';

const CMSim = () => {
    const SRC = "/game-builds/cmsim/index.html";

    return (
        <div className="w-full flex justify-center mt-10">
            <div className="w-full max-w-7xl">
                <UnityEmbed src={SRC} />
            </div>
        </div>
    )
}

export default CMSim