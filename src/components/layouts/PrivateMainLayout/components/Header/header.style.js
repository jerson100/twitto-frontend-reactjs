import styled from "styled-components";
import Paragraph from "../../../../common/Paragraph";

const HeaderStyle = styled.header`
  border: solid 1px red;
  height: 53px;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const LeftStyle = styled.div`
  width: 56px;
  display: flex;
  align-items: center;
`;

const CenterStyle = styled.div`
  width: 56px;
  flex: 1 1 auto;
  border: solid 1px purple;
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
  border: solid 1px yellow;
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
