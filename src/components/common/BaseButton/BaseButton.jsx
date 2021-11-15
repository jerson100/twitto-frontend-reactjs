import React, { useMemo } from "react";
import { BaseButtonStyle } from "./baseButton.style";
import PropTypes from "prop-types";

const BaseButton = ({
  children,
  handleClick,
  size,
  block,
  rounded,
  className,
}) => {
  const sizeMemo = useMemo(() => size.toUpperCase(), [size]);
  //   console.log(sizeMemo);
  return (
    <BaseButtonStyle
      $size={sizeMemo}
      block={block}
      rounded={rounded}
      onClick={handleClick && handleClick}
      className={className}
    >
      {children}
    </BaseButtonStyle>
  );
};

BaseButton.propTypes = {
  size: PropTypes.oneOf(["SMALLER", "SMALL", "NORMAL", "BIG", "VERY_BIG"]),
  block: PropTypes.bool,
  rounded: PropTypes.bool,
};

BaseButton.defaultProps = {
  size: "NORMAL",
  block: false,
  rounded: false,
};

export default BaseButton;
