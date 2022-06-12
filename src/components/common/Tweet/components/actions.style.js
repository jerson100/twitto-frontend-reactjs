import styled from "styled-components";

const ActionsContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ActionCountStyle = styled.div`
  margin-left: 0.3rem;
  font-size: 13px;
  color: ${({ theme }) => theme.COLORS.SECONDARY};
`;
const ActionContentStyle = styled.div`
  line-height: 0;
  svg {
    fill: ${({ theme }) => theme.COLORS.SECONDARY};
  }
`;
const ActionGroupStyle = styled.div`
  display: flex;
  align-items: center;
`;

export {
  ActionsContainerStyle,
  ActionCountStyle,
  ActionContentStyle,
  ActionGroupStyle,
};
