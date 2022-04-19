import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/common/Modal";
import LoginModal from "./components/LoginModal";

const Login = () => {
  const [open, setopen] = useState(true);
  const nagivate = useNavigate();
  const handleClose = () => {
    setopen(false);
    nagivate("/auth");
  };
  return (
    <Modal size="SM" align="center" open={open} onCancel={handleClose}>
      <Modal.Header isDefault />
      <Modal.Body>
        <LoginModal />
      </Modal.Body>
    </Modal>
  );
};

export default Login;
