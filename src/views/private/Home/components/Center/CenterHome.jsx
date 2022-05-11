import React from "react";
import Paragraph from "../../../../../components/common/Paragraph";
import {
  CenterContainerStyle,
  FeaturedStyle,
  HeaderStyle,
  TitleStyle,
  UserStyle,
  UserContainerStyle,
} from "./centerHome.style";

const CenterHome = () => {
  return (
    <CenterContainerStyle>
      <HeaderStyle>
        <UserContainerStyle>
          <UserStyle />
        </UserContainerStyle>
        <TitleStyle>
          <Paragraph>Inicio</Paragraph>
        </TitleStyle>
        <FeaturedStyle />
      </HeaderStyle>
    </CenterContainerStyle>
  );
};

export default CenterHome;
