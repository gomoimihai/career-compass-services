
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';
import { Award } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  className?: string;
  featured?: boolean;
  mostWanted?: boolean;
  isPaid?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description,
  icon,
  slug,
  className,
  featured = false,
  mostWanted = false,
  isPaid = true
}) => {
  return (
    <Card className={cn(
      "h-full border transition-all duration-300 hover:shadow-md relative",
      featured ? "border-teal/20 bg-gradient-to-br from-teal/5 to-transparent" : "border-gray-100",
      className
    )}>
      {mostWanted && (
        <div className="absolute -top-2 -right-2 z-10">
          <Badge className="bg-purple-500 text-white px-3 py-1 flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Most Wanted</span>
          </Badge>
        </div>
      )}
      
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            featured ? "bg-teal/10 text-teal" : "bg-gray-100 text-gray-600"
          )}>
            {icon}
          </div>
          
          {!isPaid && (
            <Badge variant="outline" className="ml-3 bg-green-50 text-slate-800 border-green-100">
              Free
            </Badge>
          )}
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
