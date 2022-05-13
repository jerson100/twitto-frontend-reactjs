import styled from "styled-components";

const AddContainerStyle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: solid 1px ${({ theme }) => theme.COLORS.SECONDARY};
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SvgStyle = styled.svg`
  fill: ${({ theme }) => theme.COLORS.PRIMARY};
  width: 18px;
  height: 18px;
`;

export { AddContainerStyle, SvgStyle };
