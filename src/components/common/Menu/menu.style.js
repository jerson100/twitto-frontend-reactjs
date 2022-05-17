import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  line-height: 1;
`;
const ItemStyle = styled.li``;
const ContentStyle = styled.div`
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.85rem;
`;
const IconStyle = styled.div`
  margin-right: 0.5rem;
`;

const SeparatorStyle = styled.div`
  background-color: rgb(47, 51, 54);
  height: 1px;
  margin-bottom: 2px;
  margin-top: 2px;
`;

const NavLinkStyle = styled(NavLink)`
  color: inherit;
  padding: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export {
  NavLinkStyle,
  SeparatorStyle,
  MenuStyle,
  ItemStyle,
  ContentStyle,
  IconStyle,
};
