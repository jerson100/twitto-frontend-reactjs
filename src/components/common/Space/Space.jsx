import React from "react";
import { SpaceStyled } from "./space.style";
import PropTypes from "prop-types";

const Space = ({ size, children }) => {
  return <SpaceStyled size={size}>{children}</SpaceStyled>;
};

Space.propTypes = {
  size: PropTypes.oneOf(["SMALL", "NORMAL", "BIG"]),
};

Space.defaultProps = {
  size: "NORMAL",
};
export default Space;
