import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthView from "../../../views/public/Auth";
import LoginView from "../../../views/public/Login";

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthView />} />
      <Route path="i/flow/login" element={<LoginView />}></Route>
    </Routes>
  );
};

export default PublicRouter;
