import React from "react";
import { ParagraphStyle } from "./paragraph.style";
import PropTypes from "prop-types";

const Paragraph = ({ children, ass, type, size, className, color }) => {
  console.log(color);
  return (
    <ParagraphStyle
      as={!ass ? (!type ? "p" : type) : ass}
      $type={!type ? (!ass ? "p" : ass) : type}
      size={size}
      className={className}
      color={color}
    >
      {children}
    </ParagraphStyle>
  );
};

Paragraph.propTypes = {
  ass: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", undefined]),
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", undefined]),
  size: PropTypes.string,
};

export default Paragraph;
