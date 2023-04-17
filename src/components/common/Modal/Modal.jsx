import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import {
  ModalBackgroundStyle,
  ModalContainerStyle,
  ModalPanelStyle,
} from "./modal.style";
import ModalContextProvider from "./providers/ModalContextProvider";
import { modal as modalVariants } from "./variants/modal.varitans";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { useHiddenBodyScroll } from "../../../hooks/useHiddenBodyScroll";

const Modal = ({ size, align, children, open, onCancel, space }) => {
  return createPortal(
    <>
      <AnimatePresence>
        {open && (
          <ModalContextProvider show={open} onCancel={onCancel}>
            <ModalPanel size={size} align={align} space={space}>
              {children}
            </ModalPanel>
          </ModalContextProvider>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
};

const ModalPanel = ({ size, align, space, children }) => {
  useHiddenBodyScroll();
  return (
    <ModalPanelStyle>
      <ModalBackgroundStyle $size={size} align={align}>
        <ModalContainerStyle
          space={space}
          variants={modalVariants}
          animate="open"
          initial="exit"
          exit="exit"
        >
          {children}
        </ModalContainerStyle>
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
    "ALL",
    "sm",
    "md",
    "lg",
    "xl",
    "xll",
    "all",
  ]),
  align: PropTypes.oneOf(["start", "center", "stretch", "end"]),
  open: PropTypes.bool,
  onCancel: PropTypes.func,
  space: PropTypes.bool,
};

Modal.defaultProps = {
  size: "SM",
  align: "center",
  open: false,
  onCancel: null,
  space: true,
};

export default Modal;
