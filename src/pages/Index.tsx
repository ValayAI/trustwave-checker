
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PricingPlans from '@/components/PricingPlans';
import CheckForm from '@/components/CheckForm';
import TrustBadge from '@/components/TrustBadge';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';

const Index = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
      <AnimatedGradient />
      <Header />
      <main>
        <Hero />
        <Features />
        <PricingPlans />
        <CheckForm />
        <TrustBadge />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
