import React from "react";
import svgs from "../../../utils/constants/svg";

import {
  ItemStyle,
  MenuStyle,
  IconStyle,
  ContentStyle,
  SeparatorStyle,
  NavLinkStyle,
} from "./menu.style";

const Menu = ({ children }) => {
  return <MenuStyle>{children}</MenuStyle>;
};

const Separator = ({ children, as = "div" }) => {
  return <SeparatorStyle as={as}>{children}</SeparatorStyle>;
};

const Item = ({ children, icon, to = "" }) => {
  return (
    <ItemStyle>
      <NavLinkStyle to={to}>
        <IconStyle>{icon}</IconStyle>
        <ContentStyle>{children}</ContentStyle>
      </NavLinkStyle>
    </ItemStyle>
  );
};

Menu.Item = Item;
Menu.Separator = Separator;

export default Menu;
