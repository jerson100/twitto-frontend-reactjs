import styled from "styled-components";
import { COLORS } from "../../../configs/style";
import Icon from "../Icon/Icon";

const LoaderContainerStyle = styled.div`
  background-color: ${({
    theme: {
      COLORS: { BACKGROUND },
    },
  }) => BACKGROUND};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: ${COLORS.BLUE};
  }
`;

const SVGStyle = styled(Icon)``;

export { LoaderContainerStyle, SVGStyle };
