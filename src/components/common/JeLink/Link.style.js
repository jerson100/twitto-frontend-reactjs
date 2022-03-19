import styled from "styled-components";
import { COLORS } from "../../../configs/style";
const LinkStyled = styled.a`
  color: ${({ color }) => COLORS[color]};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export { LinkStyled };
