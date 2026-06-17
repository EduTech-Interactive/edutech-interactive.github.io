import React from 'react';
import { Link, type LinkProps } from '@tanstack/react-router';
import * as Lucide from 'lucide-react';
import { Button } from '../shared/ui/button';

export interface EcosystemCardFeature {
  icon: keyof typeof Lucide | React.ComponentType<{ className?: string }>;
  text: string;
}

export interface EcosystemCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  description: string;
  features: EcosystemCardFeature[];
  textClass: string;
  bgClass: string;
  buttonText: string;
  buttonTo: LinkProps['to'];
}

const EcosystemCard: React.FC<EcosystemCardProps> = ({
  imageSrc,
  imageAlt = 'Card icon',
  title,
  subtitle,
  description,
  features,
  textClass = 'text-purple-700',
  bgClass = 'bg-purple-700',
  buttonText,
  buttonTo,
}) => {
  return (
    <div className="grid h-full max-w-md grid-rows-[auto_1fr_auto_auto] rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      
      {/* Header Section */}
      <div className="flex items-start gap-5 pb-6">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="h-20 w-20 rounded-2xl object-contain" 
          />
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <p className={`text-base font-semibold leading-snug ${textClass}`}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Description*/}
      <div className="pb-6">
        <p className="text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>

      {/* Features List */}
      <ul className="space-y-3.5 pb-8">
        {features.map((feature, index) => {
          const IconComponent = typeof feature.icon === 'string' 
            ? (Lucide[feature.icon] as React.ComponentType<{ className?: string }>)
            : feature.icon;

          return (
            <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
              <span className={`mt-0.5 shrink-0 ${textClass}`}>
                {IconComponent ? <IconComponent className="h-5 w-5" /> : null}
              </span>
              <span>{feature.text}</span>
            </li>
          );
        })}
      </ul>

      {/* Action Button */}
      <div className="mt-auto">
        <Link
          to={buttonTo}
          className="inline-flex items-center gap-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90"
        >
          <Button bgClassName={bgClass}>
            <div className="flex items-center">
              {buttonText} &nbsp;
              <Lucide.ArrowRight className="h-4 w-4 inline" />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EcosystemCard;