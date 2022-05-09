import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRouter from "../PrivateRouter";
import PublicRouter from "../PublicRouter";

const AppRouter = () => {
  return (
    <Router>
      <PrivateRouter />
      <PublicRouter />
    </Router>
  );
};

export default AppRouter;
