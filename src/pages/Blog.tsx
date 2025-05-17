
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Articole
            </h1>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogArticles.map((article, index) => (
                <BlogCard 
                  key={index}
                  title={article.title}
                  excerpt={article.excerpt}
                  date={article.date}
                  imageUrl={article.imageUrl}
                  slug={article.slug}
                  additionalText={article.additionalText}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
  additionalText?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  excerpt, 
  date, 
  imageUrl, 
  slug,
  additionalText
}) => {
  return (
    <div className="bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link to={`/blog/${slug}`}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-medium mb-3 hover:text-teal transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        {additionalText && (
          <p className="text-gray-600 text-sm mb-4">{additionalText}</p>
        )}
        <Button asChild variant="outline" className="text-navy hover:text-teal border-gray-200">
          <Link to={`/blog/${slug}`}>
            Citește mai mult
          </Link>
        </Button>
      </div>
    </div>
  );
};

// Blog article data
const blogArticles = [
  {
    title: 'Schimbă-ți perspectiva: Cum să depășești blocajele de la job',
    excerpt: 'Eveniment de seară în Timișoara | 10 aprilie 2024',
    date: 'Mar. 28, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    slug: 'schimba-perspectiva',
    additionalText: 'Te-ai surprins în ultima vreme gândindu-te că ceva nu mai funcționează la jobul tău?'
  },
  {
    title: 'Claritatea în carieră',
    excerpt: 'De ce claritatea în carieră nu vine din a face mai mult, ci din a te opri și a reflecta',
    date: 'Mar. 20, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    slug: 'claritatea-in-cariera'
  },
  {
    title: 'Morning Vibes: cum te simți când începe ziua?',
    excerpt: 'Tu ce vibe te trezești dimineața? Ești gata să faci primul pas spre un job mai aliniat cu tine?',
    date: 'Feb. 24, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    slug: 'morning-vibes'
  },
  {
    title: 'Art of Growth: Cum să îți transformi cariera și să găsești sens în muncă',
    excerpt: 'Art of Growth nu este doar despre schimbarea jobului, ci despre găsirea unui sens real în ceea ce faci.',
    date: 'Feb. 20, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80',
    slug: 'art-of-growth-transform'
  }
];

export default Blog;
