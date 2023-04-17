import React, { useMemo } from "react";
import PropTypes from "prop-types";
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
  isVisual,
}) => {
  const formatedDate = useMemo(() => {
    return DateUtils.getTweetPublicationDate(new Date(createdAt));
  }, [createdAt]);
  return (
    <ContainerStyle>
      <ContentStyle>
        <LeftStyle>
          <Link to={`/${user.username}`}>
            <UserImageStyle
              src={
                user?.profile_img?.secure_url ||
                "https://res.cloudinary.com/dgakkw9kj/image/upload/v1657909148/twitto/assets/images/profiles/default_n64epa.jpg"
              }
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
            {!isVisual && <Option idTweet={_id} idUser={user._id} />}
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

Tweet.propTypes = {
  isVisual: PropTypes.bool,
};

Tweet.defaultProps = {
  isVisual: false,
};

export default React.memo(Tweet, (prevProps, nextProps) => {
  return prevProps._id === nextProps._id;
});
