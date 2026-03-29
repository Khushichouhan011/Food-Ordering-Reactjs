

import { createContext, useState } from "react";
import { food_list } from "./MenuList";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // ✅ Add item
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  // ✅ Remove item
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const updated = { ...prev };
        delete updated[itemId];
        return updated;
      }
    });
  };

  // ✅ TOTAL CALCULATION FIXED
 const getTotalCartAmount = () => {
  let totalAmount = 0;

  for (const item in cartItems) {
    const itemInfo = food_list.find(
      (product) => product.id === Number(item)   // ✅ FIXED (_id → id)
    );

    if (itemInfo) {
      totalAmount += itemInfo.price * cartItems[item];
    }
  }

  return totalAmount;
};

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;