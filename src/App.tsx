import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import SideMenu from "./components/sidemenu";
import DashBoard from "./pages/dashboard";
import { Provider } from "react-redux";
import navStore from "./store/navstate";
import dashBoardStore from "./store/dashboardstate";

function App() {
  return (
    <div>
      <Provider store={navStore}>
        <Navbar />
      </Provider>
      <div className="flex flex-col sm:flex-row">
        <Provider store={navStore}>
          <SideMenu />
        </Provider>
        <Provider store={dashBoardStore}>
          <DashBoard />
        </Provider>
      </div>
    </div>
  );
}

export default App;
