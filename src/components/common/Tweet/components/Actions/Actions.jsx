import React from "react";
import Icon from "../../../Icon/Icon";
import {
  ActionsContainerStyle,
  ActionCountStyle,
  ActionContentStyle,
  ActionGroupStyle,
} from "./actions.style";

const Actions = ({ comments, likes, retwitts }) => {
  return (
    <ActionsContainerStyle>
      <ActionGroupStyle>
        <ActionContentStyle>
          <Icon svg="comment" size="SMALLER" />
        </ActionContentStyle>
        <ActionCountStyle>{comments}</ActionCountStyle>
      </ActionGroupStyle>
      <ActionGroupStyle>
        <ActionContentStyle>
          <Icon svg="retweet" size="SMALLER" />
        </ActionContentStyle>
        <ActionCountStyle>{retwitts}</ActionCountStyle>
      </ActionGroupStyle>
      <ActionGroupStyle>
        <ActionContentStyle>
          <Icon svg="love" size="SMALLER" />
        </ActionContentStyle>
        <ActionCountStyle>{likes}</ActionCountStyle>
      </ActionGroupStyle>
      <ActionGroupStyle>
        <ActionContentStyle>
          <Icon svg="share" size="SMALLER" />
        </ActionContentStyle>
      </ActionGroupStyle>
    </ActionsContainerStyle>
  );
};

export default Actions;
