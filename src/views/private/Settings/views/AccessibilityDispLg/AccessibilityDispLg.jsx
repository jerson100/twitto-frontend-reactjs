import React from "react";
import Icon from "../../../../../components/common/Icon/Icon";
import List from "../../../../../components/common/List";
import Paragraph from "../../../../../components/common/Paragraph";
import {
  AccessibilityDispLgStyle,
  ContentStyle,
} from "./accessibilityDispLg.style";

const AccessibilityDispLg = () => {
  return (
    <AccessibilityDispLgStyle>
      <ContentStyle>
        <Paragraph color="SECONDARY" ass="p" type="h6" marginBottom={false}>
          Administra cómo ves el contenido de twitto
        </Paragraph>
      </ContentStyle>
      <List iconRight={<Icon svg="RightArrowTwo" size="SMALLER" />}>
        <List.Item
          to="/settings/accessibility_display_and_languages"
          iconLeft={<Icon svg="closedEyes" size="SMALLER" />}
        >
          <Paragraph ass="p" type="h5" marginBottom={false}>
            Accesibilidad
          </Paragraph>
          <Paragraph color="SECONDARY" ass="p" type="h6" marginBottom={false}>
            Administra diversos aspectos de tu experiencia en Twitter, como
            limitar el contraste de colores y el movimiento.
          </Paragraph>
        </List.Item>
      </List>
    </AccessibilityDispLgStyle>
  );
};

export default AccessibilityDispLg;
