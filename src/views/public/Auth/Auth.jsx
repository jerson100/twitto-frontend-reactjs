import React, { useState } from "react";
import Modal from "../../../components/common/Modal";
import { AuthContainerStyle } from "./auth.style";
import AuthBody from "./components/AuthBody";
import AuthFooter from "./components/AuthFooter";
// import Top from "./components/Top";

const Auth = () => {
  const [open, setopen] = useState(true);
  return (
    <AuthContainerStyle>
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
      {/* <AuthBody />
      <AuthFooter /> */}
    </AuthContainerStyle>
  );
};

export default Auth;
