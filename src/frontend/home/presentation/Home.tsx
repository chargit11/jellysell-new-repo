"use client";

import { CTASection } from "@/frontend/components/home/CTASectiom";
import { DashboardPreview } from "@/frontend/components/home/DashboardPreview";
import { FeaturesSection } from "@/frontend/components/home/FeaturesSection";
import { HeroSection } from "@/frontend/components/home/HeroSection";
import { Testimonials } from "@/frontend/components/pricing/Testimonials";
// import { TweetTestimonials } from "@/frontend/newComponents/home/TweetTestimonials";
import React from "react";

const Home = () => {
  const handleGetStarted = () => {
    console.log("Get Started clicked!");
    // you can also redirect user or perform some action here
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <HeroSection onGetStarted={handleGetStarted} />
      <DashboardPreview />
      <FeaturesSection />
      <Testimonials />
      <CTASection onGetStarted={handleGetStarted} />
    </div>
  );
};

export default Home;
