import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import PricingPlans from "./screens/PricingPlans";

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/pricingPlan" element={<PricingPlans/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
