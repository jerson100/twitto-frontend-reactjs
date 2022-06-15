import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const FollowButton = ({ following, setFollowing, toUser }) => {
  const handleClick = useEffect(() => {}, []);
  return (
    <Button size="SMALL" handleClick={handleClick}>
      {following ? "Siguiendo" : "Seguir"}
    </Button>
  );
};

FollowedButton.propTypes = {
  following: PropTypes.bool,
  setFollowing: PropTypes.func,
  toUser: PropTypes.string,
};

FollowedButton.defaultProps = {
  following: false,
  setFollowing: null,
};

export default FollowButton;
