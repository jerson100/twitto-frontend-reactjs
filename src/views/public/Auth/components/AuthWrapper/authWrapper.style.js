import styled from "styled-components";

const AuthWrapperStyle = styled.div`
  border: solid 1px red;
  padding: 1rem;
`;

const AuthLogoStyle = styled.svg`
  fill: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export { AuthWrapperStyle, AuthLogoStyle };
