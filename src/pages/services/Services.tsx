
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { servicesData } from './servicesData';
import FreeSession from '@/components/FreeSession';
import { Button } from '@/components/ui/button';
import { Book, Briefcase, User } from 'lucide-react';

const Services = () => {
  // Group services by category
  const individualServices = servicesData.filter(service => 
    ['career-discovery', 'career-transition', 'executive-coaching'].includes(service.slug)
  );
  
  const groupServices = servicesData.filter(service => 
    ['career-clarity-workshop', 'team-building'].includes(service.slug)
  );
  
  const resourceServices = servicesData.filter(service => 
    ['resume-linkedin-makeover', 'interview-preparation'].includes(service.slug)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-teal-light/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Servicii de Career Coaching
              </h1>
              <p className="text-lg text-gray-700 mb-0">
                Îndrumare personalizată pentru a te ajuta să îți descoperi calea, să depășești obstacole și să creezi o carieră împlinitoare, aliniată cu valorile și punctele tale forte.
              </p>
            </div>
          </div>
        </section>

        {/* Free Session Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto">
              <FreeSession />
            </div>
          </div>
        </section>

        {/* Individual Services Section */}
        <section className="py-16 bg-gray-50" id="servicii-individuale">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <div className="w-12 h-12 bg-teal-light/20 rounded-full flex items-center justify-center mr-4">
                <User className="h-6 w-6 text-teal" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Servicii individuale</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {individualServices.map((service) => (
                <ServiceCard 
                  key={service.slug}
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  slug={service.slug}
                  featured={service.featured}
                  mostWanted={service.mostWanted}
                  isPaid={service.isPaid}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Group Services Section */}
        <section className="py-16 bg-white" id="servicii-de-grup">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <div className="w-12 h-12 bg-teal-light/20 rounded-full flex items-center justify-center mr-4">
                <Briefcase className="h-6 w-6 text-teal" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Servicii de grup</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupServices.map((service) => (
                <ServiceCard 
                  key={service.slug}
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  slug={service.slug}
                  featured={service.featured}
                  mostWanted={service.mostWanted}
                  isPaid={service.isPaid}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Resource Services Section */}
        <section className="py-16 bg-gray-50" id="resurse-profesionale">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <div className="w-12 h-12 bg-teal-light/20 rounded-full flex items-center justify-center mr-4">
                <Book className="h-6 w-6 text-teal" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Resurse profesionale</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceServices.map((service) => (
                <ServiceCard 
                  key={service.slug}
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  slug={service.slug}
                  featured={service.featured}
                  mostWanted={service.mostWanted}
                  isPaid={service.isPaid}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy-dark text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Nu ești sigur ce serviciu ți se potrivește?
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                Programează o consultație gratuită de 30 de minute pentru a discuta obiectivele tale de carieră și a determina cea mai bună abordare pentru situația ta unică.
              </p>
              <div className="inline-block">
                <Button className="bg-white hover:bg-gray-100 text-navy rounded-full px-8 py-3 text-sm font-medium transition-colors duration-300 inline-flex items-center">
                  Programează consultația gratuită
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
