"use client";

import { Badge } from "@/frontend/core/components/ui/badge";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">
          <Star className="h-3 w-3 mr-1" />
          Pay only when you sell • No upfront costs
        </Badge>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-snug sm:leading-tight">
          Simple, performance-based
          <br />
          <span className="text-purple-600">pricing</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Only pay when you make money. 2% per transaction, capped at $40/month.
          No monthly fees, no setup costs, no surprises.
        </p>
      </div>
    </section>
  );
}
