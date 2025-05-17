
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full border-2 border-teal flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-teal-light"></div>
            </div>
            <span className="ml-3 text-xl text-gray-700 font-medium">
              Career Growth
              <span className="block text-xs text-gray-500 -mt-1">by Jane Smith</span>
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <div className="relative group">
            <span className="flex items-center cursor-pointer">
              EN <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m6 9 6 6 6-6"/></svg>
            </span>
            <div className="absolute hidden group-hover:block bg-white shadow-md py-2 px-4 mt-1 rounded-md z-10">
              <Link to="/" className="block py-1">EN</Link>
              <Link to="/" className="block py-1">FR</Link>
              <Link to="/" className="block py-1">ES</Link>
            </div>
          </div>
        </nav>

        <Button 
          className="bg-teal hover:bg-teal-dark text-white rounded-full px-6 py-2 text-sm transition-all duration-300"
        >
          Book a Session <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </Button>
      </div>
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

export default Navbar;
