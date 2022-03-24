import React, { useCallback } from "react";
import modalContext from "./../contexts/modalContext";
import PropTypes from "prop-types";

const ModalContextProvider = ({ show, onCancel, children }) => {
  const handleClose = useCallback(() => {
    onCancel();
  }, []);
  return (
    <modalContext.Provider value={{ show, handleClose }}>
      {children}
    </modalContext.Provider>
  );
};

ModalContextProvider.propTypes = {
  show: PropTypes.bool,
};

ModalContextProvider.defaultProps = {
  show: false,
};

export default ModalContextProvider;
