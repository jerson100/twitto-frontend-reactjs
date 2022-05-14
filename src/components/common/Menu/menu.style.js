import styled from "styled-components";

const MenuStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  line-height: 1;
`;
const ItemStyle = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
`;
const ContentStyle = styled.div`
  flex-grow: 1;
  font-size: 0.85rem;
`;
const IconStyle = styled.div`
  margin-right: 0.5rem;
`;

export { MenuStyle, ItemStyle, ContentStyle, IconStyle };
