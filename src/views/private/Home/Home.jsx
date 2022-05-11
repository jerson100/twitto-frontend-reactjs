import React from "react";
import CenterHome from "./components/Center/CenterHome";
import LeftHome from "./components/Left/LeftHome";
import RightHome from "./components/Right/RightHome";
import { HomeContainerStyle } from "./home.style";

const Home = () => {
  return (
    <HomeContainerStyle>
      {/* <LeftHome /> */}
      <CenterHome />
      {/* <RightHome /> */}
    </HomeContainerStyle>
  );
};

export default Home;
