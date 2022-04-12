import React from "react";
import {
  SeparatorContainerStyle,
  SeparatortextStyle,
  SeparetorLineStyle,
} from "./separator.style";
import Proptypes from "prop-types";

const Separator = ({ text }) => {
  return (
    <SeparatorContainerStyle>
      <SeparetorLineStyle />
      {text && <SeparatortextStyle>{text}</SeparatortextStyle>}
    </SeparatorContainerStyle>
  );
};

Separator.propTypes = {
  text: Proptypes.string,
};

Separator.defaultProps = {
  text: "",
};

export default Separator;
