import React from "react";
import Icon from "../../../../components/common/Icon/Icon";
import List from "../../../../components/common/List";
import Paragraph from "../../../../components/common/Paragraph";
import { ContentStyle } from "../../../../components/styleComponents/content.style";
import { useChangeMainHeaderLayout } from "../../../../hooks/useChangeMainHeaderLayout";
import { AccessibilityDispLgStyle } from "./accessibilityDispLg.style";

const AccessibilityDispLg = () => {
  useChangeMainHeaderLayout("Accesibilidad, pantalla e idiomas");
  return (
    <AccessibilityDispLgStyle>
      <ContentStyle>
        <Paragraph color="SECONDARY" ass="p" type="h5" marginbottom={false}>
          Administra cómo ves el contenido de twitto
        </Paragraph>
      </ContentStyle>
      <List
        iconRight={
          <Icon svg="RightArrowTwo" size="SMALLER" color="SECONDARY" />
        }
      >
        <List.Item
          to="/settings/accesibility"
          iconLeft={<Icon svg="closedEyes" size="SMALLER" color="SECONDARY" />}
        >
          <Paragraph ass="p" type="h4" marginbottom={false}>
            Accesibilidad
          </Paragraph>
          <Paragraph color="SECONDARY" ass="p" marginbottom={false}>
            Administra diversos aspectos de tu experiencia en Twitter, como
            limitar el contraste de colores y el movimiento.
          </Paragraph>
        </List.Item>
        <List.Item
          to="/settings/display"
          iconLeft={<Icon svg="pencil" size="SMALLER" color="SECONDARY" />}
        >
          <Paragraph ass="p" type="h4" marginbottom={false}>
            Mostrar
          </Paragraph>
          <Paragraph color="SECONDARY" ass="p" marginbottom={false}>
            Administra el fondo, color y tamaño de la fuente. Esta configuración
            afecta a todas las cuentas de Twitter en este navegador.
          </Paragraph>
        </List.Item>
        <List.Item
          to="/settings/accessibility_display_and_languages"
          iconLeft={<Icon svg="world" size="SMALLER" color="SECONDARY" />}
        >
          <Paragraph ass="p" type="h4" marginbottom={false}>
            Idiomas
          </Paragraph>
          <Paragraph color="SECONDARY" ass="p" marginbottom={false}>
            Administra qué idiomas se usan para personalizar tu experiencia en
            Twitter.
          </Paragraph>
        </List.Item>
        <List.Item
          to="/settings/accessibility_display_and_languages"
          iconLeft={<Icon svg="barGraphic" size="SMALLER" color="SECONDARY" />}
        >
          <Paragraph ass="p" type="h4" marginbottom={false}>
            Uso de datos
          </Paragraph>
          <Paragraph color="SECONDARY" ass="p" marginbottom={false}>
            Establece límites para el modo en que Twitter usa algunos de los
            datos de tu red. Esta configuración afecta a todas las cuentas de
            Twitter en este navegador.
          </Paragraph>
        </List.Item>
      </List>
    </AccessibilityDispLgStyle>
  );
};

export default AccessibilityDispLg;
