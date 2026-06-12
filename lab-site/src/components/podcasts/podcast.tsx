import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

// Define the interface for the component props
export interface PodcastRowProps {
  title: string;
  src: string;
}

export const PodcastRow: React.FC<PodcastRowProps> = ({ title, src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  // Initialize audio object
  useEffect(() => {
    audioRef.current = new Audio(src);

    const audio = audioRef.current;

    // Event listeners to track audio states
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);

    // Cleanup listeners on unmount
    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
    };
  }, [src]);

  // Handle Play / Pause toggle
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Handle manual progress bar scrubbing
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Helper function to format seconds into MM:SS
  const formatTime = (timeInSeconds: number): string => {
    if (isNaN(timeInSeconds)) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="flex items-center gap-4 h-20 rounded-xl shadow-md w-full max-w-4xl px-4">
      {/* Big Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer shrink-0"
        aria-label={isPlaying ? 'Pause podcast' : 'Play podcast'}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 fill-current" />
        ) : (
          <Play className="w-6 h-6 fill-current ml-1" />
        )}
      </button>

      {/* Podcast Title */}
      <div className="font-semibold text-lg truncate min-w-[150px] max-w-[250px]">
        {title}
      </div>

      {/* Progress Bar Container */}
      <div className="flex items-center gap-2 grow">
        <span className="text-xs text-slate-400 select-none">
          {formatTime(currentTime)}
        </span>
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-white"
        />
      </div>

      {/* Total Length */}
      <div className="text-edu-blue-400 font-medium whitespace-nowrap shrink-0">
        {formatTime(duration)}
      </div>
    </div>
  );
};