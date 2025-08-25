"use client";

import { useState } from "react";
import { Button } from "@/frontend/core/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/frontend/core/components/ui/card";
import { Badge } from "@/frontend/core/components/ui/badge";
import {
  Check,
  Star,
  ArrowRight,
  Zap,
  ChevronDown,
  ChevronUp,
  DollarSign,
  TrendingUp,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
} from "lucide-react";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/frontend/core/components/ui/collapsible";

const features = [
  "Connect all 5 marketplace platforms",
  "Unlimited product listings",
  "Unified messaging inbox",
  "Advanced order management",
  "Real-time inventory sync",
  "Advanced analytics & reporting",
  "Auto-repricing tools",
  "Priority email support",
];

const faqs = [
  {
    question: "How does the 2% transaction fee work?",
    answer:
      "We charge 2% on all sales made through your connected marketplace accounts. Once you reach $40 in fees for the month, you pay nothing more - it's capped at $40/month maximum.",
  },
  {
    question: "What counts as a transaction?",
    answer:
      "Any sale completed through your connected Etsy, eBay, Depop, Poshmark, or Mercari accounts counts as a transaction. We only charge on successful sales, not on listings or failed transactions.",
  },
  {
    question: "When do I pay the transaction fees?",
    answer:
      "Fees are automatically deducted from your connected payment accounts when sales are processed. You'll receive detailed monthly statements showing all transactions and fees.",
  },
  {
    question: "What if I don't make any sales?",
    answer:
      "If you don't make any sales in a month, you pay nothing! Our pricing is completely performance-based - you only pay when you're making money.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can disconnect your accounts and stop using JellySell® at any time. There are no long-term contracts or cancellation fees.",
  },
  {
    question: "Which marketplaces do you support?",
    answer:
      "We currently support Etsy, eBay, Depop, Poshmark, and Mercari. We're constantly adding new platforms based on user demand.",
  },
];

const pricingExamples = [
  { sales: 500, fee: 10, description: "Small seller" },
  { sales: 1000, fee: 20, description: "Growing business" },
  { sales: 2000, fee: 40, description: "Established seller" },
  { sales: 5000, fee: 40, description: "High-volume seller" },
];

interface PricingPageProps {
  onGetStarted: (plan: string) => void;
  onBackToHome: () => void;
  onFeatures: () => void;
  onPricing: () => void;
  onAbout: () => void;
  onPrivacy: () => void;
  setActiveView: (view: string) => void;
  onSignIn: () => void;
}

export function PricingPage({
  onGetStarted,
  onBackToHome,
  onFeatures,
  onPricing,
  onAbout,
  onPrivacy,
  setActiveView,
}: PricingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={onBackToHome}
            >
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
              <Button variant="ghost">Pricing</Button>
              <Button
                variant="outline"
                onClick={() => onGetStarted("professional")}
              >
                Sign In
              </Button>
              <Button
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => onGetStarted("professional")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">
            <Star className="h-3 w-3 mr-1" />
            Pay only when you sell • No upfront costs
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Simple, performance-based
            <br />
            <span className="text-purple-600">pricing</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Only pay when you make money. 2% per transaction, capped at
            $40/month. No monthly fees, no setup costs, no surprises.
          </p>
        </div>
      </section>

      {/* Main Pricing Card */}
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

      {/* Pricing Examples */}
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
                  <CardTitle className="text-lg">
                    {example.description}
                  </CardTitle>
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

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent, and fair
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect & List</h3>
              <p className="text-gray-600">
                Connect your marketplace accounts and start listing products
                across all platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Make Sales</h3>
              <p className="text-gray-600">
                When you make a sale, we automatically charge 2% of the
                transaction amount.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hit the Cap</h3>
              <p className="text-gray-600">
                Once you've paid $40 in fees for the month, all additional sales
                are free!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tweet Testimonials */}
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
            {[
              {
                name: "Okonomiyakeria",
                username: "okonomiyakeria",
                handle: "@okonomiyakeria",
                content:
                  "I have used 4 of these 5 sites separately, but I'm now going to list my used Diesel clothing once on JellySell (http://JellySell.com) as it will go out to all of them automatically! I bet they add a few more sites over time as well.",
                avatar: "/images/okonomiyakeria-real-avatar.jpg",
                verified: false,
                tweetUrl:
                  "https://x.com/okonomiyakeria/status/1954609024487567867",
              },
              {
                name: "Whirled Juice",
                username: "WhirledJuice",
                handle: "@WhirledJuice",
                content:
                  "I have a couple extra blender accessories that I'll sell on http://JellySell.com. I can list them once there and automatically put them on eBay, etsy, and other sites.",
                avatar: "/images/whirled-juice-avatar.png",
                verified: false,
                tweetUrl:
                  "https://x.com/WhirledJuice/status/1954611242041299068",
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
            ].map((tweet) => (
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

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible
                key={index}
                open={openFaq === index}
                onOpenChange={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-6 h-auto text-left bg-white hover:bg-gray-50 border rounded-lg"
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to start selling?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of sellers who only pay when they make money. No
            risk, all reward.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => onGetStarted("pay-as-you-sell")}
            >
              Start Selling Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3 bg-transparent"
            >
              Contact Support
            </Button>
          </div>
          <p className="text-purple-200 mt-4 text-sm">
            No setup fees • No monthly minimums • Cancel anytime
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
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
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
                  <a
                    href="#"
                    className="hover:text-white"
                    onClick={() => setActiveView("about")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                    onClick={() => setActiveView("privacy")}
                  >
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
