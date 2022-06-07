import styled from "styled-components";
import Button from "../../../../common/Button/Button";

const ContainerStyle = styled.div`
  position: fixed;
  right: 1rem;
  bottom: calc(60px + 1rem);
  background-color: ${({
    theme: {
      COLORS: { THIRD },
    },
  }) => THIRD};
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
`;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const ButtonStyle = styled(Button)`
  margin-bottom: 0;
  margin-right: 0;
`;

const TweetearStyle = styled.div`
  display: flex;
`;
const ImageStyle = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
`;
const LeftStyle = styled.div`
  margin-right: 1rem;
`;
const RightStyle = styled.div`
  flex: 1 1 0;
`;
const TweetearTextStyle = styled.textarea`
  resize: none;
  border: none;
  min-height: 200px;
  width: 100%;
  background-color: transparent;
  outline: none;
  color: ${({
    theme: {
      COLORS: { PRIMARY },
    },
  }) => PRIMARY};
  font: inherit;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export {
  ContainerStyle,
  HeaderStyle,
  TweetearStyle,
  LeftStyle,
  RightStyle,
  TweetearTextStyle,
  ImageStyle,
  ButtonStyle,
};
