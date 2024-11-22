import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import SouthAfrica from "./pages/SouthAfrica";

const continents = {
  Africa: ["Nigeria", "South Africa", "Egypt", "Morocco"],

};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Africa/South Africa" element={<SouthAfrica />} />

        {Object.keys(continents).map((continent) =>
          continents[continent].map((country) =>
            country !== "South Africa" ? (
              <Route
                key={`${continent}-${country}`}
                path={`/${continent}/${country}`}
                element={<CountryPage continent={continent} country={country} />}
              />
            ) : null
          )
        )}
      </Routes>
     
    </Router>
  
  );
  
}

export default App;
