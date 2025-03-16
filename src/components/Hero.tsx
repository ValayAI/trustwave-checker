
import { useEffect, useRef } from 'react';
import { ChevronRight, Shield, FileCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/0 dark:from-blue-950/20 dark:to-gray-900/0 -z-10"></div>
      
      <div className="content-container">
        <div ref={heroRef} className="reveal stagger-reveal max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 pill bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
            <span className="px-1">Instant Background Checks</span>
          </div>
          
          <h1 className="mb-6 font-bold text-gray-900 dark:text-white">
            <span className="block">Background Screening</span>
            <span className="relative inline-block text-blue-600 dark:text-blue-400">
              Reimagined
              <svg className="absolute -bottom-1 left-0 w-full h-3 text-blue-200 dark:text-blue-900" viewBox="0 0 138 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.53711C43.1075 1.2967 86.0234 1.45749 137 7.00001" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="mb-10 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Fully automated, self-serve background check platform revolutionizing 
            criminal record screening in the USA.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/signup" className="btn-primary text-lg py-3 px-8">
              Get Started
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
            <a href="#features" className="btn-secondary text-lg py-3 px-8">
              Learn More
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />, 
                title: "Secure & Compliant", 
                desc: "FCRA compliant with bank-level security." 
              },
              { 
                icon: <FileCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />, 
                title: "Comprehensive", 
                desc: "National criminal database coverage." 
              },
              { 
                icon: <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />, 
                title: "Instant Results", 
                desc: "Get results in minutes, not days." 
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className={cn(
                  "glass-card p-6 flex flex-col items-center",
                  "transform transition-all duration-300 hover:translate-y-[-5px]"
                )}
              >
                <div className="mb-3 p-2 rounded-full bg-blue-100/70 dark:bg-blue-900/30">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
