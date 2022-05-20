import React from "react";
import {
  CenterStyle,
  HeaderStyle,
  LeftStyle,
  RightStyle,
  SubTitleStyle,
  TextStyle,
  TitleStyle,
} from "./header.style";

const Header = ({ iconLeft, title, subtitle, iconRight }) => {
  return (
    <HeaderStyle>
      <LeftStyle>{iconLeft && iconLeft}</LeftStyle>
      <CenterStyle>
        <TextStyle>
          <TitleStyle ass="h1" type="h4">
            {title}
          </TitleStyle>
          <SubTitleStyle ass="p" type="h5">
            {subtitle}
          </SubTitleStyle>
        </TextStyle>
      </CenterStyle>
      {iconRight && <RightStyle>{RightStyle}</RightStyle>}
    </HeaderStyle>
  );
};

export default Header;
