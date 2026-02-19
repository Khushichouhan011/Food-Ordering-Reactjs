import { createContext, useState } from "react";
import { food_list } from "./MenuList";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // Add item
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  // Remove item
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
      }
    });
  };

  // Calculate total
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find(
          (product) => product._id === Number(item)   // ✅ FIXED HERE
        );

        if (itemInfo) {  // ✅ safety check
          totalAmount += itemInfo.price * cartItems[item];
        }
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

// import { createContext, useState } from "react";
// import { food_list } from "./MenuList";
// export const StoreContext = createContext(null);
// const StoreContextProvider = (props) => {
//  const [cartItems, setCartItems] = useState({});

//   const addToCart = (itemId) => {
//     setCartItems((prev) => {
//       if (!prev[itemId]) {
//         return { ...prev, [itemId]: 1 };
//       } else {
//         return { ...prev, [itemId]: prev[itemId] + 1 };
//       }
//     });
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => {
//       if (prev[itemId] > 1) {
//         return { ...prev, [itemId]: prev[itemId] - 1 };
//       } else {
//         const updatedCart = { ...prev };
//         delete updatedCart[itemId]; // Clean removal
//         return updatedCart;
//       }
//     });
//   };
// const getTotalCartAmount=()=>{
//   let totalAmount=0;
//   for(const item in cartItems)
//   {
//     if (cartItems[item]>0){
//     let itemInfo =food_list.find((product)=>product._id===item)
// totalAmount+=itemInfo.price* cartItems[item];
//  }
// }return totalAmount;
// }
//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;