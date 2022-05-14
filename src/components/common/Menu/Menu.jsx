import React from "react";
import svgs from "../../../utils/constants/svg";
import { ItemStyle, MenuStyle, IconStyle, ContentStyle } from "./menu.style";

const Menu = ({ children }) => {
  return <MenuStyle>{children}</MenuStyle>;
};

const Item = ({ children, svg }) => {
  const svgRender = svgs[svg] || svgs.default;
  return (
    <ItemStyle>
      {svgRender && (
        <IconStyle
          viewBox={svgRender.viewBox}
          xmlns="http://www.w3.org/2000/svg"
        >
          {svgRender.svg}
        </IconStyle>
      )}

      <ContentStyle>{children}</ContentStyle>
    </ItemStyle>
  );
};

Menu.Item = Item;

export default Menu;
