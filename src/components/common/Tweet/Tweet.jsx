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
          <UserImageStyle
            src="https://pbs.twimg.com/profile_images/1456456434187636736/bYB38_bW_bigger.jpg"
            alt="usuario"
          />
        </LeftStyle>
        <RightStyle>
          <HeaderStyle>
            <UserNameStyle>Vic_42</UserNameStyle>
            <UserGmailStyle>@VicAroxby42</UserGmailStyle>
            <TimeStyle>1h</TimeStyle>
            <OptionsStyle />
          </HeaderStyle>
          <DataStyle>
            <Paragraph as="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              eveniet voluptate deserunt inventore aperiam magnam, ullam odio.
              Ex dolores qui nisi, tempore, velit aliquid dolorum sint eum esse
              fugiat aspernatur!
            </Paragraph>
          </DataStyle>
          <Actions />
        </RightStyle>
      </ContentStyle>
    </ContainerStyle>
  );
};

export default Tweet;
