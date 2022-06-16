import React from "react";
import { Outlet } from "react-router-dom";
import Icon from "../../../components/common/Icon/Icon";
import PrivateMainLayout from "../../../components/layouts/PrivateMainLayout";
import ProfileInformaction from "./components/ProfileInformation/ProfileInformaction";

const Profile = () => {
  return (
    <PrivateMainLayout
      iconLeft={<Icon svg="leftArrow" size="SMALL" />}
      title="@loveting100"
      subtitle="6.943 Tweets"
    >
      <ProfileInformaction />
      <Outlet />
    </PrivateMainLayout>
  );
};

export default Profile;
