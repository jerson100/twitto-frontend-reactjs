import styled, { css } from "styled-components";

/*
    Header
*/
const center = css`
  display: flex;
  align-items: center;
`;

const CenterContainerStyle = styled.div``;
const HeaderStyle = styled.header`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 53px;
`;
const UserStyle = styled.img`
  height: 32px;
  border-radius: 50%;
  width: auto;
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

/*
  Main
*/

const MainContainerStyle = styled.main``;

export {
  CenterContainerStyle,
  HeaderStyle,
  FeaturedSvgStyle,
  UserStyle,
  TitleStyle,
  FeaturedStyle,
  UserContainerStyle,
  MainContainerStyle, //---> main
};
