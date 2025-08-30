"use client";

import Image from "next/image";
import { Card, CardContent } from "@/frontend/core/components/ui/card";
import { MessageCircle, Repeat2, Heart, Share } from "lucide-react";
import { testimonials } from "@/frontend/pricing/domain/pricingData";

export function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What sellers are saying
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from sellers who are growing their business with
            JellySell®.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((tweet) => (
            <div
              key={tweet.username}
              className="cursor-pointer"
              onClick={() => window.open(tweet.tweetUrl, "_blank")}
            >
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <Image
                      src={tweet.avatar}
                      alt={tweet.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <span className="font-bold">{tweet.name}</span>
                      <div className="text-sm text-gray-500">
                        {tweet.handle}
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <p className="text-gray-900 mb-4">{tweet.content}</p>
                  {/* Actions */}
                  <div className="flex justify-between text-gray-500">
                    <MessageCircle className="w-4 h-4" />
                    <Repeat2 className="w-4 h-4" />
                    <Heart className="w-4 h-4" />
                    <Share className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
