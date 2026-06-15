class UnityEmbedProps
{
  src: string = "";
  isPortrait = false;
}

const UnityEmbed = ({ src, isPortrait = false }: UnityEmbedProps) => {
  return (
    <div className="w-full mx-auto">
      <div
        className={`w-full overflow-hidden rounded-xl ${
          isPortrait ? 'aspect-9/16' : 'aspect-video'
        }`}
      >
        <iframe src={src} className="h-full w-full" allowFullScreen />
      </div>
    </div>
  )
}

export default UnityEmbed;