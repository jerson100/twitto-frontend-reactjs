const { useContext } = require("react");
const { TweetContext } = require("../contexts/tweetContext");

const useTweetContext = () => {
  const context = useContext(TweetContext);
  if (!context) {
    throw new Error("No se puede acceder al contexto del tweet");
  }
  return context;
};

export { useTweetContext };
