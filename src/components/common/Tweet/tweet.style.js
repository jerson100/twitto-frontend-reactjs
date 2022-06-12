import styled from "styled-components";
import { ellipse } from "../../styleComponents/text.style";

const ContainerStyle = styled.div`
  padding: 1rem;
  border-bottom: solid 1px
    ${({
      theme: {
        COLORS: { BORDER },
      },
    }) => BORDER};
`;
const ContentStyle = styled.div`
  display: flex;
`;
const LeftStyle = styled.div`
  margin-right: 12px;
`;
const UserImageStyle = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const RightStyle = styled.div`
  overflow: hidden;
  flex: 1 0 0;
`;
const HeaderStyle = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;
const DataStyle = styled.div``;
const UserNameStyle = styled.div`
  font-weight: 700;
  ${ellipse}
  margin-right: 0.5rem;
`;
const UserGmailStyle = styled.div`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  ${ellipse}
  margin-right: 0.5rem;
`;
const TimeStyle = styled.time`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  ${ellipse}
  margin-right: 0.5rem;
`;
const OptionsStyle = styled.div``;

export {
  ContainerStyle,
  ContentStyle,
  DataStyle,
  HeaderStyle,
  LeftStyle,
  RightStyle,
  UserImageStyle,
  UserNameStyle,
  UserGmailStyle,
  TimeStyle,
  OptionsStyle,
};
