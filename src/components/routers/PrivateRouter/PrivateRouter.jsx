import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../../common/RequireAuth/RequireAuth";

const PrivateRouter = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <RequireAuth>
            <p>Home...</p>
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default PrivateRouter;
