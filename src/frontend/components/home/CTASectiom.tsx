"use client";

import { Button } from "@/frontend/core/components/ui/button";
import { ArrowRight } from "lucide-react";
import { homepageData } from "@/frontend/home/domain/homepagedata";

interface CTASectionProps {
  onGetStarted: () => void;
}

export function CTASection({ onGetStarted }: CTASectionProps) {
  const { title, subtitle, startBtn, salesBtn, footerNote } = homepageData.cta;

  return (
    <section className="py-20 px-6 bg-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-purple-100 mb-8">{subtitle}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
            onClick={onGetStarted}
          >
            {startBtn}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-600 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto bg-transparent"
          >
            {salesBtn}
          </Button>
        </div>

        <p className="text-purple-200 mt-4 text-sm">{footerNote}</p>
      </div>
    </section>
  );
}
