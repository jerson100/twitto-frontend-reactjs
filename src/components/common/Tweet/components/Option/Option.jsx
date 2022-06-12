import React from "react";
import { useAuth } from "../../../../../hooks/useAuth";
import { useTweetContext } from "../../../../../hooks/useTweetContext";
import Icon from "../../../Icon/Icon";
import { OptionContentStyle, OptionContainerStyle } from "./option.style";

const Option = ({ idTweet, idUser }) => {
  const { deleteTweet } = useTweetContext();
  const { user } = useAuth();
  if (user._id !== idUser) {
    return null;
  }
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
