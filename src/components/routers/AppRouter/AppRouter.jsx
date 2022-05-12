import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConfigurationView from "../../../views/private/ConfigurationView/ConfigurationView";
import HomeView from "../../../views/private/Home";
import AuthView from "../../../views/public/Auth";
import LoginView from "../../../views/public/Login";
import NotFound from "../../common/NotFound/NotFound";
import PrivateLayout from "../../layouts/PrivateLayout/PrivateLayout";
import PublicRoute from "../PublicRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <AuthView />
            </PublicRoute>
          }
        />
        <Route
          path="i/flow/login"
          element={
            <PublicRoute>
              <LoginView />
            </PublicRoute>
          }
        />
        <Route path="/" element={<PrivateLayout />}>
          <Route path="/home" element={<HomeView />} />
          <Route path="/configuration" element={<ConfigurationView />} />
          <Route index element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
