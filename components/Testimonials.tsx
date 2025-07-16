import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I was so overwhelmed with the FTCE, but StudyVoice literally saved me. The AI tutor felt like a real person, and I could study on my own time. I passed on my first try!",
    name: "Jessica M.",
    title: "Future High School Teacher",
    stars: 5
  },
  {
    quote: "This is what I've been looking for. I'm a terrible test-taker, but the conversational practice made all the difference. I felt so much more confident walking into the exam.",
    name: "David R.",
    title: "Aspiring Elementary Educator",
    stars: 5
  },
  {
    quote: "As someone working full-time while trying to get certified, this was a lifesaver. Being able to study in the car or while making dinner was a game-changer.",
    name: "Maria G.",
    title: "Soon-to-be Certified Teacher",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brand-dark-blue sm:text-4xl">
            From Overwhelmed to Certified with Confidence
          </h2>
        </div>
        
                <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white">
              <CardContent className="pt-6">
                <div className="flex mb-4 text-brand-amber">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.quote}"</p>
                <div className="text-right">
                  <p className="font-semibold text-brand-dark-blue">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
