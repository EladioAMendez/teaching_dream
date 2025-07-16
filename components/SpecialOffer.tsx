'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { TicketPercent } from 'lucide-react';

const SpecialOffer = () => {
  const calculateTimeLeft = () => {
    // Set offer to expire 3 days from the component mount time
    const threeDaysFromNow = new Date();
    threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);

    const difference = +threeDaysFromNow - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    // Set initial time on client-side to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="special-offer" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-brand-teal to-brand-indigo text-white rounded-lg shadow-xl p-8 sm:p-12 text-center"
        >
          <div className="flex justify-center mb-4">
            <TicketPercent className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
            Limited Time: Get 50% Off Your First Month
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            This is a special launch offer for the first 200 teachers who sign up. Lock in your discount and start preparing for success today. Don't wait—your future students are counting on you.
          </p>
          
          <div className="flex justify-center space-x-4 sm:space-x-8 mb-8">
            {Object.entries(timeLeft).map(([interval, value]) => (
              <div key={interval} className="text-center">
                <span className="text-4xl font-bold">{String(value).padStart(2, '0')}</span>
                <span className="block text-sm uppercase opacity-80">{interval}</span>
              </div>
            ))}
          </div>

          <Button variant="secondary" size="lg" className="font-bold text-brand-dark-blue">
            Claim My 50% Discount
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffer;
