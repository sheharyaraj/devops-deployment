import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import PricingPlans from "./screens/PricingPlans";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import Home from "./screens/Homee";
import Adminpanel from "./screens/Adminpanel";
import Courses from "./screens/Courses";
import Reviews from "./screens/Reviews";
import OurTeam from "./screens/OurTeam";
import { Navigate } from "react-router-dom";
import Error from "./screens/Error"
import Auth from "./screens/Auth";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Terms from "./screens/Terms";
import React, { useEffect } from 'react';


function App() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <Router>
    <div className="App">
      <Routes>
        
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/universities" element={<Courses/>} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/pricingplan" element={<PricingPlans/>}/>
        <Route exact path="/contactus" element={<ContactUs/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/panel" element={<Auth/>} />
        <Route exact path="/reviews" element={<Reviews/>}/>
        <Route exact path="/team" element={<OurTeam/>}/>
        <Route exact path="/privacyPolicy" element={<PrivacyPolicy/>}/>
        <Route exact path="/termsAndConditions" element={<Terms/>}/>
        <Route exact path="/error" element={<Error/>}/>

      </Routes>
    </div>
  </Router>
  );
}

export default App;
