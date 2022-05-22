import styled from "styled-components";
import Color from "color";

const SeparatorContainerStyle = styled.div`
  position: relative;
  /* padding-top: 1rem;
  padding-bottom: 1rem; */
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
`;

const SeparetorLineStyle = styled.div`
  height: 1px;
  position: relative;
  z-index: 1;
  /* background-color: ${({
    theme: {
      COLORS: { PRIMARY },
    },
  }) => Color(PRIMARY).darken(0.6)}; */
  background-color: ${({ theme }) => theme.COLORS.BORDER};
`;

const SeparatortextStyle = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  z-index: 2;
  background-color: ${({
    theme: {
      COLORS: { BACKGROUND },
    },
  }) => BACKGROUND};
  color: ${({
    theme: {
      COLORS: { PRIMARY },
    },
  }) => PRIMARY};
`;

export { SeparatorContainerStyle, SeparetorLineStyle, SeparatortextStyle };
