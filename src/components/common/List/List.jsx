import React from "react";
import { ListStyle } from "./list.style";
/**
 *
 * @param {iconLeft} Icono que se establecerá por default para cada item si es que no es pasado
 * @param {iconRight} Icono que se establecerá por default  para cada item si es que no es pasado.
 * @returns
 */
const List = ({ children, iconLeft, iconRight, dir, className }) => {
  const items = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      ...child,
      iconLeft: child.props.iconLeft || iconLeft,
      iconRight: child.props.iconRight || iconRight,
    });
  });

  return (
    <ListStyle className={className} dir={dir}>
      {items}
    </ListStyle>
  );
};

List.defaultProps = {
  dir: "vertical",
};

export default List;
