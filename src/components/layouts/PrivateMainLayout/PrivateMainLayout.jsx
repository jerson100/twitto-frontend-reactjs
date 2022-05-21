import React from "react";
import Icon from "../../common/Icon/Icon";
import List from "../../common/List";
import Header from "./components/Header";
import Main from "./components/Main";
import { PrivateMaintStyle } from "./headerMaintLayout.style";

const PrivateMainLayout = ({ iconLeft, title, subtitle, children }) => {
  return (
    <PrivateMaintStyle>
      <Header iconLeft={iconLeft} title={title} subtitle={subtitle} />
      <Main>{children}</Main>
    </PrivateMaintStyle>
  );
};

export default PrivateMainLayout;
