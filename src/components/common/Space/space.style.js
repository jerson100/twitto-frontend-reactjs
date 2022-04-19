import styled from "styled-components";

const sizes = {
  SMALL: "1rem",
  NORMAL: "2.1rem",
  BIG: "3.5rem",
};

const SpaceStyled = styled.div`
  height: ${({ type, size }) => size || (type && sizes[type])};
`;

export { SpaceStyled };
