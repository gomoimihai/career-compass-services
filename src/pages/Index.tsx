
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <div className="max-w-xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Want a career aligned with your values?
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  If you feel your job no longer represents you, my free "Career Clarity" guide will help you understand your path and take the first steps towards a career aligned with who you are.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <Button className="bg-white hover:bg-gray-100 text-navy rounded-full px-6 py-2 text-sm font-medium">
                    Get the guide
                  </Button>
                  <CTAButton to="/services" variant="outline" className="border-white text-white hover:bg-white/10">
                    Explore Services
                  </CTAButton>
                </div>
              </div>
              <div className="hidden md:block relative">
                <div className="w-72 h-72 xl:w-96 xl:h-96 rounded-full bg-teal-light/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Career Coach" 
                  className="relative z-10 max-w-sm mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block">
                <span className="relative z-10">Do you want a career aligned with your values?</span>
                <span className="absolute -bottom-3 left-0 w-full h-3 bg-teal-light/40 -z-0"></span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                I'm Jane, an organizational psychologist, and I guide you to find your professional direction so that your work is aligned with you and what you truly desire.
              </p>
              <CTAButton to="/services" variant="primary">
                Schedule a Session
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How I Can Help You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-light/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                    <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Identify Your Values</h3>
                <p className="text-gray-600">
                  Discover what truly matters to you and how to align your career with your core values and strengths.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-light/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Create Clear Goals</h3>
                <p className="text-gray-600">
                  Set meaningful career objectives with actionable steps that drive you toward professional fulfillment.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-light/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Overcome Barriers</h3>
                <p className="text-gray-600">
                  Identify and break through the obstacles holding you back from achieving career satisfaction.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <CTAButton to="/services" variant="secondary">
                View All Services
              </CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
