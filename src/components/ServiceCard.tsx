
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  className?: string;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description,
  icon,
  slug,
  className,
  featured = false
}) => {
  return (
    <Card className={cn(
      "h-full border transition-all duration-300 hover:shadow-md",
      featured ? "border-teal/20 bg-gradient-to-br from-teal/5 to-transparent" : "border-gray-100",
      className
    )}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center mb-4",
          featured ? "bg-teal/10 text-teal" : "bg-gray-100 text-gray-600"
        )}>
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <CTAButton 
          to={`/services/${slug}`}
          variant={featured ? "primary" : "outline"}
          className="mt-auto self-start"
        >
          Learn More
        </CTAButton>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
