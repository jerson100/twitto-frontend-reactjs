import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ListStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: ${({ dir }) => (dir === "vertical" ? "column" : "row")};
  flex-wrap: wrap;
`;

const ItemContainerStyle = styled.li`
  flex: 1;
  height: 100%;
`;

const LinkStyle = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  height: 100%;
`;

const ItemContentStyle = styled.div`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  height: 100%;
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
  ItemContentStyle,
};
