import React from "react";
import svgs from "../../../utils/constants/svg";
import { IconContainerStyle, IconSvgStyle } from "./icon.style";
import PropTypes from "prop-types";

const Icon = ({ svg, size, color }) => {
  return (
    <IconContainerStyle $size={size}>
      {svgs[svg] && (
        <IconSvgStyle viewBox={svgs[svg].viewBox} color={color}>
          {svgs[svg].svg}
        </IconSvgStyle>
      )}
    </IconContainerStyle>
  );
};

Icon.PropTypes = {
  size: PropTypes.oneOf(["SMALLER", "SMALL", "NORMAL", "BIG", "VERY_BIG"]),
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: "NORMAL",
  color: null,
};

export default Icon;
