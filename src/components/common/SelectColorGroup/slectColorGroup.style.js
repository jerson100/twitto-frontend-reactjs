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
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ color }) => color};
`;

const ColorContainerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const CheckStyle = styled(Icon)`
  fill: ${COLORS.WHITE};
`;

export { ColorStyle, ColorContainerStyle, CheckStyle };
