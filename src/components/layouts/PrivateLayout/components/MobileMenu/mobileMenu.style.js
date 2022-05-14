import styled from "styled-components";

const Secondary = styled.span`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  font-size: 0.85rem;
`;

const Flexible = styled.div`
  display: flex;
`;

const Center = styled(Flexible)`
  justify-content: center;
  align-items: center;
`;

const MobileMenuContainerStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 10000;
  width: 100%;
  background-color: rgba(91, 112, 131, 0.4);
`;
const MobileMenuStyle = styled(Flexible)`
  width: 280px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  flex-direction: column;
  box-shadow: rgb(217 217 217 / 20%) 0px 0px 5px,
    rgb(217 217 217 / 25%) 0px 1px 4px 1px;
`;

const HeaderStyle = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;
const HeaderTextStyle = styled.div``;
const HeaderCloseStyle = styled(Center)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  svg {
    width: 18px;
    height: 18px;
    fill: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;
const BodyStyle = styled(Flexible)`
  flex: 1 0 0;
  flex-direction: column;
  overflow-y: auto;
`;

const UserStyle = styled(Flexible)`
  flex-wrap: wrap;
  padding: 1.5rem 1rem;
`;

const UserImgStyle = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;
const UsernameStyle = styled.span`
  word-break: break-word;
`;
const EmailStyle = styled(Secondary)``;
const LeftStyle = styled.div`
  flex-basis: 50%;
  flex-shrink: 0;
  line-height: 1.2;
`;
const RightStyle = styled(Flexible)`
  flex-basis: 50%;
  flex-shrink: 0;
  justify-content: flex-end;
`;
const BottomStyle = styled(Flexible)`
  margin-top: 0.5rem;
`;
const CountGroupStyle = styled(Flexible)`
  margin-right: 1rem;
  align-items: flex-end;
`;
const CountNumberStyle = styled.span`
  margin-right: 0.2rem;
  font-weight: bold;
`;
const CountNameStyle = styled(Secondary)``;

const MenuContainerStyle = styled.nav`
  /* border: solid 1px red; */
  flex-grow: 1;
`;

export {
  MobileMenuContainerStyle,
  MobileMenuStyle,
  HeaderStyle,
  HeaderTextStyle,
  HeaderCloseStyle,
  BodyStyle,
  UserStyle,
  UserImgStyle,
  UsernameStyle,
  EmailStyle,
  LeftStyle,
  RightStyle,
  BottomStyle,
  CountGroupStyle,
  CountNumberStyle,
  CountNameStyle,
  MenuContainerStyle,
};
