import styled, { css } from "styled-components";

const ColorStyle = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: solid 1px red;
  background-color: ${({ color }) => color};
  ${({ selected }) =>
    selected &&
    css`
      outline: solid 1px red;
    `}
`;

export { ColorStyle };
