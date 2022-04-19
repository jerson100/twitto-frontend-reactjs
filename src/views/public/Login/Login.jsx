import React, { useState } from "react";
import Modal from "../../../components/common/Modal";
import LoginContent from "./components/LoginContent";
import LoginPassword from "./components/LoginPassword/LoginPassword";

const Login = () => {
  const [open, setopen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const handleNext = () => {
    setShowPassword(true);
  };
  return (
    <div>
      <Modal
        size="SM"
        align="center"
        open={open}
        onCancel={() => setopen(false)}
      >
        <Modal.Header isDefault />
        <Modal.Body>
          {showPassword ? (
            <LoginPassword />
          ) : (
            <LoginContent handleNext={handleNext} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
