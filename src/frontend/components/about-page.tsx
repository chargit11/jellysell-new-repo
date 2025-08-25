"use client";

import { Button } from "@/frontend/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/frontend/components/ui/card";
import { ArrowRight, Users, Target, Lightbulb, Heart } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Users,
    title: "Seller-First Approach",
    description:
      "Every feature we build is designed with sellers in mind. We listen to your feedback and continuously improve based on your needs.",
  },
  {
    icon: Target,
    title: "Simplicity & Efficiency",
    description:
      "We believe selling online should be simple, not complicated. Our platform eliminates complexity while maximizing your reach.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We're constantly exploring new ways to help sellers succeed, from AI-powered listing optimization to automated workflows.",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "We're building more than software – we're creating a community of successful sellers who support each other's growth.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "The Spark",
    description:
      "I had the idea while selling fidget toys on TikTok Shop, wondering if there was a better way to reach multiple markets efficiently.",
  },
  {
    year: "2024",
    title: "Building the Vision",
    description:
      "I spent the entire year developing and refining JellySell®, working tirelessly to create the perfect crosslisting solution.",
  },
  {
    year: "2025",
    title: "Launch & Growth",
    description:
      "After months of final development, JellySell® launched and began helping thousands of sellers streamline their businesses.",
  },
];

interface AboutPageProps {
  onBackToHome: () => void;
  onGetStarted: () => void;
  onFeatures: () => void;
  onPricing: () => void;
}

export function AboutPage({
  onBackToHome,
  onGetStarted,
  onFeatures,
  onPricing,
}: AboutPageProps) {
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
              <Button variant="ghost" onClick={onPricing}>
                Pricing
              </Button>
              <Button variant="outline">Sign In</Button>
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our story is
            <br />
            <span className="text-purple-600">your success</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            JellySell® was born from a simple frustration: managing multiple
            marketplace accounts shouldn't be so complicated. Today, we're
            helping thousands of sellers streamline their businesses.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How it all started
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              It was late 2023 when I was busy selling fidget toys on TikTok
              Shop. Business was good, but I couldn't shake the feeling that I
              was missing out on potential customers by limiting myself to just
              one platform.
            </p>

            <p className="mb-6">
              As I watched my fidget toy inventory move through TikTok Shop, I
              kept wondering: "What if I could reach customers on Etsy, eBay,
              Depop, Poshmark, and Mercari too? But how could I manage all those
              platforms without drowning in administrative work?"
            </p>

            <p className="mb-6">
              The more I thought about it, the more I realized this wasn't just
              my problem. Thousands of sellers were probably facing the same
              challenge – wanting to expand their reach but being held back by
              the complexity of managing multiple marketplace accounts.
            </p>

            <p className="mb-6">
              That spark of an idea consumed me throughout 2024. I spent the
              entire year developing, testing, and refining what would become
              JellySell®. Every late night coding session, every feature
              iteration, every user feedback session was driven by one goal:
              making crosslisting as simple as selling on a single platform.
            </p>

            <p className="mb-6">
              Through most of 2025, I continued perfecting the platform, adding
              the unified messaging system, advanced analytics, and seamless
              inventory sync that sellers needed. I didn't just want to build
              software; I wanted to give sellers like myself the freedom to
              focus on what we loved most – growing our business.
            </p>

            <p>
              Today, JellySell® serves thousands of sellers worldwide, from
              TikTok Shop entrepreneurs to full-time marketplace sellers. Every
              feature we build, every update we release, is guided by my
              original vision: making multi-platform selling as effortless as
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our journey
            </h2>
            <p className="text-xl text-gray-600">Key milestones in our story</p>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-8">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-purple-600">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What drives us
            </h2>
            <p className="text-xl text-gray-600">
              The values that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our mission</h2>
          <p className="text-2xl text-gray-700 leading-relaxed mb-8">
            To empower every seller with the tools they need to succeed across
            multiple marketplaces, without the complexity and time drain of
            managing each platform separately.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe that selling online should be about creativity, customer
            relationships, and growth – not about wrestling with multiple
            dashboards and repetitive tasks. That's why we're committed to
            continuously improving JellySell® to make multi-platform selling as
            simple as possible.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to be part of our story?
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
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3 bg-transparent"
              onClick={() =>
                (window.location.href =
                  "mailto:support@jellysell.com?subject=About JellySell")
              }
            >
              Contact Us
            </Button>
          </div>
          <p className="text-purple-200 mt-4 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
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
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
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
