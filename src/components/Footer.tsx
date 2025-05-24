
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-teal-light"></div>
              </div>
              <span className="ml-3 text-xl text-white font-medium">
                Art of Growth
                <span className="block text-xs text-gray-300 -mt-1">by Jane Smith</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Helping professionals find meaningful careers aligned with their values and strengths.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-teal-light">Despre</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-teal-light">Resurse</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-teal-light">Servicii</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-teal-light">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Email: laura@artofgrowth.ro</p>
            <p className="text-gray-300 mb-2">Phone: +40 755 376 738</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-teal-light">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-light">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 art of growth.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/despre" className="hover:text-teal-light">Despre</Link>
              <Link to="/resurse" className="hover:text-teal-light">Resurse</Link>
              <Link to="/blog" className="hover:text-teal-light">Blog</Link>
              <Link to="/programari" className="hover:text-teal-light">Programări</Link>
              <Link to="/terms-and-conditions" className="hover:text-teal-light">Termeni și Condiții</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
