import React from "react";
import PropTypes from "prop-types";
import { ButtonStyle } from "./button.style";
import Icon from "../Icon/Icon.jsx";

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
  className,
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
      className={className}
      isText={children === null}
    >
      {Icon && <div className="icon">{Icon}</div>}
      {children && <span className="text">{children}</span>}
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
    "BLUE",
    "LIGHT_NIGHT",
    "normal",
    "purple",
    "orange",
    "green",
    "black",
    "blue",
    "light_night",
  ]),
  maxWidth: PropTypes.string,
};

Button.defaultProps = {
  size: "NORMAL",
  block: true,
  rounded: false,
  type: "DEFAULT", //actua dependiendo el tema seleccionado.
  color: undefined,
  maxWidth: "100%",
};

export default Button;
