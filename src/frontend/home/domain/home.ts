import {
  BarChart3,
  MessageSquare,
  Package,
  ShoppingCart,
  Link2,
  Zap,
} from "lucide-react";

export const features = [
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

export const platforms = [
  { name: "Etsy", logo: "/images/etsy-logo.webp" },
  { name: "eBay", logo: "/images/ebay-logo.png" },
  { name: "Depop", logo: "/images/depop-logo.jpeg" },
  { name: "Poshmark", logo: "/images/poshmark-logo.webp" },
  { name: "Mercari", logo: "/images/mercari-logo.webp" },
];

export const tweets = [
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
