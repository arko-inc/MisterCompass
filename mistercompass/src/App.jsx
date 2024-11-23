import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Africa from "./pages/Blog/Continents/Africa";
import Asia from "./pages/Blog/Continents/Asia";
import Europe from "./pages/Blog/Continents/Europe";
import NorthAmerica from "./pages/Blog/Continents/NorthAmerica";
import SouthAmerica from "./pages/Blog/Continents/SouthAmerica";
import Oceania from "./pages/Blog/Continents/Oceania";
import Antarctica from "./pages/Blog/Continents/Antarctica";
import SouthAfrica from "./pages/Blog/Countries/African/SouthAfrica";
import TravelTips from "./pages/Traveltips";
import Finland from "./pages/Blog/Countries/European/Finland";
import Japan from "./pages/Blog/Countries/Asian/Japan";
import Egypt from "./pages/Blog/Countries/African/Egypt";
import China from "./pages/Blog/Countries/Asian/China";
import Australia from "./pages/Blog/Countries/Oceanian/Australia";
import France from "./pages/Blog/Countries/European/France";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-tips" element={<TravelTips />} />
        <Route path="/Africa/South Africa" element={<SouthAfrica />} />
        <Route path="/Europe/Finland" element={<Finland />} />
        <Route path="/Europe/France" element={<France />} />
        <Route path="/Asia/Japan" element={<Japan />} />
        <Route path="/Asia/China" element={<China />} />
        <Route path="/Oceania/Australia" element={<Australia />} />
        <Route path="/Africa" element={<Africa />} />
        <Route path="/Africa/Egypt" element={<Egypt />} />
        <Route path="/Asia" element={<Asia />} />
        <Route path="/Europe" element={<Europe />} />
        <Route path="/NorthAmerica" element={<NorthAmerica />} />
        <Route path="/SouthAmerica" element={<SouthAmerica />} />
        <Route path="/Oceania" element={<Oceania />} />
        <Route path="/Antarctica" element={<Antarctica />} />
      </Routes>
    </Router>
  );
}

export default App;
