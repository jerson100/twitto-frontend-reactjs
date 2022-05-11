import React from "react";
import Tweet from "../../../../../../../components/common/Tweet/Tweet";
import { MainContainerStyle } from "../../centerHome.style";

const Main = () => {
  return (
    <MainContainerStyle>
      {[0, 0, 0, 0].map((i) => (
        <Tweet key={i} />
      ))}
    </MainContainerStyle>
  );
};

export default Main;
