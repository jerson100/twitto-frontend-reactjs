import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <HeaderStyle>
      <LeftStyle onClick={handleClick}>{iconLeft && iconLeft}</LeftStyle>
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
      {iconRight && <RightStyle>{iconRight}</RightStyle>}
    </HeaderStyle>
  );
};

export default Header;
