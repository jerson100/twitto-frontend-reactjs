import React from "react";
import Icon from "../../common/Icon/Icon";
import Header from "./components/Header";
import Main from "./components/Main";
import { PrivateMaintStyle } from "./headerMaintLayout.style";

const PrivateMainLayout = () => {
  return (
    <PrivateMaintStyle>
      <Header
        iconLeft={<Icon svg="leftArrow" size="SMALL" />}
        title={"Configuración"}
        subtitle="@loveting100"
      />
      <Main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veniam
          tempora, eligendi dolores excepturi delectus rerum! Maxime veritatis
          magni perspiciatis vero repudiandae doloribus saepe modi! Debitis
          voluptates dolore amet beatae?
        </p>
      </Main>
    </PrivateMaintStyle>
  );
};

export default PrivateMainLayout;
