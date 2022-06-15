import styled, { css } from "styled-components";
import { BUTTONS } from "../../../configs/style";
import { darken, lighten } from "polished";
import { SIZES } from "../../../configs/style";

const BUTTONS_SIZE = {
  [SIZES.SMALL]: {
    fontSize: "13px",
    padding: "0 7px",
    height: 24,
  },
  [SIZES.SMALLER]: {
    fontSize: "14px",
    padding: "0 11px",
    height: 28,
  },
  [SIZES.NORMAL]: {
    fontSize: "15px",
    height: 32,
    padding: "4px 12px",
  },
  [SIZES.BIG]: {
    fontSize: "16px",
    padding: "4px 16px",
    height: 40,
  },
  [SIZES.VERY_BIG]: {
    fontSize: "17px",
    height: 48,
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
  ${({ $size }) => css`
    font-size: ${BUTTONS_SIZE[$size].fontSize};
    padding: ${BUTTONS_SIZE[$size].padding};
    height: ${BUTTONS_SIZE[$size].height}px;
    min-width: ${BUTTONS_SIZE[$size].height}px;
  `}
  ${({ maxWidth }) => css`
    max-width: ${maxWidth};
    width: 100%;
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
          display: flex;
          margin-bottom: 1rem;
          width: 100%;
        `
      : css`
          display: inline-flex;
          margin-bottom: 1rem;
          margin-right: 1rem;
          width: initial;
        `}
  align-items: center;
  justify-content: center;
`;

const ButtonStyle = styled(BaseButtonStyle)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isText }) =>
    !isText &&
    css`
      padding: 5px;
    `}
  .icon {
    & > div {
      ${({ $size }) =>
        css`
          width: ${BUTTONS_SIZE[$size].height - 10}px;
          height: ${BUTTONS_SIZE[$size].height - 10}px;
        `}
      ${({ isText }) =>
        isText &&
        css`
          margin-right: 0.2rem;
        `}
    }
  }
  .text {
  }
`;

const GosthButtonStyle = styled(ButtonStyle)``;

const getStyleButton = ({ type, theme, color }) => {
  let c, b, bg, bg_hover, b_hover;
  if (color) {
    color = color?.toUpperCase();
    if (BUTTONS.COLORS[color]) {
      c = BUTTONS.COLORS[color].COLOR;
      bg = BUTTONS.COLORS[color].BG_COLOR;
      b = BUTTONS.COLORS[color].BORDER;
    } else {
      throw new Error("El color no es válido");
    }
  } else {
    c = "#fff";
    bg = theme.COLORS.ACTIONS;
    b = theme.COLORS.ACTIONS;
  }
  bg_hover = darken(0.05, bg);
  if (type === "GOSTH") {
    c = bg;
    b = c;
    b_hover = lighten(0.1, c);
    bg = "transparent";
    bg_hover = "transparent";
  }
  return css`
    background-color: ${bg};
    border-color: ${b};
    color: ${c};
    &:hover {
      background-color: ${bg_hover};
      border-color: ${b_hover};
      color: ${b_hover};
    }
    &:active {
      outline-color: ${({
        theme: {
          COLORS: { THIRD },
        },
      }) => THIRD};
      border-color: transparent;
    }
  `;
};

// const ButtonStyle = styled(BaseButton)`
//   ${(res) => getStyleButton(res)}
//   ${({ isText }) =>
//     !isText &&
//     css`
//       line-height: 0;
//       padding: 4px;
//     `}
//   .text {
//   }
//   .icon {
//     ${({ isText }) =>
//       isText &&
//       css`
//         margin-right: 0.2rem;
//       `}
//     & > div {
//       width: 14px;
//       height: 14px;
//     }
//   }
// `;

// const ButtonGosht = styled(ButtonStyle)``;

export { ButtonStyle, GosthButtonStyle };
