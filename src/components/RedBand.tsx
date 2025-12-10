import { ReactNode } from 'react';

interface RedBandProps {
  children: ReactNode;
  className?: string;
}

export const RedBand = ({ children, className = '' }: RedBandProps) => {
  return (
    <span className={`bg-red-600 text-white px-4 py-2 my-1 inline-block ${className}`}>
      <span className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium leading-tight inline-block">
        {children}
      </span>
    </span>
  );
};
