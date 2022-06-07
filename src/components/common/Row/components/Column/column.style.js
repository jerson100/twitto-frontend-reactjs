import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../../../../../configs/style";

const NUM_COLUMNS = 24;

const getSize = (col) => {
  return css`
    flex: 0 0 calc(${col} / ${NUM_COLUMNS} * 100%);
    max-width: calc(${col} / ${NUM_COLUMNS} * 100%);
  `;
};

const getBreakPoint = (col, size) => {
  return (
    col &&
    css`
      @media screen and (min-width: ${size}px) {
        ${getSize(col)}
      }
    `
  );
};

const ColumnStyle = styled.div`
  ${(props) => (props.col ? getSize(props.col) : "flex: 1 0 0;")}
  ${(props) => getBreakPoint(props["sm"], BREAKPOINTS.SM)}
  ${(props) => getBreakPoint(props["md"], BREAKPOINTS.MD)}
  ${(props) => getBreakPoint(props["lg"], BREAKPOINTS.LG)}
  ${(props) => getBreakPoint(props["xl"], BREAKPOINTS.XL)}
  ${(props) => getBreakPoint(props["xll"], BREAKPOINTS.XLL)}
`;

export { ColumnStyle };
