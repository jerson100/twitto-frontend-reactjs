import React, { useState } from "react";
import Modal from "../../../components/common/Modal";
import LoginContent from "./components/LoginContent";

const Login = () => {
  const [open, setopen] = useState(true);
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
          <LoginContent />
        </Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
