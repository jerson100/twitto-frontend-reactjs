import React from "react";
import Paragraph from "../../../../../../components/common/Paragraph";
import Space from "../../../../../../components/common/Space";
import { ContentStyle } from "../../../../../../components/styleComponents/content.style";
import { useChangeMainHeaderLayout } from "../../../../../../hooks/useChangeMainHeaderLayout";

const DisplayView = () => {
  useChangeMainHeaderLayout("Mostrar");
  return (
    <div>
      <Space type="SMALL" />
      <ContentStyle>
        <Paragraph ass="P" color="SECONDARY" type="h6" marginBottom={false}>
          Administra el fondo, color y tamaño de la fuente. Esta configuración
          afecta a todas las cuentas de Twitter en este navegador.
        </Paragraph>
      </ContentStyle>
      <Space type="SMALL" />
    </div>
  );
};

export default DisplayView;
