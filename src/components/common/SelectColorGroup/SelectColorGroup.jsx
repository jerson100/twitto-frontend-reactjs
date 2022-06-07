import React, { useCallback, useState } from "react";
import Row from "../Row";
import Color from "./Color";

const SelectColorGroup = ({ colors, selectedItem: selected }) => {
  const [selectedItem, setselectedItem] = useState(selected);
  const handleChange = useCallback(
    (item) => {
      setselectedItem(item);
    },
    [setselectedItem]
  );
  return (
    <Row>
      {colors.map((c, i) => (
        <Row.Column col={8} md={6} key={i}>
          <Color
            color={c}
            selected={selectedItem === c}
            onClick={handleChange}
          />
        </Row.Column>
      ))}
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
