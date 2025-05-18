
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const FreeSession: React.FC = () => {
  return (
    <Card className="border-2 border-teal bg-gradient-to-br from-teal-light/20 to-white shadow-md transform hover:scale-102 transition-all duration-300">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mr-6">
              <Calendar className="w-8 h-8 text-teal" />
            </div>
            
            <div className="text-left">
              <Badge variant="outline" className="bg-green-50 text-slate-800 border-green-100 mb-3">
                Free
              </Badge>
              <h3 className="text-xl font-medium mb-2">Intalnire exploratorie gratuita</h3>
              <p className="text-gray-600">30 minute</p>
            </div>
          </div>
          
          <div className="md:max-w-md">
            <p className="text-gray-700 mb-6 text-left">
              Hai împreună să descoperim dacă perspectiva mea te poate ajuta! În această sesiune gratuită vom discuta provocările tale profesionale și voi propune o strategie personalizată.
            </p>
            
            <Button className="w-full md:w-auto bg-teal hover:bg-teal-dark text-white rounded-full py-6 font-medium text-base">
              Programează acum
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FreeSession;
