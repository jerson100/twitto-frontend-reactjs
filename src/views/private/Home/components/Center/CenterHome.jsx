import React from "react";
import { CenterContainerStyle } from "./centerHome.style";
import Header from "./components/Header";
import Main from "./components/Main/Main";

const CenterHome = () => {
  return (
    <CenterContainerStyle>
      <Header />
      <Main />
    </CenterContainerStyle>
  );
};

export default CenterHome;
