import React from "react";
import { useTweetContext } from "../../../../../hooks/useTweetContext";
import Icon from "../../../Icon/Icon";
import { OptionContentStyle, OptionContainerStyle } from "./option.style";

const Option = ({ idTweet }) => {
  const { deleteTweet } = useTweetContext();
  const handleClick = async () => {
    await deleteTweet(idTweet);
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
