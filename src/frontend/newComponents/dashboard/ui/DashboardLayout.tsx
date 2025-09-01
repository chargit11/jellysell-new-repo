"use client";

import { useState } from "react";
import { SidebarProvider } from "@/frontend/core/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function Page({ children }: DashboardLayoutProps) {
  const [activeView, setActiveView] = useState("home"); // example default

  // Example logout handler
  const handleLogout = () => {
    console.log("User logged out");
    // add your logout logic here
  };

  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar
          activeView={activeView}
          setActiveView={setActiveView}
          onLogout={handleLogout}
          unreadMessagesCount={5} // just example values, replace with real data
          pendingOrdersCount={2}
          outOfStockCount={1}
          disconnectedPlatformsCount={0}
        />
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  );
}
