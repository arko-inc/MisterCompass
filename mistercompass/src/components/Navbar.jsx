import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const dropdownRef = useRef(null);

  // List of continents and countries
  const continents = {
    Africa: ["Nigeria", "South Africa", "Egypt", "Morocco"],
    Asia: ["Japan", "India", "China", "Thailand"],
    Europe: ["France", "Germany", "Italy", "Spain"],
    NorthAmerica: ["USA", "Canada", "Mexico", "Cuba"],
    SouthAmerica: ["Brazil", "Argentina", "Peru", "Colombia"],
    Oceania: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
    Antarctica: ["Research Stations"],
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Reset menu state on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  // Toggle dropdown
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setActiveSubDropdown(null); // Close sub-dropdown when toggling main dropdown
  };

  // Toggle sub-dropdown
  const toggleSubDropdown = (subDropdown) => {
    setActiveSubDropdown(activeSubDropdown === subDropdown ? null : subDropdown);
  };

  return (
    <nav className="bg-black font-against rounded-sm" ref={dropdownRef}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-white hover:text-gray-300 transition-all">
            Home
          </Link>

          {/* Destinations Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("destinations")}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              Destinations
            </button>
            {activeDropdown === "destinations" && (
              <div className="absolute top-full left-0 mt-2 bg-black text-white shadow-lg rounded-md w-64 z-50">
                {Object.keys(continents).map((continent) => (
                  <div key={continent} className="relative group">
                    <button
                      onClick={() => toggleSubDropdown(continent)}
                      className="block px-4 py-2 hover:text-gray-300 text-left w-full"
                    >
                      {continent}
                    </button>
                    {activeSubDropdown === continent && (
                      <div className="absolute left-full top-0 mt-2 bg-black text-white shadow-lg rounded-lg w-64 z-50">
                        {continents[continent].map((country) => (
                          <Link
                            key={country}
                            to={`/${continent}/${country}`}
                            className="block px-4 py-2 hover:text-gray-300"
                            onClick={() => {
                              setActiveDropdown(null);
                              setActiveSubDropdown(null);
                            }}
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

          <Link
            to="/travel-tips"
            className="text-white hover:text-gray-300 transition-all"
          >
            Travel Tips
          </Link>
          <Link
            to="/foods"
            className="text-white hover:text-gray-300 transition-all"
          >
            Foods
          </Link>
          <Link
            to="/gears-review"
            className="text-white hover:text-gray-300 transition-all"
          >
            Gears Review
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            ☰
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-12 right-0 bg-black shadow-lg rounded-md w-64 z-50">
              <Link
                to="/"
                className="block px-4 py-2 text-white hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => toggleDropdown("mobileDestinations")}
                className="block px-4 py-2 text-white hover:text-gray-300 text-left w-full"
              >
                Destinations
              </button>
              {activeDropdown === "mobileDestinations" && (
                <div className="bg-black text-white">
                  {Object.keys(continents).map((continent) => (
                    <div key={continent}>
                      <button
                        onClick={() => toggleSubDropdown(continent)}
                        className="block px-4 py-2 text-left w-full hover:text-gray-300"
                      >
                        {continent}
                      </button>
                      {activeSubDropdown === continent && (
                        <div className="pl-4">
                          {continents[continent].map((country) => (
                            <Link
                              key={country}
                              to={`/${continent}/${country}`}
                              className="block px-4 py-2 hover:text-gray-300"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveDropdown(null);
                                setActiveSubDropdown(null);
                              }}
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
              <Link
                to="/travel-tips"
                className="block px-4 py-2 text-white hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Travel Tips
              </Link>
              <Link
                to="/foods"
                className="block px-4 py-2 text-white hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Foods
              </Link>
              <Link
                to="/gears-review"
                className="block px-4 py-2 text-white hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gears Review
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-white hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
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
