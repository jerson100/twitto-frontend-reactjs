import React from "react";
import { ParagraphStyle } from "./paragraph.style";
import PropTypes from "prop-types";

const Paragraph = ({
  children,
  ass,
  type,
  size,
  className,
  color,
  marginbottom,
}) => {
  return (
    <ParagraphStyle
      as={!ass ? (!type ? "p" : type) : ass}
      ass={ass}
      $type={!type ? (!ass ? "p" : ass) : type}
      size={size}
      className={className}
      color={color}
      marginbottom={marginbottom}
    >
      {children}
    </ParagraphStyle>
  );
};

Paragraph.propTypes = {
  ass: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", undefined]),
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", undefined]),
  size: PropTypes.string,
  marginbottom: PropTypes.bool,
};

Paragraph.defaultProps = {
  marginbottom: true,
};

export default Paragraph;
