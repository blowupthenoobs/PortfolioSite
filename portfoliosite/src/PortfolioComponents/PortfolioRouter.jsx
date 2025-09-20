import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
//   Navigate,
//   useLocation,
} from "react-router-dom";
// import LoginPage from "../components/LoginPage/LoginPage";
// import HomePage from "../components/Homepage/Homepage";
// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";
// import DownloadPage from "../components/DownloadPage/DownloadPage";
// import VerifyEmailPage from "../components/VerifyEmailPage/VerifyEmailPage";
// import uuid from "uuid";
// import ResetPasswordPage from "../components/ResetPasswordPage/ResetPasswordPage";
// import SettingsPage from "../components/SettingsPage/SettingsPage";
import Homepage from "./MainPage";
import Drive from "./Drive"
// import { usePreferenceSetter } from "../hooks/preferenceSetter";
// import useAccessTokenHandler from "../hooks/user";

// export const history = createHistory();

const PortfolioRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact={true} element={<LoginPage />} /> */}
        <Route
          path="/"
          element={
            <Homepage/>
          }
        />
        <Route
          path="/blogs"
          element={
            <Homepage/>
          }
        />
        <Route
          path="/snippets"
          element={
            <Homepage/>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Homepage/>
          }
        />
        <Route
        path="/secrets"
        element={
          <Homepage/>
        }
        />
        <Route
        path="/drive"
        element={
          <Drive/>
        }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default PortfolioRouter;