"use client";

import { Button } from "@/frontend/core/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/frontend/core/components/ui/card";
import { MessageCircle, Video, HelpCircle } from "lucide-react";
import Image from "next/image";

interface HelpCenterPageProps {
  onBackToHome: () => void;
  onGetStarted: () => void;
  onFeatures: () => void;
  onPricing: () => void;
}

export function HelpCenterPage({
  onBackToHome,
  onGetStarted,
  onFeatures,
  onPricing,
}: HelpCenterPageProps) {
  const handleEmailSupport = () => {
    window.location.href =
      "mailto:support@jellysell.com?subject=Support Request&body=Hi JellySell Support Team,%0D%0A%0D%0APlease describe your issue or question below:%0D%0A%0D%0A";
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
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-purple-600" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Help Center
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get support and learn how to make the most of JellySell®
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Help</h2>
            <p className="text-xl text-gray-600">
              Choose the best way to get support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Support */}
            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 text-purple-600 mx-auto mb-6" />
                <CardTitle className="text-2xl text-purple-900 mb-4">
                  Contact Support
                </CardTitle>
                <CardDescription className="text-purple-700 mb-6 text-base leading-relaxed">
                  Get detailed help from our support team. We typically respond
                  within 24 hours.
                </CardDescription>
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={handleEmailSupport}
                >
                  Email Support
                </Button>
                <div className="mt-6 text-sm text-purple-600">
                  <p>
                    <strong>Support Hours:</strong> Monday - Friday, 9 AM - 6 PM
                    EST
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Video Tutorials */}
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-8 text-center">
                <Video className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <CardTitle className="text-2xl text-blue-900 mb-4">
                  Video Tutorials
                </CardTitle>
                <CardDescription className="text-blue-700 mb-6 text-base leading-relaxed">
                  Watch step-by-step video guides to learn how to use JellySell®
                  effectively.
                </CardDescription>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent"
                >
                  Watch Tutorials
                </Button>
                <div className="mt-6 text-sm text-blue-600">
                  <p>
                    <strong>Topics covered:</strong> Setup, integrations,
                    listing management, and more
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 mt-20">
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
