
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  to, 
  className,
  variant = 'primary'
}) => {
  const baseClasses = "rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 inline-flex items-center";
  
  const variantClasses = {
    primary: "bg-teal hover:bg-teal-dark text-white",
    secondary: "bg-white hover:bg-gray-50 text-navy border border-gray-200",
    outline: "bg-transparent hover:bg-teal/10 text-teal border border-teal"
  };

  return (
    <Button asChild className={cn(baseClasses, variantClasses[variant], className)}>
      <Link to={to}>
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </Link>
    </Button>
  );
};

export default CTAButton;
