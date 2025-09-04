"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
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
                <a href="#" className="hover:text-white" onClick={() => {}}>
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white" onClick={() => {}}>
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white" onClick={() => {}}>
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
                <a href="#" className="hover:text-white" onClick={() => {}}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white" onClick={() => {}}>
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
  );
};

export default Footer;
