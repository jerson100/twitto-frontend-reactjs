import styled, { css } from "styled-components";
import { COLORS } from "../../../configs/style";
import Icon from "../Icon/Icon";

const ColorStyle = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  cursor: pointer;
`;

const ColorContainerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export { ColorStyle, ColorContainerStyle };
