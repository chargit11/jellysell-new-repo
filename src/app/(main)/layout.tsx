import { DashboardLayout } from "@/frontend/newComponents/dashboard";
import { Inter } from "next/font/google";
import "../globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JellySell",
  description:
    "The ultimate crosslisting platform for multi-marketplace sellers",
  icons: {
    icon: "/favicon.ico",
  },
  generator: "v0.dev",
};

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardLayout>{children}</DashboardLayout>;
      </body>
    </html>
  );
}
