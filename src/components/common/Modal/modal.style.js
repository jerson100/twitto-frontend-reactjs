import styled from "styled-components";
import { BREAKPOINTS } from "../../../configs/style";

const ModalPanelStyle = styled.div`
  width: 100%;
  z-index: ${({ theme }) => theme.Z_INDEX.MODAL};
  background-color: ${({ theme }) => theme.COLORS.PANEL_BG};
  position: fixed;
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
};

const ModalBackgroundStyle = styled.div`
  border: solid 1px blue;
  /* max-width: 500px; */
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: ${({ align }) =>
    align && aligns[align.toLowerCase()]
      ? aligns[align.toLowerCase()]
      : "flex-start"};
  ${({ $size }) => $size && breakpointContainer(BREAKPOINTS[$size])}
`;

const ModalContainerStyle = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border: solid 1px green;
  /* padding: 1rem; */
  margin: 1rem;
  width: 100%;
  border-radius: 15px;
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
