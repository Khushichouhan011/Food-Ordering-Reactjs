import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import "./Header.css";
import { StoreContext } from "../../pages/menu/StoreContext";

const Header = ({ setShowLogin }) => {
  const location = useLocation();
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setMenu(path === "" ? "home" : path);
  }, [location]);

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <h1 className="logo">Swad Sutra</h1>
      </Link>

      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li> 
        <li className={menu === "menu" ? "active" : ""}>
          <Link to="/menu">Menu</Link>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <Link to="/about">About Us</Link>
        </li>
        <li className={menu === "recepie" ? "active" : ""}>
          <Link to="/recepie">Recipes</Link>
        </li>
       
        
        <li className={menu === "services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li><li className={menu === "contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="navbar-right">
        <IoMdSearch className="navbar-icon" />
        <div className="navbar-cart">
          <Link to="/cart">
            <FaShoppingBag className="navbar-icon" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="cart-dot"></div>}
        </div>
        <button onClick={() => setShowLogin(true)} className="sign-in-btn">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
