import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "../../../views/private/Home";
import ProfileView from "../../../views/private/Profile/Profile";
import AccessibilityDispLg from "../../../views/private/Settings/AccessibilityDispLg";
import Accesibility from "../../../views/private/Settings/AccessibilityDispLg/views/Accesibility";
import DisplayView from "../../../views/private/Settings/AccessibilityDispLg/views/DisplayView/DisplayView";
import NavigationSetting from "../../../views/private/Settings/NavigationSetting";
import AuthView from "../../../views/public/Auth";
import LoginView from "../../../views/public/Login";
import PrivateLayout from "../../layouts/PrivateLayout/PrivateLayout";
import SettingLayout from "../../layouts/SettingLayout/SettingLayout";
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
          <Route path="/settings" element={<SettingLayout />}>
            <Route path="" element={<NavigationSetting />} />
            <Route path="account" element={<AccessibilityDispLg />} />
            <Route path="accesibility" element={<Accesibility />} />
            <Route path="display" element={<DisplayView />} />
            <Route
              path="security_and_account_access"
              element={<AccessibilityDispLg />}
            />
            <Route
              path="privacy_and_safety"
              element={<AccessibilityDispLg />}
            />
            <Route path="notifications" element={<AccessibilityDispLg />} />
            <Route
              path="accessibility_display_and_languages"
              element={<AccessibilityDispLg />}
            />
          </Route>
          <Route path="*" element={<ProfileView />} />
          <Route index element={<HomeView />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
