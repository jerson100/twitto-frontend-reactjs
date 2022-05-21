import React from "react";
import Icon from "../../../../../components/common/Icon/Icon";
import List from "../../../../../components/common/List";

const SettingNavigation = () => {
  return (
    <List
      iconRight={
        <Icon svg="RightArrowTwo" size="SMALLER" color="rgb(139, 152, 165)" />
      }
    >
      <List.Item to="/settings/account" size="SMALLER">
        Tu cuenta
      </List.Item>
      <List.Item to="/settings/accessibility_display_and_languages">
        Twitto Blue
      </List.Item>
      <List.Item to="/settings/accessibility_display_and_languages">
        Seguridad y acceso a la cuenta
      </List.Item>
      <List.Item to="/settings/accessibility_display_and_languages">
        Privacidad y seguridad
      </List.Item>
      <List.Item to="/settings/accessibility_display_and_languages">
        Notificaciones
      </List.Item>
      <List.Item to="/settings/accessibility_display_and_languages">
        Accesibilidad, pantalla e idioma
      </List.Item>
      <List.Item to="/settings/accessibility_display_and_languages">
        Recursos adicionales
      </List.Item>
    </List>
  );
};

export default SettingNavigation;
