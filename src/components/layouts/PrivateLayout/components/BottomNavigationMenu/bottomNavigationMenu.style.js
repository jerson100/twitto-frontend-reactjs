import styled from "styled-components";
import List from "../../../../common/List";

const BottomStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 53px;
  background-color: ${({
    theme: {
      COLORS: { BACKGROUND },
    },
  }) => BACKGROUND};
  border-top: solid 1px
    ${({
      theme: {
        COLORS: { BORDER },
      },
    }) => BORDER};
`;

const BottomListStyle = styled(List)`
  height: 100%;
`;

const IconContainerStyle = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: center;
`;

export { BottomStyle, BottomListStyle, IconContainerStyle };
