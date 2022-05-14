import styled from "styled-components";

const MenuStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
const ItemStyle = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
`;
const ContentStyle = styled.div`
  flex-grow: 1;
  font-size: 0.86rem;
`;
const IconStyle = styled.svg`
  width: 22px;
  height: 22px;
  margin-right: 0.4rem;
  fill: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export { MenuStyle, ItemStyle, ContentStyle, IconStyle };
