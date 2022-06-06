import React, { useState } from "react";
import List from "../List";
import Color from "./Color";
import { ColorStyle } from "./slectColorGroup.style";

const SelectColorGroup = ({ colors, selectedItem: selected }) => {
  const [selectedItem, setselectedItem] = useState(selected);
  const handleChange = (item) => {
    setselectedItem(item);
  };
  return (
    <List dir="horizontal">
      {colors.map((c, i) => (
        <List.Item key={i}>
          <Color
            color={c}
            selected={selectedItem === c}
            onClick={handleChange}
          />
        </List.Item>
      ))}
    </List>
  );
};

export default SelectColorGroup;
