import React from "react";
import { Route } from "react-router-dom";
import AuthView from "../../../views/public/Auth";

const PublicRouter = () => {
  return <Route path="/auth" component={AuthView} />;
};

export default PublicRouter;
