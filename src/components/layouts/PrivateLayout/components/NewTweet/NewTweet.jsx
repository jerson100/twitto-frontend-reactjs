import React, { useCallback, useState } from "react";
import Icon from "../../../../common/Icon/Icon";
import Modal from "../../../../common/Modal";
import {
  ContainerStyle,
  HeaderStyle,
  TweetearStyle,
  LeftStyle,
  RightStyle,
  TweetearTextStyle,
  ImageStyle,
  ButtonStyle,
} from "./newTweet.style";

const NewTweet = () => {
  const [showModal, setshowModal] = useState(false);
  const handleClick = useCallback(() => {
    setshowModal(true);
  });
  return (
    <>
      <ContainerStyle onClick={handleClick}>
        <Icon svg="pen" size="SMALL" />
      </ContainerStyle>
      <NewTweetModal showModal={showModal} setshowModal={setshowModal} />
    </>
  );
};

const NewTweetModal = ({ showModal, setshowModal }) => {
  const [text, settext] = useState("");

  const handleClose = useCallback(() => {
    setshowModal(false);
  }, []);

  const handleChangeText = (e) => {
    settext(e.target.value);
  };

  const twittear = useCallback(() => {
    console.log(text);
  }, [text]);
  return (
    <Modal
      size="all"
      open={showModal}
      onCancel={handleClose}
      align="stretch"
      space={false}
    >
      <Modal.Header>
        <HeaderStyle>
          <ButtonStyle block={false} handleClick={twittear} rounded>
            Twittear
          </ButtonStyle>
        </HeaderStyle>
      </Modal.Header>
      <Modal.Body>
        <TweetearStyle>
          <LeftStyle>
            <ImageStyle src="https://lamenteesmaravillosa.com/wp-content/uploads/2018/09/hombre-creido-pensando-que-sabe.jpg" />
          </LeftStyle>
          <RightStyle>
            <TweetearTextStyle
              value={text}
              onChange={handleChangeText}
              placeholder="¿Qué está pensando?"
            />
          </RightStyle>
        </TweetearStyle>
      </Modal.Body>
    </Modal>
  );
};

export default NewTweet;
