
import { Link } from 'react-router-dom';
import { ChevronRight, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="content-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-bold text-xl mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white text-sm">TC</span>
              </div>
              <span>TrustCheck</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              TrustCheck is revolutionizing the background screening industry with our fully automated, 
              self-serve platform that delivers accurate results in minutes, not days.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li><a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="/contact" id="contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li><a href="/services/business" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">For Business</a></li>
              <li><a href="/services/individuals" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">For Individuals</a></li>
              <li><a href="/services/api" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">API Access</a></li>
              <li><a href="/services/integrations" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li><a href="/help" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="/documentation" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="/compliance" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Compliance Guide</a></li>
              <li>
                <a href="/newsletter" className="inline-flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Subscribe to Newsletter
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-gray-200 dark:border-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TrustCheck. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="/terms" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/security" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              Security
            </a>
            <a href="/cookies" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
