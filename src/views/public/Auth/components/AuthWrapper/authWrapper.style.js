import styled from "styled-components";

const AuthWrapperStyle = styled.div`
  /* border: solid 1px red; */
  padding: 1rem;
  width: 100%;
`;

const AuthLogoStyle = styled.svg`
  height: 2.7rem;
  margin-bottom: 2rem;
  fill: ${({ theme }) => theme.COLORS.PRIMARY};
`;
const AuthWrapperHeaderStyle = styled.div`
  max-width: 500px;
`;

export { AuthWrapperStyle, AuthLogoStyle, AuthWrapperHeaderStyle };
