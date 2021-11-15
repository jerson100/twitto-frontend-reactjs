import styled, { css } from "styled-components";
import { BUTTONS } from "../../../configs/style";
import BaseButton from "../BaseButton";
import { darken, lighten } from "polished";

const getStyleButton = ({ type, theme, color }) => {
  let c, b, bg, bg_hover;
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
    bg = "transparente";
    bg_hover = "transparent";
  }
  return css`
    background-color: ${bg};
    border-color: ${b};
    color: ${c};
    &:focus {
      outline: solid 2px ${bg_hover};
    }
    &:hover {
      background-color: ${bg_hover};
    }
    &:active {
      outline: solid 2px ${lighten(0.08, b)};
    }
  `;
};

const ButtonStyle = styled(BaseButton)`
  ${(res) => getStyleButton(res)}
`;

export { ButtonStyle };
