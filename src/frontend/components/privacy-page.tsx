"use client";

import { Button } from "@/frontend/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/frontend/components/ui/card";
import { Eye, Lock, Users, FileText, Mail, Shield } from "lucide-react";
import Image from "next/image";

const sections = [
  {
    icon: FileText,
    title: "Information We Collect",
    content: [
      "Account information (name, email, business details)",
      "Marketplace connection data (API tokens, store information)",
      "Product listings and inventory data",
      "Order and transaction information",
      "Customer messages and communications",
      "Usage analytics and performance metrics",
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "Provide and maintain our crosslisting services",
      "Sync data across your connected marketplace accounts",
      "Generate analytics and performance reports",
      "Send important service notifications and updates",
      "Provide customer support and technical assistance",
      "Improve our platform based on usage patterns",
    ],
  },
  {
    icon: Users,
    title: "Information Sharing",
    content: [
      "We do not sell your personal information to third parties",
      "Data is shared with connected marketplaces as necessary for service functionality",
      "Anonymous, aggregated data may be used for research and improvement",
      "Information may be disclosed if required by law or to protect our rights",
      "Service providers may access data solely to provide technical services",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "All data is encrypted in transit and at rest",
      "We use industry-standard security measures and protocols",
      "Regular security audits and vulnerability assessments",
      "Access controls and authentication for all team members",
      "Secure data centers with physical and digital protection",
      "Incident response procedures for any security events",
    ],
  },
];

interface PrivacyPageProps {
  onBackToHome: () => void;
  onGetStarted: () => void;
  onFeatures: () => void;
  onPricing: () => void;
}

export function PrivacyPage({
  onBackToHome,
  onGetStarted,
  onFeatures,
  onPricing,
}: PrivacyPageProps) {
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
            <Shield className="h-8 w-8 text-purple-600" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Privacy Policy
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information when you use JellySell®.
          </p>

          <div className="text-sm text-gray-500">
            Last updated: July 29, 2025
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="text-lg mb-6">
              At JellySell® (operated by HAN-E LLC), we are committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy describes how we collect, use,
              disclose, and safeguard your information when you use our
              crosslisting platform and services.
            </p>

            <p className="mb-6">
              By using JellySell®, you agree to the collection and use of
              information in accordance with this policy. If you do not agree
              with our policies and practices, please do not use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section) => (
              <Card
                key={section.title}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow h-fit"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Data Retention
              </h3>
              <div className="prose text-gray-700 leading-relaxed">
                <p className="mb-4">
                  We retain your personal information only for as long as
                  necessary to provide our services and fulfill the purposes
                  outlined in this policy.
                </p>
                <p className="mb-4">
                  When you delete your account, we will delete your personal
                  information within 30 days, except where we are required to
                  retain certain information for legal or regulatory purposes.
                </p>
                <p>
                  Marketplace data may be retained longer to maintain service
                  functionality and comply with platform requirements.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Third-Party Services
              </h3>
              <div className="prose text-gray-700 leading-relaxed">
                <p className="mb-4">
                  JellySell® integrates with third-party marketplace APIs (Etsy,
                  eBay, Depop, Poshmark, Mercari) to provide our services.
                </p>
                <p className="mb-4">
                  Each marketplace has its own privacy policy and data
                  practices. We encourage you to review their policies to
                  understand how they handle your information.
                </p>
                <p>
                  We are not responsible for the privacy practices of these
                  third-party services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-purple-600" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions About Privacy?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            If you have any questions about this Privacy Policy or our data
            practices, please don't hesitate to contact us.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Email:</strong> support@jellysell.com
            </p>
            <p>
              <strong>Company:</strong> HAN-E LLC
            </p>
            <p>
              <strong>Subject Line:</strong> Privacy Policy Inquiry
            </p>
          </div>

          <Button
            size="lg"
            className="mt-8 bg-purple-600 hover:bg-purple-700"
            onClick={() =>
              (window.location.href =
                "mailto:support@jellysell.com?subject=Privacy Policy Inquiry")
            }
          >
            Contact Us About Privacy
          </Button>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Policy Updates
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed text-center">
            <p className="mb-6">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors.
            </p>

            <p className="mb-6">
              When we make material changes, we will notify you by email or
              through our platform. We encourage you to review this policy
              periodically to stay informed about how we protect your
              information.
            </p>

            <p className="text-sm text-gray-500">
              This policy is effective as of July 29, 2025.
            </p>
          </div>
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
