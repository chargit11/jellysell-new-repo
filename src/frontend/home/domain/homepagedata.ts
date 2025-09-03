import {
  Package,
  MessageSquare,
  ShoppingCart,
  BarChart3,
  Link2,
  Zap,
} from "lucide-react";

export const homepageData = {
  hero: {
    title:
      "JellySell® is the ultimate crosslisting platform that helps you expand your reach across multiple marketplaces while managing everything from a single, powerful dashboard.",
    cta: "Start Free - No Credit Card Required",
    platforms: [
      { name: "Etsy", logo: "/images/etsy-logo.webp" },
      { name: "eBay", logo: "/images/ebay-logo.png" },
      { name: "Depop", logo: "/images/depop-logo.jpeg" },
      { name: "Poshmark", logo: "/images/poshmark-logo.webp" },
      { name: "Mercari", logo: "/images/mercari-logo.webp" },
    ],
  },
  dashboard: {
    title: "See JellySell® in action",
    subtitle:
      "Get a glimpse of our intuitive dashboard that makes crosslisting effortless.",
    image: {
      src: "/images/jellysell-comprehensive-dashboard.png",
      alt: "JellySell® comprehensive dashboard",
      width: 1400,
      height: 900,
    },
  },
  features: [
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
  ],
  tweets: [
    {
      name: "Okonomiyakeria",
      username: "okonomiyakeria",
      handle: "@okonomiyakeria",
      content:
        "I have used 4 of these 5 sites separately, but I'm now going to list my used Diesel clothing once on JellySell...",
      avatar: "/images/okonomiyakeria-real-avatar.jpg",
      verified: false,
      tweetUrl: "https://x.com/okonomiyakeria/status/1954609024487567867",
    },
    {
      name: "Whirled Juice",
      username: "WhirledJuice",
      handle: "@WhirledJuice",
      content:
        "I have a couple extra blender accessories that I'll sell on JellySell.com...",
      avatar: "/images/whirled-juice-avatar.png",
      verified: false,
      tweetUrl: "https://x.com/WhirledJuice/status/1954611242041299068",
    },
    {
      name: "Yo's Clothes",
      username: "YosClothes",
      handle: "@YosClothes",
      content:
        "The unified messaging in @jellysell_ is what I've been looking for...",
      avatar: "/images/yos-clothes-avatar.jpg",
      verified: false,
      tweetUrl: "https://x.com/YosClothes/status/1954617503046676874",
    },
  ],
  cta: {
    title: "Ready to scale your business?",
    subtitle:
      "Join thousands of sellers who have already transformed their business with JellySell®.",
    startBtn: "Start Free",
    salesBtn: "Contact Sales",
    footerNote: "No credit card required • Cancel anytime",
  },
};
