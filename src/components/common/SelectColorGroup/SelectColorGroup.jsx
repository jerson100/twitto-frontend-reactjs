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
      <Row.Column col={12} sm={6} md={24} lg={6} xl={4} xll={20}>
        12
      </Row.Column>
      <Row.Column col={6} xll={2}>
        6
      </Row.Column>
      <Row.Column col={3} xll={2}>
        3
      </Row.Column>
      <Row.Column col={3}>3</Row.Column>
      <Row.Column>:)</Row.Column>
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
