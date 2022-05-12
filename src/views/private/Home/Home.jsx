import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { HomeContainerStyle } from "./home.style";

const Home = () => {
  return (
    <HomeContainerStyle>
      <Header />
      <Main />
    </HomeContainerStyle>
  );
};

export default Home;
