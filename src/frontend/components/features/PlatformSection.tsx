"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/frontend/core/components/ui/card";
import Image from "next/image";
import { platforms } from "@/frontend/featuresPage/domain/featuresData";

export function PlatformsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect to all major platforms
          </h2>
          <p className="text-xl text-gray-600">
            One-click integration with the marketplaces that matter most to your
            business
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {platforms.map((platform) => (
            <Card
              key={platform.name}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center p-4">
                  <Image
                    src={platform.logo || "/placeholder.svg"}
                    alt={`${platform.name} logo`}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-xl">{platform.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {platform.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
