import React from "react";
import PropTypes from "prop-types";
import { ButtonStyle } from "./button.style";

const Button = ({
  children,
  handleClick,
  size,
  block,
  rounded,
  type,
  color,
}) => {
  return (
    <ButtonStyle
      handleClick={handleClick}
      size={size}
      block={block}
      rounded={rounded}
      type={type}
      color={color}
    >
      {children}
    </ButtonStyle>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  size: PropTypes.oneOf(["SMALLER", "SMALL", "NORMAL", "BIG", "VERY_BIG"]),
  block: PropTypes.bool,
  rounded: PropTypes.bool,
  type: PropTypes.oneOf(["DEFAULT", "GOSTH"]),
  color: PropTypes.oneOf([
    "NORMAL",
    "PURPLE",
    "ORANGE",
    "GREEN",
    "BLACK",
    "normal",
    "purple",
    "orange",
    "green",
    "black",
  ]),
};

Button.defaultProps = {
  size: "NORMAL",
  block: false,
  rounded: false,
  type: "DEFAULT", //actua dependiendo el tema seleccionado.
  color: undefined,
};

export default Button;
