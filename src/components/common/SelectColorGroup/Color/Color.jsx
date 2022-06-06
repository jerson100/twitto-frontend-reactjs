import React from "react";
import { ColorStyle } from "../slectColorGroup.style";

const Color = React.memo(({ color, selected, onClick }) => {
  const handleChange = () => {
    onClick(color);
  };
  return (
    <ColorStyle selected={selected} onClick={handleChange}>
      Color
    </ColorStyle>
  );
});

export default Color;
