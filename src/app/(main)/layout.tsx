"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import useAuthStore from "@/frontend/stores/authStore/auth";
import { DashboardLayout } from "@/frontend/components/dashboard";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, token } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!token || !user) {
      router.push("/");
    }
  }, [token, user, router]);

  const isDashboardRoute = pathname?.startsWith("/newdashboard");

  return (
    <html lang="en">
      <body className={inter.className}>
        {isDashboardRoute ? (
          <DashboardLayout>{children}</DashboardLayout>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
