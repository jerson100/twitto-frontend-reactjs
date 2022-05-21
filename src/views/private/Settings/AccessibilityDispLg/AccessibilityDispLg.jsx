import React, { useEffect } from "react";
import Icon from "../../../../components/common/Icon/Icon";
import List from "../../../../components/common/List";
import Paragraph from "../../../../components/common/Paragraph";
import Space from "../../../../components/common/Space";
import { usePrivateMainLayoutContext } from "../../../../hooks/usePrivateMainLayoutContext";
import {
  AccessibilityDispLgStyle,
  ContentStyle,
} from "./accessibilityDispLg.style";

const AccessibilityDispLg = () => {
  const { changeTitle } = usePrivateMainLayoutContext();
  useEffect(() => {
    changeTitle("Accesibilidad, pantalla e idiomas");
  }, [changeTitle]);
  return (
    <AccessibilityDispLgStyle>
      <Space type="SMALL" />
      <ContentStyle>
        <Paragraph color="SECONDARY" ass="p" type="h6" marginBottom={false}>
          Administra cómo ves el contenido de twitto
        </Paragraph>
      </ContentStyle>
      <Space type="SMALL" />
      <List
        iconRight={
          <Icon svg="RightArrowTwo" size="SMALLER" color="SECONDARY" />
        }
      >
        <List.Item
          to="/settings/accesibility"
          iconLeft={<Icon svg="closedEyes" size="SMALLER" color="SECONDARY" />}
        >
          <Paragraph ass="p" type="h5" marginBottom={false}>
            Accesibilidad
          </Paragraph>
          <Paragraph color="SECONDARY" ass="p" type="h6" marginBottom={false}>
            Administra diversos aspectos de tu experiencia en Twitter, como
            limitar el contraste de colores y el movimiento.
          </Paragraph>
        </List.Item>
        <List.Item
          to="/settings/accessibility_display_and_languages"
          iconLeft={<Icon svg="pencil" size="SMALLER" color="SECONDARY" />}
        >
          <Paragraph ass="p" type="h5" marginBottom={false}>
            Mostrar
          </Paragraph>
          <Paragraph color="SECONDARY" ass="p" type="h6" marginBottom={false}>
            Administra el fondo, color y tamaño de la fuente. Esta configuración
            afecta a todas las cuentas de Twitter en este navegador.
          </Paragraph>
        </List.Item>
        <List.Item
          to="/settings/accessibility_display_and_languages"
          iconLeft={<Icon svg="world" size="SMALLER" color="SECONDARY" />}
        >
          <Paragraph ass="p" type="h5" marginBottom={false}>
            Idiomas
          </Paragraph>
          <Paragraph color="SECONDARY" ass="p" type="h6" marginBottom={false}>
            Administra qué idiomas se usan para personalizar tu experiencia en
            Twitter.
          </Paragraph>
        </List.Item>
        <List.Item
          to="/settings/accessibility_display_and_languages"
          iconLeft={<Icon svg="barGraphic" size="SMALLER" color="SECONDARY" />}
        >
          <Paragraph ass="p" type="h5" marginBottom={false}>
            Uso de datos
          </Paragraph>
          <Paragraph color="SECONDARY" ass="p" type="h6" marginBottom={false}>
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
