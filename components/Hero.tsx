import { Button } from "./ui/button";
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-coral via-brand-sunset to-brand-sky py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your FTCE Prep from 
              <span className="block text-brand-amber">Overwhelming to Effortless</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Stop staring at study guides that make your brain go blank. StudyVoice turns exam prep into natural conversations you can have anywhere – while making coffee, folding laundry, or driving to student teaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-white text-brand-dark-blue hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold">
                Start Your Free Trial Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
            <p className="text-white/80 text-sm">
              No credit card required • Join 2,847 future teachers who are already studying smarter
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-center justify-center h-64 bg-gradient-to-br from-brand-teal to-brand-sky rounded-2xl">
                <div className="text-center text-white">
                  <MessageCircle size={64} className="mx-auto mb-4" />
                  <div className="text-lg font-semibold">AI Voice Tutor</div>
                  <div className="text-sm opacity-80">Ready to help you succeed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
