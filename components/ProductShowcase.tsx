/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Lightbulb, ClipboardList, ShieldCheck } from 'lucide-react';

const features = [
  {
    name: "Voice Conversations",
    title: "Step 1: Start Talking",
    description: "Just like a real tutor, you talk to StudyVoice. Ask it to quiz you on key terms, explain a complex topic, or role-play a tough scenario. No typing, just talking.",
    icon: Mic,
    image: "https://images.unsplash.com/photo-1587740896331-69393a687c73?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Smart Progress Tracking",
    title: "Step 2: Get Instant Feedback",
    description: "Our AI doesn't just listen—it understands. Get instant, gentle feedback on your answers. It tracks your strong points and identifies where you need more practice, adapting each session to you.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Personalized Study Plans",
    title: "Step 3: See Your Progress",
    description: "A visual dashboard shows you exactly where you're excelling and what to focus on next. Watch your confidence grow as you turn weak spots into strengths.",
    icon: ClipboardList,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Realistic Exam Simulation",
    title: "Step 4: Pass with Confidence",
    description: "When you're ready, take a simulated oral exam. Our AI mimics the pressure and format of the real thing, so you walk into the test center feeling prepared and confident.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="product-showcase" className="py-20 bg-brand-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brand-dark-blue sm:text-4xl">
            How It Works: Your Personal AI Study Partner
          </h2>
        </div>

        <div className="flex justify-center mb-8 space-x-2 sm:space-x-4">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-3 sm:px-6 py-3 font-semibold text-sm sm:text-base rounded-full transition-colors duration-300 ${activeTab === index ? 'bg-brand-teal text-white shadow-md' : 'bg-white text-brand-dark-blue hover:bg-gray-200'}`}
            >
              {feature.name}
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">{features[activeTab].title}</h3>
                  <p className="text-gray-600 leading-relaxed">{features[activeTab].description}</p>
                </div>
                <div>
                  <img 
                    src={features[activeTab].image} 
                    alt={features[activeTab].name} 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
