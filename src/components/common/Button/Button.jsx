import React from "react";
import PropTypes from "prop-types";
import { ButtonStyle, GosthButtonStyle } from "./button.style";
// import Icon from "../Icon/Icon.jsx";

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
  switch (type) {
    case "DEFAULT":
      return (
        <ButtonStyle
          onClick={handleClick}
          $size={size}
          block={block}
          rounded={rounded}
          $color={color}
          maxWidth={maxWidth}
          className={className}
          isText={children !== null || children !== undefined}
        >
          {Icon && <div className="icon">{Icon}</div>}
          {children && <span className="text">{children}</span>}
        </ButtonStyle>
      );
    case "GOSTH":
      return (
        <GosthButtonStyle
          onClick={handleClick}
          $size={size}
          block={block}
          rounded={rounded}
          $color={color}
          maxWidth={maxWidth}
          className={className}
          isText={children !== null || children !== undefined}
        >
          {Icon ? <div className="icon">{Icon}</div> : null}
          {children ? <span className="text">{children}</span> : null}
        </GosthButtonStyle>
      );
    default:
      return null;
  }

  //   console.log(children !== undefined);
  //   return (
  // <ButtonStyle
  //   handleClick={handleClick}
  //   size={size}
  //   block={block}
  //   rounded={rounded}
  //   type={type}
  //   color={color}
  //   maxWidth={maxWidth}
  //   className={className}
  //   isText={children != null || children != undefined}
  // >
  //   {Icon && <div className="icon">{Icon}</div>}
  //   {children && <span className="text">{children}</span>}
  // </ButtonStyle>
  //   );
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
    "BLUE",
    "LIGHT_NIGHT",
  ]),
  maxWidth: PropTypes.string,
};

Button.defaultProps = {
  size: "NORMAL",
  block: false,
  rounded: false,
  type: "DEFAULT", //actua dependiendo el tema seleccionado.
  color: "NORMAL",
  maxWidth: "100%",
};

export default React.memo(Button);
