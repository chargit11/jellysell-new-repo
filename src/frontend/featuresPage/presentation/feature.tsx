"use client";

import { BenefitsSection } from "@/frontend/newComponents/features/BenefitsSection";
import { CTASection } from "@/frontend/newComponents/features/CTASection";
import { DashboardSection } from "@/frontend/newComponents/features/DashboardSection";
import { HeroSection } from "@/frontend/newComponents/features/HeroSection";
import { PlatformsSection } from "@/frontend/newComponents/features/PlatformSection";
import React from "react";

const feature = () => {
  const handleGetStarted = () => {
    console.log("Get Started clicked!");
    // you can also redirect user or perform some action here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <HeroSection onGetStarted={handleGetStarted} />
      <PlatformsSection />
      <BenefitsSection />
      <DashboardSection />
      <CTASection />
    </div>
  );
};

export default feature;
