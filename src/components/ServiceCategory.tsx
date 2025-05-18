
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  services: Array<{
    name: string;
    slug: string;
  }>;
  className?: string;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  title,
  description,
  icon,
  services,
  className,
}) => {
  return (
    <Card className={cn(
      "h-full border border-gray-100 transition-all duration-300 hover:shadow-md bg-white",
      className
    )}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="w-16 h-16 bg-teal-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2 text-center">{title}</h3>
        <p className="text-gray-600 mb-6 text-center">{description}</p>
        
        <div className="space-y-3 flex-grow">
          {services.map((service, index) => (
            <div key={index} className="border-t border-gray-100 pt-3 first:border-t-0 first:pt-0">
              <Link 
                to={`/services/${service.slug}`} 
                className="flex justify-between items-center text-navy hover:text-teal transition-colors"
              >
                <span>{service.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link to={`/services#${title.toLowerCase().replace(/\s+/g, '-')}`}>
              Vezi toate serviciile
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCategory;
