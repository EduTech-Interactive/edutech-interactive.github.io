import React from 'react';
import type { LucideIcon } from 'lucide-react';

export interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/90 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center w-full max-w-sm font-body">
      {/*icon*/}
      <div className="mb-3 text-edu-blue-400">
        <Icon size={32} strokeWidth={2.5} />
      </div>
      
      {/*title*/}
      <h3 className="text-2xl font-bold text-edu-blue-600 font-heading mb-1">
        {title}
      </h3>
      
      {/*desc*/}
      <p className="text-edu-blue-600/80 leading-relaxed text-xl">
        {description}
      </p>
    </div>
  );
};

export default IconCard;