import styled from "styled-components";

const AuthWrapperStyle = styled.div`
  /* border: solid 1px red; */
  padding: 1rem;
`;

const AuthLogoStyle = styled.svg`
  height: 2.7rem;
  margin-bottom: 2rem;
  fill: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export { AuthWrapperStyle, AuthLogoStyle };
