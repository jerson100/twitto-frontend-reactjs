import React from "react";
import svgs from "../../../utils/constants/svg";
import { IconContainerStyle, IconSvgStyle } from "./icon.style";
import PropTypes from "prop-types";

const Icon = ({ svg, size, color, handleClick, className }) => {
  return (
    <IconContainerStyle $size={size} className={className}>
      {svgs[svg] && (
        <IconSvgStyle
          viewBox={svgs[svg].viewBox}
          color={color}
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleClick}
        >
          {svgs[svg].svg}
        </IconSvgStyle>
      )}
    </IconContainerStyle>
  );
};

Icon.propTypes = {
  size: PropTypes.oneOf(["SMALLER", "SMALL", "NORMAL", "BIG", "VERY_BIG"]),
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: "NORMAL",
  color: null,
};

export default Icon;
