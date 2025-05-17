
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import { Button } from '@/components/ui/button';
import { servicesData } from './servicesData';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-teal-light/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-6 text-sm">
                <Link to="/" className="text-gray-600 hover:text-teal">Home</Link>
                <span className="mx-2 text-gray-400">/</span>
                <Link to="/services" className="text-gray-600 hover:text-teal">Services</Link>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-900">{service.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-gray-700">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: service.fullDescription }} />
                
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white">1</div>
                      </div>
                      <div>
                        <h4 className="font-medium">Book Your Session</h4>
                        <p className="text-gray-600">Choose a time that works for you using our online scheduling system.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white">2</div>
                      </div>
                      <div>
                        <h4 className="font-medium">Complete Pre-Work</h4>
                        <p className="text-gray-600">You'll receive preparation materials to help us make the most of our time together.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white">3</div>
                      </div>
                      <div>
                        <h4 className="font-medium">Attend Your Session</h4>
                        <p className="text-gray-600">We'll meet virtually or in person for your scheduled coaching session.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center text-white">4</div>
                      </div>
                      <div>
                        <h4 className="font-medium">Follow-Up and Implementation</h4>
                        <p className="text-gray-600">You'll receive session notes and action steps to implement what you've learned.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-semibold mb-6">Service Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="text-gray-600">Price</span>
                      <span className="font-semibold">{service.price}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold">{service.duration}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="text-gray-600">Format</span>
                      <span className="font-semibold">Virtual or In-person</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <Button className="w-full bg-teal hover:bg-teal-dark text-white">
                      Book Now
                    </Button>
                    <Button variant="outline" className="w-full border-gray-200">
                      Ask a Question
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 bg-teal/5 rounded-lg p-6 border border-teal/10">
                  <h3 className="text-xl font-semibold mb-4">Not sure if this is right for you?</h3>
                  <p className="text-gray-600 mb-4">
                    Schedule a free 15-minute consultation to discuss your needs and determine if this service is the best fit.
                  </p>
                  <CTAButton to="/contact" variant="outline" className="w-full">
                    Free Consultation
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">You May Also Be Interested In</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesData
                .filter(s => s.slug !== service.slug)
                .slice(0, 3)
                .map(relatedService => (
                  <div key={relatedService.slug} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{relatedService.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedService.shortDescription}</p>
                      <Link 
                        to={`/services/${relatedService.slug}`}
                        className="text-teal hover:text-teal-dark font-medium text-sm inline-flex items-center"
                      >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
