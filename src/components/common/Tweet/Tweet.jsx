import React from "react";
import Paragraph from "../Paragraph";
import Actions from "./components/Actions";
import {
  ContainerStyle,
  ContentStyle,
  DataStyle,
  HeaderStyle,
  LeftStyle,
  RightStyle,
  UserImageStyle,
  UserNameStyle,
  UserGmailStyle,
  TimeStyle,
  OptionsStyle,
} from "./tweet.style";

const Tweet = ({ user, date, content, comments, retwitts, likes }) => {
  return (
    <ContainerStyle>
      <ContentStyle>
        <LeftStyle>
          <UserImageStyle src={user.img} alt={user.username} />
        </LeftStyle>
        <RightStyle>
          <HeaderStyle>
            <UserNameStyle>{user.username}</UserNameStyle>
            <UserGmailStyle>{user.gmail}</UserGmailStyle>
            <TimeStyle>{date}</TimeStyle>
            <OptionsStyle />
          </HeaderStyle>
          <DataStyle>
            <Paragraph as="p">{content}</Paragraph>
          </DataStyle>
          <Actions comments={comments} likes={likes} retwitts={retwitts} />
        </RightStyle>
      </ContentStyle>
    </ContainerStyle>
  );
};

export default Tweet;
