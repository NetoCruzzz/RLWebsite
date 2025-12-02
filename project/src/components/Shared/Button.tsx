import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 shadow-md hover:shadow-lg',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
