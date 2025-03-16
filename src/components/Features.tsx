
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { 
  Shield, 
  FileCheck, 
  Clock, 
  Building, 
  User, 
  CheckCircle, 
  Lock, 
  Database, 
  AlertCircle 
} from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
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
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Comprehensive Database",
      description: "Access to national criminal databases, sex offender registries, and court records across all 50 states."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-time Results",
      description: "Instant processing with most results delivered in minutes rather than days or weeks."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "FCRA Compliant",
      description: "Built to meet Fair Credit Reporting Act regulations for employment and tenant screening."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption and security protocols to protect sensitive personal information."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Automated Verification",
      description: "Advanced algorithms to reduce false positives and ensure accurate matching."
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Dispute Resolution",
      description: "Simple process for individuals to dispute inaccurate information in their background reports."
    }
  ];

  return (
    <section id="features" className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900">
      <div className="content-container">
        <div ref={featuresRef} className="reveal text-center mb-16">
          <div className="inline-block mb-4 pill bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
            <span className="px-1">Key Features</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Modern Background Screening Platform</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our cutting-edge technology delivers accurate, compliant background checks faster than traditional services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-8 transition-all duration-500",
                "opacity-0 translate-y-8",
                "data-[state=visible]:opacity-100 data-[state=visible]:translate-y-0"
              )}
              data-state="visible"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 inline-block">
                <div className="text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center reveal">
            <div className="inline-block mb-4 pill bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
              <span className="px-1">For Businesses</span>
            </div>
            <h3 className="text-2xl font-bold mb-4" id="business">Enterprise Solutions</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Streamline your hiring process with our API integration or user-friendly dashboard. 
              Scale from small businesses to enterprise with volume-based pricing.
            </p>
            <ul className="space-y-3">
              {[
                "API integration for seamless workflow",
                "Bulk processing capabilities",
                "Custom compliance settings",
                "Dedicated account manager",
                "Detailed audit trails"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col justify-center reveal">
            <div className="inline-block mb-4 pill bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
              <span className="px-1">For Individuals</span>
            </div>
            <h3 className="text-2xl font-bold mb-4" id="individuals">Personal Background Checks</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Review your own background information before applying for jobs, housing, or volunteer positions.
              Identify and address potential issues proactively.
            </p>
            <ul className="space-y-3">
              {[
                "Self-check before job applications",
                "Verify record accuracy",
                "Unlimited access to your reports",
                "Record dispute assistance",
                "Privacy-focused design"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 shrink-0 mt-0.5 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
