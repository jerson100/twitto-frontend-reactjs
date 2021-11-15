import styled, { css } from "styled-components";
import { COLORS, SIZES } from "../../../configs/style";

const BUTTONS_SIZE = {
  [SIZES.SMALL]: css`
    font-size: 14px;
    padding: 0 7px;
    height: 24px;
  `,
  [SIZES.NORMAL]: css`
    font-size: 16px;
    height: 32px;
    padding: 4px 12px;
  `,
  [SIZES.BIG]: css`
    font-size: 18px;
    padding: 4px 16px;
    height: 40px;
  `,
  [SIZES.VERY_BIG]: css`
    font-size: 20px;
    height: 48px;
    padding: 4px 20px;
  `,
};

const BaseButtonStyle = styled.button`
  background-color: rgba(255, 255, 255, 1);
  border-radius: ${({ rounded }) => (rounded ? "99999px" : "2px")};
  border: solid 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  ${({ block }) =>
    block
      ? css`
          display: block;
          margin-bottom: 1rem;
          width: 100%;
        `
      : css`
          display: inline-block;
          margin-bottom: 1rem;
          margin-right: 1rem;
        `}
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: 0;
  ${({ $size }) => BUTTONS_SIZE[$size]}
  ${({ maxWidth }) => css`
    max-width: ${maxWidth};
    width: 100%;
  `}
  &:focus {
    outline: solid 2px ${COLORS["BLUE_COLOR"]};
  }
  &:active {
    outline: solid 2px ${COLORS["BLUE_COLOR"]};
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export { BaseButtonStyle };
