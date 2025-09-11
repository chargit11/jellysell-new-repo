"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/frontend/core/components/ui/dialog";
import { Button } from "@/frontend/core/components/ui/button";
import { Input } from "@/frontend/core/components/ui/input";
import { Label } from "@/frontend/core/components/ui/label";
import { Separator } from "@/frontend/core/components/ui/separator";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import useAuthStore from "@/frontend/stores/authStore/auth";
import { useRouter } from "next/navigation";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: () => void;
}

export function SignInModal({ isOpen, onClose, onSignIn }: SignInModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, loading, error, user } = useAuthStore();
  const router = useRouter();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginUser(email, password);

    if (!error) {
      onClose();
      router.push("/newdashboard");
    }
  };

  // const handleGoogleSignIn = () => {
  //   try {
  //     window.location.href = "/api/auth/google";
  //   } catch (error) {
  //     console.error("Redirect failed:", error);
  //   }
  // };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="w-full max-w-[90vw] sm:max-w-md 
                          rounded-lg sm:rounded-xl px-4 sm:px-6 py-6 sm:py-8"
      >
        <DialogHeader>
          <div className="flex items-center gap-2 justify-center mb-2">
            <Image
              src="/images/new-jellysell-logo.png"
              alt="jellysell Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="text-lg sm:text-xl font-bold text-gray-900">
              jellysell
            </span>
          </div>
          <DialogTitle className="text-center text-lg sm:text-2xl">
            Welcome back!
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Email Sign In Form */}
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm sm:text-base">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 text-sm sm:text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-sm sm:text-base h-10 sm:h-12"
            >
              Sign In
            </Button>
          </form>

          <div className="text-center text-xs sm:text-sm text-gray-600">
            <a href="#" className="text-purple-600 hover:underline">
              Forgot your password?
            </a>
          </div>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm uppercase">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          {/* Google Sign In */}
          <Button
            variant="outline"
            className="w-full h-10 sm:h-12 text-gray-700 border-gray-300 hover:bg-gray-50 flex items-center justify-center text-sm sm:text-base"
            // onClick={handleGoogleSignIn}
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="text-center text-xs sm:text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-purple-600 hover:underline font-medium">
              Sign up
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
