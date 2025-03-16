
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/#features' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'For Business', path: '/#business' },
    { name: 'For Individuals', path: '/#individuals' },
  ];
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg py-3 shadow-sm' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="content-container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-bold text-xl"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white text-sm">TC</span>
          </div>
          <span>TrustCheck</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/login" 
            className="hidden sm:block text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            Log in
          </Link>
          <Link 
            to="/signup" 
            className="btn-primary"
          >
            Get Started
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <nav className="content-container py-5 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Link 
            to="/login" 
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Log in
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
