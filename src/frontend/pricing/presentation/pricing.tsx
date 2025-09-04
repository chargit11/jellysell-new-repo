// import React from 'react'
"use client";
import { CTASsection } from "@/frontend/components/pricing/CTASection";
import { FAQSection } from "@/frontend/components/pricing/FAQSection";
import { HeroSection } from "@/frontend/components/pricing/HeroSection";
import { HowItWorks } from "@/frontend/components/pricing/HowItWorks";
import { MainPricingCard } from "@/frontend/components/pricing/MainPricingCard";
import { PricingExamples } from "@/frontend/components/pricing/PricingExamples";
import { Testimonials } from "@/frontend/components/pricing/Testimonials";

const pricing = () => {
  const handleGetStarted = () => {
    console.log("Get Started clicked!");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <HeroSection />
      <MainPricingCard onGetStarted={handleGetStarted} />
      <PricingExamples />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <CTASsection />
    </div>
  );
};

export default pricing;
