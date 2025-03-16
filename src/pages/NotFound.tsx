
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
      <AnimatedGradient />
      <Header />
      
      <main className="flex-grow">
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="glass-card p-10 max-w-md text-center">
            <h1 className="text-6xl font-bold mb-4 text-blue-600 dark:text-blue-400">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/" 
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
