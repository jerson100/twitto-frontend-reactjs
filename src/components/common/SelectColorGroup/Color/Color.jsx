import React from "react";
import {
  ColorStyle,
  ColorContainerStyle,
  CheckStyle,
} from "../slectColorGroup.style";

const Color = React.memo(({ color, selected, onClick }) => {
  const handleChange = () => {
    onClick(color);
  };
  return (
    <ColorContainerStyle>
      <ColorStyle color={color} selected={selected} onClick={handleChange}>
        {selected && <CheckStyle svg="check" size="SMALL" />}
      </ColorStyle>
    </ColorContainerStyle>
  );
});

export default Color;
