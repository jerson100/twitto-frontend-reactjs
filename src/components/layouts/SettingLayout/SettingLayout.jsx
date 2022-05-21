import React from "react";
import { Outlet } from "react-router-dom";
import Icon from "../../common/Icon/Icon";
import PrivateMainLayout from "../PrivateMainLayout";
import { SettingLayoutStyle } from "./settingLayout.style";

const SettingLayout = () => {
  return (
    <SettingLayoutStyle>
      <PrivateMainLayout
        iconLeft={<Icon svg="leftArrow" size="SMALL" />}
        title="Configuración"
      >
        <Outlet />
      </PrivateMainLayout>
    </SettingLayoutStyle>
  );
};

export default SettingLayout;
