import React, { useMemo } from "react";
import Paragraph from "../Paragraph";
import Actions from "./components/Actions";
import DateUtils from "../../../utils/functions/date";
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

const Tweet = ({
  user,
  createdAt,
  description,
  comments,
  retwitts,
  likes,
  _id,
}) => {
  const formatedDate = useMemo(() => {
    return DateUtils.getTweetPublicationDate(new Date(createdAt));
  }, []);

  return (
    <ContainerStyle>
      <ContentStyle>
        <LeftStyle>
          <UserImageStyle
            src="https://lamenteesmaravillosa.com/wp-content/uploads/2018/09/hombre-creido-pensando-que-sabe.jpg"
            alt={user.username}
          />
        </LeftStyle>
        <RightStyle>
          <HeaderStyle>
            <UserNameStyle>{user.username}</UserNameStyle>
            <UserGmailStyle>{user.email}</UserGmailStyle>
            <TimeStyle dateTime={createdAt}>{formatedDate}</TimeStyle>
            <OptionsStyle />
          </HeaderStyle>
          <DataStyle>
            <Paragraph ass="p">{description}</Paragraph>
          </DataStyle>
          <Actions comments={comments} likes={likes} retwitts={retwitts} />
        </RightStyle>
      </ContentStyle>
    </ContainerStyle>
  );
};

export default Tweet;
