import React from "react";
import Add from "../../../../common/Add";
import Icon from "../../../../common/Icon/Icon";
import Menu from "../../../../common/Menu";
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
  MenuContainerStyle,
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
          <MenuContainerStyle>
            <Menu>
              <Menu.Item
                to="/home"
                icon={<Icon svg="profile" size="SMALLER" />}
              >
                Perfil
              </Menu.Item>
              <Menu.Item to="/home" icon={<Icon svg="list" size="SMALLER" />}>
                Listas
              </Menu.Item>
              <Menu.Item to="/home" icon={<Icon svg="theme" size="SMALLER" />}>
                Temas
              </Menu.Item>
              <Menu.Item to="/home" icon={<Icon svg="save" size="SMALLER" />}>
                Guardado
              </Menu.Item>
              <Menu.Item to="/home" icon={<Icon svg="moment" size="SMALLER" />}>
                Momentos
              </Menu.Item>
              <Menu.Separator as="li" />
              <Menu.Item to="/home" icon={<Icon svg="rocket" size="SMALLER" />}>
                Twitto para profesionales
              </Menu.Item>
              <Menu.Item to="/home" icon={<Icon svg="ads" size="SMALLER" />}>
                Twitto Ads
              </Menu.Item>
              <Menu.Item
                to="/home"
                icon={<Icon svg="analytics" size="SMALLER" />}
              >
                Analytics
              </Menu.Item>
              <Menu.Separator as="li" />
              <Menu.Item
                to="/home"
                icon={<Icon svg="configuration" size="SMALLER" />}
              >
                Configuración y privacidad
              </Menu.Item>
              <Menu.Item to="/home" icon={<Icon svg="help" size="SMALLER" />}>
                Centro de ayuda
              </Menu.Item>
              <Menu.Separator as="li" />
              <Menu.Item to="/home" icon={<Icon svg="time" size="SMALLER" />}>
                Ahorrador de datos
              </Menu.Item>
              <Menu.Item to="/home" icon={<Icon svg="anchor" size="SMALLER" />}>
                Mostrar
              </Menu.Item>
              <Menu.Item
                to="/home"
                icon={<Icon svg="personcircle" size="SMALLER" />}
              >
                Atajos de teclado
              </Menu.Item>
              <Menu.Separator as="li" />
              <Menu.Item>Cerrar sesión</Menu.Item>
            </Menu>
          </MenuContainerStyle>
        </BodyStyle>
      </MobileMenuStyle>
    </MobileMenuContainerStyle>
  );
};

export default MobileMenu;
