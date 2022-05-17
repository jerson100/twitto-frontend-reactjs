import React from "react";
import { useOutletContext } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import { HomeContainerStyle } from "./home.style";

const Home = () => {
  const [show, setShow] = useOutletContext();
  return (
    <HomeContainerStyle>
      <Header setShow={setShow} />
      <Main />
    </HomeContainerStyle>
  );
};

export default Home;
