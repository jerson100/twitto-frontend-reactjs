import React from "react";
import Icon from "../../../../common/Icon/Icon";
import {
  BottomListStyle,
  BottomStyle,
  IconContainerStyle,
} from "./bottomNavigationMenu.style";

const BottomNavigationMenu = () => {
  return (
    <BottomStyle>
      <BottomListStyle dir="horizontal">
        <BottomListStyle.Item to="/">
          <IconContainerStyle>
            <Icon svg="home" size="SMALL" />
          </IconContainerStyle>
        </BottomListStyle.Item>
        <BottomListStyle.Item to="/">
          <IconContainerStyle>
            <Icon svg="search" size="SMALL" />
          </IconContainerStyle>
        </BottomListStyle.Item>
        <BottomListStyle.Item to="/">
          <IconContainerStyle>
            <Icon svg="people" size="SMALL" />
          </IconContainerStyle>
        </BottomListStyle.Item>
        <BottomListStyle.Item to="/">
          <IconContainerStyle>
            <Icon svg="bell" size="SMALL" />
          </IconContainerStyle>
        </BottomListStyle.Item>
        <BottomListStyle.Item to="/">
          <IconContainerStyle>
            <Icon svg="email" size="SMALL" />
          </IconContainerStyle>
        </BottomListStyle.Item>
      </BottomListStyle>
    </BottomStyle>
  );
};

export default BottomNavigationMenu;
