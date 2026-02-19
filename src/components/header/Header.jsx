import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import { StoreContext } from "../../pages/menu/StoreContext";

const Header = ({ setShowLogin }) => {
  const location = useLocation();
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setMenu(path === "" ? "home" : path);
    setMobileMenuOpen(false); // close mobile menu on page change
  }, [location]);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <h1 className="logo">Swad Sutra</h1>
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className="mobile-menu-icon"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Menu */}
      <ul className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
        {/* Close button inside mobile menu */}
        <li className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)}>
          <FaTimes />
        </li>

        <li className={menu === "home" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={menu === "menu" ? "active" : ""}>
          <Link to="/menu">Menu</Link>
        </li>
        
        <li className={menu === "recepie" ? "active" : ""}>
          <Link to="/recepie">Recipes</Link>
        </li>
        <li className={menu === "services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Right side icons */}
      <div className="navbar-right">
        <IoMdSearch className="navbar-icon" />
        <div className="navbar-cart">
          <Link to="/cart">
            <FaShoppingBag className="navbar-icon" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="cart-dot"></div>}
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="sign-in-btn"
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
