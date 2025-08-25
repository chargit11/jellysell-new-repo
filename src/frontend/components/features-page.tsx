"use client";

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
  ArrowRight,
  BarChart3,
  MessageSquare,
  Package,
  ShoppingCart,
  Star,
  Clock,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";

const heroFeatures = [
  {
    icon: Package,
    title: "Multi-Platform Listings",
    description:
      "List your products across Etsy, eBay, Depop, Poshmark, and Mercari from one dashboard.",
    color: "bg-purple-500",
  },
  {
    icon: MessageSquare,
    title: "Unified Messaging",
    description:
      "Manage all customer messages from different platforms in one centralized inbox.",
    color: "bg-purple-500",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    description:
      "Track and fulfill orders from all platforms with integrated logistics support.",
    color: "bg-purple-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Get detailed performance metrics and sales analytics across all your channels.",
    color: "bg-purple-500",
  },
];

const platforms = [
  {
    name: "Etsy",
    logo: "/images/etsy-logo.webp",
    description: "Handmade & vintage marketplace",
  },
  {
    name: "eBay",
    logo: "/images/ebay-logo.png",
    description: "Global auction & buy-it-now platform",
  },
  {
    name: "Depop",
    logo: "/images/depop-logo.jpeg",
    description: "Social shopping for Gen Z",
  },
  {
    name: "Poshmark",
    logo: "/images/poshmark-logo.webp",
    description: "Fashion-focused marketplace",
  },
  {
    name: "Mercari",
    logo: "/images/mercari-logo.webp",
    description: "Fast-growing general marketplace",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Save 10+ Hours Per Week",
    description:
      "Automate repetitive tasks and manage everything from one dashboard.",
  },
  {
    icon: TrendingUp,
    title: "Increase Sales by 150%",
    description:
      "Reach more customers by selling on multiple platforms simultaneously.",
  },
  {
    icon: Shield,
    title: "Reduce Errors by 90%",
    description:
      "Automated inventory sync prevents overselling and listing mistakes.",
  },
  {
    icon: Users,
    title: "Improve Customer Satisfaction",
    description:
      "Faster response times and better order management keep customers happy.",
  },
];

interface FeaturesPageProps {
  onGetStarted: () => void;
  onBackToHome: () => void;
  onPricing: () => void;
  onSignIn: () => void;
  onAbout: () => void;
  onPrivacy: () => void;
}

export function FeaturesPage({
  onGetStarted,
  onBackToHome,
  onPricing,
  onSignIn,
  onAbout,
  onPrivacy,
}: FeaturesPageProps) {
  const setActiveView = (view: string) => {
    if (view === "about") {
      onAbout();
    } else if (view === "privacy") {
      onPrivacy();
    }
  };

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
              <Button variant="ghost">Features</Button>
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
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">
            <Star className="h-3 w-3 mr-1" />
            Everything you need to scale your business
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Powerful features for
            <br />
            <span className="text-purple-600">modern sellers</span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            From listing management to order fulfillment, JellySell® provides
            all the tools you need to run a successful multi-platform business.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {heroFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
            onClick={onGetStarted}
          >
            Start Free - No Credit Card Required
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Platform Integrations */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Connect to all major platforms
            </h2>
            <p className="text-xl text-gray-600">
              One-click integration with the marketplaces that matter most to
              your business
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

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why sellers choose JellySell®
            </h2>
            <p className="text-xl text-gray-600">
              Real results that impact your bottom line
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See it in action
            </h2>
            <p className="text-xl text-gray-600">
              Get a glimpse of our intuitive dashboard that makes crosslisting
              effortless
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of sellers who have already scaled their business
            with JellySell®'s powerful features.
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
              onClick={onPricing}
            >
              View Pricing
            </Button>
          </div>
          <p className="text-purple-200 mt-4 text-sm">
            No setup fees • Pay only when you sell • Cancel anytime
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
                  <a href="#" className="hover:text-white">
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
