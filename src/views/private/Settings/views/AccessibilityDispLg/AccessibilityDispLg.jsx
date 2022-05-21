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
      <ContentStyle>
        <List iconRight={<Icon svg="RightArrowTwo" size="SMALLER" />}>
          <List.Item
            to="/settings/accessibility_display_and_languages"
            iconLeft={<Icon svg="closedEyes" size="SMALLER" />}
          >
            <Paragraph ass="p" type="h5" marginBottom={false}>
              Accesibilidad
            </Paragraph>
            <Paragraph color="SECONDARY" ass="p" type="h6" marginBottom={false}>
              Administra cómo ves el contenido de twitto
            </Paragraph>
          </List.Item>
        </List>
      </ContentStyle>
    </AccessibilityDispLgStyle>
  );
};

export default AccessibilityDispLg;
