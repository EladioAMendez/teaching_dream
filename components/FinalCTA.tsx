import { Button } from '@/components/ui/button';
import { ShieldCheck, CheckCircle } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-20 bg-brand-dark-blue text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold sm:text-5xl mb-6">
          Your Future Students Are Waiting
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Stop the endless cycle of rereading textbooks and feeling unprepared. It's time to start studying smarter, not harder. Pass the FTCE with confidence and get into the classroom where you belong.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto mb-8">
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-md text-gray-800 border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:outline-none"
              required
            />
            <Button type="submit" size="lg" className="font-bold">
              Start My Free Trial
            </Button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-mint" />
            <span>First-Attempt Pass Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-brand-mint" />
            <span>Cancel Anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-brand-mint" />
            <span>Join Thousands of Certified Teachers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
