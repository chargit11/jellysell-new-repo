"use client";

import { useRouter, usePathname } from "next/navigation"; // ✅
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/frontend/core/components/ui/sidebar";
import Image from "next/image";
import { Button } from "@/frontend/core/components/ui/button";
import {
  Package,
  MessageSquare,
  ShoppingCart,
  DollarSign,
  Link2,
  BarChart3,
  Menu,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    id: "dashboard",
    path: "/newdashboard",
  },
  {
    title: "Listings",
    icon: Package,
    id: "listings",
    path: "/newdashboard/listings",
  },
  {
    title: "Messages",
    icon: MessageSquare,
    id: "messages",
    path: "/newdashboard/messages",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    id: "orders",
    path: "/newdashboard/orders",
  },
  {
    title: "Finances",
    icon: DollarSign,
    id: "finances",
    path: "/newdashboard/finances",
  },
  {
    title: "Connections",
    icon: Link2,
    id: "connections",
    path: "/newdashboard/connections",
  },
];

interface AppSidebarProps {
  onLogout: () => void;
  unreadMessagesCount?: number;
  pendingOrdersCount?: number;
  outOfStockCount?: number;
  disconnectedPlatformsCount?: number;
}

export function AppSidebar({
  onLogout,
  unreadMessagesCount = 3,
  pendingOrdersCount = 2,
  outOfStockCount = 1,
  disconnectedPlatformsCount = 2,
}: AppSidebarProps) {
  const { toggleSidebar, state } = useSidebar();
  const router = useRouter();
  const pathname = usePathname(); // ✅ to highlight active item

  const getNotificationBadge = (itemId: string) => {
    let count = 0;
    if (itemId === "messages" && unreadMessagesCount > 0)
      count = unreadMessagesCount;
    else if (itemId === "orders" && pendingOrdersCount > 0)
      count = pendingOrdersCount;
    else if (itemId === "listings" && outOfStockCount > 0)
      count = outOfStockCount;
    else if (itemId === "connections" && disconnectedPlatformsCount > 0)
      count = disconnectedPlatformsCount;

    if (count === 0) return null;

    if (state === "collapsed") {
      return (
        <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1">
          <div className="bg-purple-500 text-white text-xs font-medium px-1 py-0.5 rounded-full min-w-[16px] h-4 flex items-center justify-center">
            {count > 9 ? "9+" : count}
          </div>
        </div>
      );
    }

    return (
      <div className="ml-auto flex-shrink-0">
        <div className="bg-purple-500 text-white text-xs font-medium px-1.5 py-0.5 rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
          {count > 9 ? "9+" : count}
        </div>
      </div>
    );
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-2">
            <Image
              src="/images/new-jellysell-logo.png"
              alt="jellysell Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            {state !== "collapsed" && (
              <span className="text-lg font-semibold">jellysell</span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="h-8 w-8"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id} className="relative">
                  <SidebarMenuButton
                    isActive={pathname === item.path} // ✅ highlight active route
                    onClick={() => router.push(item.path)} // ✅ navigate
                    tooltip={item.title}
                    className={`flex items-center w-full ${
                      state === "collapsed"
                        ? "justify-center"
                        : "justify-between"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </div>
                    {state !== "collapsed" && getNotificationBadge(item.id)}
                  </SidebarMenuButton>
                  {state === "collapsed" && getNotificationBadge(item.id)}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Log Out Section */}
      <div className="mt-auto p-4 border-t">
        <div
          onClick={onLogout}
          className={`flex items-center ${
            state === "collapsed" ? "justify-center" : "gap-3"
          } cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-colors`}
        >
          <div className="h-8 w-8 rounded-full border-2 border-gray-400 flex items-center justify-center bg-white flex-shrink-0">
            <LogOut className="h-4 w-4 text-gray-600" />
          </div>
          {state !== "collapsed" && (
            <span className="text-sm font-medium text-gray-700">Log out</span>
          )}
        </div>
      </div>
    </Sidebar>
  );
}
