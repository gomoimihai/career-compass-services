
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkbookPromo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
                ✍️ Nou: Workbook Digital
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-dark leading-tight">
              Ce-mi place, de fapt, să fac?
            </h2>
            
            <p className="text-lg text-gray-700 mb-4 font-medium">
              Workbook de introspecție profesională pentru oameni care vor să-și (re)găsească direcția.
            </p>
            
            <p className="text-gray-600 mb-6">
              Un ghid psihologic, blând și practic, care te ajută să te reconectezi cu tine 
              atunci când nu mai știi ce îți place sau ce te motivează.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-teal" />
                <span className="text-sm">5 capitole ghidate</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Download className="h-4 w-4 mr-2 text-teal" />
                <span className="text-sm">Format PDF</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Heart className="h-4 w-4 mr-2 text-teal" />
                <span className="text-sm">Ritm personal</span>
              </div>
            </div>

            <Card className="bg-white/70 backdrop-blur-sm border border-white/50 mb-6">
              <CardContent className="p-4">
                <p className="text-gray-700 mb-2">
                  <strong>Nu e un test. Nu e un curs.</strong>
                </p>
                <p className="text-teal font-medium">
                  👉 E o conversație sinceră cu tine, în scris.
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-teal hover:bg-teal-dark text-white px-6 py-3 rounded-full font-medium">
                <Link to="/workbook">
                  Descoperă Workbook-ul
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center text-gray-600">
                <span className="text-lg font-semibold text-navy-dark">49 lei</span>
                <span className="ml-2 text-sm">• Livrare instant</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-orange/20 rounded-2xl transform rotate-2"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/93c315a9-9dfc-419c-8aa1-a8a9a55be759.png"
                  alt="Workbook de introspecție profesională"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-teal/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-orange/20 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkbookPromo;
