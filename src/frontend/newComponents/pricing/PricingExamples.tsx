"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/frontend/core/components/ui/card";
import { DollarSign, TrendingUp } from "lucide-react";
import { pricingExamples } from "@/frontend/pricing/domain/pricingData";

export function PricingExamples() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See how much you'll pay
          </h2>
          <p className="text-xl text-gray-600">
            Real examples based on monthly sales volume
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingExamples.map((example, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">{example.description}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-2xl font-bold text-gray-900">
                  ${example.sales}
                </div>
                <div className="text-sm text-gray-600">monthly sales</div>
                <div className="border-t pt-3">
                  <div className="text-lg font-semibold text-purple-600">
                    ${example.fee}/month
                  </div>
                  <div className="text-xs text-gray-500">JellySell® fee</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full">
            <TrendingUp className="h-4 w-4" />
            <span className="font-medium">
              The more you sell, the lower your effective rate!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
