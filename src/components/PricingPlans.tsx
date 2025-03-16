
import { useState, useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const pricingRef = useRef<HTMLDivElement>(null);
  
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
    
    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }
    
    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current);
      }
    };
  }, []);
  
  const plans = [
    {
      name: "Basic",
      description: "Perfect for individuals and small businesses with occasional needs",
      monthlyPrice: 19.99,
      annualPrice: 14.99,
      features: [
        "National Criminal Database Search",
        "Sex Offender Registry Check",
        "Domestic Terrorist Watchlist",
        "Self-service dashboard",
        "Email notifications",
        "24/7 customer support",
      ],
      notIncluded: [
        "County criminal court records",
        "Employment verification",
        "API access",
        "Custom integrations",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for businesses with regular background check requirements",
      monthlyPrice: 49.99,
      annualPrice: 39.99,
      features: [
        "Everything in Basic, plus:",
        "County criminal court records",
        "Global watchlist search",
        "Employment verification",
        "Education verification",
        "Bulk processing (up to 100/month)",
        "Priority support",
      ],
      notIncluded: [
        "API access",
        "Custom integrations",
      ],
      cta: "Choose Professional",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Complete solution for high-volume and enterprise clients",
      monthlyPrice: 99.99,
      annualPrice: 79.99,
      features: [
        "Everything in Professional, plus:",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Compliance consulting",
        "Bulk processing (unlimited)",
        "Custom reporting",
        "Advanced analytics",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="section bg-white dark:bg-gray-900">
      <div className="content-container">
        <div ref={pricingRef} className="reveal text-center mb-16">
          <div className="inline-block mb-4 pill bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
            <span className="px-1">Simple Pricing</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Choose the Perfect Plan</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Pay only for what you need.
          </p>
          
          <div className="flex items-center justify-center mt-8 space-x-3">
            <span className={cn(
              "text-sm font-medium",
              isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
            )}>
              Annual
              <span className="ml-1.5 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                Save 20%
              </span>
            </span>
            
            <button
              type="button"
              className={cn(
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                isAnnual ? "bg-gray-300 dark:bg-gray-600" : "bg-blue-600"
              )}
              aria-pressed={!isAnnual}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span className="sr-only">Toggle billing frequency</span>
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                  isAnnual ? "translate-x-0" : "translate-x-5"
                )}
              />
            </button>
            
            <span className={cn(
              "text-sm font-medium",
              !isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
            )}>
              Monthly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={cn(
                "glass-card transition-all duration-300 overflow-hidden flex flex-col h-full",
                plan.popular 
                  ? "border-blue-400 dark:border-blue-600 ring-2 ring-blue-400 dark:ring-blue-600 shadow-lg md:scale-105" 
                  : "border-gray-200 dark:border-gray-800"
              )}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white py-1.5 px-4 text-sm font-medium text-center">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{plan.description}</p>
                
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="ml-1 text-gray-600 dark:text-gray-400">
                    /check
                  </span>
                </div>
                
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {isAnnual ? "Annual billing" : "Monthly billing"}
                </p>
                
                <hr className="my-6 border-gray-200 dark:border-gray-800" />
                
                <div className="space-y-4 flex-grow">
                  <p className="font-medium">Includes:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-medium mt-6">Not included:</p>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-500 dark:text-gray-400">
                            <X className="h-5 w-5 shrink-0 mt-0.5 mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                
                <button
                  className={cn(
                    "mt-8 w-full py-3 px-4 rounded-lg font-medium transition-all duration-200",
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                  )}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Need a custom solution? <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact our sales team</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
