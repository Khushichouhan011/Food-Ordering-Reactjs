import React, { useState } from "react";
import "./Menu.css";
import ExploreMenu from "./ExploreMenu";
import { FoodDisplay } from "./FoodDisplay";
const Menu = () => {
  const[categories ,setCategories] =useState("All");
    return (
      <>
    <ExploreMenu categories={categories} setCategories={setCategories}/>
    <FoodDisplay categories ={categories}/>
  </>
  );
};

export default Menu;