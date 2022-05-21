import Color from "color";
import styled from "styled-components";
import Paragraph from "../../../../common/Paragraph";

const HeaderStyle = styled.header`
  height: 53px;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => Color(theme.COLORS.BACKGROUND).alpha(0.9)};
`;

const LeftStyle = styled.div`
  width: 56px;
  display: flex;
  align-items: center;
`;

const CenterStyle = styled.div`
  width: 56px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
`;

const RightStyle = styled.div`
  width: 56px;
  display: flex;
  align-items: center;
`;

const TextStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TitleStyle = styled(Paragraph)`
  margin-bottom: 0;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const SubTitleStyle = styled(Paragraph)`
  margin-bottom: 0;
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
  HeaderStyle,
  CenterStyle,
  LeftStyle,
  RightStyle,
  SubTitleStyle,
  TextStyle,
  TitleStyle,
};
