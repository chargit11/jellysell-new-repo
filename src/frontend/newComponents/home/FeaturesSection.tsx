"use client";

import { homepageData } from "@/frontend/home/domain/homepagedata";

export function FeaturesSection() {
  const { features } = homepageData;

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to grow your multi-channel business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <feature.icon className="h-8 w-8 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
