import React from "react";
import svgs from "../../../utils/constants/svg";
import { ItemStyle, MenuStyle, IconStyle, ContentStyle } from "./menu.style";

const Menu = ({ children }) => {
  return <MenuStyle>{children}</MenuStyle>;
};

const Item = ({ children, icon }) => {
  return (
    <ItemStyle>
      <IconStyle>{icon}</IconStyle>
      <ContentStyle>{children}</ContentStyle>
    </ItemStyle>
  );
};

Menu.Item = Item;

export default Menu;
