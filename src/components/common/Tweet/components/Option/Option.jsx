import React from "react";
import useTweet from "../../../../../hooks/useTweet";
import Icon from "../../../Icon/Icon";
import { OptionContentStyle, OptionContainerStyle } from "./option.style";

const Option = ({ idTweet }) => {
  const { deleteTweet } = useTweet();
  const handleClick = () => {
    deleteTweet(idTweet);
  };
  return (
    <OptionContainerStyle>
      <OptionContentStyle>
        <Icon
          svg="option"
          size="SMALLER"
          color="SECONDARY"
          handleClick={handleClick}
        />
      </OptionContentStyle>
    </OptionContainerStyle>
  );
};

export default Option;
