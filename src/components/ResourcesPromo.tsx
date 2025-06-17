
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Download, ArrowRight } from 'lucide-react';

const ResourcesPromo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-light/20 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-teal text-sm uppercase tracking-wider font-medium">Resurse digitale</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-navy-dark">
              Te simți blocat în viața profesională?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              "Claritate în Carieră" te ajută să îți înțelegi mai bine nevoile profesionale și să îți construiești un plan de acțiune.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal/10 flex items-center justify-center mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-teal" />
                </div>
                <span className="text-gray-700">Exercițiul "Bateria Energiei" – Evaluează impactul jobului tău</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal/10 flex items-center justify-center mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-teal" />
                </div>
                <span className="text-gray-700">Identificarea valorilor esențiale pentru decizii aliniate</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal/10 flex items-center justify-center mr-3 mt-0.5">
                  <Download className="h-4 w-4 text-teal" />
                </div>
                <span className="text-gray-700">Ghid gratuit pentru transformarea profesională</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-navy-dark hover:bg-navy text-white">
                <Link to="/resources">
                  Descarcă ghidul gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-navy-dark text-navy-dark hover:bg-navy-dark/10">
                <Link to="/resources">
                  Vezi toate resursele
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-light/30 rounded-full blur-lg"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-sm">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full border-2 border-teal flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-teal-light"></div>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-center text-navy mb-2">
                  Claritate în carieră: primii pași către o muncă cu sens
                </h3>
                
                <div className="mt-6 mb-6">
                  <div className="w-24 h-24 mx-auto bg-teal/10 rounded-full flex items-center justify-center">
                    <Download className="h-8 w-8 text-teal" />
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 text-center mb-6">
                  Un ghid practic pentru cei care vor să își regăsească direcția profesională și să ia decizii aliniate cu valorile lor
                </p>
                
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal/10 text-teal">
                    <span className="w-2 h-2 bg-teal rounded-full mr-2"></span>
                    Nou
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPromo;
