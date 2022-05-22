import React from "react";
import {
  SeparatorContainerStyle,
  SeparatortextStyle,
  SeparetorLineStyle,
} from "./separator.style";
import Proptypes from "prop-types";

const Separator = ({ text, ass }) => {
  return (
    <SeparatorContainerStyle as={ass}>
      <SeparetorLineStyle />
      {text && <SeparatortextStyle>{text}</SeparatortextStyle>}
    </SeparatorContainerStyle>
  );
};

Separator.propTypes = {
  text: Proptypes.string,
  ass: Proptypes.string,
};

Separator.defaultProps = {
  text: "",
  ass: "div",
};

export default Separator;
