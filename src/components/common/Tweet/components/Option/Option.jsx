import React from "react";
import Icon from "../../../Icon/Icon";
import { OptionContentStyle, OptionContainerStyle } from "./option.style";

const Option = () => {
  return (
    <OptionContainerStyle>
      <OptionContentStyle>
        <Icon svg="option" size="SMALLER" color="SECONDARY" />
      </OptionContentStyle>
    </OptionContainerStyle>
  );
};

export default Option;
