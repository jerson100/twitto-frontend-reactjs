import React from "react";
import PropTypes from "prop-types";
import { LinkStyled } from "./Link.style";

const Link = ({ childen, color, target }) => {
  return (
    <LinkStyled color={color} target={target}>
      {childen}
    </LinkStyled>
  );
};

Link.PropTypes = {
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

Link.defaultProps = {
  color: null,
  target: null,
};

export default Link;
