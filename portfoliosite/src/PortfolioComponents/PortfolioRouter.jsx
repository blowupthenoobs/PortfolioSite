import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
//   Navigate,
//   useLocation,
} from "react-router-dom";
import LoginPage from "../components/LoginPage/LoginPage";

//Stuff completely by me:
import Homepage from "./MainPage";
import Drive from "./Drive"
import Welcome from "./WelcomePage"
import HackClub from "./HackClubMessage"
import AdminToolMenu from "./AdminToolMenu"

const PortfolioRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage/>
          }
        />
        <Route
          path="/blogs/*"
          element={
            <Homepage/>
          }
        />
        <Route
          path="/blog/*"
          element={
            <Homepage/>
          }
        />
        <Route
          path="/snippets/*"
          element={
            <Homepage/>
          }
        />
        <Route
          path="/portfolio/*"
          element={
            <Homepage/>
          }
        />
        <Route
        path="/secrets/*"
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
        <Route
        path="/login"
        element={
          <LoginPage/>
        }
        />
        <Route
        path="/welcome"
        element={
          <Welcome/>
        }
        />
        <Route
        path="/hackclub"
        element={
          <HackClub/>
        }
        />
        <Route
        path="tools/*"
        element={
          <AdminToolMenu/>
        }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default PortfolioRouter;