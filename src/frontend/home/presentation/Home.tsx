"use client";
import { Button } from "@/frontend/core/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/frontend/core/components/ui/card";
import { ArrowRight, Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import Image from "next/image";
import { features, platforms, tweets } from "../domain/home";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
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
            JellySell® is the ultimate crosslisting platform that helps you
            expand your reach across multiple marketplaces while managing
            everything from a single, powerful dashboard.
          </p>

          <div className="flex items-center justify-center mb-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
              onClick={() => {}}
            >
              Start Free - No Credit Card Required
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Platform Logos */}
          <div className="flex items-center justify-center gap-8 opacity-60">
            <span className="text-sm font-medium text-gray-500">
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

      {/* Dashboard Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See JellySell® in action
            </h2>
            <p className="text-xl text-gray-600">
              Get a glimpse of our intuitive dashboard that makes crosslisting
              effortless.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/images/jellysell-comprehensive-dashboard.png"
              alt="JellySell® comprehensive dashboard showing listings management, unified messaging inbox, analytics dashboard, and platform integrations in one seamless interface"
              width={1400}
              height={900}
              className="w-full h-auto rounded-lg shadow-2xl"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to scale your business
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools designed to help you sell more, stress less, and
              grow faster across all platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tweet Testimonials */}
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
                        <Share className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to scale your business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of sellers who have already transformed their
            business with JellySell®.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => {}}
            >
              Start Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3 bg-transparent"
              onClick={() =>
                (window.location.href =
                  "mailto:support@jellysell.com?subject=Sales Inquiry")
              }
            >
              Contact Sales
            </Button>
          </div>
          <p className="text-purple-200 mt-4 text-sm">
            No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
