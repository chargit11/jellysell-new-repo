"use client";

import React, { useState } from "react";
import { SignInModal } from "../components/login/SignInModal";
import { Button } from "@/frontend/core/components/ui/button";
import { SignUpModal } from "../components/signup/Signup";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Signup Modal</Button>

      <SignUpModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSignUp={() => {
          console.log("User Registered!");
        }}
      />
    </div>
  );
};

export default Signup;
