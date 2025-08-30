// frontend/domain/featuresData.ts
import {
  Package,
  MessageSquare,
  ShoppingCart,
  BarChart3,
  Clock,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";

export const heroFeatures = [
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

export const platforms = [
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

export const benefits = [
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
