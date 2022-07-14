const TWEET_ACTIONS = {
  TWEET_ADD: "TWEET [ADD]",
  TWEET_SET: "TWEET [SET]",
  TWEET_DELETE: "TWEET [DELETE]",
  TWEET_SET_LOADING: "TWEET [SET_LOADING]",
  TWEET_ADD_LAST: "TWEET [ADD_LAST]",
  TWEET_SET_DATETIME_OF_LAST_TWEET: "TWEET [SET_DATETIME_OF_LAST_TWEET]",
  TWEET_SET_TWEETS_AVAILABLE: "TWEET [SET_TWEETS_AVAILABLE]",
  TWEET_SET_LOADING_NEXT_TWEETS: "TWEET [SET_LOADING_NEXT_TWEETS"
};

const TWEET_INITIAL_STATE = {
  tweets: [],
  loading: true,
  dateTimeOfLastTweet: null,
  tweetsAvailable: false,
  loadingNextTweets: false
};

const tweetReducer = (state, action) => {
  switch (action.type) {
    case TWEET_ACTIONS.TWEET_SET:
      return { ...state, tweets: action.payload };
    case TWEET_ACTIONS.TWEET_ADD:
      return { ...state, tweets: [action.payload, ...state.tweets] };
    case TWEET_ACTIONS.TWEET_DELETE:
      const id = action.payload;
      const newTweets = state.tweets.filter((t) => t._id !== id);
      return { ...state, tweets: newTweets };
    case TWEET_ACTIONS.TWEET_SET_LOADING:
      return { ...state, loading: action.payload };
    case TWEET_ACTIONS.TWEET_ADD_LAST:
      return { ...state, tweets: [...state.tweets, ...action.payload] }
    case TWEET_ACTIONS.TWEET_SET_DATETIME_OF_LAST_TWEET:
      return { ...state, dateTimeOfLastTweet: action.payload }
    case TWEET_ACTIONS.TWEET_SET_TWEETS_AVAILABLE:
      return { ...state, tweetsAvailable: action.payload }
    case TWEET_ACTIONS.TWEET_SET_LOADING_NEXT_TWEETS:
      return { ...state, loadingNextTweets: action.payload }
    default:
      return state;
  }
};

export { TWEET_ACTIONS, TWEET_INITIAL_STATE, tweetReducer };
