import React, { useCallback, useState } from "react";
import Icon from "../../../../common/Icon/Icon";
import Modal from "../../../../common/Modal";
import { ContainerStyle } from "./newTweet.style";

const NewTweet = () => {
  const [showModal, setshowModal] = useState(false);

  const handleClose = useCallback(() => {
    setshowModal(false);
  }, []);

  const handleClick = () => {
    console.log("open create new tweet");
    setshowModal(true);
  };

  return (
    <>
      <ContainerStyle onClick={handleClick}>
        <Icon svg="pen" size="SMALL" />
      </ContainerStyle>
      <Modal open={showModal} onCancel={handleClose}>
        <Modal.Header>header</Modal.Header>
        <Modal.Body>header</Modal.Body>
      </Modal>
    </>
  );
};

export default NewTweet;
