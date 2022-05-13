import React from "react";
import { AddContainerStyle, SvgStyle } from "./add.style";
import PropTypes from "prop-types";

const Add = ({ handleClick }) => {
  return (
    <AddContainerStyle onClick={handleClick}>
      <SvgStyle viewBox="0 0 24 24" ariaHidden="true">
        <g>
          <path d="M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
        </g>
      </SvgStyle>
    </AddContainerStyle>
  );
};

Add.propTypes = {
  handleClick: PropTypes.func,
};

Add.defaultProps = {
  handleClick: null,
};

export default Add;
