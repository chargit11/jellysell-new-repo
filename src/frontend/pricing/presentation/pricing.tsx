// import React from 'react'
"use client";
import { CTASsection } from "@/frontend/newComponents/pricing/CTASection";
import { FAQSection } from "@/frontend/newComponents/pricing/FAQSection";
import { HeroSection } from "@/frontend/newComponents/pricing/HeroSection";
import { HowItWorks } from "@/frontend/newComponents/pricing/HowItWorks";
import { MainPricingCard } from "@/frontend/newComponents/pricing/MainPricingCard";
import { PricingExamples } from "@/frontend/newComponents/pricing/PricingExamples";
import { Testimonials } from "@/frontend/newComponents/pricing/Testimonials";

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
