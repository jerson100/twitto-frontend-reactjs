import React from "react";
import {
  ItemContainerStyle,
  LeftItemStyle,
  RightItemStyle,
  LinkStyle,
  CenterItemStyle,
  ItemContentStyle,
} from "../../list.style";

const Item = ({ iconLeft, children, iconRight, to }) => {
  return (
    <ItemContainerStyle>
      {to ? (
        <LinkStyle to={to}>
          {iconLeft && <LeftItemStyle>{iconLeft}</LeftItemStyle>}
          <CenterItemStyle>{children}</CenterItemStyle>
          {iconRight && <RightItemStyle>{iconRight}</RightItemStyle>}
        </LinkStyle>
      ) : (
        <ItemContentStyle>
          {iconLeft && <LeftItemStyle>{iconLeft}</LeftItemStyle>}
          <CenterItemStyle>{children}</CenterItemStyle>
          {iconRight && <RightItemStyle>{iconRight}</RightItemStyle>}
        </ItemContentStyle>
      )}
    </ItemContainerStyle>
  );
};

export default Item;
