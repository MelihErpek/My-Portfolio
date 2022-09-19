import React from 'react'
import './App.css';
import SideBar from "./Components/SideBar"
import RouterApp from "./Router/Router"
import ReactGA from 'react-ga';
const TRACKING_ID = "G-TCX230YG0R"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function App() {

  return (
    <div className="h-screen">
      <SideBar />
      <RouterApp />
    </div>


  );
}

export default App;
