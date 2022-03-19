import styled from "styled-components";
const AuthFooterStyled = styled.div`
  padding: 0.6rem 1rem;
`;
const AuthNavigationStyled = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: ${({ theme: { COLORS } }) => COLORS.SECONDARY};
  font-size: 13px;
  .authNavigationLink {
    padding-right: 0.8rem;
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
  }
`;

export { AuthFooterStyled, AuthNavigationStyled };
