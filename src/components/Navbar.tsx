
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full border-2 border-teal flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-teal-light"></div>
            </div>
            <span className="ml-3 text-xl text-gray-700 font-medium">
              Art of Growth
              <span className="block text-xs text-gray-500 -mt-1">by Jane Smith</span>
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/about">Despre</NavLink>
          <NavLink to="/resources">Resurse</NavLink>
          <NavLink to="/services">Servicii</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <div className="relative group">
            <span className="flex items-center cursor-pointer">
              RO <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m6 9 6 6 6-6"/></svg>
            </span>
            <div className="absolute hidden group-hover:block bg-white shadow-md py-2 px-4 mt-1 rounded-md z-10">
              <Link to="/" className="block py-1">RO</Link>
              <Link to="/" className="block py-1">EN</Link>
            </div>
          </div>
        </nav>

        <div className="flex items-center">
          <Button 
            className="bg-navy-dark hover:bg-navy text-white rounded-md px-4 py-2 text-sm transition-all duration-300 hidden md:flex"
          >
            Programează o sesiune <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Button>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>Despre</MobileNavLink>
              <MobileNavLink to="/resources" onClick={() => setIsMenuOpen(false)}>Resurse</MobileNavLink>
              <MobileNavLink to="/services" onClick={() => setIsMenuOpen(false)}>Servicii</MobileNavLink>
              <MobileNavLink to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</MobileNavLink>
              <div className="pt-2">
                <Button 
                  className="w-full bg-navy-dark hover:bg-navy text-white rounded-md px-4 py-2 text-sm"
                >
                  Programează o sesiune
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink: React.FC<{to: string, className?: string, children: React.ReactNode}> = ({ 
  to, 
  className,
  children 
}) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "text-gray-700 hover:text-teal transition-colors duration-300 service-link",
        className
      )}
    >
      {children}
    </Link>
  );
};

const MobileNavLink: React.FC<{to: string, className?: string, children: React.ReactNode, onClick?: () => void}> = ({ 
  to, 
  className,
  children,
  onClick
}) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "text-gray-700 block py-2 border-b border-gray-100",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
