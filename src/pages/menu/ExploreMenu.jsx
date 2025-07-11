import "./ExploreMenu.css";
import fbanner from"/images/fbanner.jpg";
import { menu_list } from "./MenuList";
const ExploreMenu = ({categories ,setCategories}) => {
  return (
<>
 


    <div className="explore-menu" id="menu">
      <div className="menu-page">
      {/* ✅ Banner Section */}
    
      </div>
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">Choose from a diverse menu featuring  a delectable array of dishes crafted with the finest ingredients and culinary expertise .Our mission is to satisfy your cravings ad elevant your dinnig experience ,one deliciuos meal at a time</p>
   
   <div className="explore-menu-list">
    {menu_list.map((item ,index)=>{
      return(
      <div onClick={()=>setCategories(prev=>prev=== item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
<img className={categories === item.menu_name ? "active" : ""} src={item.menu_image}/>
<p>{item.menu_name} </p>
      </div>
    )})}
   </div>
     <hr/>
    </div>
    </>
  );
};

export default  ExploreMenu;