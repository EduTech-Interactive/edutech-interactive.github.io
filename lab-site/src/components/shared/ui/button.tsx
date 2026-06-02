import React from 'react';

interface ButtonProps {
  /** The background color class (e.g., 'bg-edu-navy-400') */
  bgClassName?: string;
  /** The hover background color class (e.g., 'hover:bg-edu-navy-600') */
  hoverBgClassName?: string;
  /** The border styling classes (e.g., 'border border-edu-navy-200/20') */
  borderClassName?: string;
  /** Click handler function */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** The text or elements to render inside the button */
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  bgClassName = 'bg-edu-navy-400',
  hoverBgClassName = 'hover:bg-edu-navy-600',
  borderClassName = 'border border-edu-navy-200/20',
  onClick,
  children
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        font-nav font-bold text-base md:text-lg text-white 
        px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl 
        transform hover:-translate-y-0.5 transition-all duration-200 
        cursor-pointer text-center whitespace-nowrap min-w-[300px]
        ${bgClassName} 
        ${hoverBgClassName} 
        ${borderClassName}
      `.trim().replace(/\s+/g, ' ')} 
    >
      {children}
    </button>
  );
};