import styled, { css } from "styled-components";
import { BUTTONS } from "../../../configs/style";
import { darken, lighten } from "polished";
import { SIZES } from "../../../configs/style";
import { ellipse } from "../../styleComponents/text.style";

const BUTTONS_SIZE = {
  [SIZES.SMALL]: {
    fontSize: "13px",
    padding: "0 7px",
    height: 26,
  },
  [SIZES.SMALLER]: {
    fontSize: "14px",
    padding: "0 11px",
    height: 32,
  },
  [SIZES.NORMAL]: {
    fontSize: "15px",
    height: 38,
    padding: "4px 12px",
  },
  [SIZES.BIG]: {
    fontSize: "16px",
    padding: "4px 16px",
    height: 42,
  },
  [SIZES.VERY_BIG]: {
    fontSize: "17px",
    height: 54,
    padding: "4px 20px",
  },
};

const BaseButtonStyle = styled.button`
  background-color: rgba(255, 255, 255, 1);
  border-radius: ${({ rounded }) => (rounded ? "99999px" : "2px")};
  border: solid 1px rgba(0, 0, 0, 1);
  cursor: pointer;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: solid 2px transparent;
  transition: transform 200ms ease;
  display: inline-flex;
  ${({ $size }) => css`
    font-size: ${BUTTONS_SIZE[$size].fontSize};
    padding: ${BUTTONS_SIZE[$size].padding};
    height: ${BUTTONS_SIZE[$size].height}px;
    min-width: ${BUTTONS_SIZE[$size].height}px;
  `}

  &:focus {
    border-color: ${({ theme }) => theme.COLORS.THIRD};
    outline-color: ${({ theme }) => theme.COLORS.THIRD};
  }
  &:hover {
    border-color: rgba(255, 255, 255, 0.7);
  }
  &:active {
    border: solid 1px ${({ theme }) => theme.COLORS.THIRD};
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }
  ${({ block }) =>
    block
      ? css`
          margin-bottom: 1rem;
          max-width: 100%;
          width: 100%;
        `
      : css`
          margin-bottom: 1rem;
          margin-right: 1rem;
          width: auto;
        `}
  ${({ maxWidth }) => css`
    max-width: ${maxWidth};
  `}
  align-items: center;
  justify-content: center;
`;

const ButtonStyle = styled(BaseButtonStyle).attrs(({ $color }) => ({
  bg: BUTTONS.COLORS[$color].BG_COLOR,
  bc: BUTTONS.COLORS[$color].BORDER,
  ct: BUTTONS.COLORS[$color].COLOR,
  bg_hover: darken(0.05, BUTTONS.COLORS[$color].BG_COLOR),
  b_hover: BUTTONS.COLORS[$color].BG_COLOR,
  ct_hover: BUTTONS.COLORS[$color].COLOR,
}))`
  ${({ isText }) =>
    !isText &&
    css`
      padding: 8px;
      min-width: initial;
    `}
  .icon {
    & > div {
      svg {
        fill: ${({ ct }) => ct};
      }
      ${({ $size }) =>
        css`
          width: ${BUTTONS_SIZE[$size].height - 18}px;
          height: ${BUTTONS_SIZE[$size].height - 18}px;
        `}
      ${({ isText }) =>
        isText &&
        css`
          margin-right: 0.2rem;
        `}
    }
  }
  .text {
    ${ellipse}
  }
  ${(props) => getButtonStyle(props)}
`;

const GosthButtonStyle = styled(ButtonStyle).attrs(({ bg, bg_hover }) => ({
  bg: "transparent",
  bc: bg,
  ct: bg,
  bg_hover: "transparent",
  b_hover: bg_hover,
  ct_hover: darken(0.1, bg),
}))``;

/**
 *
 * bg-> color de fondo
 * bc-> color de borde
 * ct-> color de texto
 * bg_hover-> color de fondo al pasar el mouse
 * bc_hover-> color de borde al pasar el mouse
 * ct_hover-> color de texto al pasar el mouse
 *
 */
const getButtonStyle = ({ bg, bc, ct, bg_hover, b_hover, ct_hover }) => css`
  background-color: ${bg};
  border-color: ${bc};
  color: ${ct};
  &:hover,
  &:active {
    background-color: ${bg_hover};
    border-color: ${b_hover};
    color: ${ct_hover};
  }
`;

export { ButtonStyle, GosthButtonStyle };
