
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle, ChevronRight, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';

const CheckForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    ssn: '',
    purpose: 'employment',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Background check initiated",
        description: "You'll receive your results via email shortly.",
      });
      setIsSubmitting(false);
      setStep(4); // Success step
    }, 2000);
  };

  const renderStepDots = () => {
    return (
      <div className="flex justify-center space-x-2 mb-8">
        {[1, 2, 3].map((i) => (
          <div 
            key={i}
            className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
              step >= i ? 'bg-blue-600 dark:bg-blue-500' : 'bg-gray-300 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h3 className="text-2xl font-bold mb-1">Personal Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Let's start with your basic details
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Date of Birth
                </label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary"
                disabled={!formData.firstName || !formData.lastName || !formData.dateOfBirth || !formData.email}
              >
                Continue
                <ChevronRight className="ml-1 h-5 w-5" />
              </button>
            </div>
          </>
        );
        
      case 2:
        return (
          <>
            <h3 className="text-2xl font-bold mb-1">Address Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Provide your current residential address
            </p>
            
            <div className="space-y-6 mb-6">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Street Address
                </label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    City
                  </label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                    required
                  >
                    <option value="">Select a state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    {/* Add other states */}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    ZIP Code
                  </label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="btn-secondary"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary"
                disabled={!formData.address || !formData.city || !formData.state || !formData.zipCode}
              >
                Continue
                <ChevronRight className="ml-1 h-5 w-5" />
              </button>
            </div>
          </>
        );
        
      case 3:
        return (
          <>
            <h3 className="text-2xl font-bold mb-1">Verification & Consent</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Final details to process your background check
            </p>
            
            <div className="space-y-6 mb-6">
              <div>
                <label htmlFor="ssn" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Social Security Number (Last 4 digits)
                </label>
                <Input
                  id="ssn"
                  name="ssn"
                  type="password"
                  value={formData.ssn}
                  onChange={handleChange}
                  className="w-full"
                  maxLength={4}
                  required
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Used for verification purposes only. Encrypted with bank-level security.
                </p>
              </div>
              
              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Purpose of Background Check
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                  required
                >
                  <option value="employment">Employment</option>
                  <option value="housing">Housing/Tenant</option>
                  <option value="volunteer">Volunteer Position</option>
                  <option value="personal">Personal</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consent" className="font-medium text-gray-700 dark:text-gray-300">
                    I consent to the background check
                  </label>
                  <p className="text-gray-500 dark:text-gray-400">
                    I understand and authorize TrustCheck to conduct a background check in accordance with the 
                    <a href="/terms" className="text-blue-600 hover:underline ml-1">Terms of Service</a> and 
                    <a href="/privacy" className="text-blue-600 hover:underline ml-1">Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="btn-secondary"
              >
                Back
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting || !formData.ssn || !formData.purpose}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>Submit Request</>
                )}
              </button>
            </div>
          </>
        );
        
      case 4:
        return (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Request Submitted!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Your background check request has been successfully submitted. You'll receive your results via email at {formData.email} shortly.
            </p>
            <button
              type="button"
              onClick={() => window.location.href = '/dashboard'}
              className="btn-primary"
            >
              View Dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <section id="check-form" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white/0 dark:from-blue-950/20 dark:to-gray-900/0 -z-10"></div>
      
      <div className="content-container max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 pill bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
            <span className="px-1">Start Now</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Request a Background Check</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Complete the form below to initiate a background check.
          </p>
        </div>
        
        <div className="glass-card p-6 md:p-8 shadow-lg">
          <form onSubmit={handleSubmit}>
            {renderStepDots()}
            {renderStep()}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckForm;
