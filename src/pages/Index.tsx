import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import { Button } from '@/components/ui/button';
import ServiceCategory from '@/components/ServiceCategory';
import FreeSession from '@/components/FreeSession';
import { Link } from 'react-router-dom';
import { ChevronRight, Book, Briefcase, User } from 'lucide-react';
import { blogArticles } from './Blog';

const Index = () => {
  // Define the service categories with their related services
  const serviceCategories = [
    {
      title: "Servicii individuale",
      description: "Coaching personalizat pentru dezvoltarea ta profesională",
      icon: <User className="h-8 w-8 text-teal" />,
      services: [
        { name: "Career Discovery Session", slug: "career-discovery" },
        { name: "Career Transition Coaching", slug: "career-transition" },
        { name: "Executive Coaching", slug: "executive-coaching" }
      ]
    },
    {
      title: "Servicii de grup",
      description: "Sesiuni de grup pentru dezvoltare colectivă",
      icon: <Briefcase className="h-8 w-8 text-teal" />,
      services: [
        { name: "Career Clarity Workshop", slug: "career-clarity-workshop" },
        { name: "Team Building", slug: "team-building" }
      ]
    },
    {
      title: "Resurse profesionale",
      description: "Instrumente pentru dezvoltarea carierei tale",
      icon: <Book className="h-8 w-8 text-teal" />,
      services: [
        { name: "Resume & LinkedIn Makeover", slug: "resume-linkedin-makeover" },
        { name: "Interview Preparation", slug: "interview-preparation" }
      ]
    }
  ];

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
                  Îți dorești o carieră aliniată cu tine și valorile tale?
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  Sunt Laura, psiholog organizațional, și te ghidez să îți regăsești direcția profesională astfel încât munca să fie aliniată cu tine și cu ceea ce îți dorești cu adevărat.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <Button className="bg-navy-dark hover:bg-navy-dark/90 text-white rounded-md px-6 py-3 text-sm font-medium">
                    Programează o ședință
                  </Button>
                  <CTAButton to="/services" variant="outline" className="border-white text-white hover:bg-white/10">
                    Vreau să aflu mai mult
                  </CTAButton>
                </div>
              </div>
              <div className="hidden md:block relative">
                <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full bg-teal-light/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80" 
                  alt="Career Coach" 
                  className="relative z-10 max-w-sm mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80" 
                  alt="Woman sitting outdoors" 
                  className="rounded-lg"
                />
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-light/30 flex items-center justify-center mr-4">
                      <span className="text-teal font-medium">01</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Simți că ceva nu mai na mai reprezintă?</h3>
                      <p className="text-gray-600">Explorăm împreună ce se întâmplă și găsim soluții.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-light/30 flex items-center justify-center mr-4">
                      <span className="text-teal font-medium">02</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Ți-e dificil să schimbări în carieră, dar nu știi de unde să începi?</h3>
                      <p className="text-gray-600">Îți ofer instrumentele necesare pentru a face primii pași cu încredere.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-light/30 flex items-center justify-center mr-4">
                      <span className="text-teal font-medium">03</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Te confrunți cu stres, incertitudine sau dileme etice la locul de muncă?</h3>
                      <p className="text-gray-600">Te ajut să găsești soluții sănătoase și aliniate cu valorile tale.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-light/30 flex items-center justify-center mr-4">
                      <span className="text-teal font-medium">04</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Art of Growth este spațiul unde îți (re)găsești direcția și sensul profesional și obținere întemnere.</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Îți ofer suport psihologic și un cadru sigur de reflecție, astfel încât să înțelegi ce ți se potrivește cu adevărat și să iei decizii aliniate cu tine.
              </h2>
              <div className="mt-8">
                <div className="border border-teal/30 bg-white/80 rounded-md p-6">
                  <p className="text-lg font-medium text-navy">
                    Transformă-ți cariera într-o sursă de echilibru și împlinire, nu de stres și confuzie!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Redesigned */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Serviciile noastre</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Oferim o gamă variată de servicii pentru a te ajuta să îți găsești direcția în carieră și să faci alegeri aliniate cu valorile tale.
              </p>
            </div>

            {/* Service Categories - Now full width row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {serviceCategories.map((category, index) => (
                <ServiceCategory
                  key={index}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  services={category.services}
                />
              ))}
            </div>
            
            {/* Free Session Card - Now full width below other cards */}
            <div className="mt-8">
              <FreeSession />
            </div>
            
            <div className="mt-12 text-center">
              <CTAButton to="/services" variant="primary">
                Vezi toate serviciile
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Articole recente</h2>
              <Link to="/blog" className="flex items-center text-teal hover:text-teal-dark transition-colors">
                Vezi toate articolele <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogArticles.slice(0, 3).map((article, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Link to={`/blog/${article.slug}`}>
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                    <h3 className="text-xl font-medium mb-3 hover:text-teal transition-colors">
                      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                    <Button asChild variant="outline" className="text-navy hover:text-teal border-gray-200">
                      <Link to={`/blog/${article.slug}`}>
                        Citește mai mult
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">povești de success</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Testimonial" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  "Am început chiar cu scopul de "schimbare în carieră", dar mi-am dat seama rapid că, dată fiind natura schimbării, trebuie să pornesc de la "cine sunt". Întrebările Laurei și ritmul conversației au fost o reducere pentru mine."
                </p>
                <p className="font-semibold">Lara Maria</p>
                <p className="text-sm text-gray-500">Marketing Manager</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Testimonial" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  "Am plecat împreună cu Laura pe o călătorie nu atâtdiferit de ce a unui explorator care caută comori is primele câteva luni în care am lucrat cu ea, asta-i să fee cum lucră. Trăim prinii primele de moment, tensiunile și bucurile procesului de descoperire și reotientare a destinului."
                </p>
                <p className="font-semibold">Corentin Antonescu</p>
                <p className="text-sm text-gray-500">Director Tehnic</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Testimonial" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  "Laura m-a convins cu puterea ei de a ajută ăkti siguranța necesară în a încredere mediul de lucru în care eșeam zilnic. Schimbările care le-am făcut la servicul maut ajuta atins punctele dureroase ale înterumentelor cum bune. Slumbând felul în care ascultam și șhiam în răcțile chelor, am găsit de fapt cariera care îmi plăcea."
                </p>
                <p className="font-semibold">Bogdan Vasile</p>
                <p className="text-sm text-gray-500">Manager de proiect</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-navy-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-8">Vrei mai multă claritate și direcție în carieră?</h2>
              <Button className="bg-white hover:bg-gray-100 text-navy rounded-md px-8 py-3 text-sm font-medium">
                Programează o ședință
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
