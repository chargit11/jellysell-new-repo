"use client";

import Image from "next/image";
import { homepageData } from "@/frontend/home/domain/homepagedata";

export function TweetTestimonials() {
  const { tweets } = homepageData;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Sellers
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from the community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tweets.map((tweet, idx) => (
            <a
              key={idx}
              href={tweet.tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-xl shadow-sm p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={tweet.avatar}
                  alt={tweet.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-900">
                      {tweet.name}
                    </span>
                    {tweet.verified && (
                      <span className="text-blue-500 text-sm">✔︎</span>
                    )}
                  </div>
                  <span className="text-gray-500 text-sm">{tweet.handle}</span>
                </div>
              </div>
              <p className="text-gray-700">{tweet.content}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
