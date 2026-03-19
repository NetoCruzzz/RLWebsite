import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        /* Light Mode: White card */
        bg-white 
        /* Dark Mode: Deep Navy card that blends in */
        dark:bg-slate-900/50 
        dark:border dark:border-white/10
        dark:backdrop-blur-sm
        rounded-lg shadow-md overflow-hidden transition-all duration-300 
        ${hover ? 'hover:scale-105 hover:shadow-xl dark:hover:border-blue-500/30' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
} 