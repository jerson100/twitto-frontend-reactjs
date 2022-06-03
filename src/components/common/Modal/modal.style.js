import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../../../configs/style";
import { motion } from "framer-motion/dist/framer-motion";

const ModalPanelStyle = styled.div`
  width: 100%;
  z-index: ${({ theme }) => theme.Z_INDEX.MODAL};
  background-color: ${({ theme }) => theme.COLORS.PANEL_BG};
  /* position: fixed; */
  position: absolute;
  top: 0;
  left: 0;
`;

const breakpointContainer = (breakpoint) => `
@media (min-width: ${breakpoint}px) {
    max-width: ${breakpoint - 10}px;
}
`;

const aligns = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
};

const ModalBackgroundStyle = styled.div`
  /* border: solid 1px blue; */
  /* max-width: 500px; */
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  /* height: 100vh; */
  min-height: 100vh;
  /* max-height: 100vh; */
  display: flex;
  align-items: ${({ align }) =>
    align && aligns[align.toLowerCase()]
      ? aligns[align.toLowerCase()]
      : "flex-start"};
  ${({ $size }) =>
    $size && ($size === "ALL" || $size === "all")
      ? ""
      : breakpointContainer(BREAKPOINTS[$size])}
`;

const ModalContainerStyle = styled(motion.div)`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  /* border: solid 1px green; */
  /* padding: 1rem; */
  ${({ space }) =>
    space &&
    css`
      margin: 1rem;
    `}
  width: 100%;
  border-radius: 15px;
  border: solid 1px
    ${({
      theme: {
        COLORS: { BORDER },
      },
    }) => BORDER};
`;

const ModalBodyStyle = styled.div`
  padding: 1rem;
`;
const ModalFooterStyle = styled.div`
  padding: 1rem;
`;

export {
  ModalPanelStyle,
  ModalContainerStyle,
  ModalBackgroundStyle,
  ModalBodyStyle,
  ModalFooterStyle,
};
