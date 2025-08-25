"use client";

import { useState } from "react";
import { AppSidebar } from "@/frontend/components/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
} from "@/frontend/core/components/ui/sidebar";
import { ListingsView } from "@/frontend/components/listings-view";
import { MessagesView } from "@/frontend/components/messages-view";
import { OrdersView } from "@/frontend/components/orders-view";
import { FinancesView } from "@/frontend/components/finances-view";
import { ConnectionsView } from "@/frontend/components/connections-view";
import { DashboardView } from "@/frontend/components/dashboard-view";
import { AddProductView } from "@/frontend/components/add-product-view";
import { Homepage } from "@/frontend/components/homepage";
import { PricingPage } from "@/frontend/components/pricing-page";
import { FeaturesPage } from "@/frontend/components/features-page";
import { HelpCenterPage } from "@/frontend/components/help-center-page";
import { ConnectionsGuide } from "@/frontend/components/connections-guide";
import { Button } from "@/frontend/core/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/frontend/core/components/ui/input";
import { AboutPage } from "@/frontend/components/about-page";
import { PrivacyPage } from "@/frontend/components/privacy-page";
import { SignInModal } from "@/frontend/components/sign-in-modal";

export default function Dashboard() {
  const [activeView, setActiveView] = useState("homepage");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(3);
  const [pendingOrdersCount, setPendingOrdersCount] = useState(2);
  const [outOfStockCount, setOutOfStockCount] = useState(1);
  const [disconnectedPlatformsCount, setDisconnectedPlatformsCount] =
    useState(2);

  const handleAddProduct = () => {
    setShowAddProduct(true);
  };

  const handleBackToListings = () => {
    setShowAddProduct(false);
  };

  const handleGetStarted = () => {
    setActiveView("dashboard");
  };

  const handleSignIn = () => {
    setShowSignInModal(true);
  };

  const handleLogout = () => {
    setActiveView("homepage");
    setShowAddProduct(false);
  };

  const handlePricing = () => {
    setActiveView("pricing");
  };

  const handleBackToHome = () => {
    setActiveView("homepage");
  };

  const handleFeatures = () => {
    setActiveView("features");
  };

  const handleAbout = () => {
    setActiveView("about");
  };

  const handlePrivacy = () => {
    setActiveView("privacy");
  };

  const handleHelpCenter = () => {
    setActiveView("help-center");
  };

  const handleConnectionsGuide = () => {
    setActiveView("connections-guide");
  };

  const handleSignInSuccess = () => {
    setActiveView("dashboard");
  };

  const handleConnectionsUpdate = (count: number) => {
    setDisconnectedPlatformsCount(count);
  };

  const handleSetActiveView = (view: string) => {
    setActiveView(view);
    // Clear notifications when user visits the respective sections
    if (view === "messages") {
      setUnreadMessagesCount(0);
    } else if (view === "orders") {
      setPendingOrdersCount(0);
    } else if (view === "listings") {
      setOutOfStockCount(0);
    } else if (view === "connections") {
      setDisconnectedPlatformsCount(0);
    }
  };

  const renderView = () => {
    if (activeView === "homepage") {
      return (
        <Homepage
          onGetStarted={handleGetStarted}
          onSignIn={handleSignIn}
          onPricing={handlePricing}
          onFeatures={handleFeatures}
          onAbout={handleAbout}
          onPrivacy={handlePrivacy}
          onHelpCenter={handleHelpCenter}
          onConnectionsGuide={handleConnectionsGuide}
        />
      );
    }

    if (activeView === "pricing") {
      return (
        <PricingPage
          onGetStarted={handleGetStarted}
          onBackToHome={handleBackToHome}
          onFeatures={handleFeatures}
          onPricing={handlePricing}
          onSignIn={handleSignIn}
          onAbout={handleAbout}
          onPrivacy={handlePrivacy}
          setActiveView={setActiveView}
        />
      );
    }

    if (activeView === "features") {
      return (
        <FeaturesPage
          onGetStarted={handleGetStarted}
          onBackToHome={handleBackToHome}
          onPricing={handlePricing}
          onSignIn={handleSignIn}
          onAbout={handleAbout}
          onPrivacy={handlePrivacy}
        />
      );
    }

    if (activeView === "about") {
      return (
        <AboutPage
          onBackToHome={handleBackToHome}
          onGetStarted={handleGetStarted}
          onFeatures={handleFeatures}
          onPricing={handlePricing}
        />
      );
    }

    if (activeView === "privacy") {
      return (
        <PrivacyPage
          onBackToHome={handleBackToHome}
          onGetStarted={handleGetStarted}
          onFeatures={handleFeatures}
          onPricing={handlePricing}
        />
      );
    }

    if (activeView === "help-center") {
      return (
        <HelpCenterPage
          onBackToHome={handleBackToHome}
          onGetStarted={handleGetStarted}
          onFeatures={handleFeatures}
          onPricing={handlePricing}
        />
      );
    }

    if (activeView === "connections-guide") {
      return (
        <ConnectionsGuide
          onBackToHome={handleBackToHome}
          onGetStarted={handleGetStarted}
          onFeatures={handleFeatures}
          onPricing={handlePricing}
        />
      );
    }

    if (showAddProduct) {
      return <AddProductView onBack={handleBackToListings} />;
    }

    switch (activeView) {
      case "dashboard":
        return <DashboardView />;
      case "listings":
        return <ListingsView />;
      case "messages":
        return <MessagesView />;
      case "orders":
        return <OrdersView />;
      case "finances":
        return <FinancesView />;
      case "connections":
        return (
          <ConnectionsView
            onConnectionsUpdate={handleConnectionsUpdate}
            onViewSetupGuides={handleConnectionsGuide}
          />
        );
      default:
        return <DashboardView />;
    }
  };

  // Show homepage, pricing, features, help center, connections guide, etc. without sidebar
  if (
    activeView === "homepage" ||
    activeView === "pricing" ||
    activeView === "features" ||
    activeView === "about" ||
    activeView === "privacy" ||
    activeView === "help-center" ||
    activeView === "connections-guide"
  ) {
    return (
      <>
        {renderView()}
        <SignInModal
          isOpen={showSignInModal}
          onClose={() => setShowSignInModal(false)}
          onSignIn={handleSignInSuccess}
        />
      </>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <SidebarProvider>
        <AppSidebar
          activeView={activeView}
          setActiveView={handleSetActiveView}
          onLogout={handleLogout}
          unreadMessagesCount={unreadMessagesCount}
          pendingOrdersCount={pendingOrdersCount}
          outOfStockCount={outOfStockCount}
          disconnectedPlatformsCount={disconnectedPlatformsCount}
        />
        <SidebarInset className="overflow-x-hidden">
          <div className="flex flex-col h-screen overflow-x-hidden">
            {/* Only show header for non-messages views and non-add-product view and non-setup-guides view */}
            {activeView !== "messages" && !showAddProduct && (
              <header className="sticky top-0 z-10 bg-white flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 w-full">
                <h1 className="text-lg font-semibold capitalize">
                  {activeView}
                </h1>
                <div className="flex items-center gap-4">
                  {activeView === "orders" && (
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search your orders"
                        className="pl-10 w-80 rounded-full border-gray-300"
                      />
                    </div>
                  )}
                  {activeView === "listings" && (
                    <div className="flex items-center gap-3">
                      <Button
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                        onClick={handleAddProduct}
                      >
                        Add a product
                      </Button>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        Import Listings
                      </Button>
                    </div>
                  )}
                </div>
              </header>
            )}
            <div
              className={`flex-1 overflow-x-hidden overflow-y-auto ${
                activeView !== "messages" && !showAddProduct ? "p-4" : ""
              }`}
            >
              {renderView()}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
      <SignInModal
        isOpen={showSignInModal}
        onClose={() => setShowSignInModal(false)}
        onSignIn={handleSignInSuccess}
      />
    </div>
  );
}
