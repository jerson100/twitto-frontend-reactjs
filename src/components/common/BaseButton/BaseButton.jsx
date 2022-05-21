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
  maxWidth,
}) => {
  const sizeMemo = useMemo(() => size.toUpperCase(), [size]);
  //   console.log(sizeMemo);
  return (
    <BaseButtonStyle
      $size={sizeMemo}
      block={block}
      rounded={rounded}
      onClick={handleClick}
      className={className}
      maxWidth={maxWidth}
    >
      {children}
    </BaseButtonStyle>
  );
};

BaseButton.propTypes = {
  size: PropTypes.oneOf(["SMALLER", "SMALL", "NORMAL", "BIG", "VERY_BIG"]),
  block: PropTypes.bool,
  rounded: PropTypes.bool,
  maxWidth: PropTypes.string,
};

BaseButton.defaultProps = {
  size: "NORMAL",
  block: true,
  rounded: false,
  maxWidth: "100%",
};

export default BaseButton;
