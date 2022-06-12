import React, { useState } from "react";
// import { useOutletContext } from "react-router-dom";
import MobileMenu from "../../../components/layouts/PrivateLayout/components/MobileMenu";
import { TweetProvider } from "../../../contexts/tweetContext";
import Header from "./components/Header";
import Main from "./components/Main";
import { HomeContainerStyle } from "./home.style";

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <HomeContainerStyle>
      <Header setShow={setShow} />
      <MobileMenu show={show} setShow={setShow} />
      <TweetProvider>
        <Main />
      </TweetProvider>
    </HomeContainerStyle>
  );
};

export default Home;
