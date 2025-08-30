"use client";

import { Button } from "@/frontend/core/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/frontend/core/components/ui/card";
import { Check, ArrowRight, Zap } from "lucide-react";
import { features } from "@/frontend/pricing/domain/pricingData";

interface MainPricingCardProps {
  onGetStarted: (plan: string) => void;
}

export function MainPricingCard({ onGetStarted }: MainPricingCardProps) {
  return (
    <section className="py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <Card className="border-2 border-purple-500 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>

          <CardHeader className="text-center pb-8 pt-8">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <CardTitle className="text-3xl mb-2">Pay-As-You-Sell</CardTitle>
            <CardDescription className="text-lg">
              The only crosslisting plan you'll ever need
            </CardDescription>

            <div className="mt-8 space-y-2">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-gray-900">2%</span>
                <span className="text-xl text-gray-600">per transaction</span>
              </div>
              <div className="text-lg text-purple-600 font-semibold">
                Capped at $40/month
              </div>
              <div className="text-sm text-gray-500">
                No monthly fees • No setup costs
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            <Button
              size="lg"
              className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-4"
              onClick={() => onGetStarted("pay-as-you-sell")}
            >
              Start Selling Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-900 text-center">
                Everything included:
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
