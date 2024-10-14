import React from 'react'
import { Route, Routes } from "react-router-dom";
import DriverHomepage from '../../components/driverhomepage/DriverHomepage';
import LandingPage from '../../components/mainlandingpage/Landingpage';
import DriverProfile from '../../components/driverprofile/DriverProfile';
import FoodDeliveryHomepage from '../../components/fooddeliveryhomepage/FoodDeliveryHomepage';
import CreateAccount from '../../components/restauranthomepage/CreateAccount';
import Booking from '../../components/ridershomepage/Booking';
export default function Layout() {
  return (
    <>
    <section >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/driverHomePage" element={<DriverHomepage />} />
        <Route path="/driverProfile" element={<DriverProfile />} />
        <Route path="/foodDeliveryHomePage" element={<FoodDeliveryHomepage />} />
        {/* <Route path="/mainLandingPage" element={<LandingPage />} /> */}
        <Route path="/resturnantHomePage" element={<CreateAccount />} />
        <Route path="/riderHomePage" element={<Booking />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
      </Routes>
      
    </section>
  </>
  )
}
