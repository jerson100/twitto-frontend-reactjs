import styled from "styled-components";

const FollowContaierStyle = styled.div`
  display: flex;
`;

const FollowNumberStyle = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  margin-right: 0.4rem;
`;

const FollowTextStyle = styled.span`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
`;

export { FollowContaierStyle, FollowNumberStyle, FollowTextStyle };
