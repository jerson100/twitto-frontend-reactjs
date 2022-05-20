import React from "react";
import { LeftStyle } from "../../../../common/Tweet/tweet.style";
import {
  CenterStyle,
  HeaderStyle,
  RightStyle,
  SubTitleStyle,
  TextStyle,
  TitleStyle,
} from "./header.style";

const Header = ({ iconLeft, title, subtitle, iconRight }) => {
  return (
    <HeaderStyle>
      <LeftStyle>{iconLeft}</LeftStyle>
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
      <RightStyle>{iconRight}</RightStyle>
    </HeaderStyle>
  );
};

export default Header;
