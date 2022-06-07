import React from "react";
import { ColumnStyle } from "./column.style";
import PropTypes from "prop-types";
/**
 * 
 col = {
    xs: 12,
    md: 6,
    lg: 4,   
 }
 * 
 */
const NUM_COLUMNS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

const Column = ({ col, sm, md, lg, xl, xll, gap, children }) => {
  return (
    <ColumnStyle col={col} sm={sm} md={md} lg={lg} xl={xl} xll={xll} gap={gap}>
      {children}
    </ColumnStyle>
  );
};

Column.propTypes = {
  col: PropTypes.oneOf(NUM_COLUMNS),
  sm: PropTypes.oneOf(NUM_COLUMNS),
  md: PropTypes.oneOf(NUM_COLUMNS),
  lg: PropTypes.oneOf(NUM_COLUMNS),
  xl: PropTypes.oneOf(NUM_COLUMNS),
  xll: PropTypes.oneOf(NUM_COLUMNS),
  gap: PropTypes.string,
};

Column.defaultProps = {
  gap: "0",
};

export default React.memo(Column);
