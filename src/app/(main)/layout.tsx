"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/frontend/stores/authStore/auth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, token } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (token && user) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }, [token, user, router]);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
