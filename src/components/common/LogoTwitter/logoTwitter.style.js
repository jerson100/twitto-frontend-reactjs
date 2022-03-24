import styled from "styled-components";

const sizes = {
  SMALLER: "24px",
  SMALL: "32px",
  NORMAL: "38px",
  BIG: "46px",
  VERY_BIG: "52px",
};

const LogoTwitterStyle = styled.svg`
  /* height: 2.7rem; */
  height: ${({ $size }) => ($size && sizes[$size]) || "24px"};
  line-height: ${({ $size }) => ($size && sizes[$size]) || "24px"};
  fill: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export { LogoTwitterStyle };
