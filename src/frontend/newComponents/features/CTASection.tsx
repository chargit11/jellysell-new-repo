"use client";

import { Button } from "@/frontend/core/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-6 bg-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to transform your business?
        </h2>
        <p className="text-xl text-purple-100 mb-8">
          Join thousands of sellers who have already scaled their business with
          JellySell®'s powerful features.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
          >
            Start Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-600 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto bg-transparent"
          >
            View Pricing
          </Button>
        </div>
        <p className="text-purple-200 mt-4 text-sm">
          No setup fees • Pay only when you sell • Cancel anytime
        </p>
      </div>
    </section>
  );
}
