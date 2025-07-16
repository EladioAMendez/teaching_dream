import { Suspense, ReactNode } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import ProductShowcase from "@/components/ProductShowcase";
import SpecialOffer from "@/components/SpecialOffer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

import Footer from "@/components/Footer";
import { Metadata } from 'next';

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'TeachingDream - Effortless FTCE Prep for Aspiring Teachers',
  description: 'Transform your FTCE prep from overwhelming to effortless with TeachingDream. Our AI-powered voice tutor helps you study smarter, not harder, so you can pass with confidence.',
  keywords: 'FTCE prep, teacher certification, AI tutor, study tool, Florida teacher exams, teaching dream',
};

export default function Home(): JSX.Element {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main>
        {/* FeNAgO - The complete platform for building agentic AI-powered SaaS products */}
        <Hero />
        <Benefits />
        <Testimonials />
        <ProductShowcase />
        <SpecialOffer />
        <FAQ />
        <FinalCTA />

      </main>
      <Footer />
    </>
  );
}
