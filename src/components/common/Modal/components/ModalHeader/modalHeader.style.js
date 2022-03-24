import styled from "styled-components";

const CloseStyle = styled.svg`
  margin-right: 0.5rem;
  font-size: 1.6rem;
  fill: rgb(239, 243, 244);
  height: 1.5rem;
  cursor: pointer;
`;
const ContainerStyle = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalHeaderStyle = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export { CloseStyle, ContainerStyle, ModalHeaderStyle };
