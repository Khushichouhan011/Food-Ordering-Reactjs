
import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "./StoreContext";
import FoodItem from "./FoodItem";

export const FoodDisplay = ({ categories }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {food_list
          .filter((item) =>
            categories === "All" ? true : item.category === categories
          )
          .map((item) => (
           <FoodItem
  key={item.id}
  id={item.id}
  name={item.name}
  price={item.price}
  category={item.category}
  rating={item.rating}
  image={item.image}
/>
          ))}
      </div>
    </div>
  );
};