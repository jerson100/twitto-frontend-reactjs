import React, { useCallback } from "react";
import NewTweet from "../../../../../components/layouts/PrivateLayout/components/NewTweet";
import { useTweetContext } from "../../../../../hooks/useTweetContext";
import { MainContainerStyle } from "../../home.style";
import Button from "../../../../../components/common/Button";
import Space from "../../../../../components/common/Space";
import Paragraph from "../../../../../components/common/Paragraph";
import TweetsListOfHome from "../TweetsListOfHome";

const Main = () => {
  const {
    tweets,
    loading,
    createTweet,
    nextTweets,
    tweetsAvailable,
    loadingNextTweets,
  } = useTweetContext();
  const handleNextPages = useCallback(() => {
    nextTweets();
  }, [nextTweets]);
  return (
    <>
      <MainContainerStyle>
        <TweetsListOfHome loading={loading} tweets={tweets} />
      </MainContainerStyle>
      <Space type={"NORMAL"} />
      {tweetsAvailable ? (
        tweetsAvailable && !loadingNextTweets ? (
          <Button
            type={"GOSTH"}
            color="BLUE"
            block
            handleClick={handleNextPages}
          >
            Mostrar más
          </Button>
        ) : (
          <Paragraph color={"SECONDARY"}>Cargando más tweets...</Paragraph>
        )
      ) : null}
      <Space type={"BIG"} />
      <NewTweet createTweet={createTweet} />
    </>
  );
};

export default Main;
