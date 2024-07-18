import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Navbar from "./components/Navbar";
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};
export default AppRoutes;
