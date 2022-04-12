import React from "react";
import { DescriptionTextStyle } from "./descriptionText.style";

const DescriptionText = ({ children }) => {
  return <DescriptionTextStyle>{children}</DescriptionTextStyle>;
};

export default DescriptionText;
