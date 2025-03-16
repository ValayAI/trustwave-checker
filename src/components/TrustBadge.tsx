
import { Shield, Award, UserCheck } from 'lucide-react';

const TrustBadge = () => {
  return (
    <section className="bg-blue-50 dark:bg-gray-800/50 py-12">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Organizations Nationwide</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our background check platform is compliant with all federal and state regulations, 
            ensuring accurate and legal screening for any purpose.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
              <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">FCRA Compliant</h3>
            <p className="text-gray-600 dark:text-gray-400">
              All our background checks adhere to Fair Credit Reporting Act standards to ensure legal compliance.
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
              <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">SOC 2 Certified</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our platform meets rigorous security, availability, and confidentiality standards.
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
              <UserCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">EEOC Aligned</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our processes follow Equal Employment Opportunity Commission guidelines to prevent discrimination.
            </p>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-70">
          {/* Placeholder client logos - in a real app, these would be actual images */}
          {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, idx) => (
            <div key={idx} className="text-xl font-bold text-gray-400 dark:text-gray-500">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadge;
