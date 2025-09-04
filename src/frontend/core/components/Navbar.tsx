"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { SignInModal } from "@/frontend/components/login/SignInModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/images/new-jellysell-logo.png"
              alt="jellysell Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold text-gray-900">jellysell</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/feature">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/pricing">Pricing</Link>
            </Button>
            {/* Sign In Modal Trigger */}
            <Button variant="outline" onClick={() => setIsLoginOpen(true)}>
              Sign In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2">
            <Button variant="ghost" asChild>
              <Link href="/feature">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/pricing">Pricing</Link>
            </Button>
            {/* Mobile Sign In Modal Trigger */}
            <Button variant="outline" onClick={() => setIsLoginOpen(true)}>
              Sign In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Sign In Modal */}
      <SignInModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSignIn={() => console.log("Signed in!")}
      />
    </header>
  );
};

export default Navbar;
