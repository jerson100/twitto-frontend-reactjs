import React, { useState } from "react";
import Modal from "../../../components/common/Modal";

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
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
