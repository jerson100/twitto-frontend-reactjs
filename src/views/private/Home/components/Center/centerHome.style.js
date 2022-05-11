import styled from "styled-components";

const CenterContainerStyle = styled.div``;
const HeaderStyle = styled.header`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 53px;
  border: solid 1px green;
`;
const UserStyle = styled.img`
  height: 100%;
  width: auto;
`;
const UserContainerStyle = styled.div`
  min-width: 56px;
`;
const TitleStyle = styled.div`
  flex-grow: 1;
`;
const FeaturedStyle = styled.div`
  min-width: 56px;
`;

export {
  CenterContainerStyle,
  HeaderStyle,
  UserStyle,
  TitleStyle,
  FeaturedStyle,
  UserContainerStyle,
};
