import {
  Package,
  MessageSquare,
  ShoppingCart,
  DollarSign,
  Link2,
  BarChart3,
} from "lucide-react";

export const menuItems = [
  { title: "Dashboard", icon: BarChart3, id: "dashboard", path: "/dashboard" },
  {
    title: "Listings",
    icon: Package,
    id: "listings",
    path: "/dashboard/listings",
  },
  {
    title: "Messages",
    icon: MessageSquare,
    id: "messages",
    path: "/dashboard/messages",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    id: "orders",
    path: "/dashboard/orders",
  },
  {
    title: "Finances",
    icon: DollarSign,
    id: "finances",
    path: "/dashboard/finances",
  },
  {
    title: "Connections",
    icon: Link2,
    id: "connections",
    path: "/dashboard/connections",
  },
];
