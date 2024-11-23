import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // List of continents and countries
  const continents = {
    Africa: ["Nigeria", "South Africa", "Egypt", "Morocco"],
    Asia: ["Japan", "India", "China", "Thailand"],
    Europe: ["France", "Germany", "Italy", "Spain", "Finland"],
    NorthAmerica: ["USA", "Canada", "Mexico", "Cuba"],
    SouthAmerica: ["Brazil", "Argentina", "Peru", "Colombia"],
    Oceania: ["Australia", "New Zealand", "Fiji"],
    Antarctica: ["Research Stations"],
  };

  // Toggle dropdown
  const toggleDropdown = (key) => {
    setDropdown(dropdown === key ? null : key);
    setSubDropdown(null); // Close sub-dropdown when a different dropdown is toggled
  };

  // Toggle sub-dropdown
  const toggleSubDropdown = (key) => {
    setSubDropdown(subDropdown === key ? null : key);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(null);
        setSubDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-black font-against rounded-sm">
      {/* Navbar Container */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-white hover:text-white transition-all">
            Home
          </Link>

          {/* Destinations Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleDropdown("destinations")}
              className="text-white hover:text-white focus:outline-none"
            >
              Destinations
            </button>
            {dropdown === "destinations" && (
              <div className="absolute top-full left-0 mt-2 bg-black text-white shadow-lg rounded-md w-64 z-50 hover:bg-gray-900">
                {Object.keys(continents).map((continent) => (
                  <div key={continent} className="relative group">
                    <Link
                      to={`/${continent}`}
                      onMouseEnter={() => toggleSubDropdown(continent)}
                      className="block px-4 py-2 bg-black hover:text-white text-white hover:bg-gray-900"
                    >
                      {continent}
                    </Link>
                    {subDropdown === continent && (
                      <div className="absolute left-full top-0 mt-2 text-white bg-black shadow-lg rounded-lg w-64 z-50 hover:bg-gray-900">
                        {continents[continent].map((country) => (
                          <Link
                            key={country}
                            to={`/${continent}/${country}`}
                            className="block px-4 py-2 bg-black text-white hover:text-white"
                          >
                            {country}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Travel Tips */}
          <Link
            to="/travel-tips"
            className="text-white hover:text-white transition-all"
          >
            Travel Tips
          </Link>

          {/* Foods */}
          <Link to="/foods" className="text-white hover:text-white transition-all">
            Foods
          </Link>

          {/* Gears Review */}
          <Link
            to="/gears-review"
            className="text-white hover:text-white transition-all"
          >
            Gears Review
          </Link>

          {/* Contact */}
          <Link to="/contact" className="text-white hover:text-white transition-all">
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <button
            onClick={() => toggleDropdown("mobile")}
            className="text-white hover:text-white focus:outline-none"
          >
            ☰
          </button>
          {dropdown === "mobile" && (
            <div className="absolute top-12 right-0 bg-[#0B192C] shadow-lg rounded-md w-64 z-50">
              <Link to="/" className="block px-4 py-2 text-white bg-[#0B192C]">
                Home
              </Link>
              <Link
                to="/destinations"
                className="block px-4 py-2 text-white bg-[#0B192C]"
              >
                Destinations
              </Link>
              <Link
                to="/travel-tips"
                className="block px-4 py-2 text-white bg-[#0B192C]"
              >
                Travel Tips
              </Link>
              <Link to="/foods" className="block px-4 py-2 text-white bg-[#0B192C]">
                Foods
              </Link>
              <Link
                to="/gears-review"
                className="block px-4 py-2 text-white bg-[#0B192C]"
              >
                Gears Review
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-white bg-[#0B192C]">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
