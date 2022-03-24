import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import {
  ModalBackgroundStyle,
  ModalContainerStyle,
  ModalPanelStyle,
} from "./modal.style";
import ModalContextProvider from "./providers/ModalContextProvider";

const Modal = ({ size, align, children, open, onCancel }) => {
  return createPortal(
    <>
      {open && (
        <ModalContextProvider show={open} onCancel={onCancel}>
          <ModalPanelStyle>
            <ModalBackgroundStyle $size={size} align={align}>
              <ModalContainerStyle>{children}</ModalContainerStyle>
            </ModalBackgroundStyle>
          </ModalPanelStyle>
        </ModalContextProvider>
      )}
    </>,
    document.body
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
  open: PropTypes.bool,
  onCancel: PropTypes.func,
};

Modal.defaultProps = {
  size: "SM",
  align: "center",
  open: false,
  onCancel: null,
};

export default Modal;
