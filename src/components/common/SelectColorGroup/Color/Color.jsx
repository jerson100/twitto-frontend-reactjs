import React from "react";
import Icon from "../../Icon/Icon";
import { ColorStyle, ColorContainerStyle } from "../slectColorGroup.style";

const Color = React.memo(({ color, selected, onClick }) => {
  const handleChange = () => {
    onClick(color);
  };
  return (
    <ColorContainerStyle>
      <ColorStyle color={color} selected={selected} onClick={handleChange}>
        {selected && <Icon svg="check" size="SMALL" color="white" />}
      </ColorStyle>
    </ColorContainerStyle>
  );
});

export default Color;
