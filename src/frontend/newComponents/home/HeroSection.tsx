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
        <h1 className="text-2xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
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
            className="
            bg-purple-600 hover:bg-purple-700 
            text-base sm:text-lg md:text-xl 
            px-4 sm:px-6 md:px-8 
            py-2 sm:py-3"
            onClick={onGetStarted}
          >
            <span className="block sm:hidden">Start</span>
            <span className="hidden sm:block">{cta}</span>

            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>

        {/* Platform Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-60">
          <span className="w-full text-center text-sm font-medium text-gray-500 mb-2 sm:mb-0">
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
      <style jsx>{`
        .spread-text {
          position: relative;
          display: inline-block;
        }

        .letter {
          display: inline-block;
          transition: color 0.3s ease;
          color: #374151;
        }

        .knife {
          position: absolute;
          top: 50%;
          left: -30px;
          font-size: 24px;
          transform: translateY(-50%) rotate(-90deg);
          animation: knifeMove 6s ease-in-out infinite;
          z-index: 10;
        }

        @keyframes knifeMove {
          0% {
            left: -30px;
          }
          25% {
            left: calc(100% + 10px);
          }
          50% {
            left: calc(100% + 10px);
          }
          75% {
            left: -30px;
          }
          100% {
            left: -30px;
          }
        }

        /* Letter color changes - forward pass */
        .letter:nth-child(1) {
          animation: letterColor1 6s ease-in-out infinite;
        }

        @keyframes letterColor1 {
          0%,
          100% {
            color: #8b5cf6;
          }
        }

        .letter:nth-child(2) {
          animation: letterColor2 6s ease-in-out infinite;
        }

        .letter:nth-child(3) {
          animation: letterColor3 6s ease-in-out infinite;
        }

        .letter:nth-child(4) {
          animation: letterColor4 6s ease-in-out infinite;
        }

        .letter:nth-child(5) {
          animation: letterColor5 6s ease-in-out infinite;
        }

        .letter:nth-child(6) {
          animation: letterColor6 6s ease-in-out infinite;
        }

        @keyframes letterColor2 {
          0%,
          8% {
            color: #374151;
          }
          11%,
          42% {
            color: #8b5cf6;
          }
          45%,
          67% {
            color: #8b5cf6;
          }
          70%,
          100% {
            color: #374151;
          }
        }

        @keyframes letterColor3 {
          0%,
          11% {
            color: #374151;
          }
          14%,
          42% {
            color: #8b5cf6;
          }
          45%,
          64% {
            color: #8b5cf6;
          }
          67%,
          100% {
            color: #374151;
          }
        }

        @keyframes letterColor4 {
          0%,
          14% {
            color: #374151;
          }
          17%,
          42% {
            color: #8b5cf6;
          }
          45%,
          61% {
            color: #8b5cf6;
          }
          64%,
          100% {
            color: #374151;
          }
        }

        @keyframes letterColor5 {
          0%,
          17% {
            color: #374151;
          }
          20%,
          42% {
            color: #8b5cf6;
          }
          45%,
          58% {
            color: #8b5cf6;
          }
          61%,
          100% {
            color: #374151;
          }
        }

        @keyframes letterColor6 {
          0%,
          20% {
            color: #374151;
          }
          23%,
          42% {
            color: #8b5cf6;
          }
          45%,
          55% {
            color: #8b5cf6;
          }
          58%,
          100% {
            color: #374151;
          }
        }
      `}</style>
    </section>
  );
}
