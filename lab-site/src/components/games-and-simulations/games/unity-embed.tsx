interface UnityEmbedProps
{
    src: string;
}

const UnityEmbed = (props: UnityEmbedProps) => {
  return (
    <div className="w-full mx-auto">
        <div className="aspect-video w-full overflow-hidden rounded-xl">
        <iframe
            src={props.src}
            className="h-full w-full"
            allowFullScreen
        />
        </div>
    </div>
  )
}

export default UnityEmbed