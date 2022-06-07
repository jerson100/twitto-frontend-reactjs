import React, { useCallback } from "react";
import Row from "../Row";
import Color from "./Color";

const SelectColorGroup = ({ colors, selectedItem: selected, changeColor }) => {
  //   const [selectedItem, setselectedItem] = useState(selected);
  //   const {third_color, changeThirdColor} = useThemeContext();
  const handleChange = useCallback(
    (item) => {
      //   setselectedItem(item);
      changeColor(item);
    },
    [changeColor]
  );
  return (
    <Row>
      {colors.map((c, i) => (
        <Row.Column col={8} md={6} key={i}>
          <Color color={c} selected={c === selected} onClick={handleChange} />
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
