import React from 'react';
import Hero from '../landing/Hero';
import Services from '../landing/Services';
import WhyOrangeBee from '../landing/WhyOrangeBee';
import CTASection from '..//landing/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyOrangeBee />
      <CTASection />
    </main>
  );
}