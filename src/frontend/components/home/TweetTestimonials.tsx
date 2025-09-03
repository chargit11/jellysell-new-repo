"use client";

import Image from "next/image";
import { homepageData } from "@/frontend/home/domain/homepagedata";
import { Card, CardContent } from "@/frontend/core/components/ui/card";
import { Heart, MessageCircle, Repeat2, ShareIcon } from "lucide-react";
import { Share } from "next/font/google";

export function TweetTestimonials() {
  const { tweets } = homepageData;

  return (
    <section className="py-20 px-6">
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
          {tweets.map((tweet) => (
            <div
              key={tweet.username}
              className="cursor-pointer"
              onClick={() => window.open(tweet.tweetUrl || "#", "_blank")}
            >
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  {/* Tweet Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                        <Image
                          src={tweet.avatar || "/placeholder.svg"}
                          alt={tweet.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-gray-900 truncate">
                            {tweet.name}
                          </span>
                          {tweet.verified && (
                            <svg
                              className="w-4 h-4 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <span className="text-sm">{tweet.handle}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(tweet.tweetUrl || "#", "_blank");
                      }}
                      className="hover:bg-gray-100 rounded-full p-1 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                  </div>

                  {/* Tweet Content */}
                  <div className="mb-4">
                    <p className="text-gray-900 leading-relaxed">
                      {tweet.content}
                    </p>
                  </div>

                  {/* Tweet Actions */}
                  <div className="flex items-center justify-between text-gray-500 max-w-md">
                    <button
                      className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(tweet.tweetUrl || "#", "_blank");
                      }}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button
                      className="flex items-center gap-2 hover:text-green-500 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(tweet.tweetUrl || "#", "_blank");
                      }}
                    >
                      <Repeat2 className="w-4 h-4" />
                    </button>
                    <button
                      className="flex items-center gap-2 hover:text-red-500 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(tweet.tweetUrl || "#", "_blank");
                      }}
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <button
                      className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(tweet.tweetUrl || "#", "_blank");
                      }}
                    >
                      <ShareIcon className="w-4 h-4" />
                    </button>
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
