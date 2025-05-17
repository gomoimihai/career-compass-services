
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Download } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Resurse gratuite pentru o carieră cu sens
            </h1>
          </div>
        </section>

        {/* Resource Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="text-teal text-sm uppercase tracking-wider">Resurse digitale</span>
                <h2 className="text-3xl font-bold mt-2 mb-6">
                  Te simți blocat în viața profesională?
                </h2>
                <p className="text-gray-700 mb-6">
                  "Claritate în Carieră" te ajută să îți înțelegi mai bine nevoile profesionale și să îți construiești un plan de acțiune.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal/10 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-teal" />
                    </div>
                    <span className="text-gray-700">Ce vei descoperi?</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal/10 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-teal" />
                    </div>
                    <div className="text-gray-700">
                      <strong>Exercițiul "Bateria Energiei"</strong> – Evaluează impactul jobului tău asupra energiei și motivației.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal/10 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-teal" />
                    </div>
                    <div className="text-gray-700">
                      <strong>Identificarea valorilor esențiale</strong> pentru decizii mai aliniate cu tine.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal/10 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-teal" />
                    </div>
                    <div className="text-gray-700">
                      <strong>Pași concreți</strong> pentru o schimbare profesională fără presiune.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal/10 flex items-center justify-center mr-3 mt-0.5">
                      <Download className="h-4 w-4 text-teal" />
                    </div>
                    <div className="text-gray-700">
                      Descarcă ghidul gratuit și începe transformarea profesională.
                    </div>
                  </li>
                </ul>

                {/* Email Form */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="border-gray-300 focus:border-teal"
                  />
                  <Button className="bg-navy-dark hover:bg-navy text-white">
                    Vreau ghid
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm max-w-md w-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full border-2 border-teal flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-teal-light"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-center text-navy mb-2">
                    Claritate în carieră: primii pași către o muncă cu sens
                  </h3>
                  
                  <div className="mt-8 mb-6">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 mx-auto">
                      <path fill="#66B2B2" d="M40.5,-60.4C53.6,-52.9,66.4,-43.8,73,-31C79.6,-18.1,79.8,-1.6,76.8,14.4C73.7,30.3,67.3,45.8,56.6,56.9C45.8,67.9,30.7,74.4,15,76.8C-0.7,79.1,-16.9,77.3,-31.7,71.1C-46.5,64.8,-59.8,54.2,-66.8,40.5C-73.8,26.9,-74.5,10.2,-74.6,-6.8C-74.7,-23.8,-74.2,-41.2,-65.5,-51.3C-56.7,-61.5,-39.8,-64.4,-25.2,-70.8C-10.7,-77.3,1.5,-87.3,13.2,-84C24.9,-80.6,36,-67.9,40.5,-60.4Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                  
                  <p className="text-sm text-gray-600 text-center mb-8">
                    Un ghid practic pentru cei care vor să își regăsească direcția profesională și să ia decizii aliniate cu valorile lor
                  </p>
                  
                  <div className="text-center text-xs text-gray-500">
                    www.artofgrowth.ro
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
