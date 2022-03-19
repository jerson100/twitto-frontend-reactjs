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
  maxWidth,
  Icon,
}) => {
  return (
    <ButtonInitial
      handleClick={handleClick}
      size={size}
      block={block}
      rounded={rounded}
      type={type}
      color={color}
      maxWidth={maxWidth}
      Icon={Icon}
    >
      {children}
    </ButtonInitial>
  );
};

const ButtonInitial = ({
  handleClick,
  size,
  block,
  rounded,
  type,
  color,
  maxWidth,
  children,
  Icon,
}) => {
  return (
    <ButtonStyle
      handleClick={handleClick}
      size={size}
      block={block}
      rounded={rounded}
      type={type}
      color={color}
      maxWidth={maxWidth}
    >
      <div className="icon">{Icon && Icon}</div>
      <span className="text">{children}</span>
    </ButtonStyle>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  size: PropTypes.oneOf(["SMALL", "NORMAL", "BIG", "VERY_BIG"]),
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
  maxWidth: PropTypes.string,
};

Button.defaultProps = {
  size: "NORMAL",
  block: false,
  rounded: false,
  type: "DEFAULT", //actua dependiendo el tema seleccionado.
  color: undefined,
  maxWidth: "100%",
};

export default Button;
