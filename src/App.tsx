import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/topNavbar";
import SideMenu from "./components/sidemenu";
import DashBoard from "./pages/dashboard";
import { Provider } from "react-redux";
import navStore from "./store/navstate";
import dashBoardStore from "./store/dashboardstate";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "My Admin App";
  }, []);

  return (
    <div className="h-full">
      <Provider store={navStore}>
        <Navbar />
      </Provider>
      <div className="h-full flex flex-col sm:flex-row items-stretch">
        <Provider store={navStore}>
          <SideMenu />
        </Provider>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route
            path="/dashboard"
            element={
              <Provider store={dashBoardStore}>
                <DashBoard />
              </Provider>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
