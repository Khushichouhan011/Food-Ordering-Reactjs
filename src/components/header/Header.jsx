import { IoMdSearch } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../pages/menu/StoreContext";
const Header = ({setShowLogin}) => {
  const location = useLocation();
  const [menu, setMenu] = useState("home");
const {getTotalCartAmount} =useContext(StoreContext);
  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setMenu(path === "" ? "home" : path);
  }, [location]);

  return (
    <div className="navbar">
    <Link to="/"> <h1 className="logo">Swad Sutra</h1></Link> 

      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
          <li className={menu === "about" ? "active" : ""}>
          <Link to="/about">About Us</Link>
        </li>
       
        <li className={menu === "recepie" ? "active" : ""}>
          <Link to="/recepie">Recipes</Link>
        </li>
        <li className={menu === "menu" ? "active" : ""}>
          <Link to="/menu">Menu</Link>
        </li>
       
        <li className={menu === "contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
         <li className={menu === "services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li>
         <li className={menu === "blog" ? "active" : ""}>
          <Link to="/blog">Blog</Link>
        </li>
       
      </ul>

      <div className="navbar-right">
        <IoMdSearch className="lo" />
        <div className="navbar-search-icon">
        <Link to="/cart"><FaShoppingBag className="lo" /></Link>
          <div className={getTotalCartAmount()?"":"dot"}></div>
        </div>
    
        <button onClick={() => setShowLogin(true)}>Sign In</button>

      </div>
    </div>
  );
};

export default Header;
