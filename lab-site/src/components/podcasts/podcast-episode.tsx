import React, { useState } from 'react';
import { Mic, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PodcastEpisodeProps {
  episodeNumber: number;
  title: string;
  guest: string;
  shortDescription: string;
  longDescription: string; // Accepts HTML strings (e.g., "Line 1<br/>Line 2")
  audioSrc: string;
  imageSrc: string;
}

export const PodcastEpisodeCard: React.FC<PodcastEpisodeProps> = ({
  episodeNumber,
  title,
  guest,
  shortDescription,
  longDescription,
  audioSrc,
  imageSrc,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col max-w-3xl shadow-2xl bg-white border border-gray-100 rounded-3xl overflow-hidden md:flex-row font-body relative">
      
      {/* Left Column: Image Area */}
      <div className="relative w-full md:w-1/3 min-h-[200px] min-w-[300px] bg-slate-900">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Column: Content Area */}
      <div className="relative flex flex-col justify-between p-6 flex-1 min-h-[300px]">
        
        {/* Main Card Content */}
        <div className="flex flex-col justify-between h-full flex-1">
          <div>
            {/* Top Header Row */}
            <div className="flex items-center justify-between mb-3 font-heading">
              <span className="px-4 py-1 text-xs font-bold tracking-wider text-white uppercase rounded-full bg-edu-purple-400">
                {t("podcasts.podcastData.cardData.episode")} {episodeNumber}
              </span>
              <div className="p-2 text-white rounded-full bg-edu-purple-400">
                <Mic size={20} aria-hidden="true" />
              </div>
            </div>

            {/* Text Content Area - Hover actions bound strictly here */}
            <div 
              className="cursor-help"
            >
              <h2 className="font-heading text-2xl font-bold text-[#0f172a] leading-tight mb-2">
                {title}
              </h2>
              
              <p className="text-base font-semibold text-gray-90 mb-3">
                <span className="font-heading font-medium text-[#0d9488]">Guest:</span> {guest}
              </p>
              
              <p className="text-sm leading-relaxed text-gray-600"
                onMouseEnter={() => setShowOverlay(true)}
                onMouseLeave={() => setShowOverlay(false)}>
                {shortDescription}
              </p>
            </div>
          </div>

          {/* Audio Player Controller - Safe from triggering the overlay */}
          <div className="mt-5 pt-4 border-t border-gray-100">
            <audio 
              controls 
              src={audioSrc} 
              className="w-full h-8 accent-edu-purple-400"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        {/* Overlapping Scrollable Container */}
        <div 
          className={`absolute inset-0 z-10 p-6 bg-slate-900 text-white flex flex-col transition-all duration-300 origin-bottom ${
            showOverlay 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          // Keeps overlay open when user moves mouse from description into the overlay itself
          onMouseEnter={() => setShowOverlay(true)}
          onMouseLeave={() => setShowOverlay(false)}
        >
          {/* Overlay Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700 font-heading">
            <span className="text-xs font-bold tracking-wider uppercase text-edu-purple-200">
              {t("podcasts.podcastData.cardData.episode")} {episodeNumber}
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowOverlay(false);
              }}
              className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close details"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Body Content */}
          <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              {title}
            </h3>
            <div 
              className="text-sm space-y-2 leading-relaxed text-slate-300" 
              dangerouslySetInnerHTML={{ __html: longDescription }} 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PodcastEpisodeCard;