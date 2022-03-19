import styled from "styled-components";
import { COLORS } from "../../../configs/style";
const LinkStyled = styled.a`
  color: ${({ color }) => COLORS[color]};
  cursor: pointer;
  text-decoration: underline;
`;

export { LinkStyled };
