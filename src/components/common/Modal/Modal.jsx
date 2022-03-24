import React from "react";
import PropTypes from "prop-types";
import {
  ModalBackgroundStyle,
  ModalContainerStyle,
  ModalPanelStyle,
} from "./modal.style";

const Modal = ({ size, align, children }) => {
  return (
    <ModalPanelStyle>
      <ModalBackgroundStyle $size={size} align={align}>
        <ModalContainerStyle>{children}</ModalContainerStyle>
      </ModalBackgroundStyle>
    </ModalPanelStyle>
  );
};

Modal.propTypes = {
  size: PropTypes.oneOf([
    "SM",
    "MD",
    "LG",
    "XL",
    "XLL",
    "sm",
    "md",
    "lg",
    "xl",
    "xll",
  ]),
  align: PropTypes.oneOf(["start", "center", "end"]),
};

Modal.defaultProps = {
  size: "SM",
  align: "center",
};

export default Modal;
