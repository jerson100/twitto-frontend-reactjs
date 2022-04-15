import styled from "styled-components";

const InputStyle = styled.input`
  padding: 4px 16px;
  width: 100%;
  font-size: 17px;
  padding: 4px 16px;
  height: 40px;
  margin-bottom: 1rem;
  margin-right: 1rem;
  background-color: transparent;
  border: solid 1px rgb(29, 155, 240);
  border-radius: 5px;
  color: ${({
    theme: {
      COLORS: { PRIMARY },
    },
  }) => PRIMARY};
`;

export { InputStyle };
