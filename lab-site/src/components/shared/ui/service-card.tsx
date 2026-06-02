interface ImageCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ 
  imageSrc, 
  title, 
  description, 
}) => {
  return (
    <div className="flex flex-col bg-white shadow-2xl transition-transform duration-300 hover:-translate-y-1 rounded-2xl">
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl">
        
        {/*image*/}
        <div className={`flex items-center justify-center`}>
          <img 
            src={imageSrc} 
            alt={title} 
            className="h-full w-auto object-contain"
            loading="lazy"
          />
        </div>
        
        {/*content*/}
        <div className="flex flex-1 flex-col items-center p-8 text-center">
          <h3 className="font-heading mb-3 text-xl font-bold tracking-wide">
            {title}
          </h3>
          <p className="font-body text-sm leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ImageCard;