import React from "react";
import PropTypes from "prop-types";
import { LinkStyled } from "./Link.style";

const JeLink = ({ children, color, target, className, href }) => {
  return (
    <LinkStyled color={color} target={target} className={className} href={href}>
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
  href: PropTypes.string,
};

JeLink.defaultProps = {
  color: null,
  target: null,
  string: null,
};

export default JeLink;
