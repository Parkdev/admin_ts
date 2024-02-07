import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import SideMenu from "./components/sidemenu";
import DashBoard from "./pages/dashboard";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideMenu />
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
