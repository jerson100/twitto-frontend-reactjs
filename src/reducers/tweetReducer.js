const TWEET_ACTIONS = {
  TWEET_ADD: "TWEET [ADD]",
  TWEET_SET: "TWEET [SET]",
  TWEET_DELETE: "TWEET [DELETE]",
  TWEET_SET_LOADING: "TWEET [SET_LOADING]",
};

const TWEET_INITIAL_STATE = {
  tweets: [],
  loading: true,
};

const tweetReducer = (state, action) => {
  switch (action.type) {
    case TWEET_ACTIONS.TWEET_SET:
      return { ...state, tweets: state.payload };
    case TWEET_ACTIONS.TWEET_ADD:
      return { ...state, tweets: [...state.tweets, action.payload] };
    case TWEET_ACTIONS.TWEET_DELETE:
      const id = action.payload;
      const newTweets = state.tweets.filter((t) => t.id !== id);
      return { ...state, tweets: newTweets };
    case TWEET_ACTIONS.TWEET_SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export { TWEET_ACTIONS, TWEET_INITIAL_STATE, tweetReducer };
