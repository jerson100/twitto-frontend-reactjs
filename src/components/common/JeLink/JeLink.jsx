import React from "react";
import PropTypes from "prop-types";
import { LinkStyled } from "./Link.style";

const JeLink = ({ children, color, target, className }) => {
  return (
    <LinkStyled color={color} target={target} className={className}>
      {children}
    </LinkStyled>
  );
};

JeLink.propTypes = {
  color: PropTypes.oneOf([
    "NORMAL",
    "PURPLE",
    "ORANGE",
    "GREEN",
    "BLACK",
    "BLUE",
    "normal",
    "purple",
    "orange",
    "green",
    "black",
    "blue",
  ]),
  target: PropTypes.oneOf(["__blank", "_self", "_parent", "_top"]),
};

JeLink.defaultProps = {
  color: null,
  target: null,
};

export default JeLink;
