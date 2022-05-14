import styled, { css } from "styled-components";
import { SIZES } from "../../../configs/style";

const ICON_SIZES = {
  [SIZES.SMALLER]: css`
    width: 16px;
    height: 16px;
  `,
  [SIZES.SMALL]: css`
    width: 24px;
    height: 24px;
  `,
  [SIZES.NORMAL]: css`
    width: 32px;
    height: 32px;
  `,
  [SIZES.BIG]: css`
    width: 40px;
    height: 40px;
  `,
  [SIZES.VERY_BIG]: css`
    width: 48px;
    height: 48px;
  `,
};

const IconContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px red;
  ${({ $size }) => $size && (ICON_SIZES[$size] || $size)}
`;

const IconSvgStyle = styled.svg`
  height: 100%;
  width: 100%;
  fill: ${({ theme, color }) => (!color ? theme.COLORS.primary : color)};
`;

export { IconContainerStyle, IconSvgStyle };
