import React from "react";
import { ParagraphStyle } from "./paragraph.style";
import PropTypes from "prop-types";

const Paragraph = ({ children, as, type }) => {
  return (
    <ParagraphStyle
      as={!as ? (!type ? "p" : type) : as}
      $type={!type ? (!as ? "p" : as) : type}
    >
      {children}
    </ParagraphStyle>
  );
};

Paragraph.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", undefined]),
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", undefined]),
};

export default Paragraph;
