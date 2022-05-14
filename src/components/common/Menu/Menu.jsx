import React from "react";
import svgs from "../../../utils/constants/svg";
import {
  ItemStyle,
  MenuStyle,
  IconStyle,
  ContentStyle,
  SeparatorStyle,
} from "./menu.style";

const Menu = ({ children }) => {
  return <MenuStyle>{children}</MenuStyle>;
};

const Separator = ({ children, as = "div" }) => {
  return <SeparatorStyle as={as}>{children}</SeparatorStyle>;
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
Menu.Separator = Separator;

export default Menu;
