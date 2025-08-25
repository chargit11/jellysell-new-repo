"use client";

import { Button } from "@/frontend/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/frontend/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  MessageSquare,
  Package,
  ShoppingCart,
  Link2,
  Zap,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Package,
    title: "Multi-Platform Listings",
    description:
      "List your products across Etsy, eBay, Depop, Poshmark, and Mercari from one dashboard.",
  },
  {
    icon: MessageSquare,
    title: "Unified Messaging",
    description:
      "Manage all customer messages from different platforms in one centralized inbox.",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    description:
      "Track and fulfill orders from all platforms with integrated logistics support.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Get detailed performance metrics and sales analytics across all your channels.",
  },
  {
    icon: Link2,
    title: "Easy Integrations",
    description:
      "Connect your existing marketplace accounts with just a few clicks.",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description:
      "Save time with automated listing updates, inventory sync, and more.",
  },
];

const platforms = [
  { name: "Etsy", logo: "/images/etsy-logo.webp" },
  { name: "eBay", logo: "/images/ebay-logo.png" },
  { name: "Depop", logo: "/images/depop-logo.jpeg" },
  { name: "Poshmark", logo: "/images/poshmark-logo.webp" },
  { name: "Mercari", logo: "/images/mercari-logo.webp" },
];

const tweets = [
  {
    name: "Okonomiyakeria",
    username: "okonomiyakeria",
    handle: "@okonomiyakeria",
    content:
      "I have used 4 of these 5 sites separately, but I'm now going to list my used Diesel clothing once on JellySell (http://JellySell.com) as it will go out to all of them automatically! I bet they add a few more sites over time as well.",
    avatar: "/images/okonomiyakeria-real-avatar.jpg",
    verified: false,
    tweetUrl: "https://x.com/okonomiyakeria/status/1954609024487567867",
  },
  {
    name: "Whirled Juice",
    username: "WhirledJuice",
    handle: "@WhirledJuice",
    content:
      "I have a couple extra blender accessories that I'll sell on http://JellySell.com. I can list them once there and automatically put them on eBay, etsy, and other sites.",
    avatar: "/images/whirled-juice-avatar.png",
    verified: false,
    tweetUrl: "https://x.com/WhirledJuice/status/1954611242041299068",
  },
  {
    name: "Yo's Clothes",
    username: "YosClothes",
    handle: "@YosClothes",
    content:
      "The unified messaging in @jellysell_ is what I've been looking for.     No more switching between 5 different apps to respond to customers. This is what crosslisting should be! 🤓",
    avatar: "/images/yos-clothes-avatar.jpg",
    verified: false,
    tweetUrl: "https://x.com/YosClothes/status/1954617503046676874",
  },
];

interface HomepageProps {
  onGetStarted: () => void;
  onSignIn: () => void;
  onPricing: () => void;
  onFeatures: () => void;
  onAbout?: () => void;
  onPrivacy?: () => void;
  onHelpCenter?: () => void;
  onConnectionsGuide?: () => void;
}

export function Homepage({
  onGetStarted,
  onSignIn,
  onPricing,
  onFeatures,
  onAbout,
  onPrivacy,
  onHelpCenter,
  onConnectionsGuide,
}: HomepageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src="/images/new-jellysell-logo.png"
                alt="jellysell Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold text-gray-900">
                jellysell
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onFeatures}>
                Features
              </Button>
              <Button variant="ghost" onClick={onPricing}>
                Pricing
              </Button>
              <Button variant="outline" onClick={onSignIn}>
                Sign In
              </Button>
              <Button
                className="bg-purple-600 hover:bg-purple-700"
                onClick={onGetStarted}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

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
              onClick={onGetStarted}
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
              onClick={onGetStarted}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/new-jellysell-logo.png"
                  alt="jellysell Logo"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="text-xl font-bold">jellysell</span>
              </div>
              <p className="text-gray-400 text-sm">
                This application uses the Etsy API but is not endorsed or
                certified by Etsy, Inc.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white" onClick={onFeatures}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white" onClick={onPricing}>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                    onClick={onConnectionsGuide}
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                    onClick={() =>
                      (window.location.href =
                        "mailto:support@jellysell.com?subject=Support Request")
                    }
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white" onClick={onAbout}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white" onClick={onPrivacy}>
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 HAN-E LLC / JellySell&reg;</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
