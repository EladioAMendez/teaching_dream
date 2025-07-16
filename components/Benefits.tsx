import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Brain, Target, Heart, Trophy, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="text-brand-sunset" size={32} />,
    title: "Turn Dead Time Into Study Time",
    description: "Quiz yourself while brushing teeth, review concepts during your commute, or practice questions while doing laundry. Your AI tutor is always ready when you are."
  },
  {
    icon: <MessageCircle className="text-brand-teal" size={32} />,
    title: "Learn Through Conversation, Not Memorization",
    description: "Stop feeling stupid when you can't remember facts. Our AI helps you understand patterns and connect concepts through natural dialogue that builds real confidence."
  },
  {
    icon: <Target className="text-brand-indigo" size={32} />,
    title: "Focus on What You Actually Need",
    description: "Skip the one-size-fits-all approach. Your AI tutor identifies your weak spots and adapts in real-time, so you're not wasting precious time on stuff you already know."
  },
  {
    icon: <Heart className="text-brand-mint" size={32} />,
    title: "Build Confidence, Not Stress",
    description: "No judgment, no pressure, just patient guidance. Practice until concepts click, ask 'dumb' questions without embarrassment, and actually enjoy studying for once."
  },
  {
    icon: <Trophy className="text-brand-amber" size={32} />,
    title: "Pass on Your First Try",
    description: "94% of our users pass the FTCE on their first attempt. Join thousands of teachers who went from overwhelmed to certified with confidence."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-brand-light-gray">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark-blue mb-6">
            Why StudyVoice Works When Everything Else Doesn't
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-brand-dark-blue h-16 flex items-center justify-center">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
