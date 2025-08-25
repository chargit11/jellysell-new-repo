"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
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
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => {}}>
              Features
            </Button>
            <Button variant="ghost" onClick={() => {}}>
              Pricing
            </Button>
            <Button variant="outline" onClick={() => {}}>
              Sign In
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => {}}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
