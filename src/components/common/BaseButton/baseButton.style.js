import styled, { css } from "styled-components";
import { SIZES } from "../../../configs/style";

const BUTTONS_SIZE = {
  [SIZES.SMALL]: css`
    font-size: 13px;
    padding: 0 7px;
    height: 24px;
  `,
  [SIZES.NORMAL]: css`
    font-size: 14px;
    height: 32px;
    padding: 4px 12px;
  `,
  [SIZES.BIG]: css`
    font-size: 15px;
    padding: 4px 16px;
    height: 40px;
  `,
  [SIZES.VERY_BIG]: css`
    font-size: 16px;
    height: 48px;
    padding: 4px 20px;
  `,
};

const BaseButtonStyle = styled.button`
  background-color: rgba(255, 255, 255, 1);
  border-radius: ${({ rounded }) => (rounded ? "99999px" : "2px")};
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 1);
  cursor: pointer;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: solid 2px transparent;
  transition: transform 200ms ease;
  ${({ $size }) => BUTTONS_SIZE[$size]}
  ${({ maxWidth }) => css`
    max-width: ${maxWidth};
    width: 100%;
  `}
  &:focus {
    border-color: ${({
      theme: {
        COLORS: { THIRD },
      },
    }) => THIRD};
    outline-color: ${({
      theme: {
        COLORS: { THIRD },
      },
    }) => THIRD};
  }
  &:hover {
    border-color: rgba(255, 255, 255, 0.7);
  }
  &:active {
    border: solid 1px
      ${({
        theme: {
          COLORS: { THIRD },
        },
      }) => THIRD};
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }
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
          width: initial;
        `}
`;

export { BaseButtonStyle };
