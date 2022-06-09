import { useCallback, useEffect, useReducer } from "react";
import {
  tweetReducer,
  TWEET_ACTIONS,
  TWEET_INITIAL_STATE,
} from "../reducers/tweetReducer";
import TweetApi from "../api/tweet";

const useTweet = () => {
  const [data, dispatch] = useReducer(tweetReducer, TWEET_INITIAL_STATE);

  useEffect(() => {
    const getT = async () => {
      dispatch({
        type: TWEET_ACTIONS.TWEET_SET_LOADING,
        payload: true,
      });
      try {
        const data = await TweetApi.getFeed();
        console.log(data);
        dispatch({
          type: TWEET_ACTIONS.TWEET_SET,
          payload: data,
        });
      } catch (e) {
        console.log(e);
      } finally {
        dispatch({
          type: TWEET_ACTIONS.TWEET_SET_LOADING,
          payload: false,
        });
      }
    };
    getT();
  }, []);

  return {
    loading: data.loading,
    tweets: data.tweets,
  };
};

export default { useTweet };
