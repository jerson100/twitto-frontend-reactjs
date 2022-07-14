import { useCallback, useEffect, useReducer, createContext } from "react";
import {
  tweetReducer,
  TWEET_ACTIONS,
  TWEET_INITIAL_STATE,
} from "../reducers/tweetReducer";

import TweetApi from "../api/tweet";

const TweetContext = createContext();

const TweetProvider = ({ children }) => {
  const [data, dispatch] = useReducer(tweetReducer, TWEET_INITIAL_STATE);

  useEffect(()=>{
    const _tweets = data.tweets;
    const lastTweet = _tweets ? _tweets[_tweets.length && _tweets.length - 1] :  null;
    dispatch({
      type: TWEET_ACTIONS.TWEET_SET_DATETIME_OF_LAST_TWEET,
      payload: lastTweet && new Date(lastTweet.createdAt).getTime()
    })
  },[data.tweets])

  useEffect(() => {
    let load = true;
    const getT = async () => {
      dispatch({
        type: TWEET_ACTIONS.TWEET_SET_LOADING,
        payload: true,
      });
      try {
        const data = await TweetApi.getFeed();
        if (load) {
          dispatch({
            type: TWEET_ACTIONS.TWEET_SET,
            payload: data,
          });
          dispatch({
            type: TWEET_ACTIONS.TWEET_SET_TWEETS_AVAILABLE,
            payload: true
          })
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
        if (cb) {
          cb();
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (e) {
        console.log(e);
      }
    };
    create();
  }, []);

  const deleteTweet = useCallback(async (idTweet) => {
    try {
      dispatch({
        type: TWEET_ACTIONS.TWEET_DELETE,
        payload: idTweet,
      });
      await TweetApi.deleteTweet(idTweet);
    } catch (e) {
      throw e;
    }
  }, []);

  const nextTweets = useCallback( () => {
    const d = async ()=> {
      dispatch({
        type: TWEET_ACTIONS.TWEET_SET_LOADING_NEXT_TWEETS,
        payload: true
      })
      try {
        const datajson = await TweetApi.getByDateOfLastFeed(data.dateTimeOfLastTweet);
        if(datajson.length > 0){
          dispatch({
            type: TWEET_ACTIONS.TWEET_ADD_LAST,
            payload: datajson
          })
        }else{
          dispatch({
            type: TWEET_ACTIONS.TWEET_SET_TWEETS_AVAILABLE,
            payload: false
          })
        }
        dispatch({
          type: TWEET_ACTIONS.TWEET_SET_LOADING_NEXT_TWEETS,
          payload: false
        })
      }catch (e){
        console.log(e)
        dispatch({
          type: TWEET_ACTIONS.TWEET_SET_LOADING_NEXT_TWEETS,
          payload: false
        })
      }
    };
    d()
  },[data.dateTimeOfLastTweet]);

  return (
    <TweetContext.Provider
      value={{
        tweets: data.tweets,
        loading: data.loading,
        tweetsAvailable: data.tweetsAvailable,
        loadingNextTweets: data.loadingNextTweets,
        createTweet,
        deleteTweet,
        nextTweets
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export { TweetContext, TweetProvider };
