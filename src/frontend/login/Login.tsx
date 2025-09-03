"use client";

import React, { useState } from "react";
import { SignInModal } from "../newComponents/login/SignInModal";
import { Button } from "@/frontend/core/components/ui/button";

const Login = () => {
  const [isOpen, setIsOpen] = useState(true); // default open for demo

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Login Modal</Button>

      <SignInModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSignIn={() => {
          console.log("User signed in!");
        }}
      />
    </div>
  );
};

export default Login;
