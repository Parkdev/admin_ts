import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import SideMenu from "./components/sidemenu";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <SideMenu></SideMenu>
      </div>
    </div>
  );
}

export default App;
