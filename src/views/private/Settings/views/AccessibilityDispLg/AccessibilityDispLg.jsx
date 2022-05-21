import React from "react";
import Paragraph from "../../../../../components/common/Paragraph";
import { AccessibilityDispLgStyle } from "./accessibilityDispLg.style";

const AccessibilityDispLg = () => {
  return (
    <AccessibilityDispLgStyle>
      <Paragraph color="SECONDARY" ass="p" type="h6">
        Administra cómo ves el contenido de twitto
      </Paragraph>
    </AccessibilityDispLgStyle>
  );
};

export default AccessibilityDispLg;
