import React from "react";
import Icon from "../Icon/Icon";
import { IconButtonStyle } from "./iconButton.style";

const IconButton = ({ svg, size, handleClick }) => {
  return (
    <IconButtonStyle
      color="NORMAL"
      type="GOSTH"
      Icon={<Icon svg={svg} size={size} />}
      handleClick={handleClick}
    >
      {/* <Icon svg={svg} size={size} /> */}
    </IconButtonStyle>
  );
};

export default IconButton;
