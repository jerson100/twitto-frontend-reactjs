import React from "react";
import Tweet from "../../../../../components/common/Tweet";
import NewTweet from "../../../../../components/layouts/PrivateLayout/components/NewTweet";
import useTweet from "../../../../../hooks/useTweet";
import { MainContainerStyle } from "../../home.style";

const Main = () => {
  const { tweets, loading, createTweet } = useTweet();
  return (
    <>
      <MainContainerStyle>
        {loading && "Cargando data..."}
        {tweets.map((t, i) => (
          <Tweet {...t} key={t._id} />
        ))}
      </MainContainerStyle>
      <NewTweet createTweet={createTweet} />
    </>
  );
};

export default Main;
