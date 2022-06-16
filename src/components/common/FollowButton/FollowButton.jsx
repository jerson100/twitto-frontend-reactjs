import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { FollowButtonStyle } from "./followButton.style";

const FollowButton = ({ following, setFollowing, toUser, ...props }) => {
  const handleClick = useCallback(() => {}, []);
  return (
    <FollowButtonStyle rounded {...props} handleClick={handleClick}>
      {following ? "Siguiendo" : "Seguir"}
    </FollowButtonStyle>
  );
};

FollowButton.propTypes = {
  following: PropTypes.bool,
  setFollowing: PropTypes.func,
  toUser: PropTypes.string,
};

FollowButton.defaultProps = {
  following: false,
  setFollowing: null,
};

export default FollowButton;
