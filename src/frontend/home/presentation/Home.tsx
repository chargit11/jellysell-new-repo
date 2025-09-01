"use client";

import { CTASection } from "@/frontend/newComponents/home/CTASectiom";
import { DashboardPreview } from "@/frontend/newComponents/home/DashboardPreview";
import { FeaturesSection } from "@/frontend/newComponents/home/FeaturesSection";
import { HeroSection } from "@/frontend/newComponents/home/HeroSection";
import { TweetTestimonials } from "@/frontend/newComponents/home/TweetTestimonials";
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
      <TweetTestimonials />
      <CTASection onGetStarted={handleGetStarted} />
    </div>
  );
};

export default Home;
