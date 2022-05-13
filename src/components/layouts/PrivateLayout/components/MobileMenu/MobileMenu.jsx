import React from "react";
import Add from "../../../../common/Add";
import {
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
} from "./mobileMenu.style";

const MobileMenu = () => {
  return (
    <MobileMenuContainerStyle>
      <MobileMenuStyle>
        <HeaderStyle>
          <HeaderTextStyle>Información de la cuenta</HeaderTextStyle>
          <HeaderCloseStyle>
            <svg viewBox="0 0 24 24" ariaHidden="true">
              <g>
                <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
              </g>
            </svg>
          </HeaderCloseStyle>
        </HeaderStyle>
        <BodyStyle>
          <UserStyle>
            <LeftStyle>
              <UserImgStyle src="https://pbs.twimg.com/profile_images/1456456434187636736/bYB38_bW_x96.jpg" />
              <UsernameStyle>loveting100</UsernameStyle>
              <EmailStyle>@loveting100</EmailStyle>
            </LeftStyle>
            <RightStyle>
              <Add />
            </RightStyle>
            <BottomStyle>
              <CountGroupStyle>
                <CountNumberStyle>227</CountNumberStyle>
                <CountNameStyle>Siguiendo</CountNameStyle>
              </CountGroupStyle>
              <CountGroupStyle>
                <CountNumberStyle>99</CountNumberStyle>
                <CountNameStyle>Seguidores</CountNameStyle>
              </CountGroupStyle>
            </BottomStyle>
          </UserStyle>
        </BodyStyle>
      </MobileMenuStyle>
    </MobileMenuContainerStyle>
  );
};

export default MobileMenu;
