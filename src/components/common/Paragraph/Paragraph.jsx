import React from "react";
import { ParagraphStyle } from "./paragraph.style";
import PropTypes from "prop-types";

const Paragraph = ({ children, as, type, size, className }) => {
  return (
    <ParagraphStyle
      as={!as ? (!type ? "p" : type) : as}
      $type={!type ? (!as ? "p" : as) : type}
      size={size}
      className={className}
    >
      {children}
    </ParagraphStyle>
  );
};

Paragraph.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", undefined]),
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", undefined]),
  size: PropTypes.string,
};

export default Paragraph;
