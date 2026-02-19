import "./Home.css";

import {Link }from"react-router-dom";
import About from "../../pages/about/About"
import Contact from "../../pages/contact/Contact"
import Menu from"../../pages/menu/Menu"
import Recepie from "../../pages/recepie/Recepie"
import Services from "../../pages/services/Services"
import download from "../../../public/download.jpg"
 
const Home = () => {

  return (
    <>
      <header className="header">
        <div className ="left-section">
        <img src={download}/>
        </div>
        <div className="right-section">
        
          <p>
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience.
           </p>
           <br/>
          <Link to="/menu"><button>View Menu</button></Link>
          </div>

       
      </header>

 <About/>
    <Menu/>
     <Recepie/>
     <Services/>
     <Contact/>
    </>
  );
};

export default Home;

