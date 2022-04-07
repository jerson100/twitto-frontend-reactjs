import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRouter from "../PublicRouter/PublicRouter";

const AppRouter = () => {
  return (
    <Router>
      <PublicRouter />
    </Router>
  );
};

export default AppRouter;
