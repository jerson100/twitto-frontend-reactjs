import styled, { css } from "styled-components";
import Color from "color";

const ellipse = css`
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 0.5rem;
`;

const ContainerStyle = styled.div`
  padding: 1rem;
  border-bottom: solid 1px
    ${({ theme }) => Color(theme.COLORS.SECONDARY).darken(0.65)};
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
`;
const HeaderStyle = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;
const DataStyle = styled.div``;
const UserNameStyle = styled.div`
  font-weight: 700;
  ${ellipse}
`;
const UserGmailStyle = styled.div`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  ${ellipse}
`;
const TimeStyle = styled.time`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
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
