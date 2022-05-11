import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../../views/private/Home";
import RequireAuth from "../../common/RequireAuth";

const PrivateRouter = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default PrivateRouter;
