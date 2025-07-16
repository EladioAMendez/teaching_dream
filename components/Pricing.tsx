import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      description: "Get a feel for the platform, no strings attached.",
      features: [
        "5 AI-tutored practice sessions",
        "Access to 1 core subject area",
        "Basic progress tracking"
      ],
      buttonText: "Start for Free",
      isFeatured: false
    },
    {
      name: "Lifetime Access",
      price: "$149",
      description: "One payment, lifetime access. Pass your exam, guaranteed.",
      features: [
        "Unlimited AI-tutored sessions",
        "Access to all FTCE subject areas",
        "Advanced progress analytics",
        "Personalized study plans",
        "Priority support"
      ],
      buttonText: "Get Lifetime Access",
      isFeatured: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-brand-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark-blue mb-6">
            Choose Your Path to Confidence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent pricing. Invest in your future career with a single payment.
          </p>
        </div>

        <div className="flex justify-center items-stretch gap-8 flex-wrap">
          {plans.map((plan) => (
            <Card key={plan.name} className={`w-full max-w-md border-2 ${plan.isFeatured ? 'border-brand-teal' : 'border-gray-200'} shadow-lg flex flex-col`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-brand-dark-blue">{plan.name}</CardTitle>
                <CardDescription className="text-gray-500">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="text-center my-4">
                  <span className="text-5xl font-extrabold text-brand-dark-blue">{plan.price}</span>
                  {plan.name === 'Lifetime Access' && <span className="text-gray-500">/one-time</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle2 className="text-brand-teal mr-3" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full mt-auto ${plan.isFeatured ? 'bg-gradient-to-r from-brand-teal to-brand-sky text-white' : 'bg-white text-brand-teal border border-brand-teal hover:bg-brand-teal hover:text-white'}`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
