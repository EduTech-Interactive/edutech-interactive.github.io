import { useEffect, useRef, useState } from 'react';
import { Button } from '../../shared/ui/button';

interface UnityEmbedProps {
  src: string;
  isPortrait?: boolean;
}

const UnityEmbed = ({ src, isPortrait = false }: UnityEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enterFullscreen = async () => {
    if (!containerRef.current) return;

    await containerRef.current.requestFullscreen();
  };

  const exitFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }
  };

  // ✅ THIS is the important fix
  useEffect(() => {
    const onChange = () => {
      const isFs = document.fullscreenElement === containerRef.current;
      setIsFullscreen(isFs);
    };

    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);
  return (
    <div className="w-full mx-auto">

      <div className='hidden md:block'>
        <Button
          onClick={enterFullscreen}
        >
          Fullscreen
        </Button>
      </div>
      <div
        ref={containerRef}
        className={`
          relative overflow-hidden rounded-xl bg-black
          ${isFullscreen ? 'fixed inset-0 flex items-center justify-center' : ''}
        `}
      >
        {isFullscreen && (
          <button
            onClick={exitFullscreen}
            className="absolute right-3 top-3 z-10 rounded bg-white/20 px-3 py-1 text-white"
          >
            Exit
          </button>
        )}

        <iframe
          src={src}
          allowFullScreen
          className={`
            border-0
            ${isFullscreen
              ? isPortrait
                ? 'h-full aspect-[9/16] max-h-screen'
                : 'h-full w-full'
              : isPortrait
                ? 'aspect-[9/16] w-full'
                : 'aspect-video w-full'
            }
          `}
        />
      </div>
    </div>
  );
};

export default UnityEmbed;