import React, { useState } from "react";
import LoginPassword from "../LoginPassword";
import LoginContent from "../LoginContent";

const LoginModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleNext = () => {
    setShowPassword(true);
  };
  return (
    <>
      {showPassword ? (
        <LoginPassword />
      ) : (
        <LoginContent handleNext={handleNext} />
      )}
    </>
  );
};

export default LoginModal;
