"use client";

import { Button } from "@/frontend/core/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { homepageData } from "@/frontend/home/domain/homepagedata";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  const { title, cta, platforms } = homepageData.hero;

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="relative inline-block">
            <span className="spread-text">
              <span className="letter">S</span>
              <span className="letter">p</span>
              <span className="letter">r</span>
              <span className="letter">e</span>
              <span className="letter">a</span>
              <span className="letter">d</span>
            </span>
            <div className="knife">🔪</div>
          </span>{" "}
          everywhere,
          <br />
          <span className="text-purple-600">manage from one place</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          {title}
        </p>

        <div className="flex items-center justify-center mb-12">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
            onClick={onGetStarted}
          >
            {cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Platform Logos */}
        <div className="flex items-center justify-center gap-8 opacity-60">
          <span className="text-sm font-medium text-gray-500">
            Integrates with:
          </span>
          {platforms.map((platform) => (
            <div key={platform.name} className="w-8 h-8">
              <Image
                src={platform.logo || "/placeholder.svg"}
                alt={`${platform.name} logo`}
                width={32}
                height={32}
                className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
