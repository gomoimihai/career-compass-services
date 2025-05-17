
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { blogArticles } from '../Blog';
import { Card } from '@/components/ui/card';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = blogArticles.find(article => article.slug === slug);
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">Articolul nu a fost găsit</h1>
            <Button onClick={() => navigate('/blog')}>
              Înapoi la blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-72 md:h-96 w-full bg-navy-dark">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {article.title}
              </h1>
              <div className="text-lg text-gray-200">{article.date}</div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Button 
              variant="outline" 
              className="mb-6"
              onClick={() => navigate('/blog')}
              size="sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Înapoi la articole
            </Button>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl mb-6 font-medium text-gray-700">
                {article.excerpt}
              </p>
              
              {/* Sample content - would normally come from a CMS */}
              <p className="mb-4">
                În era digitală, cariera profesională devine tot mai complexă, iar mulți dintre noi se confruntă cu provocări în găsirea unui echilibru între pasiuni, valori personale și cerințele pieței muncii.
              </p>

              <p className="mb-4">
                Studiile arată că peste 70% dintre angajați se simt dezangajați sau nemulțumiți la locul de muncă actual. Această statistică alarmantă reflectă o realitate: mulți profesioniști ajung să lucreze în domenii sau poziții care nu sunt aliniate cu valorile și aspirațiile lor profunde.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Ce înseamnă o carieră aliniată?</h2>
              
              <p className="mb-4">
                O carieră aliniată nu este doar despre obținerea unui salariu bun sau a unui titlu impresionant. Este despre găsirea unui echilibru între:
              </p>
              
              <ul className="list-disc pl-6 mb-4">
                <li>Valorile personale și cele ale organizației</li>
                <li>Abilitățile și talentele native</li>
                <li>Pasiunile și interesele personale</li>
                <li>Impactul pozitiv pe care îl poți avea</li>
                <li>Stilul de viață pe care ți-l dorești</li>
              </ul>
              
              <p className="mb-4">
                Atunci când aceste elemente sunt în armonie, munca nu mai este percepută ca o corvoadă, ci ca o extensie naturală a identității și valorilor tale.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Provocări în găsirea direcției</h2>
              
              <p className="mb-4">
                Multe persoane se confruntă cu obstacole în identificarea unei cariere aliniate:
              </p>
              
              <p className="mb-4">
                Presiunea socială și așteptările familiei pot influența deciziile de carieră, îndepărtându-ne de ceea ce ne-am dori cu adevărat să facem.
              </p>
              
              <p className="mb-4">
                Frica de eșec sau de instabilitate financiară ne poate determina să rămânem în joburi care nu ne împlinesc.
              </p>
              
              <p className="mb-4">
                Lipsa de autocunoaștere ne împiedică să identificăm ce ne aduce cu adevărat satisfacție profesională.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Cum te poate ajuta consilierea în carieră</h2>
              
              <p className="mb-4">
                Procesul de coaching în carieră oferă un cadru structurat pentru a explora aceste provocări și a găsi soluții personalizate. Prin dialog profund și exerciții de autocunoaștere, poți descoperi ce îți dorești cu adevărat de la viața profesională.
              </p>
              
              <p className="mb-4">
                Împreună putem lucra pentru:
              </p>
              
              <ul className="list-disc pl-6 mb-4">
                <li>Clarificarea valorilor și priorităților tale</li>
                <li>Identificarea punctelor forte și a talentelor native</li>
                <li>Explorarea opțiunilor de carieră aliniate cu acestea</li>
                <li>Crearea unui plan concret de tranziție sau dezvoltare profesională</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Primul pas spre schimbare</h2>
              
              <p className="mb-4">
                Orice călătorie începe cu un prim pas. Dacă te recunoști în descrierile de mai sus și simți că ai nevoie de claritate și direcție în carieră, te invit să programezi o sesiune de explorare gratuită.
              </p>
              
              <p className="mb-4">
                În această sesiune de 30 de minute, vom discuta despre provocările tale specifice și vom vedea cum te pot ajuta să găsești o direcție profesională mai autentică și mai împlinitoare.
              </p>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold mb-4">Împărtășește acest articol</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">Facebook</Button>
                <Button variant="outline" size="sm">LinkedIn</Button>
                <Button variant="outline" size="sm">Twitter</Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8">Articole similare</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogArticles
                .filter(a => a.slug !== slug)
                .slice(0, 3)
                .map((article, index) => (
                <Card key={index} className="overflow-hidden">
                  <Link to={`/blog/${article.slug}`}>
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-6">
                    <h4 className="font-medium text-lg mb-2 hover:text-teal transition-colors">
                      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                    </h4>
                    <p className="text-gray-700 text-sm line-clamp-2">{article.excerpt}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
