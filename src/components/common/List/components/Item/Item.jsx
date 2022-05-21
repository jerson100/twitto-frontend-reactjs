import React from "react";
import {
  ItemContainerStyle,
  LeftItemStyle,
  RightItemStyle,
  LinkStyle,
  CenterItemStyle,
} from "../../list.style";

const Item = ({ iconLeft, children, iconRight, to }) => {
  return (
    <ItemContainerStyle>
      <LinkStyle to={to}>
        {iconLeft && <LeftItemStyle>{iconLeft}</LeftItemStyle>}
        <CenterItemStyle>{children}</CenterItemStyle>
        {iconRight && <RightItemStyle>{iconRight}</RightItemStyle>}
      </LinkStyle>
    </ItemContainerStyle>
  );
};

export default Item;
