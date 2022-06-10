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
    let load = true;
    const getT = async () => {
      dispatch({
        type: TWEET_ACTIONS.TWEET_SET_LOADING,
        payload: true,
      });
      try {
        const data = await TweetApi.getFeed();
        // console.log(data);
        if (load) {
          dispatch({
            type: TWEET_ACTIONS.TWEET_SET,
            payload: data,
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        if (load) {
          dispatch({
            type: TWEET_ACTIONS.TWEET_SET_LOADING,
            payload: false,
          });
        }
      }
    };
    getT();
    return () => {
      load = false;
    };
  }, []);

  /**
   * @callback requestCallback
   */

  /**
   * Crea un tweet en el servidor
   * @param {requestCallback} cb - función manejadora de la respuesta
   * @param {description} - Descripción del tweet
   */
  const createTweet = useCallback((description, cb) => {
    const create = async () => {
      try {
        const data = await TweetApi.createTweet(description);
        dispatch({
          type: TWEET_ACTIONS.TWEET_ADD,
          payload: data,
        });
        console.log("create");
        if (cb) {
          cb();
        }
      } catch (e) {
        console.log(e);
      }
    };
    create();
  }, []);

  return {
    ...data,
    createTweet,
  };
};

export default useTweet;
