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
} from "./tweet.style";
import Option from "./components/Option";
import { Link } from "react-router-dom";

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
          <Link to={`/${user.username}`}>
            <UserImageStyle
              src="https://lamenteesmaravillosa.com/wp-content/uploads/2018/09/hombre-creido-pensando-que-sabe.jpg"
              alt={user.username}
            />
          </Link>
        </LeftStyle>
        <RightStyle>
          <HeaderStyle>
            <UserNameStyle to={`/${user.username}`}>
              {user.username}
            </UserNameStyle>
            <UserGmailStyle>{user.email}</UserGmailStyle>
            <TimeStyle dateTime={createdAt}>{formatedDate}</TimeStyle>
            <Option idTweet={_id} idUser={user._id} />
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
