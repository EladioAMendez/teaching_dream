"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "Who is this for?",
    answer: <div className="space-y-2 leading-relaxed">This is for any aspiring teacher in Florida who needs to pass the FTCE General Knowledge, Professional Education, or Subject Area Exams. If you're feeling overwhelmed, short on time, or just want a more effective way to study, StudyVoice is for you.</div>,
  },
  {
    question: "Is this just for the General Knowledge test?",
    answer: <div className="space-y-2 leading-relaxed">Not at all! While we're great for the GK test, our AI can help you with Professional Ed and many Subject Area Exams. It adapts to the content you need to master.</div>,
  },
  {
    question: "How is this different from flashcards or study guides?",
    answer: <div className="space-y-2 leading-relaxed">Flashcards are passive. Study guides are static. StudyVoice is an active, conversational learning partner. It forces you to recall information and explain it in your own words, which is proven to be far more effective for long-term retention.</div>,
  },
  {
    question: "What if I don't like talking to an AI?",
    answer: <div className="space-y-2 leading-relaxed">We get it! But our users say it feels surprisingly natural. There's no judgment, you can go at your own pace, and you can ask it the same question 100 times without it getting annoyed. Give it a try—you might be surprised.</div>,
  },
  {
    question: "Can I use this on my phone?",
    answer: <div className="space-y-2 leading-relaxed">Absolutely. StudyVoice is designed to work on any device. Turn your commute into a study session or review topics while waiting in line. It’s built for your busy life.</div>,
  },
  {
    question: "Is it really guaranteed?",
    answer: <div className="space-y-2 leading-relaxed">Yes. We stand by our method. If you use StudyVoice consistently and don't pass your exam, we'll give you a full refund. See our terms for details.</div>,
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-lg font-semibold text-left border-t border-gray-200"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-brand-dark-blue ${isOpen ? "text-brand-teal" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed text-gray-600">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brand-dark-blue sm:text-4xl">
            Your Questions, Answered
          </h2>
        </div>
        <ul className="divide-y divide-gray-200">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
