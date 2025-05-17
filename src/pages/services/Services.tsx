
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { servicesData } from './servicesData';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-teal-light/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Career Coaching Services
              </h1>
              <p className="text-lg text-gray-700 mb-0">
                Personalized guidance to help you discover your path, overcome obstacles, and create a fulfilling career aligned with your values and strengths.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <ServiceCard 
                  key={service.slug}
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  slug={service.slug}
                  featured={service.featured}
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
                Not sure which service is right for you?
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                Schedule a free 15-minute consultation call to discuss your career goals and determine the best approach for your unique situation.
              </p>
              <div className="inline-block">
                <a 
                  href="/contact" 
                  className="bg-white hover:bg-gray-100 text-navy rounded-full px-8 py-3 text-sm font-medium transition-colors duration-300 inline-flex items-center"
                >
                  Book a Free Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
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
