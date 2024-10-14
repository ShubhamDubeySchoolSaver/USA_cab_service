import "./App.css";
import Navbar from "./components/navbarmain/Navbar";
import LandingPage from "./components/mainlandingpage/Landingpage";
import DH_navBar from "./components/driverhomepage/DH_navbar";
import DriverHomepage from "./components/driverhomepage/DriverHomepage";
import Earnings from "./components/driverhomepage/Earnings";
import Profile from "./components/driverhomepage/Profile";
import RideRequest from "./components/driverhomepage/RideRequest";
import { BrowserRouter as Router, HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/layout";
function App() {
  return (
    <div>
         
      <Router>
      <Navbar />
      <Layout/>
      </Router>
     
      

    </div>
  );
}

export default App;
