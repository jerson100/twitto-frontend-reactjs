import React from "react";
import { SpaceStyled } from "./space.style";
import PropTypes from "prop-types";

const Space = ({ type, size, children }) => {
  return (
    <SpaceStyled type={type} size={size}>
      {children}
    </SpaceStyled>
  );
};

Space.propTypes = {
  type: PropTypes.oneOf(["SMALL", "NORMAL", "BIG"]),
  size: PropTypes.string,
};

Space.defaultProps = {
  type: "NORMAL",
  size: null,
};
export default Space;
