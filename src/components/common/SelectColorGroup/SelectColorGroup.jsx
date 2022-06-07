import React, { useState } from "react";
import List from "../List";
import Row from "../Row";
import Color from "./Color";
import { ColorStyle } from "./slectColorGroup.style";

const SelectColorGroup = ({ colors, selectedItem: selected }) => {
  const [selectedItem, setselectedItem] = useState(selected);
  const handleChange = (item) => {
    setselectedItem(item);
  };
  return (
    <Row>
      <Row.Column col={12} sm={6} lg={6} xl={12} xll={23}>
        12
      </Row.Column>
      <Row.Column col={6} xll={1}>
        6
      </Row.Column>
      <Row.Column col={3}>3</Row.Column>
      <Row.Column col={3}>3</Row.Column>
      <Row.Column>24</Row.Column>
    </Row>
    // <List dir="horizontal">
    //   {colors.map((c, i) => (
    //     <List.Item key={i}>
    //       <Color
    //         color={c}
    //         selected={selectedItem === c}
    //         onClick={handleChange}
    //       />
    //     </List.Item>
    //   ))}
    // </List>
  );
};

export default SelectColorGroup;
