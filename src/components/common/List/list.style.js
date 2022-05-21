import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ListStyle = styled.ul`
  list-style: none;
`;

const ItemContainerStyle = styled.li`
  padding: 0.7rem 1rem;
  font-size: 0.85rem;
`;

const LinkStyle = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;

const LeftItemStyle = styled.div`
  margin-right: 1rem;
  width: calc(56px - 1rem);
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
`;

const CenterItemStyle = styled.div`
  flex: 1 1 auto;
`;

const RightItemStyle = styled.div`
  margin-left: 0.5rem;
`;

export {
  ItemContainerStyle,
  ListStyle,
  RightItemStyle,
  LeftItemStyle,
  LinkStyle,
  CenterItemStyle,
};
