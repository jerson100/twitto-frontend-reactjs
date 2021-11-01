import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRouter from "../PublicRouter/PublicRouter";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRouter />
      </Switch>
    </Router>
  );
};

export default AppRouter;
