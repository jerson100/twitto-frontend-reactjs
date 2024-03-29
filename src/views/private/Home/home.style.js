import Color from "color";
import styled, { css } from "styled-components";

const HomeContainerStyle = styled.div`
  /* border: solid 1px red; */
`;

const center = css`
  display: flex;
  align-items: center;
`;

// const CenterContainerStyle = styled.div`
//   margin-top: 53px;
// `;
const HeaderStyle = styled.header`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 53px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => Color(theme.COLORS.BACKGROUND).alpha(0.9)};
`;
const UserStyle = styled.img`
  height: 32px;
  border-radius: 50%;
  width: 32px;
  object-fit: cover;
`;
const UserContainerStyle = styled.div`
  min-width: 56px;
  ${center}
`;
const TitleStyle = styled.div`
  flex-grow: 1;
  width: 100%;
  ${center}
  .title {
    margin-bottom: 0;
    width: 100%;
  }
`;
const FeaturedStyle = styled.div`
  min-width: 56px;
  ${center}
  justify-content: flex-end;
`;

const FeaturedSvgStyle = styled.svg`
  /* fill: rgb(239, 243, 244); */
  height: 20px;
  width: auto;
  fill: ${({ theme }) => theme.COLORS.SECONDARY};
`;

const MainContainerStyle = styled.main`
  margin-top: 53px;
  /* margin-bottom: 53px;*/
`;

export {
  //   CenterContainerStyle,
  HeaderStyle,
  FeaturedSvgStyle,
  UserStyle,
  TitleStyle,
  FeaturedStyle,
  UserContainerStyle,
  MainContainerStyle,
  HomeContainerStyle,
};
